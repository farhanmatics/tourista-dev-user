"use client";
import { SignedIn, UserButton } from "@clerk/nextjs";

const HomeHeader = () => {
  return (
    <div className="relative">
      <img
        className="h-48 w-full object-fill shadow-xl"
        src="https://images.unsplash.com/photo-1590603740183-980e7f6920eb?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

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
            className="w-32 h-7 pr-4"
          />
          <div>
            <SignedIn>
              {/* Mount the UserButton component */}
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
