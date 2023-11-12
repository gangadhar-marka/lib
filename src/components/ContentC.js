import React from 'react';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContentC = () => {
  const tableDarkColor = "#a71a1b";
  const tableLightColor = "#a16b15";
  const headingColor = "#991E20";
  const thColor = "#385728";
  const tdTextColor = "#FFFFFF"; // black color
  const tdBackgroundColor = "#000000"; // white color

  return (
    <div>
      <h3 style={{ color: headingColor }}>Teaching - Professional - Staff</h3>
      <Table striped bordered hover responsive variant="dark" style={{ backgroundColor: tableDarkColor }}>
        <thead>
          <tr>
            <th style={{ backgroundColor: thColor }}>S.No</th>
            <th style={{ backgroundColor: thColor }}>Name of the Staff</th>
            <th style={{ backgroundColor: thColor }}>Designation</th>
            <th style={{ backgroundColor: thColor }}>Qualifications</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ backgroundColor: tableLightColor }}>
            <td>01</td>
            <td>Dr. Srikanth Reddy, C</td>
            <td>Librarian & Head</td>
            <td>B.Sc., M.A., M.L.I.Sc., PGD-LAN, Ph.D</td>
          </tr>
        </tbody>
      </Table>

      <h3 style={{ color: headingColor }}>Non - Teaching - LIS Professional Staff</h3>
      <Table striped bordered hover responsive variant="dark" style={{ backgroundColor: tableDarkColor }}>
        <thead>
          <tr>
            <th style={{ backgroundColor: thColor }}>S.No</th>
            <th style={{ backgroundColor: thColor }}>Name of the Staff</th>
            <th style={{ backgroundColor: thColor }}>Designation</th>
            <th style={{ backgroundColor: thColor }}>Qualifications</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ backgroundColor: tableLightColor }}>
            <td>01</td>
            <td>Mr. Ramchandra Reddy, M.</td>
            <td>Jr. Library Assistant</td>
            <td>B.A., M.L.I.Sc.</td>
          </tr>
          <tr style={{ backgroundColor: tableLightColor }}>
            <td style={{ color: tdTextColor, backgroundColor: tdBackgroundColor, transition: 'color 0.5s, background-color 0.5s' }}>02</td>
            <td style={{ color: tdTextColor, backgroundColor: tdBackgroundColor, transition: 'color 0.5s, background-color 0.5s' }}>Mr. Ramulu, B.</td>
            <td style={{ color: tdTextColor, backgroundColor: tdBackgroundColor, transition: 'color 0.5s, background-color 0.5s' }}>Attender</td>
            <td style={{ color: tdTextColor, backgroundColor: tdBackgroundColor, transition: 'color 0.5s, background-color 0.5s' }}>6th Class</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </Table>

      <h3 style={{ color: headingColor }}>Non - Teaching - Administrative Staff</h3>
      <Table striped bordered hover responsive variant="dark" style={{ backgroundColor: tableDarkColor }}>
        <thead>
          <tr>
            <th style={{ backgroundColor: thColor }}>S.No</th>
            <th style={{ backgroundColor: thColor }}>Name of the Staff</th>
            <th style={{ backgroundColor: thColor }}>Designation</th>
            <th style={{ backgroundColor: thColor }}>Qualifications</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ backgroundColor: tableLightColor }}>
            <td>01</td>
            <td>Mr. Sarath Kumar, B.</td>
            <td>Asst. Programmer</td>
            <td>M.A., DCME.</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </Table>

      <h3 style={{ color: headingColor }}>Non - Teaching - Supporting Staff</h3>
      <Table striped bordered hover responsive variant="dark" style={{ backgroundColor: tableDarkColor }}>
        <thead>
          <tr>
            <th style={{ backgroundColor: thColor }}>S.No</th>
            <th style={{ backgroundColor: thColor }}>Name of the Staff</th>
            <th style={{ backgroundColor: thColor }}>Designation</th>
            <th style={{ backgroundColor: thColor }}>Qualifications</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ backgroundColor: tableLightColor }}>
            <td>01</td>
            <td>Mr. Shankaraiah, N.</td>
            <td>Attender</td>
            <td>5th Class</td>
          </tr>
          <tr style={{ backgroundColor: tableLightColor }}>
            <td style={{ color: tdTextColor, backgroundColor: tdBackgroundColor, transition: 'color 0.5s, background-color 0.5s' }}>02</td>
            <td style={{ color: tdTextColor, backgroundColor: tdBackgroundColor, transition: 'color 0.5s, background-color 0.5s' }}>Mr. Ramulu, B.</td>
            <td style={{ color: tdTextColor, backgroundColor: tdBackgroundColor, transition: 'color 0.5s, background-color 0.5s' }}>Attender</td>
            <td style={{ color: tdTextColor, backgroundColor: tdBackgroundColor, transition: 'color 0.5s, background-color 0.5s' }}>6th Class</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </Table>
    </div>
  );
};

export default ContentC;
