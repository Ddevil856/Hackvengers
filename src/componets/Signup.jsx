import React from "react";
import { useState } from "react";

function Signup() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formErrors, setFormErrors] = useState({
    passwordError: "",
    confirmPasswordError: "",
  });

  function handlePasswordChange(e) {
    setPassword(e.target.value);
    if (confirmPassword && e.target.value !== confirmPassword) {
      setFormErrors({
        ...formErrors,
        confirmPasswordError: "Passwords do not match",
        passwordError: "",
      });
    } else {
      setFormErrors({
        ...formErrors,
        confirmPasswordError: "",
        passwordError: "",
      });
    }
  }

  function handleConfirmPasswordChange(e) {
    setConfirmPassword(e.target.value);
    if (password !== e.target.value) {
      setFormErrors({
        ...formErrors,
        confirmPasswordError: "Passwords do not match",
        passwordError: "",
      });
    } else {
      setFormErrors({
        ...formErrors,
        confirmPasswordError: "",
        passwordError: "",
      });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!password || !confirmPassword || password !== confirmPassword) {
      setFormErrors({
        ...formErrors,
        passwordError: "Passwords do not match",
        confirmPasswordError: "Passwords do not match",
      });
    } else {
        console.log("Form submitted successfully");
    }
  }

  return (
    <section class="bg-gray-50 dark:bg-gray-900">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            class="w-8 h-8 mr-2"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
          />
          Webitech
        </a>
        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign up to your account
            </h1>
            <form class="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required="true"
                />
              </div>

              <div>
                <label
                  for="legal-name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Legal Name
                </label>
                <input
                  type="text"
                  name="legal-name"
                  id="legal-name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="John Doe"
                  required="true"
                />
              </div>

              <div>
                <label
                  for="date-of-birth"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Date of Birth
                </label>
                <input
                  type="date"
                  name="date-of-birth"
                  id="date-of-birth"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required="true"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={handlePasswordChange}
                  required="true"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                {formErrors.passwordError && (
                  <span
                  class="block mb-2 text-sm font-medium text-red-900 ">{formErrors.passwordError}</span>
                )}
              </div>
              <div>
                <label
                  htmlFor="confirmPassword"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm Password:
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                {formErrors.confirmPasswordError && (
                  <span
                  class="block mb-2 text-sm font-medium text-red-900 "
                  >{formErrors.confirmPasswordError}</span>
                )}
              </div>

              <button
                type="submit"
                class="w-full text-white bg-sky-600 hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;
