"use client"

import styled, { css } from "styled-components"

const StyledButton = styled.button`
  --color: ${props => props.color || "#0394FF"};
  font-family: inherit;
  display: inline-block;
  width: 8em;
  height: 2.6em;
  padding: ${props => props.p || "0px"};

  line-height: 2.5em;
  margin: 20px;
  position: relative;
  overflow: hidden;
  border: 2px solid var(--color);
  transition: color 0.5s;
  z-index: 1;
  font-size: 17px;
  border-radius: ${props => props.round || "6px"};
  font-weight: 500;
  color: var(--color);

  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    background: var(--color);
    height: 150px;
    width: 200px;
    border-radius: 50%;
  }

  &:hover {
    color: #fff;
  }

  &:before {
    top: 100%;
    left: 100%;
    transition: all 0.7s;
  }

  &:hover:before {
    top: -30px;
    left: -30px;
  }

  &:active:before {
    background: #0394ff;
    transition: background 0s;
  }
`

const StyledButton2 = styled.button`
  border: none;
  display: block;
  position: relative;

  font-size: 18px;
  background: transparent;
  cursor: pointer;
  user-select: none;
  overflow: hidden;
  color: royalblue;
  z-index: 1;
  font-family: inherit;
  font-weight: 500;

  &:hover {
    color: white;
  }

  span {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    z-index: -1;
    border: 4px solid royalblue;

    &::before {
      content: "";
      display: block;
      position: absolute;
      width: 8%;
      height: 500%;
      background: var(--lightgray);
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(-60deg);
      transition: all 0.3s;
    }
  }

  &:hover span::before {
    transform: translate(-50%, -50%) rotate(-90deg);
    width: 100%;
    background: royalblue;
  }

  &:active span::before {
    background: #2751cd;
  }
`

export function Button2({ text }) {
  return (
    <StyledButton2>
      {text}
      <span></span>
    </StyledButton2>
  )
}

export { StyledButton, StyledButton2 }
