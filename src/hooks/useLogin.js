// Context
import { useContext } from "react";
import LoginContext from "../context/login/LoginContext";

const useLogin = (props) => {
  const {
    loading,
    formatMobileNumber,
    mobileNumber,
    setTheMobileNumber,
    generateMobileValidationClasses,
    step,
    formatVerificationCode,
    verificationCode,
    setTheVerificationCode,
    generateVerificationCodeValidationClasses,
    isMobileNumberValid,
    handleNext,
    setVerifyCode,
    isVerificationCodeValid,
  } = useContext(LoginContext);

  return {
    formatMobileNumber,
    mobileNumber,
    setTheMobileNumber,
    generateMobileValidationClasses,
    step,
    formatVerificationCode,
    verificationCode,
    setVerifyCode,
    setTheVerificationCode,
    generateVerificationCodeValidationClasses,
    isMobileNumberValid,
    handleNext,
    isVerificationCodeValid,
    loading,
  };
};

export default useLogin;
