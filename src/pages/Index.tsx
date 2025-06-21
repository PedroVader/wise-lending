// ApplyFormClean.tsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, ArrowRight, ArrowLeft, Check, Lock } from "lucide-react";

const steps = [
  { key: "businessStart", title: "When did you start your business?", options: ["0-5 months", "0-12 months", "1-2 years", "2-5 years", "5-10 years", "10+ years"] },
  { key: "businessType", title: "What type of business do you own?", options: ["LLC", "Sole Proprietorship", "Partnership", "C Corporation", "S Corporation"] },
  { key: "loanAmount", title: "How much do you need?", options: ["$10,000 - $24,999", "$25,000 - $49,999", "$50,000 - $74,999", "$75,000 - $99,999", "$100,000 - $249,999", "$250,000 - $499,999", "$500,000 - $749,000", "$750,000+"] },
  { key: "fundingPurpose", title: "What are you seeking funding for?", options: ["Working capital/cash flow", "Equipment purchase", "Expansion", "Inventory", "Payroll", "Other"] },
  { key: "annualRevenue", title: "What's your annual revenue?", input: true },
  { key: "creditScore", title: "What is your personal credit score?", options: ["Excellent (720+)", "Good (680-719)", "Fair (640-679)", "Poor (639 or less)"] },
  { key: "industry", title: "What industry are you in?", options: ["Construction", "Transportation and Warehousing", "Accommodation and Food Services", "Retail Trade", "Other"] },
  { key: "zipCode", title: "What is your business zip code?", input: true },
  { key: "businessName", title: "What is your business name?", input: true },
  { key: "firstName", title: "What is your first name?", input: true },
  { key: "lastName", title: "What is your last name?", input: true },
  { key: "phone", title: "What is the best phone number to reach you?", input: true },
  { key: "email", title: "What is your email address?", input: true }
];

const isValid = (key: string, value: string) => {
  if (!value) return false;

  if (key === "email") {
    const emailRegex = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(value);
  }

  if (key === "phone") {
    // Permite +1 opcional, espacios, guiones o paréntesis, pero asegura 10 dígitos reales
    const cleaned = value.replace(/\D/g, ""); // quita todo excepto dígitos
    return cleaned.length === 10;
  }

  if (key === "zipCode") {
    return /^\d{5}(-\d{4})?$/.test(value); // permite 5 o 9 dígitos ZIP
  }

  return true;
};


const getAirtableConfig = () => {
  const baseId = import.meta.env.VITE_AIRTABLE_BASE_ID;
  const tableName = import.meta.env.VITE_AIRTABLE_TABLE_NAME;
  const token = import.meta.env.VITE_AIRTABLE_TOKEN;
  if (!baseId || !tableName || !token) {
    throw new Error("Missing Airtable environment variables");
  }
  return {
    url: `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}`,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  };
};

const fieldMapping: Record<string, string> = {
  businessName: "Business Name",
  businessType: "Business Type",
  loanAmount: "Funding Amount Needed",
  fundingPurpose: "Funding Purpose",
  annualRevenue: "Annual Revenue",
  creditScore: "Personal Credit Score",
  industry: "Industry",
  zipCode: "Business Zip Code",
  businessStart: "Business Start Date",
  firstName: "First Name",
  lastName: "Last Name",
  phone: "Phone Number",
  email: "Email",
  formStatus: "Form Status"
};

const sendToAirtable = async (data: any) => {
  const config = getAirtableConfig();
  const fields: Record<string, string> = {};
  Object.keys(data).forEach((key) => {
    if (data[key] && fieldMapping[key]) {
      fields[fieldMapping[key]] = data[key];
    }
  });
  fields["Form Status"] = "Partial";
  const payload = { records: [{ fields }] };
  const response = await fetch(config.url, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify(payload)
  });
  if (!response.ok) throw new Error(`Error ${response.status}: ${await response.text()}`);
  return response.json();
};

const updateAirtableRecord = async (recordId: string, data: any, isComplete: boolean = false) => {
  const config = getAirtableConfig();
  const fields: Record<string, string> = {};
  Object.keys(data).forEach((key) => {
    if (data[key] && fieldMapping[key]) {
      fields[fieldMapping[key]] = data[key];
    }
  });
  fields["Form Status"] = isComplete ? "Complete" : "Partial";
  const response = await fetch(`${config.url}/${recordId}`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({ fields })
  });
  if (!response.ok) throw new Error(`Error ${response.status}: ${await response.text()}`);
  return response.json();
};

