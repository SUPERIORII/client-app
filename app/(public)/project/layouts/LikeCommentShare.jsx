"use client";
import React, { useEffect, useState } from "react";
import { Heart, Share2 } from "lucide-react";
import {
  BiComment,
  BiLogoFacebook,
  BiLogoWhatsapp,
  BiLogoTwitter,
  BiLogoLinkedin,
  BiError,
} from "react-icons/bi";
import axios from "axios";
import { contentTypeConfig } from "@/components/utils/contentTypeConfig";
import SocketInstance from "@/components/utils/socket";

const LikeCommentShare = ({ projectDetails, likeData, currentUser }) => {
  const socket = SocketInstance();
  const [likeCount, setLikeCount] = useState(likeData.likes);
  const [isLiked, setIsLiked] = useState(likeData.isUserId);
  const [saved, setSaved] = useState(false);
  const [share, setShare] = useState(false);
  const [error, setError] = useState(null);
  const contentType = contentTypeConfig(projectDetails.status);

  const handleLikes = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/likes`,
        {
          contentId: projectDetails.id,
          contentType: contentType,
        },
        { withCredentials: true }
      );

      const data = await response.data;

      console.log(data);
    } catch (error) {
      console.log("disliking content error:", error);
      setError(error.response.data.message);
    }
  };

  useEffect(() => {
    socket.on("updatedLike", (data) => {
      if (data.contentId !== projectDetails.id) return;
      setLikeCount(data.updatedLikes);

      // CHECK IF THE CURRENT USER LIKE THE POST
      if (data.userId === currentUser?.id) {
        setIsLiked(data.isLike);
      }
    });

    return () => {
      socket.off("updatedLike");
    };
  }, [socket, projectDetails.id]);

  // const toggleSave = () => {
  //   setSaved(!saved);
  // };

  return (
    <div className="flex sm:flex-row gap-4">
      <div className="relative ">
        {error && (
          <div className="fixed z-30 top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,.5)]">
            <AlertComponent error={error} setError={setError} />
          </div>
        )}

        <button
          onClick={handleLikes}
          className={`flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 
    text-slate-700 hover:bg-red-50 border-2 border-slate-200 bg-slate-100`}
        >
          {isLiked ? (
            <Heart className={`w-5 h-5 fill-current text-red-600`} />
          ) : (
            <Heart className={`w-5 h-5`} />
          )}
          {`${likeCount.length} likes`}
        </button>
      </div>

      <button
        className={`flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 ${
          saved
            ? "bg-linear-to-r from-green-500 to-emerald-500 text-white shadow-lg shadow-green-500/30"
            : "bg-slate-100 text-slate-700 hover:bg-green-50 hover:text-green-600 border-2 border-slate-200 hover:border-green-300"
        }`}
      >
        <BiComment className={`w-5 h-5 ${saved ? "fill-current" : ""}`} />
        10
      </button>

      <div className="relative">
        {share && <ShareComponent projectDetails={projectDetails} />}
        <button
          onClick={() => setShare((prev) => !prev)}
          className={`flex-1 flex items-center justify-center gap-3 px-6 py-4
            text-slate-700 rounded-xl font-semibold
border-2 border-slate-200 transition-all duration-300
              ${share ? "bg-blue-600 text-white " : "bg-slate-100"}`}
        >
          <Share2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default LikeCommentShare;

// SHARE COMPONENT
export const ShareComponent = (projectDetails) => {
  const socialPlatforms = [
    {
      id: 1,
      Icon: <BiLogoFacebook className="w-7 h-7" />,
      platform: "facebook",
    },
    {
      id: 2,
      Icon: <BiLogoWhatsapp className="w-7 h-7" />,
      platform: "whatsapp",
    },
    {
      id: 3,
      Icon: <BiLogoTwitter className="w-7 h-7" />,
      platform: "twitter",
    },
    {
      id: 4,
      Icon: <BiLogoLinkedin className="w-7 h-7" />,
      platform: "linkedin",
    },
  ];

  const handleShare = (platform) => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(projectDetails.projectDetails.title);

    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      twitter: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      whatsapp: `https://wa.me/?text=${text}%20${url}`,
    };

    if (shareUrls[platform]) {
      window.open(shareUrls[platform], "_blank", "width=600,height=400");
    }
  };
  return (
    <div
      className={`absolute bg-white shadow-2xl mx-auto -left-36 -top-40 w-64 h-32 
  px-6 py-4 text-slate-700 rounded-xl font-semibold border-2 transition-all duration-300 transform hover:-translate-y-1`}
    >
      <h2 className="mb-3 font-bold">Share with</h2>

      <div className="flex gap-3 items-center">
        {socialPlatforms.map((social) => {
          return (
            <div
              key={social.id}
              onClick={() => handleShare(handleShare(social.platform))}
              className="bg-slate-100 p-2 rounded-lg hover:bg-blue-100 hover:text-blue-600"
            >
              {social.Icon}
            </div>
          );
        })}
      </div>
    </div>
  );
};

// SHARE COMPONENT
export const AlertComponent = ({ error, setError }) => {
  console.log(error);

  return (
    <div
      className={`absolute bg-white shadow-2xl mx-auto -left-20 -right-20 top-54 w-[85vw] h-[44vh] flex items-center flex-col
  px-6 py-4 text-slate-700 rounded-xl font-semibold border-2 transition-all duration-300 transform hover:-translate-y-1`}
    >
      <BiError className="mb-3 w-28 h-34 text-red-400 text-center" />
      <div className="text-2xl text-center">{error}</div>
      <div className="space-x-5 mt-5">
        <button
          onClick={() => setError(null)}
          className="bg-red-300 text-white w-32 h-10 rounded-lg"
        >
          {" "}
          Close
        </button>
        <button
          onClick={() => window.open("/login", "_self")}
          className="bg-blue-800 text-white w-32 h-10 rounded-lg"
        >
          Login
        </button>
      </div>
    </div>
  );
};
