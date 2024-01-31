"use client";
import Link from "next/link";
import { useState } from "react";
import LoaderComponent from "../../components/LoaderComponent";
import PageBottom from "../../components/pageBottom";
import PageHeader from "../../components/pageHeader";

const Upload = () => {
  const [loader, setLoader] = useState(false);
  const [uploaded, setUploaded] = useState(false);

  const simulateLoader = () => {
    // Assuming setLoader is a function to set the loader state
    setLoader(true);
    setUploaded(false);
  
    setTimeout(() => {
      // After 3 seconds, set the loader to false
      setLoader(false);
      setUploaded(true);
    }, 3000); // 3000 milliseconds = 3 seconds
  }

  return (
    <>
      <PageHeader backlink="/traveler" />
      {
        loader && <LoaderComponent />
      }
      <div className="pt-20">
        <div className="flex items-center justify-center">
          <div className="flex flex-col border bg-gray-200 rounded-lg px-8 py-3">
            <p className="py-3 font-semibold capitalize text-tourPurple">
              Traveler Files:
            </p>
            <input
              type="file"
              name=""
              id=""
              className="form-input px-2 py-2 border border-purple-200 rounded-md w-64"
            />
            <Link
              href="#"
              className="rounded-md bg-purple-950 px-2 py-2 mt-2 text-white text-center font-semibold text-sm"
              onClick={()=> simulateLoader()}
            >
              Upload
            </Link>
          </div>
        </div>
        {
          uploaded && 
          <div className="flex flex-col justify-center items-center py-3">
            <p className="italic">**Files uploaded</p>
          </div>
        }
      </div>
      <PageBottom title="Continue" linkurl="/payment" />
    </>
  );
};

export default Upload;
