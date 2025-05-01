import axios from 'axios';

// 설정을 통해 axios 객체 생성
const apiAxios = axios.create({
    baseURL: 'http://localhost:8080'
});

export const sendEmail = async (email) => {
    const response = await apiAxios.post('/email/send', {email : email});
    return response.data;
}

export const verifyEmail = async (email, code) => {
    const response = await apiAxios.post('/email/verify', {email : email, code : code});
    if (response.data === 200) {
        return response.data;
    } else {
        
    }
}