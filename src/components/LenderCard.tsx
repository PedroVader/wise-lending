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
    <Card className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col justify-between h-full">
      {/* Header */}
      <div className="flex items-center space-x-3 mb-5">
        {lender.logo ? (
          <img
            src={lender.logo}
            alt={lender.name}
            className="w-12 h-12 object-contain rounded bg-white border p-1"
          />
        ) : (
          <div className="w-12 h-12 bg-blue-600 rounded flex items-center justify-center">
            <span className="text-lg font-semibold text-white">
              {lender.name.charAt(0)}
            </span>
          </div>
        )}
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            {lender.name}
          </h3>
          <div className="flex items-center gap-0.5 mt-1">
            {[1, 2, 3, 4, 5].map((i) => {
              const filled = score >= i;
              const half = score >= i - 0.5 && score < i;

              return (
                <div key={i} className="relative w-3.5 h-3.5">
                  <Star className="w-3.5 h-3.5 text-gray-300 fill-gray-300" />
                  {(filled || half) && (
                    <Star
                      className="absolute top-0 left-0 w-3.5 h-3.5 text-yellow-500 fill-yellow-500"
                      style={{
                        clipPath: half ? "inset(0 50% 0 0)" : "none",
                      }}
                    />
                  )}
                </div>
              );
            })}
            <span className="text-sm text-gray-600 ml-1.5">
              {score.toFixed(1)}
            </span>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="space-y-3 mb-6">
        <div className="flex justify-between items-center py-2 border-b border-gray-100">
          <span className="text-sm text-gray-600">Interest rate</span>
          <span className="font-semibold text-gray-900">{lender.interestRate}</span>
        </div>
        <div className="flex justify-between items-center py-2 border-b border-gray-100">
          <span className="text-sm text-gray-600">Max loan amount</span>
          <span className="font-semibold text-gray-900">{lender.maxLoanAmount}</span>
        </div>
        <div className="flex justify-between items-center py-2 border-b border-gray-100">
          <span className="text-sm text-gray-600">Fastest funding</span>
          <span className="font-semibold text-green-600">{lender.fastestFunding}</span>
        </div>
        <div className="flex justify-between items-center py-2">
          <span className="text-sm text-gray-600">Term length</span>
          <span className="font-semibold text-gray-900">{lender.termLength}</span>
        </div>
      </div>

      {/* CTA */}
      {showApplyButton && (
        <div className="space-y-2">
          <Button
            onClick={handleApply}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg py-2.5"
          >
            {ctaText}
          </Button>
        </div>
      )}
    </Card>
  );
};

export default LenderCard;