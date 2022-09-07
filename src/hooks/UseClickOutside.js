import { useEffect } from "react";

export function useClickOutside(ref, callback) {

  useEffect(() => {
    if (ref.current) {
      const listener = clickListener.bind(null, ref, callback);
      document.addEventListener('click', listener);

      return () => document.removeEventListener('click', listener);
    }

    return () => { };
  }, [ref, callback]);

  function clickListener(ref, callback, e) {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  }
}