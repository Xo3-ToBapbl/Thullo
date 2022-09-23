import { useEffect } from "react";

export function useClickOutside(excludeRef, outsideOfRef, callback) {

  function clickListener(excludeRef, outsideOfRef, callback, e) {
    if (outsideOfRef.current && 
      !excludeRef.current.contains(e.target) && 
      !outsideOfRef.current.contains(e.target)) {

      callback();
    }
  }

  useEffect(() => {
    if (outsideOfRef.current) {
      const listener = clickListener.bind(null, excludeRef, outsideOfRef, callback);
      document.addEventListener('click', listener);

      return () => document.removeEventListener('click', listener);
    }

    return () => { };
  }, [excludeRef, outsideOfRef, callback]);
}