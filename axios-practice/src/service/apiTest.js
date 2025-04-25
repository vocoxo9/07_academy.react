import axios from 'axios';

export async function getCatImages(){
    // url : https://api.thecatapi.com/v1/images/search
    const response = await axios.get('https://api.thecatapi.com/v1/images/search');
    //console.log(response);
    return response.data;
}