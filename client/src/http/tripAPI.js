import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";


export const createTrip = async (device) => {
    const {data} = await $authHost.post('api/trip', device)
    return data
}

export const fetchDevices = async (typeId, brandId, page, limit= 5) => {
    const {data} = await $host.get('api/device', {params: {
            typeId, brandId, page, limit
        }})
    return data
}

export const fetchOneDevice = async (id) => {
    const {data} = await $host.get('api/device/' + id)
    return data
}