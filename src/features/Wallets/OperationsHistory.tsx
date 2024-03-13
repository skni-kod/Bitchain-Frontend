import { useGetFundHistory } from "../../hooks/useGetFundHistory";
import Spinner from "../../ui/Spinner";
import OverviewHistoryItem from "./OverviewHistoryItem";

export default function OperationsHistory() {
  const { data, isLoading } = useGetFundHistory();
  const history = data
    ?.filter(
      (item) =>
        item.transaction_type === "deposit" ||
        item.transaction_type === "withdraw"
    ).reverse()
    .slice(0, 3);

  return (
    <div className="w-full">
      <p className="text-[20px] font-semibold pt-16 pb-6 text-bgDark dark:text-bgWhite w-full">
        Recent Deposits & Withdrawals
      </p>
      <div className="w-full bg-slate-100 h-[1px]"></div>
      {isLoading ? (
        <Spinner type="full" />
      ) : (
        history.map((item) => <OverviewHistoryItem item={item} />)
      )}
    </div>
  );
}
