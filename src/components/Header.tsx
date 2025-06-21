import { Shield, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stack en mobile, inline en md+ */}
        <div className="flex flex-col md:flex-row md:items-center justify-between py-3 gap-y-2 md:gap-y-0">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-blue-900" />
              <span className="text-base font-bold text-blue-900">Wise Lending</span>
            </Link>
          </div>

          {/* Garantías */}
          <div className="flex items-center space-x-4 text-xs sm:text-sm text-gray-600">
            <div className="flex items-center space-x-1 whitespace-nowrap">
              <Shield className="h-4 w-4 text-green-500" />
              <span>SSL Secured</span>
            </div>
            <div className="flex items-center space-x-1 whitespace-nowrap">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>No Credit Score Impact</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
