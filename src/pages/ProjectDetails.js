import Projects from "../data/Projects";

function ProjectDetails() {
  return (
    <>
      <h1>{Projects.title}</h1>
      <p>{Projects.description}</p>
      {/* <img src="" /> */}
      <button>GitHub</button>
      <button>Deployed Site</button>
    </>
  )
}

export default ProjectDetails