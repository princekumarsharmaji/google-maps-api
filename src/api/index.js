import axios from "axios";

const URL ="https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";



  export const getPlacesData = async(sw,ne) => {
      try{
          const {data:{data}} = await axios.get(URL,{
    
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
            },
            headers: {
                'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
                'x-rapidapi-key': '8264e65a12msh5abf99ff1d1864bp18e504jsnb8b6f467cc5a'
              }});
             return data;
      
        }catch(error){
            console.log(error)
      }
  }
  
 