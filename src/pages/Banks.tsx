import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getLenders } from "@/lib/getLenders";
import MultiStepForm from "@/components/MultiStepForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, CheckCircle, Clock, Users, DollarSign, FileText, TrendingUp, AlertTriangle, Star, Quote, Home, ArrowRight } from "lucide-react";


import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LenderCard from "@/components/LenderCard";

const Index = () => {
  const navigate = useNavigate();
  const [lenders, setLenders] = useState([]);

  useEffect(() => {
    getLenders().then(setLenders);
  }, []);

  const handleGetStarted = () => {
    navigate("/loading");
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section
  className="relative bg-cover bg-center bg-no-repeat text-white py-14 sm:py-16 md:py-20"
  style={{ backgroundImage: "url('/images/small-business.jpg')" }}
>
  {/* Overlay con gradiente */}
  <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-blue-600/40 z-0" />

  <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-6 md:px-4">
    <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12">

      {/* Texto principal */}
      <div className="w-full md:w-1/2 text-center md:text-left">
      <p className="mb-4 inline-block bg-green-100 text-green-900 px-5 py-2 text-xs sm:text-sm rounded-full font-medium tracking-wide shadow-sm border border-green-200">
        Over $10M Funded – Trusted by 5,000+ Business Owners
      </p>
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight mb-4">
          Get the Business Funding You Deserve — Even With Bad Credit
        </h1>
        <p className="text-sm sm:text-base text-blue-100 mb-6">
          Compare pre-qualified offers from top lenders with zero impact on your credit score.
        </p>

        {/* Logos */}
        <div className="relative overflow-hidden mb-6 h-14 sm:h-16">
          <div className="flex animate-scroll whitespace-nowrap gap-10 sm:gap-14 items-center">
            {[
              "/images/forbes-white.png",
              "/images/business-insider-white.png",
              "/images/yahoo-finance-white.png",
              "/images/entrepreneur-white.png",
            ]
              .concat([
                "/images/forbes-white.png",
                "/images/business-insider-white.png",
                "/images/yahoo-finance-white.png",
                "/images/entrepreneur-white.png",
              ])
              .map((src, i) => (
                <div
                  key={i}
                  className="w-28 sm:w-32 h-10 sm:h-12 flex items-center justify-center flex-shrink-0"
                >
                  <img src={src} alt="Media Logo" className="h-full object-contain" />
                </div>
              ))}
          </div>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-4 text-blue-100 text-sm justify-center md:justify-start">
          <span className="flex items-center space-x-1">
            <Shield className="h-4 w-4" />
            <span>256-bit SSL</span>
          </span>
          <span className="flex items-center space-x-1">
            <CheckCircle className="h-4 w-4" />
            <span>Soft Credit Check</span>
          </span>
        </div>
      </div>

     {/* Formulario */}
<div
  id="consultation-form"
  className="w-full md:w-1/2 mt-10 md:mt-0 bg-white p-5 sm:p-6 rounded-xl shadow-lg"
>
  <MultiStepForm />
</div>

    </div>
  </div>
</section>



      {/*
<section className="py-20">
  <div className="max-w-7xl mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">
        Compare Top Bad Credit Business Lenders
      </h2>
      <p className="text-gray-600">
        Find the right funding partner for your business needs
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {lenders.map((lender: any) => (
        <LenderCard
          key={lender.id || lender._id}
          lender={lender}
        />
      ))}
    </div>
  </div>
</section>
*/}

{/* Testimonials */}
<section className="py-16">
  <div className="max-w-6xl mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        What Our Customers Say
      </h2>
      <p className="text-gray-600">Real stories from business owners who got funded</p>
    </div>
    <div className="grid md:grid-cols-3 gap-8">
      {/* Testimonio 1 */}
      <Card className="border-0 shadow-lg">
        <CardContent className="p-6">
          <Quote className="h-8 w-8 text-blue-500 mb-4" />
          <p className="text-gray-600 mb-4">
            "After being rejected by 3 banks, I found this platform and got approved within 24 hours.
            The $200K helped me acquire new construction equipment when I needed it most."
          </p>
          <div className="flex items-center space-x-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
            ))}
          </div>
          <div className="flex items-center gap-3 mt-4">
            <img src="/images/jake-thompson.jpeg" alt="Maria Rodriguez" className="w-10 h-10 rounded-full object-cover" />
            <div>
              <div className="font-semibold text-gray-900">Jake Thompson</div>
              <div className="text-sm text-gray-500">Construction Company Owner, Dallas</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Testimonio 2 */}
      <Card className="border-0 shadow-lg">
        <CardContent className="p-6">
          <Quote className="h-8 w-8 text-blue-500 mb-4" />
          <p className="text-gray-600 mb-4">
            "My credit score was 580, but I still got multiple offers to compare. 
            The process was transparent and I saved thousands on interest rates."
          </p>
          <div className="flex items-center space-x-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
            ))}
          </div>
          <div className="flex items-center gap-3 mt-4">
            <img src="/images/James-Anderson.jpeg" alt="James Anderson" className="w-10 h-10 rounded-full object-cover" />
            <div>
              <div className="font-semibold text-gray-900">James Anderson</div>
              <div className="text-sm text-gray-500">Tech Startup, Austin</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Testimonio 3 */}
      <Card className="border-0 shadow-lg">
        <CardContent className="p-6">
          <Quote className="h-8 w-8 text-blue-500 mb-4" />
          <p className="text-gray-600 mb-4">
            "Fast, professional, and no hidden fees. Got the $150K I needed to purchase new equipment 
            and my business revenue doubled within 6 months."
          </p>
          <div className="flex items-center space-x-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
            ))}
          </div>
          <div className="flex items-center gap-3 mt-4">
            <img src="/images/Sarah-Johnson.jpeg" alt="Sarah Johnson" className="w-10 h-10 rounded-full object-cover" />
            <div>
              <div className="font-semibold text-gray-900">Sarah Johnson</div>
              <div className="text-sm text-gray-500">Manufacturing, Detroit</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</section>


       {/* Benefits Comparison */}
       <section className="py-16 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Platform?
            </h2>
            <p className="text-gray-600">Compare our benefits against traditional lending</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Multiple Lenders</h3>
              <p className="text-gray-600">Access to 50+ verified lenders vs single bank applications</p>
              <div className="mt-4 text-sm">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded">Better Rates</span>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Faster Process</h3>
              <p className="text-gray-600">24-48 hour decisions vs weeks of traditional bank processing</p>
              <div className="mt-4 text-sm">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">10x Faster</span>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Credit Impact</h3>
              <p className="text-gray-600">Soft credit checks only vs hard inquiries that damage credit</p>
              <div className="mt-4 text-sm">
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded">Credit Safe</span>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* Types of Business Loans */}
{/* Types of Business Loans */}
<section className="py-20 bg-gradient-to-b from-gray-50 to-white">
  <div className="max-w-6xl mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-3">
        Types of Business Loans Available
      </h2>
      <p className="text-gray-600 max-w-xl mx-auto">
        Choose the right financing option for your business goals.
      </p>
    </div>

    {/* Cards */}
    <div className="grid md:grid-cols-3 gap-8">
      {/* 5 Year Term Loan */}
      <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
        <img src="/images/long-term.jpg" alt="5 Year Term Loan" className="rounded-lg mb-4 w-full h-36 object-cover" />
        <div className="flex items-center justify-center bg-blue-100 w-14 h-14 rounded-full mb-4 mx-auto">
          <FileText className="text-blue-600 w-6 h-6" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 text-center mb-2">5 Year Term Loan</h3>
        <p className="text-sm text-gray-600 text-center mb-4">Fixed monthly payments over 5 years.</p>
        <ul className="text-gray-500 text-sm space-y-1">
          <li>• Up to $500K</li>
          <li>• Predictable terms</li>
          <li>• Ideal for growth</li>
        </ul>
      </div>

      {/* 3-24 Month Bridge Loan */}
      <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
        <img src="/images/financial-support.jpg" alt="Bridge Loan" className="rounded-lg mb-4 w-full h-36 object-cover" />
        <div className="flex items-center justify-center bg-yellow-100 w-14 h-14 rounded-full mb-4 mx-auto">
          <AlertTriangle className="text-yellow-600 w-6 h-6" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 text-center mb-2">Bridge Loan</h3>
        <p className="text-sm text-gray-600 text-center mb-4">Short-term capital to bridge financial gaps.</p>
        <ul className="text-gray-500 text-sm space-y-1">
          <li>• 3–24 month terms</li>
          <li>• Fast approval</li>
          <li>• Temporary funding</li>
        </ul>
      </div>

      {/* Equipment Financing */}
      <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
        <img src="/images/Equipment-financing.jpg" alt="Equipment Financing" className="rounded-lg mb-4 w-full h-36 object-cover" />
        <div className="flex items-center justify-center bg-green-100 w-14 h-14 rounded-full mb-4 mx-auto">
          <DollarSign className="text-green-600 w-6 h-6" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 text-center mb-2">Equipment Financing</h3>
        <p className="text-sm text-gray-600 text-center mb-4">Finance tools and machinery without upfront cost.</p>
        <ul className="text-gray-500 text-sm space-y-1">
          <li>• Up to 100% cost</li>
          <li>• Long terms</li>
          <li>• Tax-deductible</li>
        </ul>
      </div>

      {/* PO & AR Financing */}
      <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
        <img src="/images/business-invoice.jpg" alt="PO & AR Financing" className="rounded-lg mb-4 w-full h-36 object-cover" />
        <div className="flex items-center justify-center bg-red-100 w-14 h-14 rounded-full mb-4 mx-auto">
          <Users className="text-red-600 w-6 h-6" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 text-center mb-2">PO & AR Financing</h3>
        <p className="text-sm text-gray-600 text-center mb-4">Leverage purchase orders or receivables for cash.</p>
        <ul className="text-gray-500 text-sm space-y-1">
          <li>• Based on invoices</li>
          <li>• Improves cash flow</li>
          <li>• No equity needed</li>
        </ul>
      </div>

      {/* Commercial Mortgages */}
      <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
        <img src="/images/business-property.jpg" alt="Commercial Mortgages" className="rounded-lg mb-4 w-full h-36 object-cover" />
        <div className="flex items-center justify-center bg-indigo-100 w-14 h-14 rounded-full mb-4 mx-auto">
          <Home className="text-indigo-600 w-6 h-6" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 text-center mb-2">Commercial Mortgages</h3>
        <p className="text-sm text-gray-600 text-center mb-4">Finance your business property purchase or refinance.</p>
        <ul className="text-gray-500 text-sm space-y-1">
          <li>• $100K+</li>
          <li>• Long repayment terms</li>
          <li>• Low interest</li>
        </ul>
      </div>

      {/* Existing: Short-Term Loans (optional) */}
      <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
        <img src="/images/fastest-funding.jpg" alt="Short-Term Loan" className="rounded-lg mb-4 w-full h-36 object-cover" />
        <div className="flex items-center justify-center bg-blue-100 w-14 h-14 rounded-full mb-4 mx-auto">
          <Clock className="text-blue-600 w-6 h-6" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 text-center mb-2">Short-Term Loans</h3>
        <p className="text-sm text-gray-600 text-center mb-4">Fast access to capital with short repayment periods.</p>
        <ul className="text-gray-500 text-sm space-y-1">
          <li>• $5K - $500K funding</li>
          <li>• 3–18 month terms</li>
          <li>• Quick approval</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section className="py-16 bg-blue-50">
  <div className="max-w-5xl mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold text-gray-900 mb-4">
      What Happens After You Apply?
    </h2>
    <p className="text-gray-600 text-lg mb-10">
      Once you submit your application, our team reviews your information and contacts you to discuss the best financing options for your business.
    </p>

    <div className="grid md:grid-cols-3 gap-8">
      <div className="flex flex-col items-center text-center">
        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
          <FileText className="h-8 w-8 text-blue-600" />
        </div>
        <h3 className="font-semibold text-gray-900 mb-2">1. Submit Your Form</h3>
        <p className="text-gray-600 text-sm">Takes less than 2 minutes. 100% secure and free.</p>
      </div>
      <div className="flex flex-col items-center text-center">
        <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
          <Users className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="font-semibold text-gray-900 mb-2">2. We'll Contact You</h3>
        <p className="text-gray-600 text-sm">One of our specialists will reach out to discuss your options.</p>
      </div>
      <div className="flex flex-col items-center text-center">
        <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
          <CheckCircle className="h-8 w-8 text-yellow-600" />
        </div>
        <h3 className="font-semibold text-gray-900 mb-2">3. Receive Tailored Support</h3>
        <p className="text-gray-600 text-sm">We’ll help you choose the best-fit solution based on your needs.</p>
      </div>
    </div>
  </div>
