import React, { useEffect } from 'react';

const ContestRules: React.FC = () => {
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
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Contest & Tournament Rules</h1>
          <p className="text-gray-400">Effective Date: 31/01/2026</p>
        </div>

        <div className="space-y-8 text-gray-300 leading-relaxed font-light bg-surface-dark border border-white/5 p-8 md:p-12 rounded-2xl">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Overview</h2>
            <p className="mb-4">
              16Arena is a gaming platform that allows registered users to participate in esports tournaments and skill-based gaming contests. Users can join tournaments, compete with other players, and earn in-app rewards based on their gameplay performance.
            </p>
            <p>
              Participation in any contest or tournament indicates acceptance of these rules.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Eligibility</h2>
            <p className="mb-4">
              To participate in contests or tournaments on the platform, users must:
            </p>
            <ul className="list-disc pl-5 space-y-2 marker:text-primary mb-4">
              <li>Be a registered user of the application</li>
              <li>Have a valid and active account</li>
              <li>Comply with the platform's Terms of Service and Privacy Policy</li>
            </ul>
            <p>
              Guest users may browse tournaments but cannot participate in contests or receive rewards.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Nature of Contests</h2>
            <p className="mb-4">
              All tournaments hosted on the platform are <strong className="text-white">skill-based competitions</strong>.
            </p>
            <p className="mb-4">
              Winners are determined based on:
            </p>
            <ul className="list-disc pl-5 space-y-2 marker:text-primary mb-4">
              <li>Match results</li>
              <li>Player performance</li>
              <li>Tournament rankings</li>
              <li>Leaderboard scores</li>
            </ul>
            <p>
              No winners are selected randomly. Results depend solely on gameplay performance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Tournament Participation</h2>
            <p className="mb-4">
              Users may join tournaments through the app if the tournament is open for registration.
            </p>
            <p className="mb-4">
              Tournaments may include:
            </p>
            <ul className="list-disc pl-5 space-y-2 marker:text-primary">
              <li>Solo tournaments</li>
              <li>Team tournaments</li>
              <li>Free entry tournaments</li>
              <li>Paid entry tournaments using in-app virtual currency (Arena Coins)</li>
            </ul>
            <p className="mt-4">
              Entry requirements and tournament details are displayed on each tournament page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Entry Fees</h2>
            <p className="mb-4">
              Some tournaments may require an entry fee using the platform's virtual currency (Arena Coins).
            </p>
            <ul className="list-disc pl-5 space-y-2 marker:text-primary">
              <li>Entry fees are deducted when the user confirms tournament participation.</li>
              <li>Entry fees may not be refunded once a tournament begins unless the tournament is cancelled.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Rewards and Prizes</h2>
            <p className="mb-4">
              Rewards may include <strong className="text-white">Arena Coins or other in-app rewards</strong>.
            </p>
            <p className="mb-4">
              Rules for rewards:
            </p>
            <ul className="list-disc pl-5 space-y-2 marker:text-primary">
              <li>Rewards are distributed after the tournament is completed.</li>
              <li>Rewards are given based on tournament results or leaderboard rankings.</li>
              <li>Each tournament distributes rewards only once.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Fair Play Policy</h2>
            <p className="mb-4">
              Participants must follow fair gameplay rules. The following actions are prohibited:
            </p>
            <ul className="list-disc pl-5 space-y-2 marker:text-primary mb-4">
              <li>Cheating or exploiting game mechanics</li>
              <li>Using bots or unauthorized software</li>
              <li>Manipulating tournament outcomes</li>
              <li>Collusion between players</li>
            </ul>
            <p>
              Violations may result in disqualification or account suspension.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Tournament Changes or Cancellation</h2>
            <p className="mb-4">
              The platform may cancel or modify tournaments due to:
            </p>
            <ul className="list-disc pl-5 space-y-2 marker:text-primary mb-4">
              <li>Technical issues</li>
              <li>Security concerns</li>
              <li>Insufficient participants</li>
              <li>Operational requirements</li>
            </ul>
            <p>
              If a tournament is cancelled before it begins, entry fees may be refunded where applicable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Apple Disclaimer</h2>
            <div className="bg-black/30 p-4 rounded-lg border border-white/10">
              <p className="mb-2">
                This contest or tournament is <strong className="text-white">not sponsored, endorsed, administered by, or associated with Apple Inc.</strong>
              </p>
              <p>
                Apple Inc. is not responsible for the operation of this platform, the administration of contests, or the distribution of rewards.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Acceptance of Rules</h2>
            <p>
              By participating in tournaments or contests on the platform, users acknowledge that they have read and agreed to these rules.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ContestRules;
