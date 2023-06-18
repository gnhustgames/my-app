import axios from 'axios';

export const createUser = (data) => {
    // const form=new FormData();
    // form.append("email",data.email);
    // form.append("name",data.name);
    // form.append("gender",data.gender);
    // form.append("status",data.status);
    // console.log(form);
    const config = {
        headers: { Authorization: `Bearer fcd04ff81d0d73524478f5ae5b3f6f0d300535efe0c5129e219f6b8e99823c16` },
      
    };
    return axios.post('https://gorest.co.in/public/v2/users',data,config)
  }