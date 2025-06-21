
import Header from "@/components/Header";


const TermsOfUse = () => {
  return (
    <>
    <Header />
    <div className="max-w-3xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Terms of Use — Wise Lending</h1>
      <p className="text-sm text-gray-500 mb-10">Last updated: June 21, 2025</p>

      <div className="space-y-6">
        <section>
          <h2 className="font-semibold text-lg mb-2">1. Acceptance</h2>
          <p>By using our services, you agree to these Terms of Use and our Privacy Policy.</p>
        </section>

        <section>
          <h2 className="font-semibold text-lg mb-2">2. Our Role</h2>
          <p>
            Wise Lending is not a lender and does not make credit decisions. We act solely as
            an intermediary, connecting users with third-party loan providers. We do not
            guarantee approval or specific terms.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-lg mb-2">3. Information You Provide</h2>
          <p>
            You must provide accurate and up-to-date information. We may share your data with
            lenders or partners to help match you with offers.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-lg mb-2">4. Communications</h2>
          <p>
            By submitting your information, you consent to be contacted by Wise Lending and its
            partners via email, phone, or SMS.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-lg mb-2">5. Permitted Use</h2>
          <p>
            You may only use our services legally. Unauthorized copying, scraping, or misuse of
            our platform or content is prohibited.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-lg mb-2">6. Disclaimer</h2>
          <p>
            We are not responsible for your financial decisions or for any actions or offers
            made by third-party lenders.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-lg mb-2">7. Dispute Resolution</h2>
          <p>
            We aim to resolve disputes amicably. If not, they will be handled through individual
            arbitration. Class actions are waived. You may opt out of arbitration within 30 days
            of first use.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-lg mb-2">8. Changes to Terms</h2>
          <p>
            We may update these terms at any time. Continued use of the services means you
            accept the new terms.
          </p>
        </section>
      </div>
    </div>
    </>
  );
};

export default TermsOfUse;
