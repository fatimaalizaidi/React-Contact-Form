import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-12">
          <div className={styles.header}>
            <h1>CONTACT US</h1>
            <h3>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
