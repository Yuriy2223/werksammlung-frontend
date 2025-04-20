// import React from "react";
// import { useSelector } from "react-redux";
// import { useAppDispatch } from "../../redux/store";
// // import { toast } from "react-toastify";
// import { closeModal } from "../../redux/modal/slice";
// import { selectModalType } from "../../redux/modal/selectors";

// // import { logoutUser } from "../../redux/auth/operations";

// export const ModalSignOut: React.FC = () => {
//   const dispatch = useAppDispatch();
//   const modalType = useSelector(selectModalType);

//   if (modalType !== "ModalSignOut") return null;

//   // const handleLogIn = async () => {
//   //   await dispatch(logInUser());
//   //   toast.success("logIn successful!");
//   //   dispatch(closeModal());
//   // };

//   return (
//     <ModalWrap>
//       <h2>ModalLogOut</h2>
//       <ModalForm>
//         <BtnWrap>
//           <CancelBtn onClick={() => dispatch(closeModal())}>Cancel</CancelBtn>
//           <LogBtn type="submit">LOG</LogBtn>
//         </BtnWrap>
//       </ModalForm>
//     </ModalWrap>
//   );
// };
