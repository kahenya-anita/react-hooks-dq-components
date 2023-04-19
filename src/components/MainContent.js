import React from "react";
import GenrePicker from "./GenrePicker";
import SideMenu from "./SideMenu";

function MainContent() {
  return (
    <main>
      <GenrePicker />
      <AlbumList />
    </main>
  );
}

export default MainContent;
