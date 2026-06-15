import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="bg-tailwind">
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

        <div className="flex max-w-screen flex-col justify-center items-center">
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

      <div className="flex flex-col items-center w-full">
        <div className="bg-zinc-900 min-w-5xl border-3 rounded-lg border-zinc-800 py-4 px-5 flex flex-row justify-between items-center">
          <div className="flex flex-col gap-4">
            <div>
              <span className="font-sans font-semibold text-blue-100">
                Primecraft
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-sans max-w-lg tracking-[-2] font-medium">
                Everything you need to build an online empire, and more.
              </h1>
              <p className="font-sans text-md font-medium text-zinc-500">
                Ship like a god with the ultimate boilerplate
              </p>
            </div>
            <div className="pt-5">
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
            </div>
          </div>
          <div className="flex flex-col items-center gap-5">
            <Image
              className="dark:invert animate-bounce"
              src={"/primecraft.svg"}
              alt="primecraft logo"
              width={100}
              height={100}
            />
            <h1 className="font-mono animate-pulse text-blue-600">
              Coming Soon...
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
