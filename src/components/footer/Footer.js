import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import { contactInfo } from "../../portfolio.js";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  return (
    <div className="footer-div">
      <Fade bottom>
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          <a
            href={`tel:${contactInfo.phone_num}`}
            className="footer-phone"
            target="_blank"
            style={{
              color: props.theme.secondaryText,
              padding: 10,
              textDecoration: "none",
            }}
          >
            <i className="fas fa-phone-alt">{`\t${contactInfo.phone_num}`}</i>
          </a>
          <a
            href={`mailto:${contactInfo.email_address}`}
            className="footer-email"
            target="_blank"
            style={{
              color: props.theme.secondaryText,
              padding: 10,
              textDecoration: "none",
            }}
          >
            <i className="fa fa-envelope">{`\t${contactInfo.email_address}`}</i>
          </a>
        </p>
      </Fade>
    </div>
  );
}
