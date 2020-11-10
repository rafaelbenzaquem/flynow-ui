const BASE_API = 'https://flynow-backend-prod.herokuapp.com';

export default {

    findAllServices: async () => {
        const req = await get(`${BASE_API}/services`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        });

        const json = await req.json();
        return json;
    },


    findServicesByType: async (type) => {
        const req = await get(`${BASE_API}/services/type/${type}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        });

        const json = await req.json();
        return json;
    }



};