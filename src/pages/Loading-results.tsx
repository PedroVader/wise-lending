import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Shield, Clock } from "lucide-react";

const LoadingResults = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Si no viene del formulario, redirige al home (o al formulario)
    if (!location.state?.fromForm) {
      navigate("/");
      return;
    }

    const timer = setTimeout(() => {
      navigate("/thank-you", { state: { fromForm: true } });
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate, location.state]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 to-blue-800 flex items-center justify-center px-4">
      <div className="text-center text-white w-full max-w-md">
        <div className="mb-6">
          <Shield className="h-14 w-14 mx-auto mb-3 text-green-400 animate-pulse" />
          <div className="flex items-center justify-center gap-2 text-sm sm:text-base mb-3">
            <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-green-400" />
            <span className="font-medium">
              100% Secure and Confidential Process
            </span>
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold mb-3 leading-snug">
          Finding your best lending options
        </h1>

        <p className="text-blue-100 text-sm sm:text-base mb-6">
          We're matching you with the most suitable lenders based on your
          conditions and business needs. This process is fully secure and
          confidential, with no impact on your credit score.
        </p>

        <div className="flex justify-center mb-6">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-400"></div>
        </div>

        <div className="text-xs sm:text-sm text-blue-200 space-y-1">
          <p>✓ No impact on your credit score</p>
          <p>✓ SSL-encrypted secure connection</p>
          <p>✓ Personalized results just for you</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingResults;
