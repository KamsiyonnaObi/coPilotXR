import React from "react";
import Divider from "../Divider";
import Subscription from "./Subscription";

interface BillingSectionProps {
  creditBalance: number;
  planId: number;
}

const BillingSection = ({ creditBalance, planId }: BillingSectionProps) => {
  return (
    <section className="py-4">
      <h3 className="p-18-bold py-4">Billing & Plans</h3>
      <section className="flex flex-col gap-4">
        <div className="space-y-4">
          <p className="p-14-bold">CoPilot Credits</p>
          <p className="p-14-regular">
            You have <span className="p-14-bold">{creditBalance}</span> Copilot
            Credits
          </p>
        </div>
        <Divider />
        <div className="space-y-4">
          <p className="p-14-bold">Subscriptions</p>
          <Subscription planId={planId} />
        </div>
        <Divider />
      </section>
    </section>
  );
};

export default BillingSection;
