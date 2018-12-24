import React from "react";
import ReactDOM from "react-dom";
import Block, { Row, Column } from "./components/Block";
import "./styles.css";

const components = {
  row: Row,
  block: Block,
  blueBlock: { type: "row", color: "blue" }
};

const createElement = ({ type, ...definedProps }) => props =>
  React.createElement(components[type], { ...definedProps, ...props });

const Blue = createElement(components.blueBlock);

function App() {
  return (
    <Column height="100vh">
      <Row color="red" />
      <Blue />
    </Column>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
