
async function dohvatiPodatke() {
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  let url ="http://cijenegoriva.info/CijeneGoriva.aspx";
  
  let response = await fetch(proxyurl + url);
      if(!response.ok) {
        throw new Error('Ups!');
      }
      let text = await response.text();
  
    let data= new window.DOMParser().parseFromString(text, "text/html")
   
         let podaci = [];
        let brojac = 0;
         let nazivi = data.getElementsByTagName("h2");
          const tablice = data.getElementsByTagName("table");
          for (let tablica of tablice) {

           let spremiRed= [[]]
           let brojiUkupno =0;
           let brojiRed= 1;
            let redovi=tablica.getElementsByTagName("td")
            for (let red of redovi) {
              if(!spremiRed[brojiUkupno]) {
                spremiRed.push([])
              }
             spremiRed[brojiUkupno].push(red["innerHTML"])
            if(brojiRed % 3 === 0 ) {
                brojiRed=0;
             
             brojiUkupno++;
           } 
             
             brojiRed++;
            }

           podaci.push({naziv:nazivi[brojac]["innerHTML"], podaci: spremiRed})
           brojac++;
           }
 
           return podaci;
      
       
}


export default dohvatiPodatke;
