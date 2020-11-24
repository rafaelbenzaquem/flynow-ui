import AsyncStorage from '@react-native-community/async-storage';

const BASE_API = 'https://localhost:8080';


export default {

    findAllServices: async () => {
        const req = await fetch(`${BASE_API}/services`);

        const json = await req.json();
        return json;
    },


    findServicesByType: async (type) => {
        const req = await fetch(`${BASE_API}/services/type/${type}`);

        const json = await req.json();
        return json;
    }


};