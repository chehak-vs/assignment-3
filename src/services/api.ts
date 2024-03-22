import { API_URL } from "../constants";

const fetchData = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const fetchedData = await response.json();
      fetchedData.sort((a, b) => b.active - a.active);
      return fetchedData;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };
  
  export default fetchData;
  