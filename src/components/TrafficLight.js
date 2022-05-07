import React from "react";
import styled from "styled-components";

const StyleDiv = styled.div`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  border: 3px solid gray;
  margin-left: 40%;
  margin-bottom: 4px;
  background-color: ${(props) => (props.isOn ? props.color : `gray`)};
`;

const Light = ({ value, name, color }) => {
  console.log("I called--", name);
  return (
    <StyleDiv isOn={value} color={color} name={name} id={value}></StyleDiv>
  );
};
export const TrafficLight = React.memo(Light);
