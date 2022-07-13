const LoginButton = ({ text, disabled, onClick }) => {
  return (
    <button
      className="text-lg w-full bg-blue-light dark:bg-blue-dark text-white rounded py-2 px-4 disabled:opacity-50 disabled:cursor-not-allowed"
      disabled={disabled}
      onClick={onClick}
    >
      {text} <span id="timerSMS"></span>
    </button>
  );
};

export default LoginButton;
