import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="fixed-navbar">
      <nav>
        <img
          src="https://www.cbit.ac.in/wp-content/uploads/2023/04/CBIT-LOGO-2023.png"
          alt="Library Logo"
        />
        <h1 style={{ color: '#a16b15', fontSize: '18px' }} className="heading">
          Library & Information Centre(CBIT)<br />
          (An UGC Autonomous. UGC-NAAC, AICTE-NBA, ISO Accredited Institute)<br />
          Gandipet, Hyderabad - 500 075. Telangana, India
        </h1>
        <div className="nav-buttons">
          {/* <Link to="/student-registration" style={{ fontWeight: 'bold', fontSize: '16px' }}>Student Registration</Link> */}
          <Link to="/student-login" style={{ fontWeight: 'bold', fontSize: '16px', display: 'inline-block', padding: '10px 15px', margin: '0 10px', textDecoration: 'none', color: '#991E20', backgroundColor: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
  Student Login
</Link>
<button style={{ fontWeight: 'bold', fontSize: '16px', display: 'inline-block', padding: '10px 15px', margin: '0 10px', textDecoration: 'none', color: '#991E20', backgroundColor: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
  Admin
</button>

        </div>
      </nav>
    </div>
  );
};

export default Navbar;
