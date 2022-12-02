export default function ProjectCard() {
  return (
    <div className="project__card">
      <div className="project__header"></div>
      <div className="project__body">
        <h3>Project Name</h3>
        <p>Short description</p>
        <ul className="project__tech">
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JS</li>
        </ul>
        <button>See more</button>
      </div>
    </div>
  );
}
