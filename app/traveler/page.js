import PageBottom from "@/components/pageBottom";
import PageHeader from "@/components/pageHeader";
import React from "react";
import Link from "next/link";

const Traveler = () => {
  return (
    <>
      <PageHeader backlink="/details" />
      <div className="pt-20 px-2 mx-2">
        <div className="flex items-center justify-center">
          <div className="flex flex-col border border-purple-800 rounded-lg px-10 py-3">
            <p className="py-3 font-semibold capitalize text-tourPurple">
              Traveler Info:{" "}
              <span className="uppercase font-bold">no traveler added</span>
            </p>
            <Link
              href="/addtraveler"
              className="cursor-pointer items-center rounded-md bg-purple-950 px-4 py-2 text-sm font-semibold leading-6 text-white shadow"
            >
              Add Traveler
            </Link>
          </div>
        </div>
      </div>
      <PageBottom title="Continue" linkurl="/upload" />
    </>
  );
};

export default Traveler;
