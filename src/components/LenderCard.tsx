import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Star } from "lucide-react";

interface LenderCardProps {
  lender: {
    id: string;
    name: string;
    logo?: string;
    interestRate: string;
    maxLoanAmount: string;
    fastestFunding: string;
    description: string;
    termLength: string;
    customerScore: number | string;
    applyUrl: string;
    featured?: boolean;
  };
  showApplyButton?: boolean;
  ctaText?: string;
}

const LenderCard = ({
  lender,
  showApplyButton = true,
  ctaText = "Apply now",
}: LenderCardProps) => {
  const navigate = useNavigate();

  const handleApply = () => {
    navigate("/loading");
  };

  const score =
    typeof lender.customerScore === "number"
      ? lender.customerScore
      : parseFloat(lender.customerScore) || 0;

  return (
    <Card
      className={`relative border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-all p-6 flex flex-col justify-between h-full bg-white ${
        lender.featured ? "ring-2 ring-blue-500" : ""
      }`}
    >
      {/* Header */}
      <div className="flex items-center space-x-4 mb-6">
        {lender.logo ? (
          <img
            src={lender.logo}
            alt={lender.name}
            className="w-14 h-14 object-contain rounded bg-white border p-1 shadow-sm"
          />
        ) : (
          <div className="w-14 h-14 bg-blue-600 rounded flex items-center justify-center shadow-sm">
            <span className="text-xl font-semibold text-white">
              {lender.name.charAt(0)}
            </span>
          </div>
        )}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-1">
            {lender.name}
          </h3>
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((i) => {
              const filled = score >= i;
              const half = score >= i - 0.5 && score < i;
              return (
                <div key={i} className="relative w-4 h-4">
                  <Star className="w-4 h-4 text-gray-300 fill-gray-300" />
                  {(filled || half) && (
                    <Star
                      className="absolute top-0 left-0 w-4 h-4 text-yellow-500 fill-yellow-500"
                      style={{ clipPath: half ? "inset(0 50% 0 0)" : "none" }}
                    />
                  )}
                </div>
              );
            })}
            <span className="text-sm text-gray-600 ml-1">
              {score.toFixed(1)}
            </span>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-3 text-sm text-gray-700 mb-6">
        <div className="flex justify-between">
          <span>Interest Rate</span>
          <span className="font-medium text-gray-900">{lender.interestRate}</span>
        </div>
        <div className="flex justify-between">
          <span>Max Loan Amount</span>
          <span className="font-medium text-gray-900">{lender.maxLoanAmount}</span>
        </div>
        <div className="flex justify-between">
          <span>Fastest Funding</span>
          <span className="font-medium text-green-600">{lender.fastestFunding}</span>
        </div>
        <div className="flex justify-between">
          <span>Term Length</span>
          <span className="font-medium text-gray-900">{lender.termLength}</span>
        </div>
      </div>

      {/* CTA */}
      {showApplyButton && (
        <div className="mt-auto">
          <Button
            onClick={handleApply}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg py-2.5 text-sm"
          >
            {ctaText}
          </Button>
        </div>
      )}

      {/* Featured Tag */}
      {lender.featured && (
        <div className="absolute top-3 right-3 bg-yellow-100 text-yellow-800 text-xs px-2 py-0.5 rounded-full font-medium">
          Featured
        </div>
      )}
    </Card>
  );
};

export default LenderCard;
