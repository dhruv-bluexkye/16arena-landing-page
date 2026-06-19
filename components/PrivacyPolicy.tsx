import React, { useEffect } from 'react';

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-background-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
            <a href="#" className="inline-flex items-center text-primary hover:text-white transition-colors gap-2 mb-6">
                <span className="material-symbols-outlined">arrow_back</span> Back to Home
            </a>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Privacy Policy – 16Arena</h1>
            <p className="text-gray-400">Effective Date: 31/01/2026</p>
        </div>

        <div className="space-y-8 text-gray-300 leading-relaxed font-light bg-surface-dark border border-white/5 p-8 md:p-12 rounded-2xl">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
            <p className="mb-4">
              Welcome to 16Arena, operated by 16Arena Labs Private Limited, India.
            </p>
            <p className="mb-4">
              We respect your privacy and are committed to protecting your personal data. This Privacy Policy explains what information we collect, how we use it, and your rights regarding your data when you use our mobile application and services.
            </p>
            <p>
              By using 16Arena, you agree to this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
            <p className="mb-4">
              We only collect the minimum information necessary to provide our services.
            </p>
            <h3 className="text-xl font-semibold text-white mt-6 mb-3">Personal Information</h3>
            <ul className="list-disc pl-5 space-y-2 marker:text-primary mb-6">
              <li>First name</li>
              <li>Last name</li>
              <li>Username</li>
              <li>Email address or mobile number</li>
              <li>Date of birth</li>
              <li>Gender</li>
            </ul>
            <h3 className="text-xl font-semibold text-white mt-6 mb-3">Technical Information</h3>
            <ul className="list-disc pl-5 space-y-2 marker:text-primary mb-6">
              <li>IP address</li>
              <li>Device type and OS version</li>
              <li>App usage logs</li>
              <li>Login activity</li>
            </ul>
            <h3 className="text-xl font-semibold text-white mt-6 mb-3">Usage Information</h3>
            <ul className="list-disc pl-5 space-y-2 marker:text-primary mb-4">
              <li>How you interact with tournaments, games, and app features</li>
            </ul>
            <p className="mt-4">
              We do not collect sensitive personal data such as financial information, passwords from other services, or biometric data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
            <p className="mb-4">
              We use your data strictly to:
            </p>
            <ul className="list-disc pl-5 space-y-2 marker:text-primary mb-4">
              <li>Create and manage your account</li>
              <li>Enable login and authentication</li>
              <li>Allow participation in tournaments and contests</li>
              <li>Provide customer support</li>
              <li>Improve app performance and features</li>
              <li>Prevent fraud, cheating, or abuse</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p>
              We do not sell or rent your personal data to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Legal Basis for Processing</h2>
            <p className="mb-4">
              We process your data when:
            </p>
            <ul className="list-disc pl-5 space-y-2 marker:text-primary">
              <li>It is necessary to provide our services to you</li>
              <li>You give consent</li>
              <li>We have legitimate business interests</li>
              <li>Required by law or regulation</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Data Sharing</h2>
            <p className="mb-4">
              We may share information only with:
            </p>
            <ul className="list-disc pl-5 space-y-2 marker:text-primary mb-4">
              <li>Service providers (hosting, analytics, cloud services)</li>
              <li>Legal authorities when required by law</li>
              <li>Fraud prevention and security partners</li>
            </ul>
            <p>
              All partners are required to protect your data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Data Security</h2>
            <p className="mb-4">
              We implement appropriate technical and organizational safeguards to protect your information from:
            </p>
            <ul className="list-disc pl-5 space-y-2 marker:text-primary mb-4">
              <li>Unauthorized access</li>
              <li>Loss</li>
              <li>Misuse</li>
              <li>Alteration</li>
            </ul>
            <p>
              However, no system is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Data Retention</h2>
            <p className="mb-4">
              We retain your information only as long as necessary to:
            </p>
            <ul className="list-disc pl-5 space-y-2 marker:text-primary mb-4">
              <li>Maintain your account</li>
              <li>Provide services</li>
              <li>Meet legal requirements</li>
            </ul>
            <p>
              If you delete your account, your personal data will be removed within a reasonable timeframe unless legally required to retain it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Your Rights</h2>
            <p className="mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-5 space-y-2 marker:text-primary mb-4">
              <li>Access your personal data</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your account and data</li>
              <li>Withdraw consent</li>
              <li>Contact us with privacy concerns</li>
            </ul>
            <p>
              To exercise any of these rights, email us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Children's Privacy</h2>
            <p className="mb-4">
              16Arena is not intended for users under 13 years of age.
            </p>
            <p className="mb-4">
              We do not knowingly collect data from children under 13.
            </p>
            <p>
              If we discover such data, it will be deleted immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Third-Party Services</h2>
            <p>
              Our app may use third-party tools such as analytics or authentication services. These providers may collect limited technical data according to their own privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">11. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Updates will be posted inside the app or on our website. Continued use of the app means you accept the changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">12. Contact Us</h2>
            <p className="mb-4">
              If you have questions, concerns, or want to request data deletion, contact:
            </p>
            <div className="bg-black/30 p-4 rounded-lg border border-white/10">
              <p className="mb-2"><strong className="text-white">Company Name:</strong> 16Arena Labs Private Limited</p>
              <p className="mb-2"><strong className="text-white">Location:</strong> India</p>
              <p><strong className="text-white">Email:</strong> <a href="mailto:16arena.com@gmail.com" className="text-primary hover:text-primary-hover">16arena.com@gmail.com</a></p>
            </div>
            <p className="mt-4">
              We will respond within a reasonable timeframe.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;