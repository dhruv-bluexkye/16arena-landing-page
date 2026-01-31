import React, { useEffect } from 'react';

const CSAE: React.FC = () => {
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
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Our Commitment to Child Safety</h1>
            <p className="text-gray-400">16Arena Child Sexual Abuse and Exploitation (CSAE) Policy</p>
        </div>

        <div className="space-y-8 text-gray-300 leading-relaxed font-light bg-surface-dark border border-white/5 p-8 md:p-12 rounded-2xl">
          <section>
            <p className="mb-4">
              16Arena is committed to providing a safe environment for all users. We have zero tolerance for child sexual abuse or exploitation (CSAE) in any form.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">We Strictly Prohibit</h2>
            <ul className="list-disc pl-5 space-y-3 marker:text-primary">
              <li>Sexual content involving minors</li>
              <li>Exploitative or abusive behavior toward children</li>
              <li>Sharing or requesting inappropriate content involving minors</li>
              <li>Grooming or harassment of minors</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Reporting</h2>
            <p className="mb-4">
              Users can report any suspicious, abusive, or inappropriate behavior directly through:
            </p>
            <ul className="list-disc pl-5 space-y-2 marker:text-primary mb-4">
              <li>In-app reporting features, or</li>
              <li>Email: <a href="mailto:16arena.com@gmail.com" className="text-primary hover:underline">16arena.com@gmail.com</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Our Actions</h2>
            <p className="mb-4">
              If we detect or receive reports of CSAE-related activity, we will:
            </p>
            <ul className="list-disc pl-5 space-y-2 marker:text-primary">
              <li>Immediately remove the content</li>
              <li>Suspend or permanently ban accounts</li>
              <li>Report the incident to appropriate law enforcement authorities</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Cooperation</h2>
            <p>
              We fully cooperate with legal authorities and child protection organizations to investigate and prevent exploitation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Contact</h2>
            <p className="mb-4">
              For safety concerns, contact:
            </p>
            <div className="bg-black/30 p-4 rounded-lg border border-white/10">
              <p className="mb-2"><strong className="text-white">Company Name:</strong> Metaninza Gaming Private Limited</p>
              <p className="mb-2"><strong className="text-white">Location:</strong> India</p>
              <p><strong className="text-white">Email:</strong> <a href="mailto:16arena.com@gmail.com" className="text-primary hover:text-primary-hover">16arena.com@gmail.com</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CSAE;
