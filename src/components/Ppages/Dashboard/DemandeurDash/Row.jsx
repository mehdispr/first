import React from 'react';
import Axios from 'axios';


function Row({id_proj,id,titre,montant,reste,date_fin,vue}){
    const proj = id_proj
    
    const dlt = () =>{
        
        Axios.delete(`http://127.0.0.1:8000/api/projet/${proj}`)
        .then(window.location.reload())
        .catch(error => console.log(error))
    }
    
    return (
        <React.Fragment>
        <tr>
            <th scope="row">{id+1}</th>
            <td>{titre}</td>
            <td>{montant}</td>
            <td>{reste}</td>
            <td>{date_fin}</td>
            <td>{vue}</td>
            <td>
                <button className='text-primary'><i className="far fa-eye"></i></button>
                <button className='text-primary ml-4'><i className="far fa-edit"></i></button>
                <button className='text-danger ml-4' onClick={dlt}><i className="far fa-trash-alt"></i></button>
            </td>
        </tr>
      </React.Fragment>
    );
}
 
export default Row;
