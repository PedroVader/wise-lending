
import { Shield, Check, Lock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-blue-900" />
              <span className="text-xl font-bold text-blue-900">Wise Lending</span>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Compare trusted lenders for business loans, even with bad credit. 
              Safe, secure, and no commitment required.
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span className="flex items-center space-x-1">
                    <Shield className="h-4 w-4 text-green-500" />
                    <span>Safe Process</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Check className="h-4 w-4 text-blue-500" />
                    <span>No Commitment</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Lock className="h-4 w-4 text-green-500" />
                    <span>SSL Secured</span>
                  </span>
                  </div>
                      </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-blue-900">Terms of Use</a></li>
              <li><a href="#" className="hover:text-blue-900">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-900">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Trust & Security</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>256-bit SSL encryption</li>
              <li>No credit score impact</li>
              <li>Secure data handling</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-500">
          © 2025 Wise Lending. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
