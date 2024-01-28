"use client";

import PageBottom from "@/components/pageBottom";
import PageHeader from "@/components/pageHeader";
import React, { useState } from "react";
import Link from "next/link";

const Payment = () => {
  const [chkstate, setChkstate] = useState(true);
  return (
    <>
      <PageHeader backlink="/upload" />
      <div className="pt-24 px-2">
        <div className="flex items-center justify-center">
          <div className="flex flex-col border border-purple-800 rounded-lg px-8 py-3">
            <p className="py-1 font-semibold capitalize text-tourPurple">
              Choose delivery method
            </p>
            <div className="max-w-sm rounded-xl border bg-white border-purple-400 mt-1">
              <div className="flex items-center px-2 pt-2">
                <input
                  type="radio"
                  id="huey"
                  name="drone"
                  value="huey"
                  className="form-input"
                />
                <label htmlFor="huey" className="text-sm font-semibold pl-1">
                  I will drop-off my documents
                </label>
              </div>

              <div className="flex items-center px-2">
                <input type="radio" id="dewey" name="drone" value="dewey" />
                <label htmlFor="dewey" className="text-sm font-semibold pl-1">
                  Pick up from my location
                </label>
              </div>

              <div className="flex items-center justify-end text-purple-800 font-bold pt-1 mr-2">
                300.00 BDT
              </div>
            </div>
            <div className="max-w-sm rounded-xl border bg-white border-purple-400 mt-2">
              <div className="bg-yellow-300 rounded-t-xl py-1 px-2">
                <span className="font-semibold text-sm">
                  Loyalty & Discounts
                </span>
              </div>
              <div className="flex items-center px-2 pt-1">
                <input
                  type="radio"
                  id="huey"
                  name="v2"
                  value="huey"
                  className="form-input"
                />
                <label htmlFor="huey" className="text-sm font-semibold pl-1">
                  I want to earn Loyalty points
                </label>
              </div>

              <div className="flex items-center px-2 pb-2">
                <input type="radio" id="dewey" name="v2" value="dewey" />
                <label htmlFor="dewey" className="text-sm font-semibold pl-1">
                  I want to redeem loyalty points
                </label>
              </div>
            </div>
            <div className="max-w-sm rounded-xl border bg-white border-purple-400 mt-2">
              <div className=" bg-darkSky rounded-t-xl py-1 px-2">
                <span className="font-semibold text-sm text-white">
                  Fee Summery
                </span>
              </div>
              <div className="flex flex-col pt-2 px-1">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-gray-700">
                    Travelers X 1
                  </div>
                  <div className="text-sm font-semibold text-gray-700">
                    4,650
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-gray-700">
                    Tourista Processing Fee
                  </div>
                  <div className="text-sm font-semibold text-gray-700">450</div>
                </div>
                <hr />
                <div className="flex items-center justify-between pb-1">
                  <div className="text-sm font-bold text-black">Total</div>
                  <div className="text-sm font-bold text-black">5,100</div>
                </div>
              </div>
            </div>
            <div className="max-w-sm rounded-xl border bg-white border-purple-400 mt-2">
              <div className=" bg-yellow-300 rounded-t-xl py-1 px-2">
                <span className="font-semibold text-sm">Payment Options</span>
              </div>

              <div className="py-2 px-1 flex gap-2">
                <svg
                  width="51"
                  height="40"
                  viewBox="0 0 51 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className=""
                >
                  <rect width="51" height="40" rx="2.13" fill="white" />
                  <rect
                    x="0.5"
                    y="0.5"
                    width="50"
                    height="39"
                    rx="1.63"
                    stroke="#9DADBC"
                    strokeOpacity="0.36"
                  />
                  <path
                    d="M29.5 12.925H21.625V27.075H29.5V12.925Z"
                    fill="#FF5F00"
                  />
                  <path
                    d="M22.125 20C22.125 17.125 23.475 14.575 25.55 12.925C24.025 11.725 22.1 11 20 11C15.025 11 11 15.025 11 20C11 24.975 15.025 29 20 29C22.1 29 24.025 28.275 25.55 27.075C23.475 25.45 22.125 22.875 22.125 20Z"
                    fill="#EB001B"
                  />
                  <path
                    d="M40.125 20C40.125 24.975 36.1 29 31.125 29C29.025 29 27.1 28.275 25.575 27.075C27.675 25.425 29 22.875 29 20C29 17.125 27.65 14.575 25.575 12.925C27.1 11.725 29.025 11 31.125 11C36.1 11 40.125 15.05 40.125 20Z"
                    fill="#F79E1B"
                  />
                </svg>
                <svg
                  fill="#212675"
                  width="50px"
                  height="40px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="border"
                >
                  <path d="M16.539 9.186a4.155 4.155 0 0 0-1.451-.251c-1.6 0-2.73.806-2.738 1.963-.01.85.803 1.329 1.418 1.613.631.292.842.476.84.737-.004.397-.504.577-.969.577-.639 0-.988-.089-1.525-.312l-.199-.093-.227 1.332c.389.162 1.09.301 1.814.313 1.701 0 2.813-.801 2.826-2.032.014-.679-.426-1.192-1.352-1.616-.563-.275-.912-.459-.912-.738 0-.247.299-.511.924-.511a2.95 2.95 0 0 1 1.213.229l.15.067.227-1.287-.039.009zm4.152-.143h-1.25c-.389 0-.682.107-.852.493l-2.404 5.446h1.701l.34-.893 2.076.002c.049.209.199.891.199.891h1.5l-1.31-5.939zm-10.642-.05h1.621l-1.014 5.942H9.037l1.012-5.944v.002zm-4.115 3.275.168.825 1.584-4.05h1.717l-2.551 5.931H5.139l-1.4-5.022a.339.339 0 0 0-.149-.199 6.948 6.948 0 0 0-1.592-.589l.022-.125h2.609c.354.014.639.125.734.503l.57 2.729v-.003zm12.757.606.646-1.662c-.008.018.133-.343.215-.566l.111.513.375 1.714H18.69v.001h.001z" />
                </svg>
                <svg
                  width="50px"
                  height="40px"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                  className="border text-pink-600"
                >
                  <path
                    className="a"
                    d="M22.9814,8.6317s-4.1632,14.704-3.8089,14.704,16.4755,2.923,16.4755,2.923Z"
                  />
                  <polyline
                    className="a"
                    points="22.981 8.632 6.329 6.152 19.172 23.336 21.387 33.522 35.648 26.259 39.368 17.445 30.393 18.946"
                  />
                  <polyline
                    className="a"
                    points="37.929 20.855 43 20.855 39.368 17.445"
                  />
                  <polyline
                    className="a"
                    points="21.387 33.522 21.741 35.427 13.725 41.848 19.172 23.336"
                  />
                  <polyline
                    className="a"
                    points="35.648 26.259 35.117 29.138 22.848 32.778"
                  />
                  <polyline
                    className="a"
                    points="8.455 8.997 5 8.997 16.044 19.15"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PageBottom title="Confirm & Proceed" linkurl="/confirmation" />
    </>
  );
};

export default Payment;
