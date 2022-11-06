import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "../../images/home/Instagram Profile/logo.png";
const instagramProfileUrl = "jsons/Home/Instagram Profile/index.json";

export default function InstagramProfile() {
  const [instagramProfile, setInstagramProfile] = useState([]);

  useEffect(() => {
    const showInstagramProfile = async () =>
      setInstagramProfile(await (await axios.get(instagramProfileUrl)).data);
    showInstagramProfile();
  }, []);
  if (!instagramProfile) return null;
  return (
    <div className="w-[90%] min-h-screen mx-auto pt-10">
      <img src={logo} alt="Instagram" />
      <div className="images flex w-full flex-wrap py-4 gap-4 justify-center">
        {instagramProfile.map((instagram) => (
          <img
            key={instagram.id}
            src={instagram.image}
            alt={"image" + instagram.id}
            className="w-[24%]"
          />
        ))}
      </div>
    </div>
  );
}
