import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  // Example apps data
  const apps = [
    { id: 1, name: "App 1" },
    { id: 2, name: "App 2" }
    // Add more apps as needed
  ];

  return (
    <div>
      <h1>Welcome to My App Showcase</h1>

      {/* List of Apps */}
      <ul>
        {apps.map(app => (
          <li key={app.id}>
            <Link to={`/app/${app.id}`}>{app.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
