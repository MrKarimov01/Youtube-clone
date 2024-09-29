import axios from "axios";

const BASE_URL = 'youtube-v31.p.rapidapi.com'
const options = {

    params: {
     
        maxResults: '50'
      },
      headers: {
        'x-rapidapi-key': import.meta.env.VITE_API_KEY,
        'x-rapidapi-host': BASE_URL
      }
};


// 'x-rapidapi-key': import.meta.env.VITE_API_KEY,
// 'x-rapidapi-host': BASE_URL,


export const ApiService = {
    async fetching(url){
        const response = await axios.get(`https://${BASE_URL}/${url}`, options)
        return response.data

    }
}