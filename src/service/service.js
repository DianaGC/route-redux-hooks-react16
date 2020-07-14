import axios from 'axios';
const url= 'https://jsonplaceholder.typicode.com';

export const getUsersByIdService = (id) =>{
    axios.get(url+'/posts?userId='+id)
    .then((response) =>{ return response})
    .catch(error => console.log(error))
}

export const getUsersByIdServiceBad = (id) =>{
    axios.get(url+'/posts?userId='+id).then((response) =>{ return response})
    .catch(error => console.log(error))
}