import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";


export default function SocialFollow() {
  return (
    <div >
      <p className="h3" >Follow Us!</p>
            <a href="https://www.facebook.com/TamidAtFlorida"
            className="facebook social">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://instagram.com/tamidatflorida?igshid=1oqcg6x5ynp3r"
            className="instagram social">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>

    </div>
  );
}