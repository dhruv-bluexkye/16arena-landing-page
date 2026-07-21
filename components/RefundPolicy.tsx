import React from 'react';
import LegalLayout, { PolicyContact } from './LegalLayout';

const RefundPolicy: React.FC = () => {
  return (
    <LegalLayout title="Refund Policy – 16Arena Shop" updated="21 July 2026">
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Refund Policy</h2>
        <p>Because our products are digital, refunds are limited.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">When refunds may be issued</h2>
        <p className="mb-4">Refunds may be issued only if:</p>
        <ul className="list-disc pl-5 space-y-2 marker:text-primary">
          <li>Payment is successful but no voucher is delivered.</li>
          <li>A duplicate payment is made.</li>
          <li>The order cannot be fulfilled.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">When refunds are not issued</h2>
        <p className="mb-4">Refunds will generally not be issued:</p>
        <ul className="list-disc pl-5 space-y-2 marker:text-primary">
          <li>After a voucher has been successfully delivered.</li>
          <li>If the voucher has been redeemed.</li>
          <li>For user errors, including incorrect details entered or accidental purchases.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Processing time</h2>
        <p>
          Approved refunds are typically processed to the original payment method within
          <strong className="text-primary"> 5–7 business days</strong>, subject to the payment provider's timelines.
        </p>
      </section>

      <PolicyContact />
    </LegalLayout>
  );
};

export default RefundPolicy;
