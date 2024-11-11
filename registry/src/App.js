import "./CSS/App.css";

import CustomTab from "./JS/Tab.js";
import TabForm1 from "./JS/TabForm1.js";
import TabForm2 from "./JS/TabForm2.js";
import TabForm3 from "./JS/TabForm3.js";
import TabForm4 from "./JS/TabForm4.js";
import React, { useState } from "react";

function App() {
  const tabs = [
    { title: "Save the Date", id: 1 },
    { title: "Our Journey", id: 2 },
    { title: "Our schedule", id: 3 },
    { title: "Our Registry", id: 4 },
  ];
  const [currentTab, setCurrentTab] = useState(1);
  const validTabs = tabs.map((object) => (
    <CustomTab
      className={currentTab == object.id ? "activeTab" : ""}
      tab={object.title}
      key={object.id}
      id={object.id}
      onClick={() => handleTabClick(object.id)}
    />
  ));
  function handleTabClick(id) {
    setCurrentTab(id);
  }
  return (
    <div className="App">
      <header className="tab-header">{validTabs}</header>
      <div className="tab-content">
        {currentTab == 1 && <TabForm1 />}
        {currentTab == 2 && <TabForm2 />}
        {currentTab == 3 && <TabForm3 />}
        {currentTab == 4 && <TabForm4 />}
      </div>
    </div>
  );
}

export default App;
