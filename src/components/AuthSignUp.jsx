import { validateEmail } from "../utils/email-regex";
import { validateName } from "../utils/name-regex";
import { validateNumber } from "../utils/number-regex";
import { validatePassword } from "../utils/password-regex";
import { useAuth } from "../context/auth-context";
import { signupHandler } from "../services/signup-service";

let isNumberValid,
  isNameValid,
  isEmailValid,
  isPasswordValid,
  isConfirmPasswordValid;

const AuthSignup = () => {
  const { username, email, password, number, confirmPassword, authDispatch, } = useAuth();

   const handleNumberChange = (event) => {
    isNumberValid = validateNumber(event.target.value);
    if (isNumberValid) {
      console.log("Valid Number");

      authDispatch({
        type: "NUMBER",
        payload: event.target.value,
      });

    } else {
      console.log("Invalid Number");
    }
  };


 const handleNameChange = (event) => {
    isNameValid = validateName(event.target.value);
    if (isNameValid) {
      console.log("Valid name");

      authDispatch({
        type: "NAME",
        payload: event.target.value,
      });

    } else {
      console.log("Invalid Name");
    }
  };

  const handleEmailChange = (event) => {
    isEmailValid = validateEmail(event.target.value);
    if (isEmailValid) {
      console.log("Valid email");
      authDispatch({
        type: "EMAIL",
        payload: event.target.value,
      });
    } else {
      console.log("Invalid Email");
    }
  };

  const handlePasswordChange = (event) => {
    isPasswordValid = validatePassword(event.target.value);
    if (isPasswordValid) {
      console.log("Valid password");
      authDispatch({
        type: "PASSWORD",
        payload: event.target.value,
      });
    } else {
      console.log("Invalid Password");
    }
  };


   const handleConfirmPasswordChange = (event) => {
    isConfirmPasswordValid = validatePassword(event.target.value);
    if (isConfirmPasswordValid) {
      console.log("Valid confirm password");
      authDispatch({
        type: "CONFIRM_PASSWORD",
        payload: event.target.value,
      });
    } else {
      console.log("Invalid Password");
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
        console.log({isNumberValid ,
          isNameValid ,
          isEmailValid ,
          isPasswordValid ,
          isConfirmPasswordValid});
    
    console.log("clicked");
    
    if (
      isNumberValid &&
      isNameValid &&
      isEmailValid &&
      isPasswordValid &&
      isConfirmPasswordValid
    ) {
      signupHandler(username, number, email, password);
      console.log({username,number,email,password});
      
    }
    authDispatch({
      type: "CLEAR_USER_DATA",
    });
  };
  return (
    <div className="flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleFormSubmit}
        className="w-full max-w-lg bg-white p-8 rounded-xl shadow-md space-y-6"
      >
        {/* Mobile Number */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">
            Mobile Number <span className="text-red-500">*</span>
          </label>
          <input
            defaultValue={number}
            type="tel"
            maxLength="10"
            required
            placeholder="Enter Mobile Number"
            onChange={handleNumberChange}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Name */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            defaultValue={username}
            required
            placeholder="Enter Name"
            onChange={handleNameChange}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            defaultValue={email}
            type="email"
            required
            placeholder="Enter Email"
            onChange={handleEmailChange}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">
            Password <span className="text-red-500">*</span>
          </label>
          <input
            defaultValue={password}
            type="password"
            required
            placeholder="Enter Password"
            onChange={handlePasswordChange}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Confirm Password */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">
            Confirm Password <span className="text-red-500">*</span>
          </label>
          <input
            defaultValue={confirmPassword}
            type="password"
            required
            placeholder="Confirm Password"
            onChange={handleConfirmPasswordChange}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AuthSignup;
