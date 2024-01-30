"use server";

const handleConfirm = async (travelerInfo) => {
  console.log("Server side", travelerInfo);

  const apiEndpoint = "http://3env.com:6500/api/partner/visasubmit";
  try {
    const myHeaders = new Headers();
    myHeaders.append(
      "API-ACCESS-TOKEN",
      `Bearer ${process.env.NEXT_JWT_TOKEN}`
    );
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      country_id: 221,
      visa_type_id: 43,
      category_id: 9,
      travel_date: travelerInfo.date,
      travelers: travelerInfo.travelers.map((traveler) => ({
        first_name: traveler.names,
        surname: traveler.surname,
        email: "traveleremail@gmail.com",
        phone: "012222222",
        passport_no: traveler.number,
        validity: traveler.expiration_date,
        profession_id: 22,
        documents: [],
      })),
    });

    console.log(JSON.parse(raw));

    const requestOptions = {
      mode: "no-cors",
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const response = await fetch(apiEndpoint, requestOptions);
    const result = await response.json();
    console.log({ result });

    if (response.ok) {
      console.log("Confirmation successful");
      return result;
    } else {
      console.error("Confirmation failed");
      return result;
    }
  } catch (error) {
    console.error("Error during confirmation:", error);
    return error;
  }
};

export default handleConfirm;
