import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getLenders } from "@/lib/getLenders";
import MultiStepForm from "@/components/MultiStepForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, CheckCircle, Clock, Users, DollarSign, FileText, TrendingUp, AlertTriangle, Star, Quote } from "lucide-react";

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
      <div className="w-full md:w-1/2 mt-10 md:mt-0 bg-white p-5 sm:p-6 rounded-xl shadow-lg">
        <MultiStepForm />
      </div>
    </div>
  </div>
</section>



      {/* Lender Cards Grid */}
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

      {/* What is a Bad Credit Business Loan */}
<section className="py-16 bg-gray-50">
  <div className="max-w-6xl mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        What is a Bad Credit Business Loan?
      </h2>
    </div>

    <div className="flex flex-col md:flex-row items-center gap-10">
      {/* Texto y beneficios */}
      <div className="md:w-1/2">
        <Card className="border-0 shadow-lg">
          <CardContent className="p-8">
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              A bad credit business loan is designed for entrepreneurs whose personal or business credit scores 
              fall below traditional lending standards. These loans provide access to capital when conventional 
              banks might decline your application.
            </p>
            <div className="grid md:grid-cols-1 gap-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Alternative Approval</h4>
                  <p className="text-gray-600 text-sm">
                    Based on business performance, not just credit scores
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Faster Process</h4>
                  <p className="text-gray-600 text-sm">
                    Quick approval and funding, often within days
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Imagen visual */}
      <div className="md:w-1/2">
        <img
          src="/images/pexels-ivan-samkov-4491912.jpg"
          alt="Loan Explanation"
          className="rounded-lg shadow-md w-full object-cover"
        />
      </div>
    </div>
  </div>
</section>


      {/* How to Get a Business Loan */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How to Get a Business Loan with Bad Credit
            </h2>
            <p className="text-gray-600">Simple steps to secure funding for your business</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">1. Apply Online</h3>
              <p className="text-gray-600 text-sm">Complete our secure application in minutes</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">2. Get Matched</h3>
              <p className="text-gray-600 text-sm">We connect you with suitable lenders</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">3. Compare Offers</h3>
              <p className="text-gray-600 text-sm">Review rates and terms from multiple lenders</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">4. Get Funded</h3>
              <p className="text-gray-600 text-sm">Receive funds as fast as same day</p>
            </div>
          </div>
        </div>
      </section>
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
      {/* Short-Term Loans */}
      <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
        <img
          src="/images/loan-agreements.jpg"
          alt="Short-Term Loan"
          className="rounded-lg mb-4 w-full h-36 object-cover"
        />
        <div className="flex items-center justify-center bg-blue-100 w-14 h-14 rounded-full mb-4 mx-auto">
          <Clock className="text-blue-600 w-6 h-6" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 text-center mb-2">Short-Term Loans</h3>
        <p className="text-sm text-gray-600 text-center mb-4">
          Fast access to capital with short repayment periods.
        </p>
        <ul className="text-gray-500 text-sm space-y-1">
          <li>• $5K - $500K funding</li>
          <li>• 3-18 month terms</li>
          <li>• Quick approval</li>
        </ul>
      </div>

      {/* Revenue-Based Loans */}
      <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
        <img
          src="/images/loan-profit.jpg"
          alt="Revenue-Based Loan"
          className="rounded-lg mb-4 w-full h-36 object-cover"
        />
        <div className="flex items-center justify-center bg-green-100 w-14 h-14 rounded-full mb-4 mx-auto">
          <TrendingUp className="text-green-600 w-6 h-6" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 text-center mb-2">Revenue-Based</h3>
        <p className="text-sm text-gray-600 text-center mb-4">
          Payments adapt to your business performance.
        </p>
        <ul className="text-gray-500 text-sm space-y-1">
          <li>• $10K - $2M funding</li>
          <li>• Scales with revenue</li>
          <li>• No fixed monthly rate</li>
        </ul>
      </div>

      {/* Asset-Based Loans */}
      <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
        <img
          src="/images/business.jpg"
          alt="Asset-Based Loan"
          className="rounded-lg mb-4 w-full h-36 object-cover"
        />
        <div className="flex items-center justify-center bg-purple-100 w-14 h-14 rounded-full mb-4 mx-auto">
          <Shield className="text-purple-600 w-6 h-6" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 text-center mb-2">Asset-Based</h3>
        <p className="text-sm text-gray-600 text-center mb-4">
          Use business assets to secure more capital.
        </p>
        <ul className="text-gray-500 text-sm space-y-1">
          <li>• $25K - $5M funding</li>
          <li>• Lower interest</li>
          <li>• Long terms available</li>
        </ul>
      </div>
    </div>
  </div>
</section>

      {/* Pros and Cons */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Pros and Cons of Bad Credit Business Loans
            </h2>
            <p className="text-gray-600">Understanding the advantages and considerations</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-green-600">
                  <CheckCircle className="h-5 w-5" />
                  <span>Advantages</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Access to capital despite poor credit</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Fast approval and funding process</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Opportunity to rebuild credit history</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Flexible qualification requirements</span>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-orange-600">
                  <AlertTriangle className="h-5 w-5" />
                  <span>Considerations</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-2">
                  <AlertTriangle className="h-4 w-4 text-orange-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Higher interest rates than traditional loans</span>
                </div>
                <div className="flex items-start space-x-2">
                  <AlertTriangle className="h-4 w-4 text-orange-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Shorter repayment terms</span>
                </div>
                <div className="flex items-start space-x-2">
                  <AlertTriangle className="h-4 w-4 text-orange-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">May require personal guarantees</span>
                </div>
                <div className="flex items-start space-x-2">
                  <AlertTriangle className="h-4 w-4 text-orange-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Additional fees may apply</span>
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
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-blue-500 mb-4" />
                <p className="text-gray-600 mb-4">
                  "After being rejected by 3 banks, I found this platform and got approved within 24 hours. 
                  The $75K helped me expand my restaurant during a crucial time."
                </p>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Maria Rodriguez</div>
                  <div className="text-sm text-gray-500">Restaurant Owner, Miami</div>
                </div>
              </CardContent>
            </Card>
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
                <div>
                  <div className="font-semibold text-gray-900">James Chen</div>
                  <div className="text-sm text-gray-500">Tech Startup, Austin</div>
                </div>
              </CardContent>
            </Card>
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
                <div>
                  <div className="font-semibold text-gray-900">Sarah Johnson</div>
                  <div className="text-sm text-gray-500">Manufacturing, Detroit</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

