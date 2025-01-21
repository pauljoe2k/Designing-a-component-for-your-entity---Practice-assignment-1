// File: cart/usercard.jsx
import React from "react";

const Usercard = () => {
  // Static variables for user details
  const profilePhoto = "https://picsum.photos/200/300/?blur"; // Placeholder image URL
  const name = "Paulose";
  const email = "paulkoshy890@gmail.com";
  const phoneNumber = "96333982551  ";
  const address = "Christ University";

  // Inline CSS styles
  const cardStyle = {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    maxWidth: "400px",
    margin: "20px auto",
  };

  const photoStyle = {
    width: "80px",
    height: "80px",
    border: "2px solid #007bff",
    borderRadius: "50%",
  };

  const detailsStyle = {
    display: "flex",
    flexDirection: "column",
  };

  const nameStyle = {
    fontSize: "1.5em",
    margin: "0",
    color: "#333",
  };

  const textStyle = {
    margin: "5px 0",
    fontSize: "0.95em",
    color: "#555",
  };

  return (
    <div style={cardStyle}>
      <img src={profilePhoto} alt="Profile" style={photoStyle} />
      <div style={detailsStyle}>
        <h2 style={nameStyle}>{name}</h2>
        <p style={textStyle}>📧 {email}</p>
        <p style={textStyle}>📞 {phoneNumber}</p>
        <p style={textStyle}>📍 {address}</p>
      </div>
    </div>
  );
};

export default Usercard;
