import Button from "../ui/Button";

interface ErrorPageProps {
  resetErrorBoundary: () => void;
}

export default function ErrorPage({ resetErrorBoundary }: ErrorPageProps) {
  return (
    <div className="bg-white lg:text-xl dark:bg-bgDark w-screen h-screen text-bgDark gap-4 lg:gap-6 text-center dark:text-white flex flex-col justify-center p-6 items-center">
      <p className="text-5xl lg:text-7xl text-main">Whoops!</p>
      <p>Something went wrong</p>
      <p>There were some errors, you should not have seen it ;(</p>
      <Button to="" type="button" onClick={resetErrorBoundary} size="medium">
        Take me away
      </Button>
      <p className="text-white dark:text-bgDark text-xs">pawel to jest kox</p>
    </div>
  );
}
