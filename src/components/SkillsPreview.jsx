import "../styles/SkillsPreview.css";

function SkillsPreview({ skills }) {
  return (
    skills !== "" && (
      <div className="skills-preview">
        <p className="sect-head">SKILLS</p>
        <hr />

        <p>{skills}</p>
      </div>
    )
  );
}

export default SkillsPreview;
