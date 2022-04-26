import axios from 'axios'


const Base_Url = `${process.env.REACT_APP_DNS_API_PREFETCH_URL}/api/1.0/`;

const Instance1 = () => {
    return axios.create({
        accept: ' application/json',
        baseURL: Base_Url,
        timeout: 60000,
    });
}
const Instance = () => {
    const token=localStorage.getItem('access_token')
    console.log('Token',token)
   
    return axios.create({
        headers: {"Authorization" : `Bearer ${token}`,
        'Content-Type':'application/json'
        
    },
        // headers: {'Authorization':`${token}`},
        accept: ' application/json',
        baseURL: Base_Url,
        timeout: 60000,
        

    });
}




const signUp = (data) => {
    const instance = Instance1();
    return instance.post(`user`,data);
};


const login = (data) => {
    const instance = Instance1();
    return instance.post(`login`,data);
};







export default {
    signUp,
    login,

   
}
