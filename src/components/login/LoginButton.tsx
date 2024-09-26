const LoginButton = () => {
  const toLogin = () => {
    window.location.href = "/login";
  };
  return (
    <div className="fixed top-5 right-5 bg-black text-white" onClick={toLogin}>
      Login
    </div>
  );
};

export default LoginButton;
