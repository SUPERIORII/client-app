"use client";
import { useState } from "react";
import {
  ArrowLeft,
  Handshake,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Shield,
  CheckCircle2,
  AlertCircle,
  Upload,
  X,
} from "lucide-react";
import axios from "axios";
import LoadingSpinner from "@/components/layout/LoadingSpinner";
import Link from "next/link";

function registerPartnerPage() {
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState("");
  const [success, setSuccess] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [logoFile, setLogoFile] = useState(null);

  const steps = [1, 2, 3];

  const [partnerData, setPartnerData] = useState({
    partnerName: "",
    partnerEmail: "",
    description: "",
    websiteUrl: "",
  });

  const [adminData, setAdminData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handlePartnerDataChange = (e) => {
    const { name, value } = e.target;
    setPartnerData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleAdminDataChange = (e) => {
    const { name, value } = e.target;
    setAdminData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setFormErrors((prev) => ({
          ...prev,
          logo: "File size must be less than 5MB",
        }));
        return;
      }

      if (!file.type.startsWith("image/")) {
        setFormErrors((prev) => ({ ...prev, logo: "File must be an image" }));
        return;
      }

      setLogoFile(file);

      if (formErrors.logo) {
        setFormErrors((prev) => ({ ...prev, logo: "" }));
      }
    }
  };

  const handleRemoveLogo = () => {
    setLogoFile(null);
  };

  const validateStep1 = () => {
    const errors = {};
    if (!partnerData.partnerName.trim())
      errors.partnerName = "Partner name is required";
    if (!partnerData.partnerEmail.trim())
      errors.partnerEmail = "Email is required";
    if (!partnerData.description.trim())
      errors.description = "Description is required";
    if (!logoFile) errors.logo = "Logo is required";
    if (!partnerData.websiteUrl.trim())
      errors.websiteUrl = "Website URL is required";
    return errors;
  };

  const validateStep2 = () => {
    const errors = {};
    if (!adminData.firstName.trim())
      errors.firstName = "First name is required";
    if (!adminData.lastName.trim()) errors.lastName = "Last name is required";
    if (!adminData.email.trim()) errors.email = "Email is required";
    if (!adminData.password.trim()) errors.password = "Password is required";
    return errors;
  };

  const handleStep1Submit = async (e) => {
    e.preventDefault();
    const errors = validateStep1();

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    try {
      setIsSubmitting(true);
      console.log(partnerData);

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/partners/register`,
        partnerData
      );
      console.log(response.data);
      setCurrentPageNumber(response.data?.nextStep);
    } catch (error) {
      console.log(error.response.data);
      setApiError(error.response.data?.error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleStepSubmit2 = async (e) => {
    e.preventDefault();
    const errors = validateStep2();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/partners/register/admin`,
        {
          ...adminData,
          partnerName: partnerData.partnerName,
          partnerEmail: partnerData.partnerEmail,
        }
      );

      console.log(response.data);

      setCurrentPageNumber(response.data?.nextStep);
    } catch (error) {
      console.log(error.response.data);
      setApiError(error.response.data?.error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleStepSubmit3 = async (e) => {
    setApiError("");
    const formData = new FormData();
    //LOGO
    formData.append("logo", logoFile);
    // PARTNER INFOMATION
    formData.append("partnerName", partnerData.partnerName);
    formData.append("partnerEmail", partnerData.partnerEmail);
    formData.append("description", partnerData.description);
    formData.append("websiteUrl", partnerData.websiteUrl);
    //ADMIN INFORMATION
    formData.append("firstName", adminData.firstName);
    formData.append("lastName", adminData.lastName);
    formData.append("email", adminData.email);
    formData.append("password", adminData.password);

    try {
      setIsSubmitting(true);

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/partners/register/review-details`,
        formData
      );

      console.log(response.data);

      setSuccess(response.data);
    } catch (error) {
      console.log(error.response.data);
      setApiError(error.response.data?.error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-emerald-50 via-white to-teal-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-linear-to-r from-emerald-600 to-teal-600 px-8 py-6">
            <Link
              href="/partners"
              className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors mb-4"
            >
              <ArrowLeft size={20} />
              <span className="text-sm font-medium">Back</span>
            </Link>

            {/* Progress Steps */}
            <div className="flex items-center justify-center gap-4 max-w-2xl mx-auto">
              {steps.map((step, index) => (
                <div key={step} className="flex items-center flex-1">
                  <div className="flex items-center gap-3 flex-1">
                    <div
                      className={`relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
                        currentPageNumber >= step
                          ? "bg-white text-emerald-600 shadow-lg"
                          : "bg-emerald-700/50 text-white/70"
                      }`}
                    >
                      {currentPageNumber > step ? (
                        <CheckCircle2 size={20} className="text-emerald-600" />
                      ) : (
                        <span className="font-bold text-sm">{step}</span>
                      )}
                    </div>
                    <div className="hidden md:block">
                      <p
                        className={`text-xs font-medium transition-colors ${
                          currentPageNumber >= step
                            ? "text-white"
                            : "text-white/60"
                        }`}
                      >
                        Step {step}
                      </p>
                      <p
                        className={`text-sm font-semibold transition-colors ${
                          currentPageNumber >= step
                            ? "text-white"
                            : "text-white/70"
                        }`}
                      >
                        {step === 1
                          ? "Partner Info"
                          : step === 2
                          ? "Admin Info"
                          : "Review"}
                      </p>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`hidden md:block flex-1 h-0.5 mx-4 transition-colors ${
                        currentPageNumber > step
                          ? "bg-white"
                          : "bg-emerald-700/30"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col lg:flex-row">
            {/* Left Side - Illustration */}
            <div className="lg:w-2/5 bg-linear-to-br from-emerald-50 to-teal-50 p-8 lg:p-12 flex flex-col justify-center">
              <div className="max-w-md mx-auto space-y-8">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-2xl shadow-lg mb-6">
                    <Handshake size={40} className="text-emerald-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Join Our Global Impact Network
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Partner with{" "}
                    <span className="font-semibold text-emerald-700">
                      Ecorise Global Initiative
                    </span>{" "}
                    to amplify your mission, access resources, and collaborate
                    on projects that make a real difference.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      icon: "🌍",
                      title: "Global Reach",
                      desc: "Connect with partners worldwide",
                    },
                    {
                      icon: "🤝",
                      title: "Collaboration",
                      desc: "Work together on impactful projects",
                    },
                    {
                      icon: "📈",
                      title: "Growth",
                      desc: "Scale your mission with shared resources",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 bg-white/60 backdrop-blur-sm rounded-xl p-4"
                    >
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <h3 className="font-semibold text-gray-800">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="lg:w-3/5 p-8 lg:p-12">
              <div className="max-w-2xl mx-auto">
                {/* Alert Messages */}
                {apiError && (
                  <div className="mb-6 bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
                    <AlertCircle
                      className="text-red-600 shrink-0 mt-0.5"
                      size={20}
                    />
                    <p className="text-red-700 text-sm">{apiError}</p>
                  </div>
                )}

                {success && (
                  <div className="mb-6 bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-start gap-3">
                    <CheckCircle2
                      className="text-emerald-600 shrink-0 mt-0.5"
                      size={20}
                    />
                    <p className="text-emerald-700 text-sm font-medium">
                      {success}
                    </p>
                  </div>
                )}

                {/* Step 1: Partner Information */}
                {currentPageNumber === 1 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800 mb-2">
                        Partner Application
                      </h2>
                      <p className="text-gray-600 text-sm">
                        Tell us about your organization
                      </p>
                    </div>

                    <div className="space-y-5">
                      <FormInput
                        label="Organization Name"
                        name="partnerName"
                        placeholder="e.g., Green Earth Foundation"
                        value={partnerData.partnerName}
                        onChange={handlePartnerDataChange}
                        error={formErrors.partnerName}
                      />

                      <FormInput
                        label="Organization Email"
                        name="partnerEmail"
                        type="email"
                        placeholder="contact@organization.org"
                        value={partnerData.partnerEmail}
                        onChange={handlePartnerDataChange}
                        error={formErrors.partnerEmail}
                        icon={<Mail size={18} />}
                      />

                      <FormTextarea
                        label="Description"
                        name="description"
                        placeholder="Tell us about your organization's mission and impact..."
                        value={partnerData.description}
                        onChange={handlePartnerDataChange}
                        error={formErrors.description}
                        rows={4}
                      />

                      {/* Logo Upload Section */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Organization Logo
                        </label>

                        {!logoFile ? (
                          <div className="relative">
                            <input
                              type="file"
                              accept="image/*"
                              onChange={handleLogoUpload}
                              className="hidden"
                              name="logo"
                              id="logo-upload"
                            />
                            <label
                              htmlFor="logo-upload"
                              className={`flex flex-col items-center justify-center w-full h-40 border-2 border-dashed rounded-xl cursor-pointer transition-all duration-200 ${
                                formErrors.logo
                                  ? "border-red-300 bg-red-50 hover:bg-red-100"
                                  : "border-gray-300 bg-gray-50 hover:bg-gray-100"
                              }`}
                            >
                              <Upload
                                size={32}
                                className={
                                  formErrors.logo
                                    ? "text-red-400"
                                    : "text-gray-400"
                                }
                              />
                              <p className="mt-2 text-sm font-medium text-gray-600">
                                Click to upload logo
                              </p>
                              <p className="mt-1 text-xs text-gray-500">
                                PNG, JPG, or WEBP (max 5MB)
                              </p>
                            </label>
                          </div>
                        ) : (
                          <div className="relative w-full h-40 border-2 border-emerald-200 rounded-xl overflow-hidden bg-gray-50">
                            <img
                              src={URL.createObjectURL(logoFile)}
                              alt="Logo preview"
                              className="w-full h-full object-contain p-4"
                            />
                            <button
                              type="button"
                              onClick={handleRemoveLogo}
                              className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-1.5 transition-colors shadow-lg"
                            >
                              <X size={16} />
                            </button>
                            <div className="absolute bottom-2 left-2 right-2 bg-black/60 backdrop-blur-sm rounded-lg px-3 py-1.5">
                              <p className="text-xs text-white truncate">
                                {logoFile?.name}
                              </p>
                            </div>
                          </div>
                        )}

                        {formErrors.logo && (
                          <p className="mt-1.5 text-sm text-red-600">
                            {formErrors.logo}
                          </p>
                        )}
                      </div>

                      <FormInput
                        label="Website URL"
                        name="websiteUrl"
                        placeholder="https://yourorganization.org"
                        value={partnerData.websiteUrl}
                        onChange={handlePartnerDataChange}
                        error={formErrors.websiteUrl}
                      />
                    </div>

                    <button
                      onClick={handleStep1Submit}
                      disabled={isSubmitting}
                      className="w-full bg-linear-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <LoadingSpinner />
                      ) : (
                        "Continue to Admin Info"
                      )}
                    </button>
                  </div>
                )}

                {/* Step 2: Admin Information */}
                {currentPageNumber === 2 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800 mb-2">
                        Admin Information
                      </h2>
                      <p className="text-gray-600 text-sm">
                        Create an admin account for your organization
                      </p>
                    </div>

                    <div className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <FormInput
                          label="First Name"
                          name="firstName"
                          placeholder="John"
                          value={adminData.firstName}
                          onChange={handleAdminDataChange}
                          error={formErrors.firstName}
                        />

                        <FormInput
                          label="Last Name"
                          name="lastName"
                          placeholder="Doe"
                          value={adminData.lastName}
                          onChange={handleAdminDataChange}
                          error={formErrors.lastName}
                        />
                      </div>

                      <FormInput
                        label="Email Address"
                        name="email"
                        type="email"
                        placeholder="admin@organization.org"
                        value={adminData.email}
                        onChange={handleAdminDataChange}
                        error={formErrors.email}
                        icon={<Mail size={18} />}
                      />

                      <div className="relative">
                        <FormInput
                          label="Password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Create a strong password"
                          value={adminData.password}
                          onChange={handleAdminDataChange}
                          error={formErrors.password}
                          icon={<Lock size={18} />}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-10 text-gray-400 hover:text-gray-600 transition-colors"
                        >
                          {showPassword ? (
                            <EyeOff size={18} />
                          ) : (
                            <Eye size={18} />
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button
                        onClick={() => setCurrentPageNumber(1)}
                        className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-4 px-6 rounded-xl transition-all duration-200"
                      >
                        Back
                      </button>
                      <button
                        onClick={handleStepSubmit2}
                        disabled={isSubmitting}
                        className="flex-1 bg-linear-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Review Details
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3: Review */}
                {currentPageNumber === 3 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800 mb-2">
                        Review Your Application
                      </h2>
                      <p className="text-gray-600 text-sm">
                        Please verify all information before submitting
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-linear-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-100">
                        <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                          <Handshake size={20} className="text-emerald-600" />
                          Partner Information
                        </h3>
                        <div className="space-y-3">
                          <ReviewItem
                            label="Organization"
                            value={partnerData.partnerName}
                          />
                          <ReviewItem
                            label="Email"
                            value={partnerData.partnerEmail}
                          />
                          <ReviewItem
                            label="Description"
                            value={partnerData.description}
                          />
                          <div className="flex justify-between items-start gap-4">
                            <span className="text-sm font-medium text-gray-600">
                              Logo:
                            </span>
                            {logoFile && (
                              <div className="w-24 h-24 border border-emerald-200 rounded-lg overflow-hidden bg-white">
                                <img
                                  src={URL.createObjectURL(logoFile)}
                                  alt="Logo"
                                  className="w-full h-full object-contain p-2"
                                />
                              </div>
                            )}
                          </div>
                          <ReviewItem
                            label="Website"
                            value={partnerData.websiteUrl}
                          />
                        </div>
                      </div>

                      <div className="bg-linear-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100">
                        <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                          <Shield size={20} className="text-blue-600" />
                          Admin Information
                        </h3>
                        <div className="space-y-3">
                          <ReviewItem
                            label="Name"
                            value={`${adminData.firstName} ${adminData.lastName}`}
                          />
                          <ReviewItem label="Email" value={adminData.email} />
                          <ReviewItem label="Password" value="••••••••" />
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button
                        onClick={() => setCurrentPageNumber(2)}
                        className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-4 px-6 rounded-xl transition-all duration-200"
                      >
                        Back
                      </button>
                      <button
                        onClick={handleStepSubmit3}
                        disabled={isSubmitting}
                        className="flex-1 bg-linear-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          <>Submit Application</>
                        )}
                      </button>
                    </div>
                  </div>
                )}

                {/* Footer */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="text-center space-y-4">
                    <p className="text-gray-600 text-sm">
                      Already have an account?{" "}
                      <a
                        href="/login"
                        className="font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
                      >
                        Sign In
                      </a>
                    </p>
                    <div className="flex items-center justify-center gap-2 text-gray-500 text-xs">
                      <Shield size={14} />
                      <span>Your data is secure and encrypted</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FormInput({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  icon,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-semibold text-gray-700 mb-2"
      >
        {label}
      </label>
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            {icon}
          </div>
        )}
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full ${
            icon ? "pl-10" : "pl-4"
          } pr-4 py-3 border rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 ${
            error
              ? "border-red-300 focus:ring-red-200 bg-red-50"
              : "border-gray-200 focus:ring-emerald-200 focus:border-emerald-400 bg-white"
          }`}
        />
      </div>
      {error && <p className="mt-1.5 text-sm text-red-600">{error}</p>}
    </div>
  );
}

function FormTextarea({
  label,
  name,
  placeholder,
  value,
  onChange,
  error,
  rows = 3,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-semibold text-gray-700 mb-2"
      >
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        className={`w-full px-4 py-3 border rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 resize-none ${
          error
            ? "border-red-300 focus:ring-red-200 bg-red-50"
            : "border-gray-200 focus:ring-emerald-200 focus:border-emerald-400 bg-white"
        }`}
      />
      {error && <p className="mt-1.5 text-sm text-red-600">{error}</p>}
    </div>
  );
}

function ReviewItem({ label, value }) {
  return (
    <div className="flex justify-between items-start gap-4">
      <span className="text-sm font-medium text-gray-600">{label}:</span>
      <span className="text-sm text-gray-800 font-medium text-right">
        {value}
      </span>
    </div>
  );
}

export default registerPartnerPage;
