import Link from "next/link";
import HomeFooter from "../components/HomeFooter";
import HomeHeader from "../components/HomeHeader";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <div className="grid grid-cols-2 gap-2 p-4">
        <div className="flex flex-col px-2">
          <h1 className="text-tourPurple py-2 font-semibold">
            Traveling country
          </h1>
          <select
            name=""
            id=""
            className="form-select text-tourPurple border-tourPurple rounded border-2 px-4 py-3 text-sm"
          >
            <option value="Thailand">Thailand</option>
            <option value="Thailand">Malaysia</option>
          </select>
        </div>
        <div className="flex flex-col px-2">
          <h1 className="text-tourPurple py-2 font-semibold">From</h1>
          <select
            name=""
            id=""
            className="form-select text-tourPurple border-tourPurple rounded border-2 px-4 py-3 text-sm"
          >
            <option value="Tourist">Bangladesh</option>
            <option value="Medical">Nepal</option>
          </select>
        </div>
      </div>
      
      <div className="flex items-center justify-center px-2 py-4">
        <span className="relative inline-flex">
          <Link
            href="/details"
            className="inline-flex cursor-pointer items-center rounded-md bg-lightPurple md:px-32 px-12 py-2 text-sm font-semibold leading-6 text-white shadow"
            disabled=""
          >
            Get Started!
          </Link>
          <span className="absolute right-0 top-0 -mr-1 -mt-1 flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blueSky opacity-75"></span>
            <span className="relative inline-flex h-3 w-3 rounded-full bg-blueSky"></span>
          </span>
        </span>
      </div>
      <HomeFooter />
    </>
  );
}
