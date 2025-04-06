// export const smoothScrollTo = (targetY: number, speed = 0.3) => {
//   const startY = window.scrollY;
//   const distance = targetY - startY;
//   const direction = distance > 0 ? 1 : -1;

//   let currentY = startY;

//   const step = () => {
//     currentY += speed * direction;

//     if (
//       (direction === 1 && currentY < targetY) ||
//       (direction === -1 && currentY > targetY)
//     ) {
//       window.scrollTo(0, currentY);
//       requestAnimationFrame(step);
//     } else {
//       window.scrollTo(0, targetY);
//     }
//   };

//   requestAnimationFrame(step);
// };
