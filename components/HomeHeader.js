"use client";
import { SignedIn, UserButton } from "@clerk/nextjs";

const HomeHeader = () => {
  return (
    <div className="relative h-60 w-full bg-black bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
      <div className="">
        <div className="absolute inset-x-0 top-0 flex h-16 flex-row items-center justify-between px-4">
          <div className="stroke-2 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-align-left"
            >
              <line x1="21" x2="3" y1="6" y2="6" />
              <line x1="15" x2="3" y1="12" y2="12" />
              <line x1="17" x2="3" y1="18" y2="18" />
            </svg>
          </div>
          <div className="flex flex-row items-center">
            <img
              src="https://tourista.co/img/tl-03.png"
              alt="tourista"
              className="w-32 pr-4"
            />
            <div>
              <SignedIn>
                {/* Mount the UserButton component */}
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
          <h1 className="bg-gradient-to-r from-purple-800 via-purple-400 to-indigo-400 bg-clip-text text-3xl lg:text-4xl font-bold text-transparent">
            Visa Made Easy!
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
