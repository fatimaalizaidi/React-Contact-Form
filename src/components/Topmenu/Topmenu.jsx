import React from "react";
import styles from "./Topmenu.module.css";


const Topmenu = () => {
  return (
    <div className="container">
      <div className="row">
        <div className={styles.topmenu}>
          <div className="col-lg-3">
            <div className={styles.logo}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQltIAHUYT6u7GKhj-UIX_fU1Pf0sySCFH_aw&s"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-9">
            <ul >
              <li>News</li>
              <li>About Us</li>
              <li>Contact</li>
              <li>Details</li>
            </ul>
          </div>
         
        </div>
      </div>
    </div>
  );
};
export default Topmenu;