import { useEffect, useState } from "react";
import { CheckCircle, Clock, FileCheck, Phone, Unlock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";

export default function ThankYouPage() {
  const navigate = useNavigate();

  const [clientName, setClientName] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const savedData = localStorage.getItem("loanApplicationData");
      if (!savedData) {
        navigate("/", { replace: true });
        return;
      }

      const formData = JSON.parse(savedData);
      const firstName = formData.firstName || "";
      const lastName = formData.lastName || "";
      const fullName = `${firstName} ${lastName}`.trim();

      if (fullName) {
        setClientName(fullName);
        setIsVisible(true);
      } else {
        navigate("/", { replace: true });
      }
    } catch (error) {
      console.error("Error reading form data:", error);
      navigate("/", { replace: true });
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />

      <main className="flex-1 flex items-center justify-center px-6 py-20">
        <section
          className="w-full max-w-3xl text-center transform transition-all duration-700"
          style={{
            transform: isVisible ? "translateY(0)" : "translateY(2rem)",
            opacity: isVisible ? 1 : 0,
          }}
        >
          <p className="mb-8 inline-block bg-green-100 text-green-900 px-5 py-2 text-xs sm:text-sm rounded-full font-medium tracking-wide shadow-sm border border-green-200">
            Trusted by over 5,000+ Businesses
          </p>

          <div className="mb-12">
            <div className="w-16 h-16 mx-auto bg-green-600 rounded-full flex items-center justify-center mb-6">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              {clientName
                ? `Thank you, ${clientName}!`
                : "Information Successfully Received!"}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {clientName
                ? `Hi ${clientName.split(" ")[0]}, thanks`
                : "Thanks"}{" "}
              for trusting us with your information. We've received your details and will now work to connect you with lenders that best match your needs.
            </p>
          </div>

          <div className="mb-12 bg-card rounded-lg border border-border p-6 text-left">
            <h2 className="text-xl font-semibold mb-6 text-card-foreground">What's next:</h2>
            <div className="space-y-6">
              {[
                {
                  icon: <FileCheck className="w-4 h-4 text-blue-600" />,
                  title: "Initial Review",
                  desc: "We'll review your information to identify which lenders might be interested in your profile (1-2 hours).",
                },
                {
                  icon: <Phone className="w-4 h-4 text-blue-600" />,
                  title: "Casual Call",
                  desc: "We'll give you a call to get to know you better and understand what type of funding you need. Just a relaxed conversation.",
                },
                {
                  icon: <Clock className="w-4 h-4 text-blue-600" />,
                  title: "Lender Connection",
                  desc: "We'll introduce you to the most suitable lenders so you can speak with them directly about your options.",
                },
              ].map((step, i) => (
                <div key={i} className="flex items-start">
                  <div className="w-8 h-8 bg-white border-2 border-blue-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-card rounded-lg border border-border p-8 text-left mb-8">
          <h2 className="text-xl font-semibold mb-6 text-center text-card-foreground flex items-center justify-center gap-2">
  <Unlock className="w-5 h-5 text-green-600" />
  You've just unlocked a free expert consultation
</h2>

  <div className="grid sm:grid-cols-2 gap-4">
    {[
      "In-depth business funding analysis",
      "Exclusive access to top-tier lenders",
      "Tailored funding strategy recommendations",
      "Faster application processing",
      "Support from our expert funding advisors",
      "No-obligation, high-impact insights",
    ].map((benefit, index) => (
      <div key={index} className="flex items-start">
        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
        <span className="text-sm text-card-foreground">{benefit}</span>
      </div>
    ))}
  </div>

  <div className="mt-6 pt-6 border-t border-border text-center">
    <p className="text-sm text-muted-foreground">
      🎉 This consultation is normally valued at{" "}
      <span className="font-semibold text-green-600">$297</span>,  
      but you've secured it <span className="font-semibold text-blue-700">completely free</span> —  
      no hidden fees, no obligations.
    </p>
  </div>
</div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
