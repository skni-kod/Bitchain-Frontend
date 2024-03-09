import FundsTab from "./FundsTab";
import FuturesTab from "./FuturesTab";
import OverviewTab from "./OverviewTab";
import PnlAnalysis from "./PnlAnalysis";
import RecordsTab from "./RecordsTab";
import StakingTab from "./StakingTab";

interface WalletContentProps {
  tab: string;
  analysis: boolean;
}

export default function WalletContent({ tab, analysis }: WalletContentProps) {
  return (
    <div className="w-full">
      {analysis ? (
        <PnlAnalysis />
      ) : (
        (tab === "0" && <OverviewTab />) ||
        (tab === "1" && <FundsTab />) ||
        (tab === "2" && <FuturesTab />) ||
        (tab === "3" && <StakingTab />) ||
        (tab === "4" && <RecordsTab />)
      )}
    </div>
  );
}
