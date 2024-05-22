import React from 'react';
 import '../App.css';

const Sidebar = () => {
    const menuItems = [
        'Home',
        'Procedure for Applying for NOC',
        'Urban Guidelines',
        'Details on Public Projects',
        'Details on Large Building Projects',
        'Feedback',
        'FAQ',
        'Contact Us',
        'Circular on Covid 19',
        'Height Restrictions in Delhi',
        'Height Restrictions in Mumbai',
        'Ciculars on color coded map of CPMs in Delhi ',
        'Ciculars',
        'Ciculars related to Online Applications ',        
        'Geo Spatial Delhi Limited (GSDL)',
        'Logout'
      ];
  return (
   
    <div className="sidebar">
      {menuItems.map((itemName, index) => (
        <div className="sidebar-item" key={index}>
        {itemName}
      </div>
        // <div key={index} className="sidebar-item">menuItems </div>
      ))}
    </div>
  );
};

export default Sidebar;

// const sidebarStyles = `
//   .sidebar {
//     width: 180px; /* Adjust the width as needed */
//     height: 100vh; /* Full height of the viewport */
//     background-color: #619afb; /* Background color of the sidebar */
//     color: white; /* Text color */
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     padding: 10px 0;
//     box-sizing: border-box;
//   }

//   .sidebar-item {
//     width: 100%; /* Full width of the sidebar */
//     padding: 0px;
//     text-align: center;
//     border-bottom: 1px solid #145; /* Divider between items */
//   }

//   .sidebar-item:hover {
//     background-color: #455; /* Hover effect */
//   }
// `;

// // Adding the styles to the document head
// const styleSheet = document.createElement("style");
// styleSheet.type = "text/css";
// styleSheet.innerText = sidebarStyles;
// document.head.appendChild(styleSheet);
