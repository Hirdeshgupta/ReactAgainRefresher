const axios = require("axios").default;
const URL ='https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';
export const fetchRestuarants= async({sw,ne})=>{
    try{
        const res =  await axios.get(URL,{
            method: 'GET',
            url: URL,
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
            },
            headers: {
              'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
              'x-rapidapi-key': '610e5e0aaamsha33ac7cebaca60bp1204e6jsn0f01f006693a'
            }
        });
        return res.data.data;
    }
    catch(err)
    {
        console.log(err)
    }
}
