import React from "react";
import styles from "./Details.module.css";
import { useState } from "react";
import Button from "../Button/Button";

const Details = () => {
  const [name, setName] = useState("Anush");
  const [email, setEmail] = useState("Anush");
  const [text, setText] = useState("Anush");

  const HandleClick = (event) => {
      event.preventDefault()
     setName(event.target[0].value)
     setEmail(event.target[1].value)
     setText(event.target[2].value)
     console.log(event.target[0].value)
    }
  



  return (
    <form onSubmit={HandleClick} className={styles.contact}>
      <div className={styles.inputbox}>
        <label htmlFor="name">Name</label>
        <input className="w-100" type="text" />
      </div>

      <div className={styles.inputbox}>
        <label htmlFor="email">Email</label>
        <input className="w-100" type="email" />
      </div>
      <div className={styles.inputbox}>
        <label htmlFor="text">Text</label>
        <textarea className={`w-100 ${styles.textbox}`} type="text" />
      </div>
      <div className="col-lg-12 d-flex justify-content-end ">
        <Button  text="SUBMIT" />
      </div>
      <div>{name + "  " + email + "  " + text }</div>
    </form>
  );
};

export default Details;
