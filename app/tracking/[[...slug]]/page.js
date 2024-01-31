"use client";

import moment from "moment";
import { useEffect, useState } from "react";
import LoaderComponent from "../../../components/LoaderComponent";
import PageHeader from "../../../components/pageHeader";
import { useAppContext } from "../../../contexts/AppContext";
import HandleTracking from "./handle-tracking";

const TrackingPage = ( { params: slug }) => {
  const { travelerInfo } = useAppContext();
  const [loading, setLoading] = useState(false);
  const [tracking_no, setTracking_no] = useState('');
  const [data, setData] = useState();


  useEffect(() => {

    const FetchTrackingDetails = async(tracking_no) => {
        setLoading(true);
        const response = await HandleTracking(tracking_no);
        if (response.tracking_no) {
            setData(response);
            setLoading(false);
        } else {
            alert("Oops! Something went wrong!");
            setLoading(false);
        }
    }

    if(slug.slug) {
        console.log(slug.slug[0]);
        FetchTrackingDetails(slug.slug[0])
    }
  }, [])
  

  const handleSubmitTracking = async() => {
      setLoading(true);

      if(!tracking_no) {
          setLoading(false);
          setData();
          alert("Oops! No tracking no provided!")
          return
      };

      const response = await HandleTracking(tracking_no);
      if (response.tracking_no) {
          setData(response);
          setLoading(false);
      } else {
        alert("Oops! Something went wrong!");
        setLoading(false);
      }
  }

  return (
    <>
      <PageHeader backlink="/" />
      <div className="pt-20 px-2 mx-2">
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-start justify-start px-4 py-2 w-full md:w-fit min-w-[340px]">
                <label htmlFor="FirstName" className="font-semibold text-sm">
                    Enter Tracking No:
                </label>
                <input
                    type="text"
                    name="FirstName"
                    id="firstname"
                    placeholder="PMfozUnxi"
                    //value={mrzDetails?.names}
                    onChange={(e)=>setTracking_no(e.target.value)}
                    className="form-input text-tourPurple px-2 py-2 w-full rounded-md my-2 border focus:border-purple-500"
                />
                <button
                    className={`cursor-pointer items-center rounded-md bg-purple-800 px-4 py-2 text-sm font-semibold leading-6 text-white shadow ${loading? "opacity-40": "opacity-100"}`}
                    disabled={loading}
                    onClick={()=> handleSubmitTracking()}
                    >
                    Submit
                </button>
            </div>
            {
                loading && <LoaderComponent />
            }

            {
                data?.tracking_no && 

                <div className="flex flex-col border border-purple-800 rounded-lg px-5 py-3 mt-2 items-start justify-start w-full md:w-[360px]">
                <div className="flex flex-col items-start justify-start font-semibold w-full">
                    <p>
                        Tracking No : <span>{data?.tracking_no}</span>
                    </p>
                    <p>
                        Status : <span>{data?.status}</span>
                    </p>
                    <p>
                        Type : <span>Visa</span>
                    </p>
                    <p>
                        Visa Type : <span>{data?.visa_type}</span>
                    </p>
                    <p>
                        Visa Category : <span>{data?.visa_category}</span>
                    </p>
                    <p>
                        Country : <span>{data?.country_name}</span>
                    </p>
                    <p>
                        Travel Date : <span>{moment(data?.travel_date).format('L')}</span>
                    </p>

                    {/* Travellers Details */}

                    {
                        data?.travelers?.length > 0 &&
                        data.travelers.map((_traveler, index)=>(
                            <div className="flex flex-col mt-2 bg-purple-200 p-4 w-full rounded">
                                <p>
                                    FIRST NAME : <span>{_traveler.first_name}</span>
                                </p>
                                <p>
                                    SURNAME : <span>{_traveler.surname}</span>
                                </p>
                                <p>
                                    EMAIL : <span>{_traveler.email}</span>
                                </p>
                                <p>
                                    PHONE : <span>{_traveler.phone}</span>
                                </p>
                                <p>
                                    PASSPORT : <span>{_traveler.passport_no}</span>
                                </p>
                                <p>
                                    VALIDITY : <span>{moment(_traveler.validity).format("L")}</span>
                                </p>
                            </div>
                        ))
                    }
                </div>
                </div>
            }
        </div>
      </div>
    </>
  );
};

export default TrackingPage;
