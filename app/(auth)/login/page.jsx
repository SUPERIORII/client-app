"use client";

// import { Notification } from "@/app/dashboard/component";
import FormInput from "@/components/forms/FormInput";
import baseUrl from "@/helpers/baseUrl";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaEyeSlash, FaEye, FaShieldAlt } from "react-icons/fa";
import { MdError } from "react-icons/md";
import LoginLoader from "@/components/loaders/LoginLoader";

const LoginPage = () => {
  // ============ State Management ============
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  }); // Form input data
  const [apiError, setApiError] = useState(null); // Server error message
  const [formErrors, setFormErrors] = useState(null); // Client validation errors
  const [isSubmitting, setIsSubmitting] = useState(false); // Loading state during submission
  const [notification, setNotification] = useState(null); // Notification State On successfully login
  const [isLoaded, setIsLoaded] = useState(false); // Component hydration state

  const router = useRouter();

  // Component initialization - ensure client-side rendering
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  /**
   * Validate form inputs
   * Checks email format and required fields
   * @returns {boolean} True if all validations pass
   */
  const validateForm = () => {
    const newErrors = {};

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    setFormErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /**
   * Handle input field changes
   * Updates form data and clears errors
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setFormErrors(null); // Clear validation errors on input
  };

  /**
   * Handle login form submission
   * 1. Validate inputs
   * 2. Send credentials to backend
   * 3. Handle authentication response
   * 4. Redirect to dashboard on success
   */
  const handleClick = async (e) => {
    e.preventDefault();

    // Step 1: Validate form
    const isFormValid = validateForm();
    if (!isFormValid) return; // Stop if validation fails

    try {
      setApiError(null);
      setIsSubmitting(true);

      // Step 2: Send login request to backend
      // withCredentials: true ensures cookies are sent and received
      await baseUrl.post(`/api/auth/login`, formData);
      // ✅ VERIFY COOKIE EXISTS
      const isAuthenticated = await baseUrl.get("/api/authenticate/me");

      if (isAuthenticated.data.authenticated) {
        router.replace("/dashboard");
      }

      // The backend sets the authentication cookie automatically
      // Step 3: Handle successful response
    } catch (error) {
      // Step 4: Handle login failure
      console.error("Login error:", error.response.message);

      // Show error message from server or generic message
      const errorMessage =
        error.response?.data.message ||
        "Login failed. Please check your credentials and try again.";

      setApiError(errorMessage);

      // Clear sensitive data from form
      setFormData({ email: "", password: "" });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Wait for component to hydrate before rendering
  if (!isLoaded) return <LoginLoader />;

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <aside className="w-full max-w-6xl bg-white rounded-2xl overflow-hidden shadow-xl flex">
        {/* Left side - Illustration */}
        <section className="hidden md:block w-1/2 relative">
          <div className="h-full">
            <img
              src="/images/person.jpg"
              alt="Person working on laptop"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Right side - Form */}
        <section className="w-screen h-screen md:w-1/2 p-8 flex flex-col justify-center">
          <div className="max-w-md mx-auto w-full">
            <div className="mb-8 text-center">
              <div className="flex gap-2 justify-center items-center mb-2">
                <img
                  src="/images/logo.png"
                  className="mr-1 w-7.5 h-7.5"
                  alt="Ecorise Global Initiative Logo"
                />
                <span className="text-lime-500 font-bold text-lg">
                  Ecorise Global Initiative
                </span>
              </div>

              <h1 className="text-2xl font-bold text-gray-800 mt-6 mb-8">
                Login Panel
              </h1>
            </div>

            <form className="space-y-4" onSubmit={handleClick}>
              <FormInput
                label="Email Address"
                name="email"
                type="text"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                error={!!formErrors?.email}
                helperText={formErrors?.email}
              />
              {/* PASSWORD ELEMENT */}
              <div className="relative">
                <FormInput
                  label="Enter Password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  error={!!formErrors?.password}
                  helperText={formErrors?.password}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-1/2 transform cursor-pointer whitespace-nowrap"
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>

              {/* api error message */}
              {apiError && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <div className="flex items-center gap-2 text-red-700">
                    <MdError size={18} />
                    <span className="text-sm">{apiError}</span>
                  </div>
                </div>
              )}

              {/* SUBMIT BUTTON */}
              <button
                className="w-full text-sm lg:text-lg bg-lime-600 hover:bg-lime-500 
              text-white font-medium py-1.5 px-3 rounded-md transition duration-300 cursor-pointer
                border-none outline-none"
                disabled={isSubmitting}
                type="submit"
              >
                {isSubmitting ? <span>Submitting...</span> : "Login"}
              </button>
            </form>

            <div className="mt-8 text-center text-sm text-gray-500">
              <p>
                By login, you agree to Ecorise's
                <br />
                <a href="#" className="text-lime-600 hover:underline">
                  Terms of Services
                </a>{" "}
                and{" "}
                <a href="#" className="text-lime-600 hover:underline">
                  Privacy Policy
                </a>
                .
              </p>
            </div>

            {/* Divider */}
            <div className="my-6 flex items-center">
              <div className="flex-1 border-t border-gray-300"></div>
              <span className="mx-4 text-gray-500 text-sm">or</span>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>

            {/* Register Link */}
            <div className="text-center">
              <p className="text-gray-600 text-sm">
                Don't have an account?{" "}
                <Link
                  href="/register"
                  className="font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                >
                  Register
                </Link>
              </p>
            </div>

            {/* Security Badge */}
            <div className="mt-6 flex items-center justify-center gap-2 text-gray-500 text-xs">
              <FaShieldAlt />
              <span>Your data is secure and encrypted</span>
            </div>
          </div>
        </section>
      </aside>

      {/* {notification && <Notification notification={notification} />} */}
    </div>
  );
};

export default LoginPage;
