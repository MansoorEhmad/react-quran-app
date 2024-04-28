
export const get =  async (endPoints) => {

    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '27839e9a69msh5e0423828ff7c74p1ff6e2jsn1b13042961f3',
              'X-RapidAPI-Host': 'al-quran1.p.rapidapi.com'
        }
      }
   
    const res = await fetch('https://al-quran1.p.rapidapi.com'+endPoints,options);
        
    const data = await res.json();
    return data;
}