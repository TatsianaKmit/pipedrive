import axios from 'axios';

export async function PostServices(data) {
    const API_KEY = 'b21653194326343621b603e07c7ad747e58c5900'
    const baseURL = 'https://api.pipedrive.com/v2/';

    try {
        const result = await axios.post(`${baseURL}deals?api_token=${API_KEY}`, data)
        return result.status;
    } catch (error) {
        return false;
    }
}

export default PostServices;