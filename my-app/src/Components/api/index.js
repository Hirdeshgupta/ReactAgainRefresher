const axios = require("axios").default;
const URL ='https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';
export const fetchRestuarants= async({ne,sw},type)=>{
    try{
        const res =  await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,{
            method: 'GET',
            url: `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
            },
            headers: {
              'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
              'x-rapidapi-key': 'd748bf25ccmshd7853f7c3faa2a6p1c942ejsna037f64c4bbe'
            }
        });
        return res.data.data;
    }
    catch(err)
    {
        console.log(err)
    }
}
