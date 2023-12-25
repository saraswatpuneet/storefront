import React, { useState } from "react";
import "./home.css";
import { emailsCollection } from "../firebase";
import { addDoc } from "firebase/firestore"; // <-- Important: Import addDoc

export default function Home() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNotifyMeClick = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(emailsCollection, {
        email,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div className="homeContainer">
      <h1 className="comingsoon">Coming Soon...</h1>

      <div className="emailAndButtonContainer">
        <input
          type="email"
          placeholder="Please enter your email address"
          className="emailInput"
          value={email} // Bind the input value to the state
          onChange={handleEmailChange}
        />
        <button onClick={handleNotifyMeClick} className="notifyButton">
          Notify me
        </button>
      </div>

      <p
        style={{
          marginTop: "2%",
          opacity: "0.5",
        }}
      >
        -_Notify me when App is launched_-
      </p>
    </div>
  );
}
