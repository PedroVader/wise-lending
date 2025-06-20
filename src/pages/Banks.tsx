import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getLenders } from "@/lib/getLenders";

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

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Compare Trusted Lenders for Bad Credit Business Loans
          </h1>
          <p className="text-lg text-blue-100 mb-8">
            Get funding even with poor credit. Compare offers from top lenders with no credit score impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={handleGetStarted}
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg"
            >
              Get Started - It's Free
            </Button>
            <div className="flex items-center space-x-4 text-blue-100 text-sm">
              <span className="flex items-center space-x-1">
                <Shield className="h-4 w-4" />
                <span>100% Secure</span>
              </span>
              <span className="flex items-center space-x-1">
                <CheckCircle className="h-4 w-4" />
                <span>No Credit Impact</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center">
            <Clock className="h-8 w-8 text-green-500 mb-2" />
            <span className="text-sm font-semibold text-gray-900">Fast Approval</span>
            <span className="text-xs text-gray-600">Within 24 hours</span>
          </div>
          <div className="flex flex-col items-center">
            <Shield className="h-8 w-8 text-blue-500 mb-2" />
            <span className="text-sm font-semibold text-gray-900">Secure Process</span>
            <span className="text-xs text-gray-600">256-bit SSL encryption</span>
          </div>
          <div className="flex flex-col items-center">
            <Users className="h-8 w-8 text-purple-500 mb-2" />
            <span className="text-sm font-semibold text-gray-900">Trusted Partners</span>
            <span className="text-xs text-gray-600">Verified lenders</span>
          </div>
          <div className="flex flex-col items-center">
            <CheckCircle className="h-8 w-8 text-green-500 mb-2" />
            <span className="text-sm font-semibold text-gray-900">No Commitment</span>
            <span className="text-xs text-gray-600">Compare freely</span>
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
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What is a Bad Credit Business Loan?
            </h2>
          </div>
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                A bad credit business loan is designed for entrepreneurs whose personal or business credit scores 
                fall below traditional lending standards. These loans provide access to capital when conventional 
                banks might decline your application.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Alternative Approval</h4>
                    <p className="text-gray-600 text-sm">Based on business performance, not just credit scores</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Faster Process</h4>
                    <p className="text-gray-600 text-sm">Quick approval and funding, often within days</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Types of Business Loans Available
            </h2>
            <p className="text-gray-600">Choose the right financing option for your needs</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-blue-500" />
                  <span>Short-Term Loans</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Quick access to working capital with flexible repayment terms.</p>
                <div className="text-sm text-gray-500">
                  <div>• $5K - $500K funding</div>
                  <div>• 3-18 month terms</div>
                  <div>• Fast approval</div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-green-500" />
                  <span>Revenue-Based</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Repayments based on your monthly revenue performance.</p>
                <div className="text-sm text-gray-500">
                  <div>• $10K - $2M funding</div>
                  <div>• Flexible payments</div>
                  <div>• No fixed monthly</div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-purple-500" />
                  <span>Asset-Based</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Secured loans using business assets as collateral.</p>
                <div className="text-sm text-gray-500">
                  <div>• $25K - $5M funding</div>
                  <div>• Lower rates</div>
                  <div>• Longer terms</div>
                </div>
              </CardContent>
            </Card>
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

