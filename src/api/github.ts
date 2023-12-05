import axios from 'axios';

const gitApi = {
    getUsername: async (username: string) => {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        return response.data;
    }
}

export default gitApi;