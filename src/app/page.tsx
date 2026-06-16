"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");
  const [processFailure, setProcessFailure] = useState(false);
  const [loading, setLoading] = useState(false);

  const subscribe = async () => {
    setLoading(true);
    try {
      if (!email || !email.includes("@")) {
        setProcessFailure(true);
        setError("Please enter a correct email!");
        setLoading(false);
        return;
      }

      const response = await fetch("/api/subscribe", {
        method: "POST",
        body: JSON.stringify({ email: email }),
      });
      const data = await response.json();

      if (response.ok) {
        setSubscribed(true);
        setEmail("");
        setLoading(false);
      } else {
        setError(data.message);
        setProcessFailure(true);
        setLoading(false);
      }
    } catch (error) {
      return error;
    }
  };

  return (
    <div>
      <div className="bg-tailwind">
        <header className="hidden sm:block px-4 sm:px-6 md:px-10 py-3 sm:py-5">
          <Image
            className="dark:invert"
            src={"/primecraft.svg"}
            alt="primecraft logo"
            width={30}
            height={30}
          />
        </header>

        <main className="px-4 sm:px-6 md:px-[5%] py-8 sm:py-10 md:py-[5%] flex flex-col justify-baseline gap-4 sm:gap-5 items-center">
          <div id="logo" className="pb-3 sm:pb-5">
            <Image
              className="dark:invert"
              src="/primecraft.svg"
              alt="Next.js logo"
              width={80}
              height={80}
              priority
            />
          </div>
          <div
            id="badge"
            className="border-2 border-[#1c398e] flex flex-row justify-between items-center gap-2 rounded-full py-1 px-3 sm:px-4"
          >
            <Image
              src="/bluedot.svg"
              alt="blue dot"
              width={8}
              height={8}
              priority
            />
            <p className="text-[#2b7fff] text-xs sm:text-sm font-semibold font-sans">
              Launching August 2026
            </p>
          </div>
          <div
            id="brand"
            className="flex flex-col gap-4 sm:gap-5 md:gap-7 py-3 sm:py-5 items-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-wrap font-semibold leading-tight sm:leading-10 font-sans tracking-tight text-black dark:text-[#DBEAFE]">
              {subscribed ? "Congratulations" : "Primecraft"}
            </h1>
            <p className="tracking-[-1.2] text-base sm:text-lg md:text-2xl max-w-[90%] sm:max-w-[85%] md:max-w-[80%] text-center font-sans dark:text-[#DBEAFE] leading-5 sm:leading-6 md:leading-7 font-medium">
              {subscribed
                ? "Thank you for joining the waitlist ! You're among the first ones to experience the launch of Primecraft"
                : "Launch your SaaS, online business, course, or any digital product in hours not days"}
            </p>
          </div>
          <div
            hidden={subscribed}
            className="flex flex-col items-center justify-center w-full sm:w-auto"
          >
            <div hidden={!processFailure} className="-translate-y-5">
              <div className="bg-red-500/25 border-2 border-red-500 px-4 rounded-md">
                <h1 className="text-red-400 font-sans text-sm font-semibold">
                  {error}
                </h1>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto">
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                  setProcessFailure(false);
                }}
                type="email"
                className="bg-[#19191C] border-2 border-[#27272A] py-2 px-3 sm:px-4 rounded-full outline-none w-full sm:max-w-xl text-sm sm:text-base"
                placeholder="Email"
              />
              <button
                onClick={subscribe}
                className="bg-[#DBEAFE] py-2 px-4 sm:px-6 items-center justify-center border-2 border-transparent text-[#1447E6] font-sans font-medium outline-none rounded-full cursor-pointer hover:bg-white whitespace-nowrap text-sm sm:text-base"
              >
                {loading ? (
                  <span className="inline-flex items-center gap-2">
                    <svg
                      className="animate-spin h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Getting You In...
                  </span>
                ) : (
                  "Get Early Access"
                )}
              </button>
            </div>
            <div className="flex flex-row gap-2 items-center sm:items-baseline py-2 animate-pulse">
              <p className="font-sans font-medium text-blue-500 text-xs sm:text-sm text-center">
                Be among the first ones to experience the launch of Primecraft
              </p>
            </div>
          </div>
        </main>

        <div className="flex max-w-screen flex-col justify-center items-center px-4 sm:px-6 md:px-8 py-8 sm:py-10">
          <div className="w-full md:max-w-[50%] lg:min-w-[50%] flex flex-col gap-3 sm:gap-4 md:gap-5">
            <div className="flex flex-col gap-1 sm:gap-2">
              <small className="font-mono font-semibold text-xs sm:text-sm text-blue-500">
                One <span className="font-bold">git clone</span> away
              </small>
              <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight sm:leading-12 tracking-[-1.5] md:tracking-[-2.8] max-w-lg dark:text-[#DBEAFE]">
                One command that does it all for you
              </h1>
            </div>
            <div>
              <p className="text-[#71717B] font-sans font-medium tracking-[-0.5] sm:tracking-[-0.8] text-base sm:text-lg md:text-lg leading-7 md:leading-1.2 max-w-5xl">
                You are one command away from launching your SaaS or any online
                business and start selling. Instead of spending weeks,
                developing{" "}
                <span className="text-blue-400">
                  secure APIs, dashboards to track sales and traction, payment
                  gateways with added security, email automation + million other
                  thing
                </span>
                , you get to run a command that{" "}
                <span className="text-blue-100 bg-blue-600 px-1 font-semibold">
                  does it all for you, in minutes
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-full px-4 sm:px-6 py-8 sm:py-10">
          <Image
            src={"/features.svg"}
            alt="primecraft features"
            width={700}
            height={700}
            className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl h-auto"
          />
        </div>
        <div className="flex flex-col items-center w-full px-4 sm:px-6 py-8 sm:py-10">
          <div className="bg-zinc-900 max-w-5xl md:min-w-[50%] border-3 rounded-lg border-zinc-800 py-6 sm:py-8 px-4 sm:px-5 flex flex-col lg:flex-row justify-between items-start md:items-center gap-6 md:gap-0">
            <div className="flex flex-col gap-4 w-full md:w-auto">
              <div>
                <span className="font-sans font-semibold text-blue-100 text-sm sm:text-base">
                  Primecraft
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-2xl sm:text-3xl font-sans max-w-lg tracking-[-1] sm:tracking-[-2] font-medium">
                  Everything you need to launch & scale a business + Life Time
                  Access
                </h1>
                <p className="font-sans text-sm sm:text-md font-medium text-zinc-500">
                  Ship in hours, what usually takes weeks.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:py-10 items-center gap-3 sm:gap-5 w-full md:w-auto">
              <Image
                className="dark:invert"
                src={"/primecraft.svg"}
                alt="primecraft logo"
                width={100}
                height={100}
              />
              <h1 className="font-mono animate-pulse text-blue-600 text-sm sm:text-base">
                Coming Soon...
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
