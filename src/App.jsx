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
  const [educationList, setEducationList] = useState([]);

  function updatePersonalInfo(updatedInfo) {
    setPersonalInfo({ ...personalInfo, ...updatedInfo });
  }

  function addEducationItem() {
    setEducationList([
      ...educationList,
      {
        id: crypto.randomUUID(),
        institution: "",
        location: "",
        degree: "",
        start: "",
        grad: "",
      },
    ]);
  }

  function updateEducationItem(id, updatedItem) {
    setEducationList(
      educationList.map((item) => {
        if (item.id === id) {
          return { ...item, ...updatedItem };
        }
        return item;
      }),
    );
  }

  const [experienceList, setExperienceList] = useState([]);
  function addExperienceItem() {
    setExperienceList([
      ...experienceList,
      {
        id: crypto.randomUUID(),
        employer: "",
        title: "",
        start: "",
        end: "",
        location: "",
        description: "",
      },
    ]);
  }

  function updateExperienceItem(id, updatedItem) {
    setExperienceList(
      experienceList.map((item) => {
        if (item.id === id) {
          return { ...item, ...updatedItem };
        }
        return item;
      }),
    );
  }

  return (
    <>
      <header>
        <h1>CV Builder</h1>
      </header>

      <div className="details-preview-container">
        <CVDetails
          personalInfo={personalInfo}
          updatePersonalInfo={updatePersonalInfo}
          educationList={educationList}
          addEducationItem={addEducationItem}
          updateEducationItem={updateEducationItem}
          experienceList={experienceList}
          addExperienceItem={addExperienceItem}
          updateExperienceItem={updateExperienceItem}
        />
        <Preview
          personalInfo={personalInfo}
          educationList={educationList}
          experienceList={experienceList}
        />
      </div>
    </>
  );
}

export default App;
