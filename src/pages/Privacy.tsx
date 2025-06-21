import Header from "@/components/Header";

const PrivacyPolicy = () => {
  return (
    <>
      <Header />
      <div className="max-w-3xl mx-auto px-4 py-12 text-gray-800">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy — Wise Lending</h1>
        <p className="text-sm text-gray-500 mb-10">Last updated: June 21, 2025</p>

        <div className="space-y-6">
          <section>
            <h2 className="font-semibold text-lg mb-2">1. Information We Collect</h2>
            <p>
              We may collect personal data you provide, such as your name, email, phone,
              financial details, or other relevant information submitted via our forms or tools.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-lg mb-2">2. How We Use Your Information</h2>
            <p>
              We use your information to match you with loan providers, communicate with you,
              and improve our services and platform.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-lg mb-2">3. Sharing with Third Parties</h2>
            <p>
              We may share your information with trusted third-party lenders or service
              providers to offer you relevant financial options. We do not sell your personal
              data.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-lg mb-2">4. Communications</h2>
            <p>
              By using our services, you agree to receive communications from Wise Lending and
              our partners via phone, SMS or email. You may opt out at any time.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-lg mb-2">5. Data Security</h2>
            <p>
              We implement reasonable technical and organizational safeguards to protect your
              data, but cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-lg mb-2">6. Your Rights</h2>
            <p>
              You may request to access, update or delete your data by contacting us at:{" "}
              <a href="mailto:privacy@wiselending.com" className="text-blue-600 underline">
                privacy@wiselending.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-lg mb-2">7. Cookies</h2>
            <p>
              We may use cookies or similar technologies to analyze traffic and improve user
              experience. You can manage your preferences in your browser settings.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-lg mb-2">8. Policy Updates</h2>
            <p>
              We may revise this policy. Continued use of our services means you accept the
              current version.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;