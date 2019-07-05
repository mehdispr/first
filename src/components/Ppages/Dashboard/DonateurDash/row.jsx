import React from 'react';


function Row({id,titre,montant,donnation}){
    
    return (
        <tr>
            <th scope="row">{id}</th>
            <td>{titre}</td>
            <td>{montant}</td>
            <td>{donnation}</td>
            <td><a href='#demande' className='text-primary'><i className="far fa-eye"></i></a></td>
        </tr>
    );
}
 
export default Row;
