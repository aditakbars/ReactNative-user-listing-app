import axios from 'axios';

const fetchDataFromAPI = async () => {
    try {
        const response = await axios.get('https://api.jikan.moe/v4/top/anime');
        const animeData = response.data.data;
        return animeData;
    } catch (error) {
        console.error('Error fetching data from API:', error);
        return [];
    }
};

export default fetchDataFromAPI;
