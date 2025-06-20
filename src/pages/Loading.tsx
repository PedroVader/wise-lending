
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Shield, Clock } from "lucide-react";

const Loading = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 to-blue-800 flex items-center justify-center">
      <div className="text-center text-white">
        <div className="mb-8">
          <Shield className="h-16 w-16 mx-auto mb-4 text-green-400 animate-pulse" />
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Clock className="h-5 w-5 text-green-400" />
            <span className="text-xl font-semibold">100% Secure Process</span>
          </div>
        </div>
        
        <h1 className="text-3xl font-bold mb-4">
          Preparing your options...
        </h1>
        
        <p className="text-blue-100 mb-8 max-w-md mx-auto">
          We're securely connecting you with our trusted lending partners. 
          This will only take a moment.
        </p>
        
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-400"></div>
        </div>
        
        <div className="mt-8 text-sm text-blue-200 space-y-1">
          <p>✓ No impact on credit score</p>
          <p>✓ SSL encrypted connection</p>
          <p>✓ Trusted lending partners</p>
        </div>
      </div>
    </div>
  );
};

export default Loading;
