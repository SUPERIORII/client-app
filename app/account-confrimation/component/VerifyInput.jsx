"use client";
import { cn } from "@/lib/utils";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Notification from "@/components/customUi/Notification";
import baseUrl from "@/lib/baseUrl";

const VerifyInput = ({ email }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [notification, setNotification] = useState(null);
  const [confrimCode, setConfrimCode] = useState("");

  const handlecodeSubmit = async (e) => {
    const convertedCode = parseInt(confrimCode);

    if (!confrimCode) return;

    try {
      const response = await baseUrl.post(`/api/verify/activation-code`, {
        email,
        confrimCode: convertedCode,
      });
      const data = response.data;
      console.log(data);

      setNotification({ message: data.message, type: "success" });
      setTimeout(() => setNotification(null), 4000);

      if (data.message === "user successfully activated") {
        setTimeout(() => {
          window.open("/login", "_self");
        }, 4000);
      }

      console.log(response.data);
    } catch (error) {
      setNotification({ message: error.response.data.message, type: "error" });
      setTimeout(() => setNotification(null), 4000);

      console.log("Resending code error:", error.response.data.message);
    }
  };

  const ResendActivationCode = async (e) => {
    console.log(email);

    try {
      const response = await baseUrl.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/verify/resend-code`,
        { email: email }
      );

      console.log(response.data);
      setNotification({
        message: response.data.message,
        type: response.data.success ? "success" : "error",
      });
      setTimeout(() => setNotification(null), 4000);
    } catch (error) {
      setNotification({ message: error.response.data.message, type: "error" });
      setTimeout(() => setNotification(null), 4000);

      console.log("Resending code error:", error.response.data.message);
    }
  };

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return (
      <div className="border-t-2 border-s-gray-500 animate-spin h-10 w-full rounded-md"></div>
    );
  }
  return (
    <div className="flex flex-col space-y-1.5 md:w-min[200px] w-full">
      <input
        type="text"
        placeholder="Enter verification code here"
        className={cn(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
        )}
        // className={cn(
        //   "mt-4 text-center tracking-widest font-mono text-sm uppercase max-w-xs mx-auto border-2 p-2 rounded-sm"
        // )}
        onChange={(e) => setConfrimCode(e.target.value)}
        value={confrimCode}
      />

      <button
        type="submit"
        className="text-white bg-green-600 w-full py-2 rounded-md mt-2 hover:bg-green-700 transition cursor-pointer"
        onClick={handlecodeSubmit}
      >
        Verify
      </button>

      {/* DIVIDER */}
      <div className="flex-1 border-t border-gray-300 mt-3"></div>

      <div className="space-y-3">
        <button
          type="button"
          className="text-orange-600 from-blue-600 to-cyan-600"
          onClick={ResendActivationCode}
        >
          Resend email
        </button>
      </div>

      {notification && <Notification notification={notification} />}
    </div>
  );
};

export default VerifyInput;
