"use client";

import PageBottom from "../../components/pageBottom";
import PageHeader from "../../components/pageHeader";
import { useAppContext } from "../../contexts/AppContext";

const Details = () => {
  const { setTravelerInfo } = useAppContext();

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    setTravelerInfo((prevInfo) => ({ ...prevInfo, date: selectedDate }));
  };

  const handleVisaTypeChange = (event) => {
    const selectedVisaType = event.target.value;
    setTravelerInfo((prevInfo) => ({
      ...prevInfo,
      visaType: selectedVisaType,
    }));
  };

  return (
    <>
      <PageHeader backlink="/" />
      <div className="pt-20">
        <div className="flex items-center justify-center">
          <p className="py-3 font-semibold capitalize text-darkSky">
            <span className="uppercase font-bold text-lg">Thailand</span>
          </p>
        </div>
        
        <div className="flex items-center justify-center">
          <div className="flex flex-col bg-gray-200 rounded-lg px-20 py-3 mt-10 pb-4">
            <div className="flex flex-col px-2">
              <h1 className="text-darkSky py-2 font-semibold flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>
                <span className="pl-2">Date of Entry</span>
              </h1>
              <input
                type="date"
                name=""
                id=""
                onChange={handleDateChange}
                className="form-input text-darkSky border-darkSky rounded border-2 px-4 py-2 text-sm w-auto"
              />
            </div>
            <div className="flex flex-col px-2 mb-4 mt-2">
            <h1 className="text-darkSky py-2 font-semibold flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-check"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="m9 15 2 2 4-4"/></svg>
                <span className="pl-2">Visa Type</span>
              </h1>
              <select
                name=""
                id=""
                className="form-select text-darkSky border-darkSky rounded border-2 px-4 py-2 text-sm"
                onChange={handleVisaTypeChange}
              >
                <option value="6">Tourist</option>
                <option value="11">Medical</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <PageBottom title="Continue" linkurl={`/traveler`} />
    </>
  );
};

export default Details;
