import axios from 'axios'

const token = localStorage.getItem("userToken") ;
const instance = axios.create({
    baseURL : `https://secondmorelive.herokuapp.com`,
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
    }
    
})
console.log(123,token);
// instance.defaults.headers.common["Authorization"] = `Bearer ${token}`
export default instance;

