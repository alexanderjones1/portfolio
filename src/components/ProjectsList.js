import ProjectPreview from "./ProjectPreview";

function ProjectsList(props) {
  return (
    <>
      <h1>Projects</h1>
      <section>
        {props.projects.map((project) =>
        <li key={project.title}>
          <ProjectPreview project={project} />
        </li>
        )}
      </section>
    </>
  )
}

export default ProjectsList