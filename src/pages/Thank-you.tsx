import { useState, useEffect } from "react";
import { CheckCircle, Clock, FileCheck, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ThankYouPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Header */}
      <Header />

      {/* Main */}
      <main className="flex-1 flex items-center justify-center px-6 py-20">
        <section className="w-full max-w-3xl text-center transform transition-all duration-700"
          style={{
            transform: isVisible ? "translateY(0)" : "translateY(2rem)",
            opacity: isVisible ? 1 : 0,
          }}
        >
          {/* Badge superior */}
          <p className="mb-8 inline-block bg-green-100 text-green-900 px-5 py-2 text-xs sm:text-sm rounded-full font-medium tracking-wide shadow-sm border border-green-200">
            Trusted by over 5,000+ Businesses
          </p>

          {/* Header de confirmación */}
          <div className="mb-12">
            <div className="w-16 h-16 mx-auto bg-green-600 rounded-full flex items-center justify-center mb-6">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">Application Successfully Submitted</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Thank you for your application. Our team is now reviewing your
              information and will contact you shortly to discuss your funding
              options.
            </p>
          </div>

          {/* Línea de proceso */}
          <div className="mb-12 bg-card rounded-lg border border-border p-6 text-left">
            <h2 className="text-xl font-semibold mb-6 text-card-foreground">What happens next:</h2>
            <div className="space-y-6">
              {[
                {
                  icon: <FileCheck className="w-4 h-4 text-primary-foreground" />,
                  title: "Application Review",
                  desc: "Our underwriting team will review your application and business information within 2–4 hours.",
                },
                {
                  icon: <Phone className="w-4 h-4 text-primary-foreground" />,
                  title: "Expert Consultation",
                  desc: "A funding specialist will call you to discuss your options and answer any questions you may have.",
                },
                {
                  icon: <Clock className="w-4 h-4 text-primary-foreground" />,
                  title: "Funding Decision",
                  desc: "Receive your personalized funding proposal with terms and rates tailored to your business needs.",
                },
              ].map((step, i) => (
                <div key={i} className="flex items-start">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
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

          {/* Beneficios de la consulta */}
          <div className="bg-card rounded-lg border border-border p-8 text-left mb-8">
            <h2 className="text-xl font-semibold mb-6 text-center text-card-foreground">
              Your consultation includes:
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Comprehensive business funding analysis",
                "No-obligation rate quotes from multiple lenders",
                "Access to our exclusive lender network",
                "Personalized funding recommendations",
                "Expedited application processing",
                "Ongoing support throughout the process",
              ].map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-sm text-card-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-border text-center">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">
                  Consultation Value: <span className="text-green-600">$297</span>
                </span>{" "}
                –{" "}
                <span className="font-medium text-foreground underline underline-offset-4">
                  Provided at no cost to qualified applicants
                </span>
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
