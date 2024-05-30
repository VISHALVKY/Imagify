import axios from "axios";

// Your Unsplash API key
const clientId = '4BpQNFz-Xwd3vFQXLuGSLj3j8CwiwU6kbNWrtO9Kel0';

const searchImages = async (term) => {
    try {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            headers: {
                Authorization: `Client-ID ${clientId}`,
            },
            params: {
                query: term
            }
        });
        return response.data.results;
    } catch (error) {
        if (error.response) {
            console.error('Error status:', error.response.status); // 401
            console.error('Error data:', error.response.data);
        } else {
            console.error('Error message:', error.message);
        }
        return [];
    }
};

export default searchImages;
