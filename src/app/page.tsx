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
            className="invert"
            src={"/primecraft.svg"}
            alt="primecraft logo"
            width={30}
            height={30}
          />
        </header>

        <main className="px-4 sm:px-6 md:px-[5%] py-8 sm:py-10 md:py-[5%] flex flex-col items-center">
          <div className="w-full max-w-5xl flex flex-col items-center gap-5 sm:gap-6">
            <div id="logo" className="pb-2 sm:pb-3">
              <Image
                className="invert"
                src="/primecraft.svg"
                alt="Next.js logo"
                width={60}
                height={60}
                priority
              />
            </div>
            <div
              id="badge"
              className="border border-[#1c398e] flex flex-row justify-between items-center gap-2 rounded-full py-1 px-3 sm:px-4"
            >
              <Image
                src="/bluedot.svg"
                alt="blue dot"
                width={8}
                height={8}
                priority
              />
              <p className="text-[#2b7fff] text-xs sm:text-sm font-semibold font-sans">
                Launching July 19 2026
              </p>
            </div>
            <div
              id="brand"
              className="flex flex-col items-center gap-4 sm:gap-5 sm:w-auto"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl text-wrap font-semibold text-center font-sans tracking-tight text-[#DBEAFE] max-w-3xl leading-[1.15] sm:leading-[1.2]">
                {subscribed ? "Congratulations" : "Launch your SaaS without rebuilding the boring parts"}
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-center font-sans text-zinc-400 font-medium max-w-xl leading-6 sm:leading-7">
                {subscribed
                  ? "Thank you! You're on the list. You'll get early access at $98 when we launch."
                  : "Auth, admin dashboard, subscriptions, Razorpay, Neon + Drizzle — one git clone, and you're coding your product."}
              </p>
            </div>
            <div
              hidden={subscribed}
              className="flex flex-col items-center justify-center w-full max-w-lg"
            >
              <div hidden={!processFailure} className="-translate-y-5 self-center">
                <div className="bg-red-500/25 border-2 border-red-500 px-4 rounded-md">
                  <h1 className="text-red-400 font-sans text-sm font-semibold">
                    {error}
                  </h1>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full">
                <input
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError("");
                    setProcessFailure(false);
                  }}
                  type="email"
                  className="bg-[#19191C] text-blue-100 font-medium font-sans border border-[#27272A] py-2 px-4 rounded-full outline-none w-full text-sm sm:text-base placeholder:font-sans"
                  placeholder="Email"
                />
                <button
                  onClick={subscribe}
                  className="bg-[#DBEAFE] py-2 px-5 items-center justify-center border border-transparent text-[#1447E6] font-sans font-semibold outline-none rounded-full cursor-pointer hover:bg-white whitespace-nowrap text-sm sm:text-base"
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
                    "Join Waitlist — Save 30%"
                  )}
                </button>
              </div>
              <div className="flex flex-row gap-2 items-center sm:items-baseline pt-3 animate-pulse">
                <p className="font-sans font-medium text-blue-500 text-xs sm:text-sm text-center">
                  First 50 buyers get lifetime access at $98 instead of $179
                </p>
              </div>
            </div>
          </div>
        </main>

        <div className="flex max-w-screen flex-col justify-center items-center px-4 sm:px-6 md:px-8 py-8 sm:py-10">
          <div className="w-full md:max-w-[50%] lg:min-w-[50%] flex flex-col gap-3 sm:gap-4 md:gap-5">
            <div className="flex flex-col gap-1 sm:gap-2">
              <small className="font-mono font-semibold text-xs sm:text-sm text-blue-500">
                One <span className="font-bold">git clone</span> away
              </small>
              <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight sm:leading-12 tracking-[-1.5] md:tracking-[-2.8] max-w-lg text-[#DBEAFE]">
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
                  does it all for you, in minutes.
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center w-full px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-16">
          <div className="w-full max-w-5xl">
            <div className="flex flex-col items-center gap-2 pb-8 sm:pb-10">
              <small className="font-mono font-semibold text-xs sm:text-sm text-blue-500">
                The skeleton. <span className="font-bold">You bring the soul.</span>
              </small>
              <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl font-semibold text-center text-[#DBEAFE]">
                Everything built-in
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4 sm:p-5 flex flex-col gap-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-blue-400 shrink-0" />
                  <h3 className="font-sans font-semibold text-[#DBEAFE] text-sm sm:text-base">
                    Auth — Login / Signup
                  </h3>
                </div>
                <p className="font-sans text-xs sm:text-sm text-zinc-400 font-medium pl-5">
                  JWT token generation & cookies. Production-ready authentication out of the box.
                </p>
              </div>
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4 sm:p-5 flex flex-col gap-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-purple-400 shrink-0" />
                  <h3 className="font-sans font-semibold text-[#DBEAFE] text-sm sm:text-base">
                    Admin Dashboard
                  </h3>
                </div>
                <p className="font-sans text-xs sm:text-sm text-zinc-400 font-medium pl-5">
                  Separate from your users. Track sales, traction, and manage your entire SaaS.
                </p>
              </div>
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4 sm:p-5 flex flex-col gap-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                  <h3 className="font-sans font-semibold text-[#DBEAFE] text-sm sm:text-base">
                    Subscription System
                  </h3>
                </div>
                <p className="font-sans text-xs sm:text-sm text-zinc-400 font-medium pl-5">
                  Create and manage plans without redeploying. Let owners set their own pricing.
                </p>
              </div>
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4 sm:p-5 flex flex-col gap-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-amber-400shrink-0" />
                  <h3 className="font-sans font-semibold text-[#DBEAFE] text-sm sm:text-base">
                    Razorpay Integration
                  </h3>
                </div>
                <p className="font-sans text-xs sm:text-sm text-zinc-400 font-medium pl-5">
                  Built-in payments. No API wrestling, no webhook headaches. Just works.
                </p>
              </div>
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4 sm:p-5 flex flex-col gap-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-rose-400 shrink-0" />
                  <h3 className="font-sans font-semibold text-[#DBEAFE] text-sm sm:text-base">
                    Neon PostgreSQL + Drizzle
                  </h3>
                </div>
                <p className="font-sans text-xs sm:text-sm text-zinc-400 font-medium pl-5">
                  Modern, type-safe, scalable. The same stack the official Next.js starter uses.
                </p>
              </div>
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4 sm:p-5 flex flex-col gap-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
                  <h3 className="font-sans font-semibold text-[#DBEAFE] text-sm sm:text-base">
                    Lifetime Access
                  </h3>
                </div>
                <p className="font-sans text-xs sm:text-sm text-zinc-400 font-medium pl-5">
                  One payment. Unlimited projects. Lifetime updates. No subscriptions.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center w-full px-4 sm:px-6 py-8 sm:py-10">
          <div className="bg-zinc-900 max-w-lg w-full border border-zinc-800 rounded-lg py-6 sm:py-8 px-4 sm:px-6 flex flex-col items-center gap-4">
            <span className="font-mono text-xs sm:text-sm text-blue-500 font-semibold uppercase tracking-wider">
              One-time. Lifetime. Unlimited projects.
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl sm:text-5xl font-bold text-[#DBEAFE]">$179</span>
            </div>
            <p className="text-zinc-400 font-sans text-sm text-center">
              No tiers. No subscriptions. No &quot;pro&quot; upsell.
            </p>
            <div className="w-full border-t border-zinc-800 pt-4 mt-2 flex flex-col items-center">
              <p className="text-blue-400 font-sans text-sm text-center font-semibold">
                Launch offer: First 50 buyers get it at $98
              </p>
              <p className="text-zinc-500 font-sans text-xs text-center mt-1">
                Join the waitlist above to lock your discount.
              </p>
            </div>
          </div>
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
                <h1 className="text-2xl text-blue-100 sm:text-3xl font-sans max-w-lg tracking-[-1] sm:tracking-[-2] font-medium">
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
                className="invert"
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
      <footer className="border-t border-zinc-800 px-4 sm:px-6 md:px-10 py-6 sm:py-8">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Image
              className="invert"
              src={"/primecraft.svg"}
              alt="primecraft logo"
              width={18}
              height={18}
            />
            <span className="font-sans text-zinc-500 text-xs sm:text-sm">
              Primecraft &copy; 2026
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://x.com/dibyacodes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-blue-400 transition-colors"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://youtube.com/@dibyacodes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-blue-400 transition-colors"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            <a
              href="https://instagram.com/dibyacodes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-blue-400 transition-colors"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
              </svg>
            </a>
            <a
              href="https://github.com/dibyacodes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-blue-400 transition-colors"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
