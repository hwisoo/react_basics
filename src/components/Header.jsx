import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return(
    <div>
      <style jsx>{`
            h1 {
              text-align: center;
              background-color: grey;
              color: white;
              margin: 0;
              padding :10px;
            }
          `}</style>
      <h1>Help Queue</h1>
      <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>
    </div>
  );
}

export default Header;
