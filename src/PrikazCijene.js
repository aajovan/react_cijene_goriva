import React from 'react';

function PrikazCijene ({gorivo}) {
    let prikaz = [];
    gorivo.forEach((obj,index) => {
        prikaz.push(
        <tr key={index}>
            <th scope="row">{index+1}</th>
            <td className="sirina">{obj[0]}</td>
            <td className="sirina">{obj[1]}</td>
            <td className="sirina">{obj[2]}</td>

        </tr>)
    });
    return (

            <table className="table bg-light border table-striped border-rounded">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col" className="sirina">Gorivo</th>
                    <th scope="col" className="sirina">Benzinska</th>
                    <th scope="col" className="sirina">Cijena</th>
                </tr>
            </thead>
            <tbody>{prikaz}</tbody>
            </table>
            
    )
}

export default PrikazCijene;

