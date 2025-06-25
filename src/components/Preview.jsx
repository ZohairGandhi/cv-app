import "../styles/Preview.css";

function Preview({ personalInfo }) {
  return (
    <div className="preview">
      <h1>{personalInfo.name}</h1>
      <h2>{personalInfo.email}</h2>
      <h2>{personalInfo.phone}</h2>
    </div>
  );
}

export default Preview;
