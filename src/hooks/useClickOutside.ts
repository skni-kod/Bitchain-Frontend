import { useEffect, useRef, MutableRefObject } from "react";

interface UseClickOutsideProps {
  onCloseNav: () => void;
}

export function useClickOutside({ onCloseNav }: UseClickOutsideProps): MutableRefObject<HTMLElement | null> {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onCloseNav();
      }
    }

    document.addEventListener("click", handleClick, true);

    return () => document.removeEventListener("click", handleClick, true);
  }, [onCloseNav]);

  return ref;
}
