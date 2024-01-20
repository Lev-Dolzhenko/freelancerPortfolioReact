import ProjectCard from '../components/projectCard/projectCard';

import {projects} from '../helpers/projectsInfo';

const Projects = () => {
    return (
        <main className="section">
        <div className="container">
            <h2 className="title-1">Projects</h2>
            <ul className="projects">
                {projects.map((project, index) => {
                    return (
                        <ProjectCard img={project.img} title={project.title} key={index} index={index}/>
                    )
                })}
            </ul>
        </div>
    </main>

    );
}
 
export default Projects;