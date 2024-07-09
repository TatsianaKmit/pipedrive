import axios from 'axios';

export async function PostServices(data) {
    const baseURL = 'http://localhost:3001';

    try {
        const result = await axios.post(`${baseURL}/users`, data)
        return result.status;
    } catch (error) {
        return false;
    }
}

export default PostServices;