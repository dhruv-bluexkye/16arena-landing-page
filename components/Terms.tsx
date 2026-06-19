import React, { useEffect } from 'react';

const Terms: React.FC = () => {
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
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Terms of Service – 16Arena</h1>
            <p className="text-gray-400">Last updated on: 19 June 2026</p>
        </div>

        <div className="space-y-8 text-gray-300 leading-relaxed font-light bg-surface-dark border border-white/5 p-8 md:p-12 rounded-2xl">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
            <p className="mb-4">
              Welcome to 16Arena, operated by 16Arena Labs Private Limited, India ("we," "us," or "our").
            </p>
            <p className="mb-4">
              These Terms of Service ("Terms") govern your access to and use of the 16Arena mobile application and services. By downloading, installing, or using our app, you agree to be bound by these Terms.
            </p>
            <p>
              If you do not agree to these Terms, you must not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Eligibility</h2>
            <p className="mb-4">
              To use 16Arena, you must:
            </p>
            <ul className="list-disc pl-5 space-y-2 marker:text-primary mb-4">
              <li>Be at least 16 years of age</li>
              <li>Have the legal capacity to enter into these Terms</li>
              <li>Not be prohibited from using our services under any applicable law</li>
            </ul>
            <p>
              By creating an account, you represent and warrant that you meet all eligibility requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Account Registration</h2>
            <p className="mb-4">
              To access certain features, you must create an account by providing:
            </p>
            <ul className="list-disc pl-5 space-y-2 marker:text-primary mb-4">
              <li>Accurate and complete information</li>
              <li>A valid email address or mobile number</li>
              <li>A secure password</li>
            </ul>
            <p className="mb-4">
              You are responsible for:
            </p>
            <ul className="list-disc pl-5 space-y-2 marker:text-primary mb-4">
              <li>Maintaining the confidentiality of your account credentials</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized access</li>
            </ul>
            <p>
              We reserve the right to suspend or terminate accounts that violate these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. User Conduct</h2>
            <p className="mb-4">
              You agree to use 16Arena only for lawful purposes and in accordance with these Terms. You are prohibited from:
            </p>
            <ul className="list-disc pl-5 space-y-2 marker:text-primary mb-4">
              <li>Cheating, hacking, or using unauthorized third-party software or tools</li>
              <li>Harassing, threatening, bullying, or defaming other users</li>
              <li>Engaging in fraudulent activities, scams, or impersonating platform staff</li>
              <li>Sharing, distributing, or transmitting malicious code or viruses</li>
              <li>Attempting to gain unauthorized access to our systems or other users' accounts</li>
              <li>Violating any applicable local, state, national, or international law</li>
              <li>Interfering with or disrupting the service or servers</li>
            </ul>
            <p>
              Violation of these rules may result in immediate account suspension or termination.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Tournaments and Contests</h2>
            <p className="mb-4">
              By participating in tournaments and contests on 16Arena:
            </p>
            <ul className="list-disc pl-5 space-y-2 marker:text-primary mb-4">
              <li>You agree to follow all tournament rules and guidelines</li>
              <li>You understand that results are final and binding</li>
              <li>You acknowledge that we reserve the right to disqualify participants for rule violations</li>
              <li>You accept that tournament formats, prizes, and schedules may change without prior notice</li>
            </ul>
            <p>
              We are not responsible for disputes between participants or technical issues beyond our control that may affect gameplay.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Virtual Currency and Rewards</h2>
            <p className="mb-4">
              Arena Coins and other in-app rewards on 16Arena:
            </p>
            <ul className="list-disc pl-5 space-y-2 marker:text-primary mb-4">
              <li>Have no real-world monetary value unless explicitly stated for specific reward programs</li>
              <li>Cannot be transferred, sold, or exchanged outside the platform</li>
              <li>Are subject to modification, suspension, or revocation at any time</li>
              <li>May be forfeited upon account termination</li>
            </ul>
            <p className="mb-4">
              Where cash rewards or shopping vouchers are explicitly offered, separate disbursement timelines apply as detailed in our <a href="#contest-rules" className="text-primary hover:text-primary-hover">Contest &amp; Tournament Rules</a>.
            </p>
            <p>
              We reserve the right to modify or discontinue any reward program at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Intellectual Property</h2>
            <p className="mb-4">
              All content, features, and functionality of 16Arena, including but not limited to:
            </p>
            <ul className="list-disc pl-5 space-y-2 marker:text-primary mb-4">
              <li>Text, graphics, logos, icons, images, and software</li>
              <li>Design, layout, and user interface</li>
              <li>Trademarks, service marks, and trade names</li>
            </ul>
            <p>
              Are owned by 16Arena Labs Private Limited or its licensors and are protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Limitation of Liability</h2>
            <p className="mb-4">
              16Arena is provided on an "as is" and "as available" basis. To the fullest extent permitted by law, we disclaim all warranties, express or implied, including:
            </p>
            <ul className="list-disc pl-5 space-y-2 marker:text-primary mb-4">
              <li>Warranties of merchantability, fitness for a particular purpose, or non-infringement</li>
              <li>Warranties that the service will be uninterrupted, secure, or error-free</li>
            </ul>
            <p className="mb-4">
              We are not liable for any indirect, incidental, special, consequential, or punitive damages arising from:
            </p>
            <ul className="list-disc pl-5 space-y-2 marker:text-primary mb-4">
              <li>Your use or inability to use the service</li>
              <li>Server downtime, data loss, or game interruptions</li>
              <li>Unauthorized access to or alteration of your data</li>
              <li>Conduct of third parties on the platform</li>
            </ul>
            <p>
              Our total liability shall not exceed the amount you paid to us in the past 12 months, if any.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless 16Arena Labs Private Limited and its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from your use of the service, violation of these Terms, or infringement of any rights of another party.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Termination</h2>
            <p className="mb-4">
              We may terminate or suspend your account immediately, without prior notice, if you:
            </p>
            <ul className="list-disc pl-5 space-y-2 marker:text-primary mb-4">
              <li>Violate these Terms or our Privacy Policy</li>
              <li>Engage in fraudulent, abusive, or illegal activity</li>
              <li>Fail to pay any fees owed (if applicable)</li>
            </ul>
            <p>
              You may terminate your account at any time by contacting us. Upon termination, your right to use the service will cease immediately, and we may delete your account data in accordance with our Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">11. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will notify you of material changes by posting the updated Terms in the app or on our website. Your continued use of the service after such changes constitutes acceptance of the new Terms. If you do not agree to the changes, you must stop using the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">12. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts in India.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">13. Contact Us</h2>
            <p className="mb-4">
              If you have questions about these Terms, please contact us:
            </p>
            <div className="bg-black/30 p-4 rounded-lg border border-white/10">
              <p className="mb-2"><strong className="text-white">Company Name:</strong> 16Arena Labs Private Limited</p>
              <p className="mb-2"><strong className="text-white">Location:</strong> India</p>
              <p><strong className="text-white">Email:</strong> <a href="mailto:support@16arena.com" className="text-primary hover:text-primary-hover">support@16arena.com</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;