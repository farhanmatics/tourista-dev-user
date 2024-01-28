import PageBottom from "@/components/pageBottom";
import PageHeader from "@/components/pageHeader";
import React from "react";
import Link from "next/link";

const Add = () => {
  return (
    <>
      <PageHeader backlink="/traveler" />
      <div className="pt-20 px-4">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col border p-4 rounded-md border-purple-800">
            <p className="py-1 font-semibold capitalize text-tourPurple">
              Add a New Traveler
            </p>
            <div className="mt-2">
              <label htmlFor="FirstName" className="text-lightPurple">
                {" "}
                First Name
              </label>
              <input
                type="text"
                name="FirstName"
                id=""
                className="form-input px-2 border-2 border-tourPurple w-full rounded-md"
              />
            </div>
            <div className="mt-2">
              <label htmlFor="SurName" className="text-lightPurple">
                {" "}
                SurName
              </label>
              <input
                type="text"
                name="SurName"
                id=""
                className="form-input px-2 border-2 border-lightPurple w-full rounded-md"
              />
            </div>
            <div className="mt-2">
              <label htmlFor="SurName" className="text-lightPurple">
                Passport No:
              </label>
              <input
                type="text"
                name="Passport"
                id=""
                className="form-input px-2 border-2 border-lightPurple w-full rounded-md"
              />
            </div>
            <div className="mt-2">
              <label htmlFor="SurName" className="text-lightPurple">
                Validity:
              </label>
              <input
                type="date"
                name="Passport"
                id=""
                className="form-input px-2 border-2 border-lightPurple w-full rounded-md"
              />
            </div>
          </div>
          <div className="px-4 pt-4">
            <Link
              href="#"
              className="bg-tourPurple text-white px-4 py-3 rounded-md uppercase font-semibold text-sm"
            >
              use Simple Passport Scan
            </Link>
          </div>
        </div>
      </div>
      <PageBottom title="Add Traveler" linkurl="/traveler" />
    </>
  );
};

export default Add;
