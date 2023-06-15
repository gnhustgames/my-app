import axios from 'axios';

export const getPostDataEx = () => {
return axios.get('https://gorest.co.in/public/v2/users');
}