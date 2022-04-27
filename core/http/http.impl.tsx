import Axios from 'axios';
import {EndPointsEnum} from '../../enums/endpoints.enum';
import {enviroment} from '../../enviroments/enviroment';

export const get = async (params = '') => {
    return Axios.get(
        enviroment.host +
        EndPointsEnum.PRODUCTS +
        EndPointsEnum.SEPARATOR +
        params
    ).then(response => {
        return Promise.resolve(response);
    }).catch(error => {
        return Promise.reject(error);
    })
}
