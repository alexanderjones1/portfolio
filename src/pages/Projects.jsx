import Projects from "../data/Projects"
import ProjectsList from "../components/ProjectsList"

function Project() {
  return (
    <>
      <ProjectsList projects={Projects} />
    </>
  )
}

export default Project