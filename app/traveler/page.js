"use client";

import Link from "next/link";
import PageBottom from "../../components/pageBottom";
import PageHeader from "../../components/pageHeader";
import { useAppContext } from "../../contexts/AppContext";

const Traveler = () => {
  const { travelerInfo } = useAppContext();

  return (
    <>
      <PageHeader backlink="/details" />
      <div className="pt-20 px-2 mx-2">
        <div className="flex items-center justify-center">
          <div className="flex flex-col border border-purple-800 rounded-lg px-10 py-3">
            <p className="py-3 font-semibold capitalize text-tourPurple">
              Traveler Info:{" "}
              {travelerInfo.travelers.length > 0 ? (
                <span className="uppercase font-bold">
                  {travelerInfo.travelers.length} traveler(s) added
                </span>
              ) : (
                <span className="uppercase font-bold">no traveler added</span>
              )}
            </p>
            {travelerInfo.travelers.length > 0 ? (
              <div>
                {/* Map through the travelers array and display info in cards */}
                {travelerInfo.travelers.map((traveler, index) => (
                  <div
                    key={index}
                    className="border border-lightPurple rounded-md p-4 my-2"
                  >
                    <p className="text-tourPurple font-semibold">
                      Traveler {index + 1}:
                    </p>
                    <p>Name: {traveler.names}</p>
                    <p>Surname: {traveler.surname}</p>
                    <p>Passport No: {traveler.number}</p>
                    <p>Validity: {traveler.expiration_date}</p>
                  </div>
                ))}
                <div className="flex items-center justify-center">
                  <Link
                    href={`/addtraveler`}
                    className="cursor-pointer items-center rounded-md bg-purple-950 px-4 py-2 text-sm font-semibold leading-6 text-white shadow"
                  >
                    Add Traveler
                  </Link>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center">
                <Link
                  href={`/addtraveler`}
                  className="cursor-pointer items-center rounded-md bg-purple-950 px-4 py-2 text-sm font-semibold leading-6 text-white shadow"
                >
                  Add Traveler
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      <PageBottom title="Continue" linkurl="/upload" />
    </>
  );
};

export default Traveler;
