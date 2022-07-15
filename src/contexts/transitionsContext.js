import React, { createContext } from "react";


const pageTransitions = {
    fromLeft: {
        initial: { opacity: 0, x: -200 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 200 },
        transition: {
          type: "spring",
          mass: 0.35,
          stiffness: 75,
          duration: 0.3
        }
    },
    fromRight: {
        initial: { opacity: 0, x: 200 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -200 },
        transition: {
          type: "spring",
          mass: 0.35,
          stiffness: 75,
          duration: 0.3,
          staggerChildren: 0.2
        }
    }
}
// let transitionDirection = {};

// export function ToggleTransitionDirection(direction) {
//    if (direction === "fromLeft") {
//     transitionDirection = pageTransitions.fromLeft;  
//     } else if (direction === "fromRight") {transitionDirection = pageTransitions.fromRight};
// }

// if (currentPage > prevPage) {
//     const transitionDirection = pageTransitions.fromRight;
// } else if (currentPage < prevPage) {
//     const transitionDirection = pageTransitions.fromLeft;
// }


export const PrevPageContext = createContext(pageTransitions);
