import axios from 'axios';
const config = {
    headers: { Authorization: `Bearer fcd04ff81d0d73524478f5ae5b3f6f0d300535efe0c5129e219f6b8e99823c16`,'Content-Type': 'application/x-www-form-urlencoded'  }
};
export const getUser = (page) => {
return axios.get(`https://gorest.co.in/public/v2/users?page=${page}&per_page=10`,config);
}