</section>

{/* Free Consultation Section */}
<section className="py-24 bg-gradient-to-br from-white via-gray-50 to-white">
  <div className="max-w-5xl mx-auto px-6 text-center">
    <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
      Get a <span className="text-green-600">Free Consultation</span>
    </h2>
    <p className="text-gray-600 text-lg mb-10">
      Unlock exclusive insights and offers tailored to your business needs.
    </p>

    <div className="bg-white rounded-2xl shadow-xl p-10 space-y-6 border border-gray-100">
      <ul className="space-y-4 text-left">
        {[
          "Comprehensive business funding analysis",
          "No-obligation rate quotes from multiple lenders",
          "Access to our exclusive lender network",
          "Personalized funding recommendations",
          "Expedited application processing",
          "Ongoing support throughout the process",
        ].map((item, idx) => (
          <li key={idx} className="flex items-start space-x-4">
            <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
            <span className="text-gray-800 text-base">{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8 text-center border-t pt-6">
        <p className="text-sm uppercase tracking-wide text-gray-500 mb-2">Consultation Value</p>
        <p className="text-4xl font-extrabold text-green-600">$297</p>
        <p className="mt-2 text-lg text-gray-800 font-medium">
          <span className="text-blue-700 font-semibold">100% Free</span> for qualified businesses — <span className="italic text-gray-600">no hidden fees, no obligation.</span>
        </p>
        <p className="text-sm text-gray-500 mt-1">
          Act now — this expert consultation is <span className="font-semibold text-blue-600">limited-time only</span>
        </p>

        {/* CTA Button */}
       {/* CTA Button */}
      <div className="mt-6 flex justify-center">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-md flex items-center transition"
          onClick={() => {
            document
              .getElementById("consultation-form")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Apply Now <ArrowRight className="ml-2 w-4 h-4" />
        </button>
      </div>
      </div>
    </div>
  </div>
</section>


      <Footer />
    </div>
  );
};

export default Index;

