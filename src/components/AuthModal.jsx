    import { useAuth } from "../context/auth-context";
    import AuthLogin from "../components/AuthLogin.jsx"
    import AuthSignup from "../components/AuthSignUp.jsx"

const AuthModal = () => {
  const { authDispatch, selectedTab } = useAuth();

  const handleLoginClick = () => {
    authDispatch({ 
      type: "SET_TO_LOGIN" 
    });
  };


  const handleSignupClick = () => {
    authDispatch({ 
      type: "SET_TO_SIGNUP" 
    });
  };


  const handleModalCloseClick = () => {
    authDispatch({ 
      type: "SHOW_AUTH_MODAL" 
    });
  };


  return (
    <div className="fixed inset-0 z-50 text-gray-800">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10 m-8 bg-white mx-auto w-fit p-8 max-h-[90vh] overflow-y-auto overflow-x-hidden rounded">
        <div className="flex items-center shadow">
          <button
            className={`flex-1 px-4 py-2 font-semibold ${
              selectedTab === "login" ? "bg-blue-600 text-white" : "bg-gray-100"
            }`}
            onClick={handleLoginClick}
          >
            Login
          </button>
          <button
            className={`flex-1 px-4 py-2 font-semibold ${
              selectedTab === "signup" ? "bg-blue-600 text-white" : "bg-gray-100"
            }`}
            onClick={handleSignupClick}
          >
            Signup
          </button>
          <button
            className="ml-auto p-2 text-gray-500 hover:text-black"
            onClick={handleModalCloseClick}
          >
            <span className="material-icons-outlined">close</span>
          </button>
        </div>
        <div>
          {selectedTab === "login" ? (
            <AuthLogin />
          ) : selectedTab === "signup" ? (
            <AuthSignup />
          ) : null}
        </div>
      </div>
    </div>
  );
};
export default AuthModal;