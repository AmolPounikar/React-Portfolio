import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../Db/data";
import GithubIcon from "@material-ui/icons/GitHub";
import "../Styles/ProjectDisplay.css";
export default function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} />
      <p>
        <b>Skills :</b> {project.skills}
      </p>
      <GithubIcon />
    </div>
  );
}
