import { h, Fragment } from "preact";
import { useState } from "preact/hooks";
import "./projectsGrid.css";

interface Project {
  id: number;
  documentId: string;
  title: string;
  description: string;
  type: string;
  github_link: string;
  deploy_link: string;
  image: { id: number; documentId: string; url: string }[];
}

interface ProjectTabsProps {
  projects: Project[];
  host: string;
}

export default function ProjectTabs({ projects, host }: ProjectTabsProps) {
  const [activeTab, setActiveTab] = useState<string>("all");

  const projectTypes = [
    "all",
    ...new Set(projects.map((project) => project.type)),
  ];

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((project) => project.type === activeTab);

  return (
    <div className="project-tabs">
      <div className="tabs-list">
        {projectTypes.map((type) => (
          <button
            key={type}
            onClick={() => setActiveTab(type)}
            className={`tab ${activeTab === type ? "active" : ""}`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <img src={`${host}${project.image[0].url}`} alt={project.title} />
            </div>
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
