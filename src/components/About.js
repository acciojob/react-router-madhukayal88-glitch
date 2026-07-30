import React from 'react';

function About() {
  return (
    <div className="page-container">
      <h2>📖 About Page</h2>
      <p className="about-message">This is a sample React Router program.</p>
      <div className="page-content">
        <p>This application demonstrates how to use React Router for navigation.</p>
        <p>Features:</p>
        <ul>
          <li>BrowserRouter for routing</li>
          <li>Routes and Route for page rendering</li>
          <li>Link components for navigation</li>
          <li>Dynamic URL updates</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
