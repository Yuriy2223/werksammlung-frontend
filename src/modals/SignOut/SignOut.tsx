import { useState } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "../../redux/store";
import { toast } from "react-toastify";
import { closeModal } from "../../redux/modal/slice";
import { selectModalType } from "../../redux/modal/selectors";
import {
  BtnWrap,
  CancelBtn,
  LogBtn,
  ModalMessage,
  ModalTitle,
  ModalWrap,
} from "./SignOut.styled";

/********** поправ потім*************** */
// import { logoutUser } from "../../redux/auth/operations";
/************************* */

export const ModalSignOut = () => {
  const dispatch = useAppDispatch();
  const modalType = useSelector(selectModalType);
  const { t } = useTranslation();
  const [showMessage, setShowMessage] = useState<string | null>(null);

  if (modalType !== "ModalSignOut") return null;

  const handleLogout = async () => {
    try {
      // await dispatch(logoutUser()).unwrap();
      console.log("Modal Sign Out"); /* потім видали * */
      const message = t("modal.logout.message.success");
      toast.success(message);
      setShowMessage(message);
    } catch (error: unknown) {
      const message =
        typeof error === "string"
          ? error
          : error instanceof Error
          ? error.message
          : t("modal.logout.message.error");

      toast.error(message);
      setShowMessage(message);
    } finally {
      setTimeout(() => setShowMessage(null), 3000);
      setTimeout(() => dispatch(closeModal()), 3500);
    }
  };

  return (
    <ModalWrap>
      <ModalTitle>{t("modal.logout.title")}</ModalTitle>

      <BtnWrap>
        <CancelBtn type="button" onClick={() => dispatch(closeModal())}>
          {t("modal.logout.cancel")}
        </CancelBtn>
        <LogBtn onClick={handleLogout}>{t("modal.logout.logbtn")}</LogBtn>
      </BtnWrap>

      {showMessage && (
        <ModalMessage
          initial={{ opacity: 0, transform: "translate(-50%, -150%)" }}
          animate={{ opacity: 1, transform: "translate(-50%, -50%)" }}
          exit={{ opacity: 0, transform: "translate(-50%, 50%)" }}
          transition={{ duration: 0.6 }}
        ></ModalMessage>
      )}
    </ModalWrap>
  );
};
