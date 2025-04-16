import React from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../redux/store";
// import { toast } from "react-toastify";
import { closeModal } from "../../redux/modal/slice";
import { selectModalType } from "../../redux/modal/selectors";

export const ModalSingUp: React.FC = () => {
  const dispatch = useAppDispatch();
  const modalType = useSelector(selectModalType);

  if (modalType !== "ModalSingUp") return null;

  const handleSingUp = async () => {
    // await dispatch(loginUser());
    // toast.success("Logaut successful!");
    dispatch(closeModal());
  };

  return (
    <ModalWrap>
      <h2>ModalSingUp</h2>
      <ModalForm>
        <BtnWrap>
          <LogBtn type="submit">LOG UP</LogBtn>
          <CancelBtn onClick={() => dispatch(closeModal())}>Cancel</CancelBtn>
        </BtnWrap>
      </ModalForm>
    </ModalWrap>
  );
};
