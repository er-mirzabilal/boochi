// import { useEffect, useState } from "react";

// function useOnScreen(
//   options?: IntersectionObserverInit
// ): [React.RefObject<Element>, boolean] {
//   const [ref, setRef] = useState<React.RefObject<Element>>(null);
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(([entry]) => {
//       setVisible(entry.isIntersecting);
//     }, options);

//     if (ref) {
//       observer.observe(ref.current);
//     }

//     return () => {
//       if (ref) {
//         observer.unobserve(ref.current);
//       }
//     };
//   }, [ref, options]);

//   return [setRef, visible];
// }
