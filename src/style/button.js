import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  border-radius: 20px;
  font-weight: bold;
  font-size: 15px;
  border: none;
  outline: none;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  width: 60%;
  height: 50px;
  margin: 0 auto;
  background-color: #40a9ff;
  color: white;
  transition: 0.2s;

  :hover {
    color: yellow;
    background-color: #e8392c;
  }
`;
