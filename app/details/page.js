import PageBottom from "@/components/pageBottom";
import PageHeader from "@/components/pageHeader";
import React from "react";

const Details = () => {
  return (
    <>
      <PageHeader backlink="/" />
      <div className="pt-20">
        <div className="flex items-center justify-center">
          <div className="flex flex-col border p-12 shadow-lg shadow-purple-200 rounded-md border-purple-50">
            <p className="py-3 font-semibold capitalize text-tourPurple">
              Traveling to:{" "}
              <span className="uppercase font-bold">Thailand</span>
            </p>

            <div className="flex flex-col px-1">
              <h1 className="text-tourPurple py-2 font-semibold">
                Date of Entry
              </h1>
              <input
                type="date"
                name=""
                id=""
                className="form-input px-2 py-3 rounded border-tourPurple border-2 text-tourPurple"
              />
            </div>
            <div className="flex flex-col px-2">
              <h1 className="text-tourPurple py-2 font-semibold">Visa type</h1>
              <select
                name=""
                id=""
                className="form-select text-tourPurple border-tourPurple rounded border-2 px-4 py-3 text-sm"
              >
                <option value="Tourist">Tourist</option>
                <option value="Medical">Medical</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <PageBottom title="Continue" linkurl="/traveler" />
    </>
  );
};

export default Details;
