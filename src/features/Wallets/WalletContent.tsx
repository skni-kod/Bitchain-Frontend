interface WalletContentProps {
  tab: string;
}

export default function WalletContent({ tab }: WalletContentProps) {
  return (
    <div>
      WalletContent {tab}
      <div className="h-screen"></div>
    </div>
  );
}
