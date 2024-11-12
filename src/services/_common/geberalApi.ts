/* eslint-disable @typescript-eslint/no-explicit-any */
import { API_URL } from "../../common/const";
import { Fetch } from "../_common/api";

class GeneralApi {
  async get(url: string): Promise<any> {
    try {
      const response = await Fetch(`${API_URL}${url}`, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
        }
      });

      return response;
    } catch (error) {
      console.log('Error in GET Method ', { url });
      console.error(error);
      return error;
    }
  }

  async post(url: string, data: any): Promise<any> {
    try {
      const response = await fetch(`${API_URL}${url}`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then((res) => res.json());
      return response;
    } catch (error) {
      console.error(error);
      console.log('Error in POST Method ', { url, data });
    }
  }

  async put(url: string, body?: any, formData?: any): Promise<any> {
    try {
      let response: any;
      if (body)
        response = await Fetch(`${API_URL}${url}`, {
          method: 'PUT',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(body)
        });
      if (formData)
        response = await Fetch(`${API_URL}${url}`, {
          method: 'PUT',
          body: formData
        });
      return response;
    } catch (error: any) {
      console.error(error);
      console.log('Error in PUT Method ', { url });
      return { message: 'Error' };
    }
  }

  async delete(url: string): Promise<any> {
    try {
      const response = await Fetch(`${API_URL}${url}`, {
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json"
        },
      });
      return response;
    } catch (error: any) {
      console.error(error);
      console.log('Error in PUT Method ', { url });
      return { message: 'Error' };
    }
  }
}

export default new GeneralApi();
