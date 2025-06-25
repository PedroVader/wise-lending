import Header from "@/components/Header";

const PrivacyPolicy = () => {
  return (
    <>
      <Header />
      <div className="max-w-3xl mx-auto px-4 py-12 text-gray-800">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy — Wise Lending</h1>
        <p className="text-sm text-gray-500 mb-10">Last updated: February 3, 2025</p>

        <div className="space-y-8 text-base leading-relaxed">
          <section>
            <h2 className="font-semibold text-xl mb-2">1. Introduction</h2>
            <p>
              This Privacy Policy explains how Wise Lending LLC ("we", "our", or "us") collects, uses, shares, and protects your personal information when you use our websites, applications, and services ("Services").
              By using our Services, you agree to this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-xl mb-2">2. Information We Collect</h2>
            <p>
              We may collect:
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Personal information you provide (name, email, phone, business details)</li>
                <li>Financial and loan-related information</li>
                <li>Device and usage data (IP address, browser type, activity)</li>
                <li>Data from cookies or similar technologies</li>
                <li>Information from our partners and public sources</li>
              </ul>
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-xl mb-2">3. How We Use Your Information</h2>
            <p>
              We use your information to:
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Connect you with relevant loan products and providers</li>
                <li>Improve, personalize, and operate our Services</li>
                <li>Respond to your inquiries and provide support</li>
                <li>Send updates, alerts, or marketing communications (where permitted)</li>
                <li>Comply with legal and regulatory obligations</li>
              </ul>
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-xl mb-2">4. Sharing with Third Parties</h2>
            <p>
              We may share your data with:
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Lending partners or financial institutions you engage with</li>
                <li>Service providers supporting our operations (hosting, analytics, etc.)</li>
                <li>Law enforcement or regulatory bodies if required by law</li>
              </ul>
              We do not sell your personal information for monetary gain. Some data sharing may be considered a "sale" under U.S. privacy laws — you can opt out where applicable.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-xl mb-2">5. Communications</h2>
            <p>
              By using our Services, you agree to receive communications from Wise Lending and our partners via phone, email, or SMS. You may opt out at any time by following the instructions in the message or contacting us.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-xl mb-2">6. Your Rights</h2>
            <p>
              Depending on your location, you may have the right to:
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Access, correct, or delete your personal data</li>
                <li>Object to or restrict certain uses of your data</li>
                <li>Opt out of targeted advertising or data sales</li>
              </ul>
              To exercise your rights, contact us at:{" "}
              <a href="mailto:privacy@wiselending.com" className="text-blue-600 underline">
                privacy@wiselending.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-xl mb-2">7. Cookies</h2>
            <p>
              We use cookies and similar technologies to enhance your experience, analyze traffic, and serve personalized content. You can manage your preferences through your browser settings. For more details, refer to our Cookie Policy.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-xl mb-2">8. Data Security</h2>
            <p>
              We implement reasonable technical and organizational safeguards to protect your information. However, no system is completely secure, and use of our Services is at your own risk.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-xl mb-2">9. Policy Updates</h2>
            <p>
              We may update this Privacy Policy from time to time. If we make significant changes, we will notify you via our website or other appropriate means. Continued use of our Services constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-xl mb-2">10. Contact Us</h2>
            <p>
              If you have questions or wish to exercise your privacy rights, contact us at:
              <br />
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

export default PrivacyPolicy;
