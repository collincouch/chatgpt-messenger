"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
export default function Login() {
  return (
    <div className="bg-[#11A37F] h-screen flex flex-col items-center justify-center">
      <Image
        src="https://links.papareact.com/2i6"
        width={300}
        height={300}
        alt="logo"
      />
      <button
        onClick={() => signIn("google")}
        className="text-white font-bold text-3xl animate-pulse"
      >
        Sign In to use my ChatGPT clone
      </button>
      <p className="text-sm">
        developed by{" "}
        <a href="https://cctechfactory.vercel.app/" className="underline">
          collin couch
        </a>
      </p>
    </div>
  );
}
