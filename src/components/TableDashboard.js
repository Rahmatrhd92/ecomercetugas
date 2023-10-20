import React from 'react';
import { Table, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'

const TableDashboard = (props) => {
  return (
    
   <Container>
   <Button className="mt-4 text-white" variant="warning"><Link to="/update" className="text-decoration-none text-light"><strong>UPDATE +</strong></Link></Button>{' '}
    <div className='mt-4 text-center'>
    <Table className='mYtable' striped bordered hover variant="light">
    <thead>
      <tr>
        <th  className='text-white'>#</th>
        <th className='text-white'>Nama Product</th>
        <th className='text-white'>Harga Product</th>
        <th className='text-white'>Categori Product</th>
        <th className='text-white'>Detail Product</th>
        <th className='text-white'>Gambar</th>
        <th className='text-white'>Aksi</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Celana Levist</td>
        <td>Rp 500.000</td>
        <td>Jeans Pria</td>
        <td>celana levist original</td>
        <td><img src={props.image} style={{width:'78px', height:'51px'}}/></td>
        <td><a className='text-warning' href=''><FontAwesomeIcon icon={faPenToSquare }></FontAwesomeIcon></a>
        
        <a className='text-danger' href=''><FontAwesomeIcon icon={faTrash }></FontAwesomeIcon></a>
        </td>
        
      </tr>
      <tr>
        <td>1</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
      <td>2</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  </Table>
  </div>

  </Container>
  )
}



export default TableDashboard