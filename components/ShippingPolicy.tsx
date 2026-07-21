import React from 'react';
import LegalLayout, { PolicyContact } from './LegalLayout';

const ShippingPolicy: React.FC = () => {
  return (
    <LegalLayout title="Shipping Policy – 16Arena Shop" updated="21 July 2026">
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Shipping Policy</h2>
        <p>16Arena Shop sells only digital products. No physical products are shipped.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Delivery</h2>
        <p className="mb-4">Upon successful payment:</p>
        <ul className="list-disc pl-5 space-y-2 marker:text-primary">
          <li>Digital vouchers are generally delivered instantly or within a few minutes.</li>
          <li>In exceptional circumstances, delivery may take up to 24 hours.</li>
          <li>Delivery is made electronically through the Platform or the user's registered communication channel.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Before you order</h2>
        <p>Users should ensure their registered contact details are accurate before placing an order.</p>
      </section>

      <PolicyContact />
    </LegalLayout>
  );
};

export default ShippingPolicy;
