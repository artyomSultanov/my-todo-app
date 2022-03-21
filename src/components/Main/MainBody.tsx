import React from "react";
import { ITasks } from "./Interfaces";
import MainForm from "./MainForm";
import MainTasks from "./MainTasks";

const MainBody: React.FC<{ tasks: ITasks }> = ({ tasks }) => {
  return (
    <>
      <MainForm />
      <MainTasks tasks={tasks} />
    </>
  );
};

export default MainBody;
