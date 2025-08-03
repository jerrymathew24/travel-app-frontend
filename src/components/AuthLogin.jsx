import { useAuth } from "../context/auth-context";
import { loginHandler } from "../services/login-service";
import { validateNumber } from "../utils/number-regex";
import { validatePassword } from "../utils/password-regex";

let isNumberValid, isPasswordValid;

const AuthLogin = () => {
  const { authDispatch, number, password } = useAuth();

  const handleNumberChange = (event) => {
    isNumberValid = validateNumber(event.target.value);
    if (isNumberValid) {
      console.log("Valid Input");
      authDispatch({
        type: "NUMBER",
        payload: event.target.value,
      });
    } else {
      console.log("Invalid Number");
    }
  };


  const handlePasswordChange = (event) => {
    isPasswordValid = validatePassword(event.target.value);
    if (isPasswordValid) {
      console.log("Valid Input");
      authDispatch({
        type: "PASSWORD",
        payload: event.target.value,
      });
    } else {
      console.log("Invalid Password");
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (isNumberValid && isPasswordValid) {
      const { accessToken, username } = await loginHandler(number, password);

      authDispatch({
        type: "SET_ACCESS_TOKEN",
        payload: accessToken
      })

      authDispatch({
        type: "SET_USER_NAME",
        payload:username
      })
    }
    authDispatch({
      type:"CLEAR_USER_DATA"
    })
    authDispatch({
      type:"SHOW_AUTH_MODAL"
    })
  };



   const handleTestCredentialsClick = async () => {
    const { accessToken, username } = await loginHandler(8281897063, "Qwerty@123");
    authDispatch({
      type: "SET_ACCESS_TOKEN",
      payload: accessToken,
    });
    authDispatch({
      type: "SET_USER_NAME",
      payload: username,
    });
    authDispatch({
      type: "CLEAR_USER_DATA",
    });
    authDispatch({
      type: "SHOW_AUTH_MODAL",
    });
  };

  return (
    <div className=" flex items-center justify-center bg-gray-100">

      <div className="">
        <form onSubmit={handleFormSubmit} className="w-full max-w-lg bg-white p-8 rounded-xl shadow-md space-y-6"
        >
          {/* Mobile Number */}
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium text-gray-700">
              Mobile Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              maxLength="10"
              required
              defaultValue={number}
              placeholder="Enter Mobile Number"
              onChange={handleNumberChange}
              className="rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium text-gray-700">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              required
              defaultValue={password}
              placeholder="Enter Password"
              onChange={handlePasswordChange}
              className="rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        {/* Test Credentials */}
        <div className="mt-5 text-center">
          <button
            type="button"
            className="w-full py-2 border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition"  onClick={handleTestCredentialsClick}
          >
            Login with Test Credentials
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthLogin;
