import axios from 'axios';
import { API_KEY } from './API_KEY';

export async function PostServices(phone, email, firstName, lastName, jobType, jobSource, address, city, state, zipCode, area, startDate, startTime, endTime, technician) {
    const baseURL = 'https://api.pipedrive.com/v1';
    const params = {
        api_token: API_KEY,
    };
    const data = {
        phone, email, firstName, lastName, jobType, jobSource, address, city, state, zipCode, area, startDate, startTime, endTime, technician
    };

    try {
        const result = await axios.post(`${baseURL}/deals`, data, params)
        return result.status;
    } catch (error) {
        return error;
    }
}

export default PostServices;

