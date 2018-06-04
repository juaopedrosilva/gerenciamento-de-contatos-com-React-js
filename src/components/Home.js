import React from 'react';
import Menu from './Menu'; 
import TableUser from './TableUsers';  

export default class Home extends React.Component {
  
   render() {
    return ( 
        <div>
          <Menu/>
          <TableUser/>  
        </div> 
    );
  }
} 
