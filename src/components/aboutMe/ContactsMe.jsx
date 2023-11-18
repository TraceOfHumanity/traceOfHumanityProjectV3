import React from "react";
import styles from "./AboutMe.module.scss";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineMail,
} from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";

const ContactsMe = () => {
  return (
    <div className={styles.contacts}>
      <h2>Contacts</h2>
      <ul>
        <li>
          <a href="https://github.com/TraceOfHumanity" target="_blank">
            <AiFillGithub />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/alex-ovchar-847165256/"
            target="_blank"
          >
            <AiFillLinkedin />
          </a>
        </li>
        <li>
          <a href="https://t.me/TraceOfHumanity" target="_blank">
            <BsTelegram />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/AlexXxOvchar" target="_blank">
            <AiFillFacebook />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/traceofhumanity/" target="_blank">
            <AiFillInstagram />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/@TraceOfHumanity" target="_blank">
            <AiFillYoutube />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/@traceOfHumanity01" target="_blank">
            <AiFillYoutube />
          </a>
        </li>
        <li>
          <a href="mailto:azalexxx02@gmail.com" target="_blank">
            <AiOutlineMail />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ContactsMe;
