import React, { useEffect } from 'react';

const ContestRules: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-background-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <a href="/" className="inline-flex items-center text-primary hover:text-white transition-colors gap-2 mb-6">
            <span className="material-symbols-outlined">arrow_back</span> Back to Home
          </a>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Contest &amp; Tournament Rules – 16Arena</h1>
          <p className="text-gray-400">Last updated on: 19 June 2026</p>
        </div>

        <div className="space-y-8 text-gray-300 leading-relaxed font-light bg-surface-dark border border-white/5 p-8 md:p-12 rounded-2xl">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Overview</h2>
            <p className="mb-4">
              16Arena is a skill-based gaming platform where registered users can participate in esports
              tournaments and casual gaming contests, compete with other players, and earn rewards based
              on their performance.
            </p>
            <p>
              Participation in any contest or tournament on 16Arena constitutes acceptance of these rules.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Eligibility</h2>
            <p className="mb-4">To participate in contests or tournaments, you must:</p>
            <ul className="list-disc pl-5 space-y-2 marker:text-primary mb-4">
              <li>Be a registered user with a valid, active account</li>
              <li>Comply with 16Arena's Terms of Service and Privacy Policy</li>
            </ul>
            <p>
              Guest users may browse tournaments but cannot participate in contests or receive rewards.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Nature of Contests</h2>
            <p className="mb-4">
              All tournaments and contests on 16Arena are strictly <strong className="text-white">skill-based</strong>.
              Winners are determined solely by:
            </p>
            <ul className="list-disc pl-5 space-y-2 marker:text-primary mb-4">
              <li>Match results</li>
              <li>Player performance</li>
              <li>Tournament rankings</li>
              <li>Leaderboard scores</li>
            </ul>
            <p>
              No element of chance is involved. Outcomes depend entirely on gameplay performance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Tournament Formats</h2>
            <p className="mb-4">16Arena hosts a variety of competitions including:</p>
            <ul className="list-disc pl-5 space-y-2 marker:text-primary mb-4">
              <li>Esports tournaments (team and solo)</li>
              <li>Casual Arena contests</li>
            </ul>
            <p>
              Tournaments may be structured as solo or team-based competitions. Entry requirements, formats,
              and prize details are displayed on each tournament's page within the app.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Entry Fees</h2>
            <p className="mb-4">
              16Arena does not charge real money for tournament or contest entry. Some tournaments use
              Arena Coins — our in-app virtual currency — as entry.
            </p>
            <ul className="list-disc pl-5 space-y-2 marker:text-primary">
              <li>Entry fees in Arena Coins are deducted upon confirmed registration</li>
              <li>Arena Coins entry fees are generally non-refundable once a tournament begins</li>
              <li>If a tournament is cancelled before it starts, entry fees will be refunded where applicable</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Rewards and Prizes</h2>
            <p className="mb-4">Rewards on 16Arena may include:</p>
            <div className="space-y-3 mb-4">
              <div className="bg-black/30 p-4 rounded-lg border border-white/10">
                <p><strong className="text-white">Arena Coins:</strong> distributed to all eligible winners after tournament completion.</p>
              </div>
              <div className="bg-black/30 p-4 rounded-lg border border-white/10">
                <p><strong className="text-white">Cash rewards:</strong> paid out within <strong className="text-primary">30–45 days</strong> of the tournament or contest concluding.</p>
              </div>
              <div className="bg-black/30 p-4 rounded-lg border border-white/10">
                <p><strong className="text-white">Shopping vouchers:</strong> delivered within <strong className="text-primary">7–14 days</strong> of the tournament or contest concluding.</p>
              </div>
            </div>
            <p>
              Rewards are distributed based on final tournament results or leaderboard rankings. Each tournament
              distributes rewards only once. Reward types and amounts are specified on the tournament page
              before registration.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Fair Play Policy</h2>
            <p className="mb-4">
              16Arena is committed to fair, competitive gameplay. The following are strictly prohibited:
            </p>
            <ul className="list-disc pl-5 space-y-2 marker:text-primary mb-4">
              <li>Cheating or exploiting game mechanics</li>
              <li>Using bots or unauthorized third-party software</li>
              <li>Manipulating tournament outcomes</li>
              <li>Collusion between players</li>
            </ul>
            <p>
              Violations may result in disqualification, reward forfeiture, or permanent account suspension.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Tournament Changes or Cancellation</h2>
            <p className="mb-4">16Arena reserves the right to cancel or modify tournaments due to:</p>
            <ul className="list-disc pl-5 space-y-2 marker:text-primary mb-4">
              <li>Technical issues</li>
              <li>Security concerns</li>
              <li>Insufficient participant numbers</li>
              <li>Operational requirements</li>
            </ul>
            <p>
              If a tournament is cancelled before it begins, Arena Coin entry fees will be refunded where applicable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Apple Disclaimer</h2>
            <div className="bg-black/30 p-4 rounded-lg border border-white/10">
              <p className="mb-2">
                This contest or tournament is <strong className="text-white">not sponsored, endorsed, administered by, or associated with Apple Inc.</strong>
              </p>
              <p>
                Apple is not responsible for the operation of this platform, the administration of contests, or the distribution of rewards.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Acceptance of Rules</h2>
            <p>
              By registering for or participating in any tournament or contest on 16Arena, you confirm that you
              have read, understood, and agreed to these rules.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">11. Contact Us</h2>
            <p className="mb-4">For any questions related to tournaments, contests, or rewards:</p>
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

export default ContestRules;
