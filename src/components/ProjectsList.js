function ProjectsList(props) {
  console.log("this is props>>>>>", props);
  return (
    <>
      <h1>Projects</h1>
      <section>
        {props.projects.map((project) =>
        <li key={project.title}>
          {project.title}
          {project.image}
          <button>Check if out</button>
        </li>
        )}
      </section>
    </>
  )
}

export default ProjectsList