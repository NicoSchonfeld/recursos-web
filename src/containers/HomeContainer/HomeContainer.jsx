"use client";

import HomeComponent from "@/components/HomeComponent/HomeComponent";
import { useRouter } from "next/navigation";
import { useState } from "react";

const HomeContainer = () => {
  const router = useRouter();
  const [textSearch, setTextSearch] = useState("");

  const handleSubmitSearchGoogle = (e) => {
    e?.preventDefault();

    if (textSearch)
      router.push(`https://www.google.com/search?q=${textSearch}`);
  };

  return (
    <HomeComponent
      submit={handleSubmitSearchGoogle}
      textSearch={textSearch}
      setTextSearch={setTextSearch}
    />
  );
};

export default HomeContainer;
