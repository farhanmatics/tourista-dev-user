'use server';
const HandleTracking = async (tracking_no) => {
    const apiEndpoint = "http://3env.com:6500/api/partner/checkvisastatus";
    try {
      const myHeaders = new Headers();
      myHeaders.append(
        "API-ACCESS-TOKEN",
        `Bearer ${process.env.NEXT_JWT_TOKEN}`
      );
      myHeaders.append("Content-Type", "application/json");
  
      const raw = JSON.stringify({
        tracking_id: tracking_no,
      });
  
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
        console.log("Tracking Data Fetched");
        return result;
      } else {
        console.error("Tracking Data fetch failed");
        return result;
      }
    } catch (error) {
      console.error("Error during confirmation:", error);
      return error;
    }
}

export default HandleTracking;