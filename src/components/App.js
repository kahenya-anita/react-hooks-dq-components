import React from "react";
import MainContent from "./MainContent";
import TopMenu from "./TopMenu";
import SideMenu from "./SideMenu";

function App() {
  return (
    <div className="app-container">
      <TopMenu />
      <SideMenu />
      <MainContent />
    </div>
  );
}

export default App;
