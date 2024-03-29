import React from "react";
import styled from "@emotion/styled";
import Task from "./Task";
import { Droppable, Draggable } from "react-beautiful-dnd";

const Container = styled("div")`
  margin: 8px;
  border-radius: 2px;
  // border: 1px solid lightgrey;
  display: flex;
  flex-direction: column;
  width: 220px;
  background: white;
`;
const Title = styled("p")`
  padding: 8px;
`;

const TaskList = styled("div")`
  padding: 6px;
  flex-grow: 0.5;
  text-align: -webkit-center;
  transition: background-color ease 0.2s;
  background-color: ${props =>
    props.isDraggingOver ? "#F1F2ED" : "#d3d3d3"};
  max-width: ${props =>
    props.isDraggingOver ? "220px" : "220px"};
`;
const Column = ({ tasks, column, index }) => {

  return (
    <Draggable draggableId={column.id} index={index} type="column"
    >
      {provided => (
        <>
          <Container
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <Title className="dnd-text-before" id={`q-${column.id}`}>
              <strong> 
                {column.id} 
              </strong>
              &nbsp;
              {column.title}
            </Title>
            <Droppable droppableId={column.id} type="task" id="item">
              {(provided, snapshot) => (
                <TaskList
                  isDraggingOver={snapshot.isDraggingOver}
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {tasks.map((task, index) => (
                    <Task key={task.id} task={task} index={index} />
                  ))}
                  {provided.placeholder}
                </TaskList>
              )}
            </Droppable>
          </Container>
        </>
      )}
    </Draggable>
  );
};

export default Column;