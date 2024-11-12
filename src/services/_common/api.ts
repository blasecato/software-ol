/* eslint-disable @typescript-eslint/no-explicit-any */
import { jwtDecode } from "jwt-decode";

const getToken = () => {
  const token = localStorage.getItem('Token');
  if (token !== null) {
    const decoded = jwtDecode(token);
    return decoded;
  }
  return []
};

const Fetch = async (url: string, fetchInfo: any) => {
  try {
    let firstResponse = await fetch(url, fetchInfo)
      .then((res) => {
        if (res.headers.get("Content-Type")?.includes("application/json"))
          return res.json();
        if (res.headers.get("Content-Type") === "application/pdf")
          return res.arrayBuffer()
        return res.text()
      })
      .catch((err) => err);

    if (firstResponse.error === 'EXPIRED_TOKEN') {


      const secondResponse = await fetch(url, {
        ...fetchInfo,
        headers: {
          ...fetchInfo.headers,
        }
      })
        .then((res) => {
          if (res.headers.get("Content-Type")?.includes("application/json"))
            return res.json();

          if (res.headers.get("Content-Type") === "application/pdf")
            return res.arrayBuffer();

          return res.text()
        })
        .catch((err) => err);

      firstResponse = secondResponse;
    }

    return firstResponse;
  } catch (error) {
    console.log('Error in GET Method ', { url });
    console.error(error);
    return error;
  }
};

export { Fetch, getToken };
