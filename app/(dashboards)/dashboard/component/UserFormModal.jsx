"use client";

import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Notification from "@/components/layout/Notification";
import LoadingSpinner from "@/components/layout/LoadingSpinner";
import { Skeleton } from "@/components/ui/skeleton";
import baseUrl from "@/helpers/baseUrl";

export default function UserFormModal() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    gender: "",
    role: "",
    dateOfBirth: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [notification, setNotification] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  console.log(showPassword);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.password.trim()) {
      newErrors.password = "password is required";
    } else if (formData.password.trim().length < 5) {
      newErrors.password =
        "password must contain 8 characters including letters, numbers and symbols";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone Number is required";
    }
    if (!formData.dateOfBirth.trim()) {
      newErrors.dateOfBirth = "Date of Birth is required";
    }
    if (!formData.gender.trim()) {
      newErrors.gender = "Please select your gender";
    }
    if (!formData.role.trim()) {
      newErrors.role = "Please select a role for this user";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const response = await baseUrl.post(`/api/auth/register`, formData);

      const data = response.data;
      if (data.success) {
        router.replace(data.confrimation_url);
      }
    } catch (err) {
      console.log(err);
      setNotification({ message: err.response.data.error, type: "error" });
      setTimeout(() => setNotification(null), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  console.log(!formData.dateOfBirth);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded)
    return (
      <div>
        <Skeleton className="w-full h-4 bg-gray-300" />
      </div>
    );

  return (
    <section>
      <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-cyan-50 flex items-center justify-center sm:p-6 lg:p-8">
        <div className="w-full md:max-w-5xl">
          <div className="text-center mb-8 space-y-2">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
              Create New User
            </h1>
            <p className="text-lg text-gray-600 max-w-md mx-auto">
              Fill in the details below to create a new user account
            </p>
            <p className="text-center text-sm text-gray-500">
              All fields are required to create a new user
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 p-8 sm:p-10 border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* FIRST NAME */}
              <div className="space-y-2">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-semibold text-gray-700"
                >
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2
                     focus:ring-blue-500 focus:border-transparent transition-all outline-none
                     bg-white text-gray-900 placeholder-gray-400 ${
                       errors.firstName ? "border-red-600" : "border-gray-300"
                     }
                    `}
                  placeholder="John"
                />

                {errors.firstName && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.firstName}
                  </p>
                )}
              </div>

              {/* LAST NAME */}
              <div className="space-y-2">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2
                     focus:ring-blue-500 focus:border-transparent transition-all outline-none
                     bg-white text-gray-900 placeholder-gray-400 ${
                       errors.lastName ? "border-red-600" : "border-gray-300"
                     }
                    `}
                  placeholder="Doe"
                />

                {errors.lastName && (
                  <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 
                      focus:border-transparent transition-all outline-none bg-white text-gray-900 placeholder-gray-4001
                      ${errors.email ? "border-red-600" : "border-gray-300"}`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                {/* password */}
                <div className="space-y-2 relative">
                  <label
                    htmlFor="gender"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    password <span className="text-red-500">*</span>
                  </label>

                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 
                      focus:border-transparent transition-all outline-none bg-white text-gray-900 placeholder-gray-400
                      ${
                        errors.password ? "border-red-600" : "border-gray-300"
                      }`}
                    placeholder="password"
                  />
                  {/* SHOW password TOGGLE ICON */}
                  <div
                    className="absolute right-5 top-12 cursor-pointer"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {/* <EyeClosed/> */}
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </div>

                  {errors.password && (
                    <p className="mt-1 text-xs text-red-600">
                      {errors.password}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* GENDER */}
                <div className="space-y-2">
                  <label
                    htmlFor="gender"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Gender <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 
                      focus:border-transparent transition-all outline-none
                       bg-white text-gray-900 ${
                         errors.gender ? "border-red-600" : "border-gray-300"
                       }`}
                  >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">Others</option>
                  </select>
                  {errors.gender && (
                    <p className="mt-1 text-sm text-red-600">{errors.gender}</p>
                  )}
                </div>

                {/* ROLE */}
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-2"
                    htmlFor="role"
                  >
                    Role <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="role"
                    name="role"
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 border  rounded-lg focus:ring-2 focus:ring-blue-500
                     focus:border-transparent transition-all bg-white ${
                       errors.role ? "border-red-600" : "border-gray-300"
                     }`}
                  >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                    <option value="superadmin">SuperAdmin</option>
                    <option value="partner">Partner</option>
                    <option value="donor">Donor</option>
                  </select>

                  {errors.role && (
                    <div className="mt-1 text-sm text-red-600">
                      {errors.role}
                    </div>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* PHONE NUMBER */}
                <div className="space-y-2">
                  <label
                    htmlFor="phoneNumber"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 
                      focus:border-transparent transition-all outline-none bg-white text-gray-900 placeholder-gray-400
                      ${errors.phone ? "border-red-600" : "border-gray-300"}`}
                    placeholder="+231 (779) 000-000"
                  />

                  {errors.phoneNumber && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.phoneNumber}
                    </p>
                  )}
                </div>

                {/* DATE OF BIRTH */}
                <div className="space-y-2">
                  <label
                    htmlFor="dateOfBirth"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Date of Birth <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2
                     focus:ring-blue-500 focus:border-transparent transition-all outline-none
                      bg-white text-gray-900 ${
                        errors.dateOfBirth
                          ? "border-red-600"
                          : "border-gray-300"
                      }`}
                  />
                  {errors.dateOfBirth && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.dateOfBirth}
                    </p>
                  )}
                </div>
              </div>

              {/* <div className="space-y-2">
                <label
                  htmlFor="bio"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Short Bio
                </label>
                <textarea
                  id="bio"
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  rows="4"
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 
                  focus:border-transparent transition-all outline-none bg-white text-gray-900 placeholder-gray-400
                   resize-none ${
                     errors.bio ? "border-red-600" : "border-b-gray-300"
                   }`}
                  placeholder="Tell us a bit about yourself..."
                />

                {errors.bio && (
                  <p className="mt-1 text-sm text-red-500">{errors.bio}</p>
                )}
              </div> */}

              {/* CREATE BUTTON */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-linear-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 transform 
                    active:scale-[0.98] shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 flex justify-center items-center
                    ${isSubmitting && "cursor-not-allowed opacity-50"}`}
                >
                  {isSubmitting ? <LoadingSpinner /> : "Create User"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/*  Nofification*/}
      {notification && <Notification notification={notification} />}
    </section>
  );
}
