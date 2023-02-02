import { useParams } from "react-router-dom";
import findProject from "../utilities/findProject";

function ProjectDetails() {
  const {ProjectDetails} = useParams()
  const project = findProject(ProjectDetails)
  return (
    <>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      {/* <img src="" /> */}
      <button>GitHub</button>
      <button>Deployed Site</button>
    </>
  )
}

export default ProjectDetails