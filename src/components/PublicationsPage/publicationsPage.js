// PublicationsPage.js
import React from 'react';
import { projectimages, publications } from './path-to-your-config-file';

const PublicationsPage = () => {
  return (
    <div>
      {/* Section Projets */}
      <section>
        <h2>My Projects</h2>
        <div className="project-images">
          {projectimages.data.map((project) => (
            <div key={project.id} className="project-item">
              <img
                src={require(`${project.imagePath}`)}
                alt={project.name}
                className="project-image"
              />
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section Publications */}
      <section>
        <h2>Publications</h2>
        {publications.data.map((publication) => (
          <div key={publication.id} className="publication-item">
            <h3>{publication.name}</h3>
            <p>{publication.description}</p>
            <a href={publication.url} target="_blank" rel="noopener noreferrer">
              Read More
            </a>
          </div>
        ))}
      </section>
    </div>
  );
};

export default PublicationsPage;
