import React from "react";
import styles from "../../pages/Greeting/Greeting.module.scss";

import { IoMdClose } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";

interface PopupGreetingProps {
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
  htmlClass: string;
}

const PopupInfo: React.FC<PopupGreetingProps> = ({
  setShowPopup,
  htmlClass,
}) => {
  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className={`${styles.popup} ${htmlClass}`}>
      <h3>Information for users</h3>
      <p>
        On this site you will find a lot of interesting information related to
        various areas of human life. If you would like to add or edit any
        information, please write in one of the following ways:
      </p>
      <ul>
        <li>
          <a href="mailto:azalexxx02@gmail.com" target="_blank">
            <span>
              <AiOutlineMail />
            </span>
            <p>azalexxx02@gmail.com</p>
          </a>
        </li>
        <li>
          <a href="https://t.me/TraceOfHumanity" target="_blank">
            <span>
              <BsTelegram />
            </span>
            <p>TraceOfHumanity </p>
          </a>
        </li>
      </ul>
      <div onClick={closePopup} className={styles.close}>
        <IoMdClose />
      </div>
    </div>
  );
};

export default PopupInfo;
