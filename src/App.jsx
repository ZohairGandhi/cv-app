import { useState } from "react";
import "./App.css";
import CVDetails from "./components/CVDetails";
import Preview from "./components/Preview";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  function updatePersonalInfo(updatedInfo) {
    setPersonalInfo(updatedInfo);
  }

  return (
    <>
      <header>
        <h1>CV Builder</h1>
      </header>

      <div className="details-preview-container">
        <CVDetails updatePersonalInfo={updatePersonalInfo} />
        <Preview personalInfo={personalInfo} />
      </div>
    </>
  );
}

export default App;
