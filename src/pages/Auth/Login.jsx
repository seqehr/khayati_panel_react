import { useState, useRef } from 'react'
import useToken from '../../hooks/useToken'
import useLogin from '../../hooks/useLogin'

// Components
import LoginInputBox from './LoginInputBox'
import LoginButton from './LoginButton'

// Images
import loadingGif from '../../assets/images/loading-630x637.gif'
import logo from '../../assets/images/logo.png'
//hooks

// CSS
import style from './Login.module.scss'

const Login = (props) => {
  const {
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
  } = useLogin()

  return (
    <>
      {/* Backdrop */}
      <div className={`bg-black ${style.loginBackdrop}`}></div>

      {loading ? (
        <div className='overflow-hidden bg-[#3332325d]  z-[9999]  fixed w-screen flex justify-center h-screen'>
          <img src={loadingGif} className={` relative m-auto w-14 `}></img>
        </div>
      ) : (
        <></>
      )}

      {/* Login */}
      <div className={`flex-center ${style.loginContainer}`}>
        <div
          className={`bg-white dark:bg-black rounded-2xl p-6 ${style.login}`}
        >
          <div className='mb-6'>
            <img src={logo} className={`w-40 m-auto pb-5`} />
            <h6 className='text-black dark:text-white text-2xl font-medium text-center'>
              {'ورود به پنل ادمین'}
            </h6>
          </div>
          <form onSubmit={(e) => e.preventDefault()}>
            {/* Mobile Number */}
            <LoginInputBox>
              <label
                htmlFor='yhQrjcgu'
                className='block mb-1 text-lg text-black dark:text-white'
              >
                {'شماره موبایل'} :
              </label>
              <input
                id='yhQrjcgu'
                name='mobileNumber'
                type='tel'
                placeholder='9xx-xxx-xxxx'
                value={formatMobileNumber(mobileNumber)}
                onChange={setTheMobileNumber}
                dir='ltr'
                autoComplete='off'
                className={`text-lg
								rounded
								p-2
								w-full
								border-2
								border-solid
								${
                  mobileNumber.length < 1
                    ? 'border-[#8080804d]'
                    : generateMobileValidationClasses(mobileNumber)
                }
								`}
              />
            </LoginInputBox>

            {/* Verification Code */}
            {step === 2 && (
              <LoginInputBox>
                <label
                  htmlFor='RcCXxjHF'
                  className='block mb-1 text-lg text-black dark:text-white'
                >
                  {'کد تایید'} :
                </label>
                <input
                  id='RcCXxjHF'
                  name='verificationCode'
                  type='tel'
                  placeholder='x x x x x x'
                  value={formatVerificationCode(verificationCode)}
                  onChange={setTheVerificationCode}
                  dir='ltr'
                  autoComplete='off'
                  className={`text-lg
									rounded
									p-2
									w-full
									border-2
									border-solid
									${
                    verificationCode.length < 1
                      ? 'border-[#8080804d]'
                      : generateVerificationCodeValidationClasses(
                          verificationCode
                        )
                  }
									`}
                />
              </LoginInputBox>
            )}

            <LoginInputBox>
              {step === 1 && (
                <LoginButton
                  text={'ورود  '}
                  disabled={!isMobileNumberValid(mobileNumber)}
                  onClick={handleNext}
                />
              )}
              {step === 2 && (
                <LoginButton
                  text={'ارسال کد تایید'}
                  disabled={!isVerificationCodeValid(verificationCode)}
                  onClick={handleNext}
                />
              )}
            </LoginInputBox>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
