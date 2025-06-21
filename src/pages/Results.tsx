import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, CheckCircle, Clock, Star, Phone, Globe, Sparkles, Info } from "lucide-react";
import { getLenders } from "@/lib/getLenders";
import { useNavigate, useLocation } from "react-router-dom";

const Results = () => {
  const [shuffledLenders, setShuffledLenders] = useState<any[]>([]);
  const location = useLocation();
  const navigate = useNavigate();

useEffect(() => {
  if (!location.state?.fromForm) {
    navigate("/");
  }
}, [location.state, navigate]);


  useEffect(() => {
    const fetchAndShuffleLenders = async () => {
      const lenders = await getLenders();
      const shuffled = lenders.sort(() => 0.5 - Math.random());
      setShuffledLenders(shuffled);
    };

    fetchAndShuffleLenders();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-800 to-blue-900 py-12 px-4 overflow-hidden">
  {/* Background visual effects */}
  <div className="absolute inset-0">
    <div className="absolute top-0 left-0 w-full h-full bg-black/10"></div>
    <div className="absolute top-10 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
    <div className="absolute bottom-10 left-10 w-32 h-32 bg-blue-300/10 rounded-full blur-2xl"></div>
  </div>

  {/* Main content */}
  <div className="relative max-w-2xl mx-auto text-center text-white z-10">

    {/* Badge: Pre-Qualified */}
    <div className="inline-flex items-center bg-green-600/20 backdrop-blur-sm border border-green-400/30 rounded-full px-4 py-1.5 mb-4">
      <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
      <span className="text-xs font-medium text-green-100">PRE-QUALIFIED</span>
    </div>

    {/* Headline */}
    <h1 className="text-3xl sm:text-4xl font-bold mb-3">
      You're Pre-Qualified for Funding
    </h1>

    {/* Subheading */}
    <p className="text-base sm:text-lg text-blue-100 leading-relaxed mb-5">
      Wait for a call from our team
    </p>

    {/* White panel with transparency info */}
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-white/20 space-y-4">

      {/* Clarification: Not a lender */}
      <p className="text-sm text-blue-50">
        <span className="font-semibold text-white">We are not a lender or broker</span> — we connect you with the best options available.
      </p>

      {/* USP: No Hidden Fees highlighted */}
      <div className="flex items-center bg-green-50 border border-green-200 rounded-lg p-3 shadow-sm space-x-3 text-left">
        <Sparkles className="w-5 h-5 text-green-600 flex-shrink-0" />
        <p className="text-sm text-green-800 font-medium">
          <span className="font-semibold">No Hidden Fees</span> – 100% transparent process with trusted partners.
        </p>
      </div>

      {/* Badge list */}
      <div className="flex flex-wrap justify-center gap-2 text-xs sm:text-sm">
        <span className="bg-white/15 rounded-full px-3 py-1 text-white font-medium">
          Transparent Process
        </span>
        <span className="bg-white/15 rounded-full px-3 py-1 text-white font-medium">
          Trusted Partners
        </span>
      </div>
    </div>
  </div>
</section>


      {/* VIP Access Section */}
      <section className="py-6 px-4 bg-gradient-to-r from-indigo-50 to-blue-50 border-b">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center gap-4 bg-white rounded-lg shadow-sm px-4 py-4 border border-blue-200">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
              <Star className="text-white w-5 h-5" />
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-sm font-semibold text-gray-800 mb-1">VIP Exclusive Access</h3>
              <p className="text-sm text-gray-700">
                This premium service connects you directly with top-tier partners offering
                <span className="font-semibold text-blue-700"> superior conditions</span> than typical market connectors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lenders Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto space-y-8">
          {shuffledLenders.map((lender) => (
            <Card key={lender.id} className="border border-gray-200 shadow-sm bg-white">
              <CardContent className="p-6 sm:p-8">
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                  {/* Logo and Rating */}
                  <div className="flex-shrink-0">
                    <div className="flex items-center space-x-4 mb-4">
                      {lender.logo ? (
                        <img
                          src={lender.logo}
                          alt={lender.name}
                          className="w-24 h-16 object-contain"
                        />
                      ) : (
                        <div className="w-24 h-16 bg-blue-600 rounded flex items-center justify-center">
                          <span className="text-white font-bold text-xl">
                            {lender.name.charAt(0)}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(typeof lender.customerScore === 'string' ? parseFloat(lender.customerScore) : lender.customerScore)
                              ? 'text-yellow-400 fill-yellow-400'
                              : 'text-gray-300 fill-gray-300'
                          }`}
                        />
                      ))}
                      <span className="text-sm text-gray-600 ml-2">
                        {lender.customerScore}
                      </span>
                    </div>
                  </div>

                  {/* Lender Details */}
                  <div className="flex-1 w-full">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {lender.name}
                    </h3>

                    <div className="overflow-x-auto">
                      <table className="w-full border border-gray-200 text-sm">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="border border-gray-200 px-4 py-2 text-left font-semibold">Interest Rate</th>
                            <th className="border border-gray-200 px-4 py-2 text-left font-semibold">Max Loan Amount</th>
                            <th className="border border-gray-200 px-4 py-2 text-left font-semibold">Fastest Funding</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border font-semibold border-gray-200 px-4 py-2">{lender.interestRate}</td>
                            <td className="border font-semibold border-gray-200 px-4 py-2">{lender.maxLoanAmount}</td>
                            <td className="border font-semibold text-green-600 px-4 py-2">{lender.fastestFunding}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="mt-4">
                      <p className="text-gray-600 leading-relaxed">
                        {lender.description && lender.description.trim() !== ''
                          ? lender.description
                          : `${lender.name} offers smart financing with fast approvals, great terms, and flexible repayment options up to ${lender.termLength.toLowerCase()}.`}
                      </p>
                      <p className="text-sm text-blue-700 mt-2">
                        Exclusive offer available only via this platform.
                      </p>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-3">
                      <div className="flex items-center text-sm text-green-600">
                        <CheckCircle className="w-4 h-4 mr-1" /> Fast Approval Process
                      </div>
                      <div className="flex items-center text-sm text-green-600">
                        <CheckCircle className="w-4 h-4 mr-1" /> Flexible Terms
                      </div>
                      <div className="flex items-center text-sm text-green-600">
                        <CheckCircle className="w-4 h-4 mr-1" /> Competitive Rates
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex-shrink-0 text-center lg:text-right w-full lg:w-auto">
                    <Button
                      className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 mb-3 w-full lg:w-auto"
                      onClick={() => window.open(lender.applyUrl, '_blank')}
                    >
                      Get Started
                    </Button>
                    <div className="text-xs text-gray-500 space-y-1">
                      <div className="flex items-center justify-center lg:justify-end">
                        <Phone className="w-3 h-3 mr-1" /> Quick phone application
                      </div>
                      <div className="flex items-center justify-center lg:justify-end">
                        <Globe className="w-3 h-3 mr-1" /> Online application available
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 bg-gradient-to-b from-white to-gray-50 border-t px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-600 mb-6 flex-wrap gap-3">
              <div className="flex items-center bg-white rounded-lg px-3 py-2 shadow-sm border border-gray-100">
                <Shield className="w-4 h-4 mr-2 text-green-600" /> Secure Application Process
              </div>
              <div className="flex items-center bg-white rounded-lg px-3 py-2 shadow-sm border border-gray-100">
                <Clock className="w-4 h-4 mr-2 text-blue-600" /> Fast Approval Times
              </div>
              <div className="flex items-center bg-white rounded-lg px-3 py-2 shadow-sm border border-gray-100">
                <CheckCircle className="w-4 h-4 mr-2 text-green-600" /> Trusted Partners
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 sm:p-6">
            <div className="flex items-start space-x-3">
              <Info className="w-5 h-5 text-blue-600 mt-0.5" />
              <div className="text-left">
                <h3 className="text-sm font-semibold text-gray-800 mb-2">Important Information</h3>
                <div className="text-xs text-gray-600 leading-relaxed space-y-2">
                  <p>
                    <span className="font-medium text-gray-700">Offer Details:</span> The offers presented are based on the information you provided and are subject to credit approval and verification.
                  </p>
                  <p>
                    <span className="font-medium text-gray-700">Variable Terms:</span> Interest rates, fees, and terms may vary based on your creditworthiness and business profile.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Results;