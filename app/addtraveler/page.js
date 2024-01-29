"use client";

import PageBottom from "@/components/pageBottom";
import PageHeader from "@/components/pageHeader";
import React, { useState, useEffect } from "react";

const Add = () => {
  const [mrzDetails, setMrzDetails] = useState({
    country: "",
    names: "",
    surname: "",
    type: "",
    date_of_birth: "",
    expiration_date: "",
    sex: "",
    number: "",
  });
  const [imagePreview, setImagePreview] = useState(null);

  //Format Date required only when using passportEye API
  const formatDate = (inputDate) => {
    const day = inputDate.slice(0, 2);
    const month = inputDate.slice(2, 4);
    const year = `20${inputDate.slice(4, 6)}`;

    return `${year}-${month}-${day}`;
  };

  //Read passport using passportEye library
  const handleImageCapture = async (event) => {
    const fileInput = event.target;
    const file = fileInput.files[0];

    if (file) {
      const formData = new FormData();
      formData.append("image", file);

      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/process_mrz`,
          {
            method: "POST",
            body: formData,
          }
        );

        if (response.ok) {
          const mrzData = await response.json();

          setMrzDetails(mrzData);
          setMrzDetails({
            ...mrzData,
            expiration_date: formatDate(mrzData?.expiration_date),
          });
          console.log({ mrzData });
          // Display the image preview
          const reader = new FileReader();
          reader.onloadend = () => {
            setImagePreview(reader.result);
          };
          reader.readAsDataURL(file);
          console.log("Image sent successfully");
        } else {
          console.error("Failed to send image to the API");
        }
      } catch (error) {
        console.error("Error sending image to the API:", error);
      }
    }
  };

  //Read passport using mindee api
  const handleMindeeImageCapture = async (event) => {
    const fileInput = event.target;
    const file = fileInput.files[0];

    if (file) {
      const formData = new FormData();
      formData.append("image", file);

      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/mindee`,
          {
            method: "POST",
            body: formData,
          }
        );

        if (response.ok) {
          const mrzData = await response.json();
          console.log({ mrzData });
          setMrzDetails(mrzData);
          // Display the image preview
          const reader = new FileReader();
          reader.onloadend = () => {
            setImagePreview(reader.result);
          };
          reader.readAsDataURL(file);
          console.log("Image processed successfully");
        } else {
          console.error("Failed to send image to the API");
        }
      } catch (error) {
        console.error("Error sending image to the API:", error);
      }
    }
  };

  const handleNumberChange = (event) => {
    setMrzDetails({ ...mrzDetails, number: event.target.value });
  };
  const handleNameChange = (event) => {
    setMrzDetails({ ...mrzDetails, names: event.target.value });
  };
  const handleSurnameChange = (event) => {
    setMrzDetails({ ...mrzDetails, surname: event.target.value });
  };
  const handleValidityChange = (event) => {
    console.log(event.target.value);
    setMrzDetails({ ...mrzDetails, expiration_date: event.target.value });
  };

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
                id="firstname"
                value={mrzDetails?.names}
                onChange={handleNameChange}
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
                id="surname"
                value={mrzDetails?.surname}
                onChange={handleSurnameChange}
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
                id="number"
                value={mrzDetails?.number}
                onChange={handleNumberChange}
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
                id="validitydate"
                value={mrzDetails?.expiration_date}
                onChange={handleValidityChange}
                className="form-input px-2 border-2 border-lightPurple w-full rounded-md"
              />
            </div>
          </div>
          {/* This button will scan using passporteye api*/}
          {/* <div className="px-4 pt-4">
            <label
              htmlFor="icon-button-file"
              className="bg-tourPurple text-white px-4 py-3 rounded-md uppercase font-semibold text-sm"
            >
              use Simple Passport Scan
              <input
                accept="image/*"
                id="icon-button-file"
                type="file"
                capture="environment"
                onChange={handleImageCapture}
                className="hidden"
              />
            </label>
          </div> */}
          {/*This button will scan using mindee api */}
          <div className="px-4 pt-4 my-4">
            <label
              htmlFor="icon-button-file2"
              className="bg-tourPurple text-white px-4 py-3 rounded-md uppercase font-semibold text-sm"
            >
              use Simple Passport Scan
              <input
                accept="image/*"
                id="icon-button-file2"
                type="file"
                capture="environment"
                onChange={handleMindeeImageCapture}
                className="hidden"
              />
            </label>
          </div>

          {imagePreview && (
            <div className="my-4 pb-6">
              <p className="text-lightPurple">Image Preview:</p>
              <img
                src={imagePreview}
                alt="Image Preview"
                className="mt-2 border-2 border-lightPurple rounded-md"
                style={{ maxWidth: "100%" }}
              />
            </div>
          )}
        </div>
      </div>
      <PageBottom title="Add Traveler" linkurl="/traveler" />
    </>
  );
};

export default Add;
