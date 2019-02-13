import React from 'react';

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
    </div>
  );
}

export default Header;
