import React from "react";
import styles from "./Form.module.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import Details from "../Details/Details";

const Form = () => {


  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="row">
            <div className="col-lg-6 ">
              <Button text="VIA SUPPORT CHAT" icon={<MdMessage />} />
            </div>
            <div className="col-lg-6 ">
              <Button text="VIA CALL" icon={<MdCall />} />
            </div>
          </div>

          <div className="col-lg-12">
            <Button isOutline={true} text="VIA EMAIL FORM" icon={<MdEmail />} />
          </div>
          <div className="col-lg-12">
            <Details />
          </div>
         
        </div>

        <div className="col-lg-6">
          <div className={styles.form_img}>
            <img
              src="https://unblast.com/wp-content/uploads/2020/09/Contact-Us-Vector-Illustration-Part-02-1.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
