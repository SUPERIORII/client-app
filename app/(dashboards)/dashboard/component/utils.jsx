"use client";
import { useState } from "react";

export const showNotification = ({
  setNotification,
  message,
  type = "success",
}) => {
  // SHOW THE NOTIFICATION MESSAGE
  setNotification({ message, type });

  //   DISAPPEAR NOTIFICATION BAR AFTER 3 SECONDS
  setTimeout(() => setNotification(null), 3000);
};
