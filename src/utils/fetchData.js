export const exerciseOptions= {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'eb7f71512dmshe7d51e3a60324eep19746fjsn29852f636a75', //OR process.env.REACT_APP_RAPI_API_KEY 
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    }
  };

export const fetchData= async (url, options)=> {
    const response= await fetch(url, options); //fetches data from API
    const data= await response.json(); //extract data

    return data;
}