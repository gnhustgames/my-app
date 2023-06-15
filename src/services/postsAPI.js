import axios from 'axios';

export const getPostData = () => {
return axios.get('https://jsonplaceholder.typicode.com/posts');
}