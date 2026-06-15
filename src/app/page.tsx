import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="bg-dot-grid">
        <header className="px-10 py-5">
          <Image
            className="dark:invert"
            src={"/primecraft.svg"}
            alt="primecraft logo"
            width={30}
            height={30}
          />
        </header>
        <main className="p-[5%] flex flex-col justify-between gap-5 items-center">
          <div id="logo" className="pb-5">
            <Image
              className="dark:invert"
              src="/primecraft.svg"
              alt="Next.js logo"
              width={100}
              height={1000}
              priority
            />
          </div>
          <div
            id="badge"
            className="border-2 border-[#1c398e] flex flex-row justify-between items-baseline gap-2 rounded-full py-1 px-4"
          >
            <Image
              src="/bluedot.svg"
              alt="blue dot"
              width={10}
              height={10}
              priority
            />
            <p className="text-[#2b7fff] text-sm font-semibold font-sans">
              Launching August 2026
            </p>
          </div>
          <div
            id="brand"
            className="flex flex-col gap-7 py-5 items-center justify-between"
          >
            <h1 className="max-w-xs text-7xl font-semibold leading-10 font-sans tracking-tight text-black dark:text-[#DBEAFE]">
              Primecraft
            </h1>
            <p className="tracking-[-1.2] text-2xl max-w-[80%] text-center font-sans dark:text-[#DBEAFE] leading-6.5 font-medium">
              Launch your SaaS, online business, course, or any digital product
              in hours not days
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-row gap-3">
              <input
                type="email"
                className="bg-[#19191C] border-2 border-[#27272A] py-2 px-4 rounded-full outline-none max-w-xl"
                placeholder="Email"
              />
              <button className="bg-[#DBEAFE] py-2 items-center justify-center border-2 border-transparent text-[#1447E6] font-sans font-medium px-4 outline-none rounded-full cursor-pointer hover:bg-white">
                Join Wait-list
              </button>
            </div>
            <div className="flex flex-row gap-2 items-baseline py-2 animate-pulse">
              <p className="font-sans font-medium text-blue-500 text-sm">
                Be among the first ones to experience the launch of Primecraft
              </p>
            </div>
          </div>
        </main>

        <div className="flex max-block-2.5w-screen flex-col justify-center items-center">
          <div className="max-w-[50%] min-w-[50%] flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <small className="font-mono font-semibold text-sm text-blue-500">
                git clone primecraft
              </small>
              <h1 className="font-sans text-5xl font-semibold leading-12 tracking-[-2.8] max-w-md dark:text-[#DBEAFE]">
                One command that does it all for you
              </h1>
            </div>
            <div>
              <p className="text-[#71717B] font-sans font-medium tracking-[-0.8] text-lg leading-1.2 max-w-5xl">
                The Nextjs SaaS boilerplate that logs in user, processes
                payments, creates teams, sends email all at sub-second speed.
                Spend more time thinking about your product & managing clients
                rather than building the same old API.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start">
          <Image
            src={"/features.svg"}
            alt="primecraft features"
            width={700}
            height={700}
          />
        </div>
      </div>

      <div>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div></div>
      </div>
      {/*<div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/primecraft.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the page.tsx file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>*/}
    </div>
  );
}
