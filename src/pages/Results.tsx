import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LenderCard from "@/components/LenderCard";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, CheckCircle, Clock, Star, Phone, Globe } from "lucide-react";
import { getLenders } from "@/lib/getLenders";

const Results = () => {
  const [shuffledLenders, setShuffledLenders] = useState<any[]>([]);

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

      {/* Header Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-12 border-b">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="inline-block bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full mb-4 shadow-sm">
            You're pre-qualified 🎉
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Congratulations!
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-700 mb-6">
            Your Personalized Offers Are Ready
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed text-base md:text-lg">
            These offers are from our trusted lending partners. Some will contact you shortly, while others may require you to call or complete a short online application to proceed with the funding process.
          </p>
        </div>
      </section>

      {/* Lenders Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="space-y-8">
            {shuffledLenders.map((lender, index) => (
              <Card key={lender.id} className="border border-gray-200 shadow-sm bg-white">
                <CardContent className="p-8">
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
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        {lender.name}
                      </h3>

                      {/* Features Table */}
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

                      {/* Description */}
                      <div className="mt-4">
                        <p className="text-gray-600 leading-relaxed">
                          {(() => {
                            // Verificar si existe descripción
                            if (lender.description && lender.description.trim() !== '') {
                              return lender.description;
                            }
                            
                            // Si no existe, generar descripción aleatoria
                            const descriptions = [
                              `${lender.name} specializes in providing fast business loans with minimal paperwork and quick decisions. Their streamlined process helps entrepreneurs access funding when they need it most, with flexible repayment terms up to ${lender.termLength.toLowerCase()}.`,
                              
                              `${lender.name} offers comprehensive business financing solutions tailored to meet diverse industry needs. With competitive interest rates and personalized service, they support business growth through various loan products and terms extending up to ${lender.termLength.toLowerCase()}.`,
                              
                              `${lender.name} focuses on helping small and medium businesses secure the capital they need to expand operations. Their experienced team provides quick approvals and flexible financing options, with loan terms available up to ${lender.termLength.toLowerCase()}.`,
                              
                              `${lender.name} provides alternative lending solutions for businesses that may not qualify for traditional bank loans. They offer fast funding decisions and competitive rates, helping entrepreneurs access working capital with terms up to ${lender.termLength.toLowerCase()}.`,
                              
                              `${lender.name} delivers innovative business financing with a focus on speed and customer service. Their digital platform streamlines the application process, offering quick access to funds and flexible repayment schedules up to ${lender.termLength.toLowerCase()}.`,
                              
                              `${lender.name} serves businesses across multiple industries with customized loan solutions. They pride themselves on fast approvals, transparent terms, and ongoing support throughout the loan lifecycle, with financing options up to ${lender.termLength.toLowerCase()}.`,
                            ];
                            return descriptions[Math.floor(Math.random() * descriptions.length)];
                          })()}
                        </p>
                      </div>

                      {/* Key Features */}
                      <div className="mt-4 flex flex-wrap gap-4">
                        <div className="flex items-center text-sm text-green-600">
                          <CheckCircle className="w-4 h-4 mr-1" />
                          Fast Approval Process
                        </div>
                        <div className="flex items-center text-sm text-green-600">
                          <CheckCircle className="w-4 h-4 mr-1" />
                          Flexible Terms
                        </div>
                        <div className="flex items-center text-sm text-green-600">
                          <CheckCircle className="w-4 h-4 mr-1" />
                          Competitive Rates
                        </div>
                      </div>
                    </div>

                    {/* CTA Section */}
                    <div className="flex-shrink-0 text-center lg:text-right">
                      <Button
                        className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 mb-3 w-full lg:w-auto"
                        onClick={() => window.open(lender.applyUrl, '_blank')}
                      >
                        Get Started
                      </Button>
                      <div className="text-xs text-gray-500 space-y-1">
                        <div className="flex items-center justify-center lg:justify-end">
                          <Phone className="w-3 h-3 mr-1" />
                          Quick phone application
                        </div>
                        <div className="flex items-center justify-center lg:justify-end">
                          <Globe className="w-3 h-3 mr-1" />
                          Online application available
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="py-8 bg-white border-t">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-600 mb-4">
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-2 text-green-600" />
                Secure Application Process
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2 text-blue-600" />
                Fast Approval Times
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                Trusted Partners
              </div>
            </div>
            <p className="text-xs text-gray-500 max-w-4xl mx-auto leading-relaxed">
              The offers presented are based on the information you provided and are subject to credit approval and verification. 
              Interest rates, fees, and terms may vary based on your creditworthiness and business profile. 
              We may receive compensation from our lending partners, which may influence the order of offers presented. 
              This compensation does not affect our recommendations or the terms offered to you.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Results;