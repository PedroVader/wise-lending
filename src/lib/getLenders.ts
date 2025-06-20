// lib/getLenders.ts
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "o3erqnbs",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: true,
});

export const getLenders = async () => {
  const query = `*[_type == "partner" && active == true] | order(order asc) {
    _id,
    name,
    "logo": logo.asset->url,
    description,
    link,
    estApr,
    maxLoanAmount,
    minCreditScore,
    timeInBusiness,
    fastestFunding,
    termLength,
    customerScore,
    personalGuaranteeRequired,
    annualRevenueMin,
    businessCreditScore,
    personalCreditScore,
    pros,
    cons,
    whatToKnow
  }`;

  const results = await client.fetch(query);
  return results.map((item: any) => ({
  id: item._id,
  name: item.name,
  logo: item.logo,
  description: item.description,
  interestRate: item.estApr,
  maxLoanAmount: item.maxLoanAmount,
  fastestFunding: item.fastestFunding,
  termLength: item.termLength,
  customerScore: item.customerScore,
  applyUrl: item.link,
  siteName: "BusinessLoans.com",
}));
};
