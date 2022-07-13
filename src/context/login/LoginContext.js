import React, { useState } from "react";
import useToken from "../../hooks/useToken";
import { loginUser, verifyCodeUser } from "../../services/UserService";

const LoginContext = React.createContext();
export function LoginContextProvider({ children }) {
  // ————— M O B I L E —————
  const [mobileNumber, setMobileNumber] = useState("");

  const setTheMobileNumber = (e) =>
    setMobileNumber(e.target.value.replace(/\D/g, "").slice(0, 10));
  const isMobileNumberValid = (mn) => /^(9\d{9})$/.test(mn);

  const generateMobileValidationClasses = (mn) =>
    isMobileNumberValid(mn)
      ? "border-green-light dark:border-green-dark"
      : "border-red-light dark:border-red-dark";

  const formatMobileNumber = (mn) => {
    const mobileNumberLength = mn.length;
    if (mobileNumberLength < 4) return mn;
    if (mobileNumberLength < 7) return `${mn.slice(0, 3)} ${mn.slice(3)}`;
    return `${mn.slice(0, 3)} ${mn.slice(3, 6)} ${mn.slice(6, 10)}`;
  };

  // ————— V E R I F I C A T I O N - C O D E —————
  const [verificationCode, setVerificationCode] = useState("");
  const setTheVerificationCode = (e) =>
    setVerificationCode(e.target.value.replace(/\D/g, "").slice(0, 6));
  const isVerificationCodeValid = (vc) => /^(\d{6})$/.test(vc);
  const formatVerificationCode = (vc) =>
    vc.length > 1 ? vc.split("").join(" ") : vc;

  const generateVerificationCodeValidationClasses = (vc) =>
    isVerificationCodeValid(vc)
      ? "border-green-light dark:border-green-dark"
      : "border-red-light dark:border-red-dark";

  // ————— T I M E R —————
  const timer = () => {
    let sec = 120;
    let timer = setInterval(function () {
      document.getElementById("timerSMS").innerHTML = `(${sec})`;
      sec--;
      if (sec < 0) {
        clearInterval(timer);
        setStep(1);
      }
    }, 1000);
  };

  // ————— S U B M I T S —————
  const [step, setStep] = useState(1);
  const [verifyCode, setVerifyCode] = useState("");
  const [loading, setLoading] = useState(false);
  const { token, setToken } = useToken();
  const handleNext = async () => {
    if (isMobileNumberValid(mobileNumber)) {
      setLoading(true);
      if (step == 1) {
        const user = {
          phone: parseInt(mobileNumber),
        };

        if (isMobileNumberValid(mobileNumber)) {
          setLoading(true);
          try {
            const { status, data } = await loginUser(user);
            if (status === 200) {
              setStep(2);
              timer();
              setLoading(false);
            }
          } catch (ex) {
            console.log(ex);
          }
        }
      } else {
        const user = {
          code: parseInt(verificationCode),
          phone: parseInt(mobileNumber),
        };
        console.log(verificationCode);

        if (isVerificationCodeValid(verificationCode)) {
          setLoading(true);
          try {
            // delete this

            const { status, data } = await verifyCodeUser(user);
            if (status === 200) {
              setToken(data.data.token);

              console.log(data);
            }
          } catch (ex) {
            console.log(ex);
          }
        }
        setLoading(false);
      }
    }
  };

  return (
    <LoginContext.Provider
      value={{
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
        isVerificationCodeValid,
        loading,
        setVerifyCode,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}

export default LoginContext;
