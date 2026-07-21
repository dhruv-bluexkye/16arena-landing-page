import React from 'react';
import LegalLayout, { PolicyContact } from './LegalLayout';

const ReturnPolicy: React.FC = () => {
  return (
    <LegalLayout title="Return Policy – 16Arena Shop" updated="21 July 2026">
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Return Policy</h2>
        <p>
          As 16Arena Shop sells digital products, returns are not applicable. Once a voucher, gift card,
          or digital product has been successfully delivered, it cannot be returned or exchanged.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Exceptions</h2>
        <p className="mb-4">Exceptions may be considered only where:</p>
        <ul className="list-disc pl-5 space-y-2 marker:text-primary">
          <li>An incorrect product was delivered.</li>
          <li>The voucher is technically invalid and cannot be replaced by the issuer.</li>
        </ul>
      </section>

      <PolicyContact />
    </LegalLayout>
  );
};

export default ReturnPolicy;
