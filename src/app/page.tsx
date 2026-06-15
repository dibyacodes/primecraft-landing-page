import Image from "next/image";

export default function Home() {
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
        <main className="px-4 sm:px-6 md:px-[5%] py-8 sm:py-10 md:py-[5%] flex flex-col justify-between gap-4 sm:gap-5 items-center">
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
            className="border-2 border-[#1c398e] flex flex-row justify-between items-baseline gap-2 rounded-full py-1 px-3 sm:px-4"
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
            className="flex flex-col gap-4 sm:gap-5 md:gap-7 py-3 sm:py-5 items-center justify-between"
          >
            <h1 className="max-w-xs text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight sm:leading-10 font-sans tracking-tight text-black dark:text-[#DBEAFE] text-center">
              Primecraft
            </h1>
            <p className="tracking-[-1.2] text-base sm:text-lg md:text-2xl max-w-[90%] sm:max-w-[85%] md:max-w-[80%] text-center font-sans dark:text-[#DBEAFE] leading-6 sm:leading-7 md:leading-6.5 font-medium">
              Launch your SaaS, online business, course, or any digital product
              in hours not days
            </p>
          </div>
          <div className="flex flex-col items-center justify-center w-full sm:w-auto">
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto">
              <input
                type="email"
                className="bg-[#19191C] border-2 border-[#27272A] py-2 px-3 sm:px-4 rounded-full outline-none w-full sm:max-w-xl text-sm sm:text-base"
                placeholder="Email"
              />
              <button className="bg-[#DBEAFE] py-2 px-4 sm:px-6 items-center justify-center border-2 border-transparent text-[#1447E6] font-sans font-medium outline-none rounded-full cursor-pointer hover:bg-white whitespace-nowrap text-sm sm:text-base">
                Join Wait-list
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
                git clone primecraft
              </small>
              <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight sm:leading-12 tracking-[-1.5] md:tracking-[-2.8] max-w-lg dark:text-[#DBEAFE]">
                One command that does it all for you
              </h1>
            </div>
            <div>
              <p className="text-[#71717B] font-sans font-medium tracking-[-0.5] sm:tracking-[-0.8] text-base sm:text-lg md:text-lg leading-6 md:leading-1.2 max-w-5xl">
                The Nextjs SaaS boilerplate that logs in user, processes
                payments, creates teams, sends email all at sub-second speed.
                Spend more time thinking about your product & managing clients
                rather than building the same old API.
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
                Everything you need to build an online empire, and more.
              </h1>
              <p className="font-sans text-sm sm:text-md font-medium text-zinc-500">
                Ship like a god with the ultimate boilerplate
              </p>
            </div>
            <div className="pt-3 sm:pt-5">
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto">
                <input
                  type="email"
                  className="bg-[#19191C] border-2 border-[#27272A] py-2 px-3 sm:px-4 rounded-full outline-none w-full sm:max-w-xl text-sm sm:text-base"
                  placeholder="Email"
                />
                <button className="bg-[#DBEAFE] py-2 px-4 sm:px-6 items-center justify-center border-2 border-transparent text-[#1447E6] font-sans font-medium outline-none rounded-full cursor-pointer hover:bg-white whitespace-nowrap text-sm sm:text-base">
                  Join Wait-list
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:py-10 items-center gap-3 sm:gap-5 w-full md:w-auto">
            <Image
              className="dark:invert"
              src={"/primecraft.svg"}
              alt="primecraft logo"
              width={80}
              height={80}
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
