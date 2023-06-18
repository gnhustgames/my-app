import axios from 'axios';

export const updateUser = (data) => {
    const config = {
        headers: { Authorization: `Bearer fcd04ff81d0d73524478f5ae5b3f6f0d300535efe0c5129e219f6b8e99823c16`,"Content-Type":'application/json' },
        
    };
return axios.put(`https://gorest.co.in/public/v2/users/${data.id}`,data,config);
}