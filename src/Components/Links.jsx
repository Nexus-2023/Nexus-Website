import styled from "styled-components"

const StyledLink = styled.div`
  display: inline-block;
  position: relative;
  text-decoration: none;
  padding: 10px 0;
  color: ${props => props.Col || "black"};

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 4px;
    bottom: 0;
    left: 0;
    background-color: ${props =>
      props.hoverColor ||
      "#0394FF"}; // Use the provided hover color or default to red
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.3s;
  }

  &:hover {
    &:after {
      transform-origin: bottom left;
      transform: scaleX(1);
    }
  }
`

export { StyledLink }
