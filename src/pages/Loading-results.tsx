import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Shield, Clock } from "lucide-react";

const LoadingResults = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/results");
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 to-blue-800 flex items-center justify-center">
      <div className="text-center text-white px-6">
        <div className="mb-8">
          <Shield className="h-16 w-16 mx-auto mb-4 text-green-400 animate-pulse" />
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Clock className="h-5 w-5 text-green-400" />
            <span className="text-xl font-semibold">
              100% Secure and Confidential Process
            </span>
          </div>
        </div>

        <h1 className="text-3xl font-bold mb-4">
          Finding your best lending options
        </h1>

        <p className="text-blue-100 mb-8 max-w-md mx-auto">
          We're matching you with the most suitable lenders based on your
          conditions and business needs. This process is fully secure and
          confidential, with no impact on your credit score.
        </p>

        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-400"></div>
        </div>

        <div className="mt-8 text-sm text-blue-200 space-y-1">
          <p>✓ No impact on your credit score</p>
          <p>✓ SSL-encrypted secure connection</p>
          <p>✓ Personalized results just for you</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingResults;