const Apply = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [airtableRecordId, setAirtableRecordId] = useState<string | null>(null);

  useEffect(() => {
    localStorage.removeItem("loanApplicationData");
    localStorage.removeItem("airtable_record_id");
    setFormData({});
    setAirtableRecordId(null);
  }, []);

  const step = steps[currentStep];
  const value = formData[step.key] || "";

  useEffect(() => {
    if (Object.keys(formData).length === 0) return;
    const timeout = setTimeout(async () => {
      try {
        if (airtableRecordId) {
          await updateAirtableRecord(airtableRecordId, formData);
        } else {
          const result = await sendToAirtable(formData);
          const id = result?.records?.[0]?.id;
          if (id) {
            setAirtableRecordId(id);
            localStorage.setItem("airtable_record_id", id);
          }
        }
      } catch (error) {}
    }, 1000);
    return () => clearTimeout(timeout);
  }, [formData]);

  useEffect(() => {
    const handleEnter = (e: KeyboardEvent) => {
      if (e.key !== "Enter") return;
      if (step.input && isValid(step.key, value)) {
        if (step.key === "email") {
          setFormData(prev => ({ ...prev, consent: "accepted" }));
        }
        handleNext();
      }
    };
    window.addEventListener("keydown", handleEnter);
    return () => window.removeEventListener("keydown", handleEnter);
  }, [step, value]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const key = steps[currentStep].key;
    setFormData({ ...formData, [key]: e.target.value });
  };

  const handleSelect = (option: string) => {
    const key = steps[currentStep].key;
    setFormData(prev => {
      const updated = { ...prev, [key]: option };
      return updated;
    });
    setTimeout(() => {
      handleNext();
    }, 100);
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsSubmitting(true);
      const finalData = { ...formData, consent: "accepted" };
      if (airtableRecordId) {
        updateAirtableRecord(airtableRecordId, finalData, true).catch(() => {});
      }
      try {
        localStorage.setItem("loanApplicationData", JSON.stringify(finalData));
        navigate("/loading-results", { state: { fromForm: true } });
      } catch (e) {} finally {
        setIsSubmitting(false);
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="py-12">
        <div className="max-w-xl mx-auto px-4">
          <div className="mb-8">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Step {currentStep + 1} of {steps.length}</span>
              <span>{Math.round(((currentStep + 1) / steps.length) * 100)}% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="h-2 bg-green-500 rounded-full transition-all duration-300"
                style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              />
            </div>
          </div>
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-gray-900">{step.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {step.options && (
                <div className="space-y-3">
                  {step.options.map(option => (
                    <button
                      key={option}
                      onClick={() => handleSelect(option)}
                      className={`w-full px-4 py-3 border rounded-lg text-center font-medium transition-colors ${
                        value === option
                          ? "border-green-500 bg-green-100"
                          : "border-gray-300 bg-white hover:bg-gray-50"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
              {step.input && (
              <div>
                <Label htmlFor={step.key} className="block mb-1 text-sm text-gray-700">{step.title}</Label>
                <Input
                  id={step.key}
                  type={
                    step.key === "email"
                      ? "email"
                      : step.key === "phone"
                      ? "tel"
                      : "text"
                  }
                  placeholder={
                    step.key === "phone"
                      ? "+1 (555) 123-4567"
                      : step.key === "zipCode"
                      ? "ZIP code (USA only)"
                      : step.key === "email"
                      ? "example@domain.com"
                      : step.key === "annualRevenue"
                      ? "e.g. 150,000"
                      : step.key === "firstName"
                      ? "John"
                      : step.key === "lastName"
                      ? "Doe"
                      : step.key === "businessName"
                      ? "Acme Corp"
                      : ""
                  }
                  maxLength={
                    step.key === "phone" ? 18 :
                    step.key === "zipCode" ? 10 :
                    step.key === "email" ? 50 :
                    step.key === "firstName" || step.key === "lastName" ? 30 :
                    100
                  }
                  value={value}
                  onChange={handleInputChange}
                  className="mt-1"
                />
                <p className="text-xs text-gray-500 mt-1">
                  {step.key === "email"
                    ? "Must be a valid email like example@domain.com."
                    : step.key === "zipCode"
                    ? "US ZIP code must be 5 digits (optionally 4 more)."
                    : step.key === "phone"
                    ? "US phone number, 10 digits only. No fake/test numbers."
                    : step.key === "annualRevenue"
                    ? "Enter your yearly revenue in USD. Use only numbers."
                    : step.key === "firstName" || step.key === "lastName"
                    ? "Only letters, spaces and hyphens allowed."
                    : step.key === "businessName"
                    ? "Enter the full name of your company."
                    : "Please enter a valid value to proceed."}
                </p>
                <div className="flex justify-end mt-4">
                  <Button
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium"
                    onClick={handleNext}
                    disabled={!isValid(step.key, value)}
                  >
                    Next <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Apply;