import React from "react";
import { getPlanById } from "@/src/app/lib/utils";
import { Button } from "@/shadcn/components/ui/button";

const Subscription = ({ planId }: { planId: number }) => {
  const plan = getPlanById(planId);
  return (
    <div className="p-4 border border-slate-200 space-y-4 max-w-[498px]">
      <p className="p-18-bold">{plan?.name}</p>
      <p className="p-14-regular">{plan?.desc}</p>
      <Button
        className="flex flex-center p-14-bold bg-slate-200 w-full"
        variant="outline"
        disabled
      >
        Upgarde Plan
      </Button>
    </div>
  );
};

export default Subscription;
