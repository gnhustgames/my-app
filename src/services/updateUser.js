import axios from 'axios';
const config = {
    headers: { Authorization: `Bearer fcd04ff81d0d73524478f5ae5b3f6f0d300535efe0c5129e219f6b8e99823c16` }
};
export const updateUser = (id) => {
return axios.post(`https://gorest.co.in/public/v2/users/${id}`,config);
}