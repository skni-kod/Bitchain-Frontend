import { useEffect, useRef, MutableRefObject } from "react";

interface UseClickOutsideProps {
  OnClickOutside: (e: MouseEvent) => void;
}

export function useClickOutside({
  OnClickOutside,
}: UseClickOutsideProps): MutableRefObject<HTMLElement | null> {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        OnClickOutside(e);
      }
    }

    document.addEventListener("click", handleClick, true);

    return () => document.removeEventListener("click", handleClick, true);
  }, [OnClickOutside]);

  return ref;
}
