"use client"

import Image from "next/image"

import diagram from "/public/Image/d1.png"
import diagram2 from "/public/Image/diagram2.svg"
import diagram3 from "/public/Image/diagram3.svg"
import diagram4 from "/public/Image/diagram5.svg"
import diagram5 from "/public/Image/diagram5a.svg"

import l1 from "/public/Image/plugLogo.png"
import l2 from "/public/Image/lockLogo.png"
import l3 from "/public/Image/manageLogo.png"
import l4 from "/public/Image/settingLogo.png"

import twitter from "/public/Image/TwitterIcon.svg"
import linkedin from "/public/Image/linkden.svg"

import gitIcon from "/public/Image/githubIcon.svg"
import linkedinIcon from "/public/Image/linkIcon.svg"
import mailIcon from "/public/Image/Email.svg"
import twitterIcon from "/public/Image/twitter.svg"
import phone from "/public/Image/phone.svg"
import blueCircle from "/public/Image/circle.svg"

import vector from "/public/Image/vector.png"
import { StyledButton } from "../Button"
import { Button2 } from "../Button"
import Link from "next/link"
import {
  RevealContainer,
  RevealArtifact,
  RevealContent,
  ReversedRevealContainer,
  ReversedRevealContent,
  ReversedRevealArtifact,
  RevealImage,
} from "../RevealComponent"
import { motion } from "framer-motion"

// import { useInView, animate, useAnimate } from "framer-motion"

import { useRef, useEffect } from "react"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"

import React from "react"
import { WorkHistoryOutlined } from "@mui/icons-material"
// import { useInView } from "framer-motion"
import { useInView } from "react-intersection-observer"

const HackathonsProjects = ({ hackProjects }) => {
  const imgRef = useRef(null)

  return (
    <>
      <VerticalTimelineElement
        contentStyle={{
          background: "#090808",
          // position: "relative",
          marginBottom: "10rem",
        }}
        contentArrowStyle={{ borderRight: "7px solid  #090808" }}
        date={hackProjects.date}
        iconStyle={{ background: hackProjects.iconBg }}
        icon={
          <div className="flex justify-center items-center w-full h-full">
            <img
              src={hackProjects.icon}
              alt={hackProjects.hackathon_name}
              className="w-[110%] h-[110%] object-contain"
            />
          </div>
        }
      >
        <div>
          <img
            src={hackProjects.img}
            width="500px"
            height="500px"
            className="rounded-xl absolute top-0  -translate-x-[45rem] left-0   border-[#1fc5d4] drop-shadow-[0_8px_8px_#19AAFA]"
          />{" "}
        </div>

        <div>
          <a
            href={hackProjects.deployedLink}
            target="_blank"
            onMouseEnter={handleHover2}
            onMouseLeave={handleHoverExit2}
          >
            <img
              src="./Images/link.svg"
              width="30px"
              height="30px"
              className="absolute top-4 right-9"
            />
          </a>
        </div>

        <div>
          <a
            href={hackProjects.gitlink}
            target="_blank"
            id="githubLogo"
            onMouseEnter={handleHover}
            onMouseLeave={handleHoverExit}
          >
            <img
              src="./Images/GitHub.svg"
              width="30px"
              height="30px"
              className="absolute top-4 right-20"
            />
          </a>
        </div>

        <div>
          <h3 className="text-[#fff] text-[24px] font-bold">
            {hackProjects.project_title}
          </h3>
          <p
            className="text-secondary text-[16px] font-semibold"
            style={{ margin: 0 }}
          >
            {hackProjects.hackathon_name}
          </p>

          <p
            className="text-[#8a8a8a] text-[16px] font-semibold"
            style={{ margin: 0 }}
          >
            {hackProjects.description}
          </p>
        </div>

        <ul className="mt-5 text-[#afafaf] list-disc ml-5 space-y-2">
          {hackProjects.points.map((point, index) => (
            <li
              key={`hackProjects-point-${index}`}
              className="text-white-100 text-[14px] pl-1 tracking-wider"
            >
              {point}
            </li>
          ))}
        </ul>
      </VerticalTimelineElement>
    </>
  )
}

const Achievement = () => {
  // const ref = useRef(null)
  // const inView = useInView(ref, { once: true })
  const { ref, inView } = useInView({
    triggerOnce: true,
  })

  return (
    <div className="border-2 text-black" ref={ref}>
      <section ref={ref}>
        {/* <VerticalTimeline
          animate={true}
          layout={"1-column"}
          className="w-6/12 justify-end"
        >
          {HackathonList.map((data, index) => (
            <HackathonsProjects
              key={`experience-${index}`}
              hackProjects={data}
            />
          ))}
        </VerticalTimeline> */}

        <VerticalTimeline animate={true} lineColor={"#707070"}>
          <VerticalTimelineElement
            visible={inView}
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2011 - present"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkHistoryOutlined />}
          >
            <h3 className="vertical-timeline-element-title">
              Creative Director
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
            <p>
              Creative Direction, User Experience, Visual Design, Project
              Management, Team Leading
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </section>
    </div>
  )
}

// import { useSectionInView } from "@/lib/hooks"

// const Achievement = () => {
//   const { ref, inView } = useSectionInView("Achievement")

//   return (
//     <div className="border-2 text-black">
//       <section id="achievement" ref={ref}>
//         <VerticalTimeline animate={true} lineColor={"#707070"}>
//           <VerticalTimelineElement
//             visible={inView}
//             className="vertical-timeline-element--work"
//             contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
//             contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
//             date="2011 - present"
//             iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
//             icon={<WorkHistoryOutlined />}
//           >
//             <h3 className="vertical-timeline-element-title">
//               Creative Director
//             </h3>
//             <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
//             <p>
//               Creative Direction, User Experience, Visual Design, Project
//               Management, Team Leading
//             </p>
//           </VerticalTimelineElement>
//           <VerticalTimelineElement
//             visible={inView}
//             className="vertical-timeline-element--work"
//             contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
//             contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
//             date="2011 - present"
//             iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
//             icon={<WorkHistoryOutlined />}
//           >
//             <h3 className="vertical-timeline-element-title">
//               Creative Director
//             </h3>
//             <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
//             <p>
//               Creative Direction, User Experience, Visual Design, Project
//               Management, Team Leading
//             </p>
//           </VerticalTimelineElement>
//           <VerticalTimelineElement
//             visible={inView}
//             className="vertical-timeline-element--work"
//             contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
//             contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
//             date="2011 - present"
//             iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
//             icon={<WorkHistoryOutlined />}
//           >
//             <h3 className="vertical-timeline-element-title">
//               Creative Director
//             </h3>
//             <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
//             <p>
//               Creative Direction, User Experience, Visual Design, Project
//               Management, Team Leading
//             </p>
//           </VerticalTimelineElement>
//           <VerticalTimelineElement
//             visible={inView}
//             className="vertical-timeline-element--work"
//             contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
//             contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
//             date="2011 - present"
//             iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
//             icon={<WorkHistoryOutlined />}
//           >
//             <h3 className="vertical-timeline-element-title">
//               Creative Director
//             </h3>
//             <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
//             <p>
//               Creative Direction, User Experience, Visual Design, Project
//               Management, Team Leading
//             </p>
//           </VerticalTimelineElement>
//         </VerticalTimeline>
//       </section>
//     </div>
//   )
// }

export default Achievement
