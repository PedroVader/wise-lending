import Header from "@/components/Header";

const TermsOfUse = () => {
  return (
    <>
      <Header />
      <div className="max-w-3xl mx-auto px-4 py-12 text-gray-800">
        <h1 className="text-3xl font-bold mb-6">Terms of Use — Wise Lending</h1>
        <p className="text-sm text-gray-500 mb-10">Last updated: February 3, 2025</p>

        <div className="space-y-8 text-base leading-relaxed">
          <section>
            <h2 className="font-semibold text-lg mb-2">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the Wise Lending website or services ("Services"), you agree to these Terms of Use and our Privacy Policy. If you do not agree, you must not use the Services.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-lg mb-2">2. Our Role as Intermediary</h2>
            <p>
              Wise Lending is not a lender and does not issue loans or make credit decisions. We act solely as an intermediary, connecting users with third-party financial institutions. All loan offers are made directly by our lending partners and are subject to their terms.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-lg mb-2">3. No Financial Advice</h2>
            <p>
              All information provided on our platform is for informational purposes only and does not constitute financial, legal, or tax advice. You are solely responsible for evaluating loan options and should consult a licensed advisor as needed.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-lg mb-2">4. User Responsibilities</h2>
            <p>
              You agree to provide accurate, complete, and up-to-date information. You must be at least 18 years old and legally able to apply for credit in the U.S. Misuse of our platform, including submitting false information, is strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-lg mb-2">5. Communications</h2>
            <p>
              By submitting your information, you consent to be contacted by Wise Lending and its partners via email, phone, or SMS for relevant offers or updates. You may opt out at any time by following the instructions provided in the message.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-lg mb-2">6. Use Restrictions</h2>
            <p>
              You may use our Services for lawful purposes only. Unauthorized use, copying, scraping, or distribution of our content or platform is strictly prohibited and may result in suspension or legal action.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-lg mb-2">7. Third-Party Offers</h2>
            <p>
              Wise Lending is not responsible for the content, terms, or privacy practices of third-party lenders. We do not guarantee loan approval or specific rates. All agreements are made directly between you and the lender.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-lg mb-2">8. Limitation of Liability</h2>
            <p>
              Wise Lending shall not be liable for any indirect, incidental, or consequential damages arising from your use of our Services or reliance on third-party offers. Use of the Services is at your own risk.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-lg mb-2">9. Dispute Resolution</h2>
            <p>
              Disputes shall be resolved individually through binding arbitration in Florida, unless prohibited by law. Class action waivers apply. You may opt out of arbitration within 30 days of first using our Services by contacting us in writing.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-lg mb-2">10. Changes to These Terms</h2>
            <p>
              We may modify these Terms at any time. Continued use of our Services after updates constitutes your acceptance of the new terms. The “Last updated” date reflects the latest revision.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-lg mb-2">11. Contact Us</h2>
            <p>
              If you have any questions or concerns regarding these Terms, you may contact us at: <br />
              <strong>Email:</strong>{" "}
              <a href="mailto:privacy@wiselending.com" className="text-blue-600 underline">
                privacy@wiselending.com
              </a>
              <br />
              <strong>Mail:</strong> Wise Lending LLC, 1101 Example Blvd, Miami, FL 33101, USA
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default TermsOfUse;
