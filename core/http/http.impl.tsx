import Axios from 'axios';
import {enviroment} from '../../enviroments/enviroment';

export const get = async (params = '') => {
    console.log(enviroment.host);
    return Axios.get(
        `${enviroment.host}/products/${params}`
    ).then(response => {
        return Promise.resolve(response);
    }).catch(error => {
        return Promise.reject(error);
    })
}
