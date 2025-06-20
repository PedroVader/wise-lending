import { Shield, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-blue-900" />
            <Link to="/" className="text-xl font-bold text-blue-900">
              Wise Lending
            </Link>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
          <span className="flex items-center space-x-2">
            <Shield className="h-4 w-4 text-green-500" />
            <span>SSL Secured</span>
          </span>
          <CheckCircle className="h-4 w-4 text-green-500" />
          <span>No Impact on Credit Score</span>
        </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
