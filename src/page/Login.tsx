import LoginForm from "../components/login/LoginForm";

const LoginPage = () => {
  const goToSignUpPage = () => {
    window.location.href = "/signup";
  };
  return (
    <div className="flex flex-col items-center">
      <div>This is LoginPage</div>
      <LoginForm />
      <div className="text-blue-400" onClick={goToSignUpPage}>
        Create new account
      </div>
    </div>
  );
};

export default LoginPage;
