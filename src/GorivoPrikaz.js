import React from 'react';
import PrikazCijene from "./PrikazCijene";


function GorivoPrikaz ({podaci}) {

    let goriva = [];
    podaci.forEach((element,index) => {
          
      goriva.push(
      <div key = {index} >
        <h5 className="text-center text-primary bg-light border border-primary border-rounded p-2">{podaci[index].naziv}</h5>
        <PrikazCijene gorivo={podaci[index].podaci}/>
      </div>)
      })
      
      return <div className="container py-3">{goriva}</div>
}
  

export default GorivoPrikaz;
