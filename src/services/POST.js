import axios from 'axios';

export async function PostServices(phone, email, firstName, lastName, jobType, jobSource, address, city, state, zipCode, area, startDate, startTime, endTime, technician) {
    const baseURL = 'http://localhost:3001/';
    const data = {
        phone, email, firstName, lastName, jobType, jobSource, address, city, state, zipCode, area, startDate, startTime, endTime, technician
    };

    try {
        const result = await axios.post(`${baseURL}/users`, data)
        return result.status;
    } catch (error) {
        return error;
    }
}

export default PostServices;

// "server": "json-server -w server/db.json -p 3001",