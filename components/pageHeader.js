"use client";
import { SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";

const PageHeader = ({ backlink }) => {
  return (
    <div className="fixed w-full">
      <div className="flex items-center justify-between bg-white py-4">
        <Link href={backlink} className="pl-4 text-black">
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
            className="lucide lucide-chevron-left"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </Link>
        <div className="flex flex-row items-center gap-2 mr-2">
          <img
            src="https://tourista.co/img/tourista_logo_dark.png"
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

export default PageHeader;
