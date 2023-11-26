"use client"

// components/RevealComponent.js
import styled, { keyframes } from "styled-components"

const revealAnimation = keyframes`
transition: all 0.3s easeInOutSine;
  0%, 100% {
    width: 0%;
    left: 0%;
  }
  50% {
    width: 100%;
    left: 0%;
  }
  100% {
    left: 100%;
  }
`

const revealContentAnimation = keyframes`
  0%, 49.999% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
`

const RevealContainer = styled.div`
  position: relative;
  display: inline-block;
  white-space: nowrap;

  ${props => {
    const delay = props.delay || 0
    return `
      & > * {
        animation-delay: ${delay * 0.6}s;
      }
    `
  }}
`

const RevealArtifact = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 0%;
  height: 100%;
  background-color: #0394ff;
  animation-name: ${revealAnimation};
  animation-duration: 1.8s;
  animation-iteration-count: 1;
  animation-fill-mode: both;
  animation-delay: inherit; // Inherit the delay from the parent
`

const RevealContent = styled.span`
  animation-name: ${revealContentAnimation};
  animation-duration: 1.8s;
  animation-iteration-count: 1;
  animation-fill-mode: both;
  animation-delay: inherit; // Inherit the delay from the parent
`

const ReversedrevealContentAnimation = keyframes`
  0%, 49.999% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
`
const ReversedRevealContainer = styled.div`
  position: relative;
  display: inline-block;
  white-space: nowrap;
  margin-bottom: 20px;

  ${props => {
    const delay = props.delay || 0
    return `
      & > * {
        animation-delay: ${delay * 0.6}s;
      }
    `
  }}
`

const ReversedRevealArtifact = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 0%;
  height: 100%;
  background-color: black;
  animation-name: ${revealAnimation};
  animation-duration: 1.8s;
  animation-iteration-count: 1;
  animation-fill-mode: both;
  animation-direction: reverse; // Set the animation direction to reverse
  animation-delay: inherit; // Inherit the delay from the parent
`

const ReversedRevealContent = styled.span`
  animation-name: ${ReversedrevealContentAnimation};
  animation-duration: 1.8s;
  animation-iteration-count: 1;
  animation-fill-mode: both;
  animation-direction: reverse; // Set the animation direction to reverse
  animation-delay: inherit; // Inherit the delay from the parent
`
const RevealImage = styled.img`
  animation-name: ${ReversedrevealContentAnimation};
  animation-duration: 1.8s;
  animation-iteration-count: 1;
  animation-fill-mode: both;
`

const ImageContainer = styled.div`
  position: relative;
  display: inline-block;
  white-space: nowrap;
`
export {
  RevealContainer,
  RevealArtifact,
  RevealContent,
  ReversedRevealContainer,
  ReversedRevealContent,
  ReversedRevealArtifact,
  RevealImage,
  ImageContainer,
}

// import styled, { keyframes } from "styled-components"

// const revealAnimation = keyframes`
//   0%, 100% {
//     width: 0%;
//     left: 0%;
//   }
//   50% {
//     width: 100%;
//     left: 0%;
//   }
//   100% {
//     left: 100%;
//   }
// `

// const revealContentAnimation = keyframes`
//   0%,
//   49.999% {
//     opacity: 0;
//   }
//   50% {
//     opacity: 1;
//   }
// `

// const Container = styled.div`
//   padding: 30px;
// `

// const RevealContainer = styled.div`
//   position: relative;
//   display: inline-block;
//   white-space: nowrap;
//   margin-bottom: 20px;

//   ${props => {
//     const delay = props.delay || 0
//     return `
//       & > * {
//         animation-delay: ${delay}s;
//       }
//     `
//   }}
// `

// ;`
// // const RevealContainer = styled.div`
// //   position: relative;
// //   display: inline-block;
// //   white-space: nowrap;
// //   margin-bottom: 20px;

// //   &:nth-child(odd) {
// //     animation-delay: 0.5s;
// //   }

// //   &:nth-child(even) {
// //     animation-delay: 1.5s;
// //   }
// // `

// const RevealArtifact = styled.span`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 0%;
//   height: 100%;
//   background-color: red;
//   animation-name: ${revealAnimation};
//   animation-duration: 1s;
//   animation-iteration-count: 1;
//   animation-fill-mode: both;
// `

// const RevealContent = styled.span`
//   animation-name: ${revealContentAnimation};
//   animation-duration: 1s;
//   animation-iteration-count: 1;
//   animation-fill-mode: both;
// `

// const ImageContainer = styled.div`
//   position: relative;
//   display: inline-block;
//   white-space: nowrap;
// `

// const RevealImage = styled.img`
//   animation-name: ${revealContentAnimation};
//   animation-duration: 1s;
//   animation-iteration-count: 1;
//   animation-fill-mode: both;
// `

// export {
//   Container,
//   RevealContainer,
//   RevealArtifact,
//   RevealContent,
//   ImageContainer,
//   RevealImage,
// }
