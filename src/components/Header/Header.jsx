import React from "react";
import "./Header.css";
import { DateTime } from "luxon";

function Header() {
  const currentDate = DateTime.now().setLocale("fr");

  const formattedDate = currentDate.toFormat("cccc dd LLLL yyyy");
  return (
    <div>
      <div className="wordings">
        <h1>CITATION ET ANNIVERSAIRES</h1>
        <p>{formattedDate}</p>
      </div>
    </div>
  );
}

export default Header;
