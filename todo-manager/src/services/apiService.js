import axios from 'axios';
import { errorAlert } from './toastUtils';

// 설정을 통해 axios 객체 생성
const apiAxios = axios.create({
    baseURL: 'http://localhost:8080',
    //withCredentials : true      // 쿠키 또는 인증 헤더를 포함하여 요청할 것인지에 대한 설정
});

// 통신 오류 발생 시 처리
apiAxios.interceptors.response.use(function (response){
    return response;
}, function(error){
    if(error.status == 401) {
        // localStorage의 logined 값을 제거
        localStorage.removeItem("logined");
        location.href = "/";
    }
    errorAlert("문제 발생");
    // return Promise.reject(error);
});

export const sendEmail = async (email) => {
    const response = await apiAxios.post('/email/send', { email: email });
    if (response.status == 200) return response.data;
}

export const verifyEmail = async (email, code) => {
    const response = await apiAxios.post('/email/verify', { email: email, code: code });
    if (response.status == 200) return response.data;
    // else throw new AxiosError("인증코드 검증 실패");
}

export const checkId = async (id) => {
    const response = await apiAxios.post('/checkId', { id: id });
    // status : 통신 상태코드, data : 응답 데이터
    if (response.status == 200) return response.data;
}

export const signupUser = async (user) => {
    const response = await apiAxios.post('/user', user);
    if (response.status == 200) return response.data;
}

// user => { id : 아이디, pwd : 비밀번호 }
export const loginUser = async (user) => {
    const response = await apiAxios.post('/login', user);
    if (response.status == 200) return response.data;
}

export const getTodoList = async() => {
    const response = await apiAxios.get('/todo');
    return response.data;
}

export const insertTodo = async(content) => {
    const response = await apiAxios.post('/todo', { content : content });
    return response.data;
}