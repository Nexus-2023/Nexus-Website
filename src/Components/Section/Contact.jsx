"use client"
import React from "react"
import Image from "next/image"

import gitIcon from "/public/Image/githubIcon.svg"
import linkedinIcon from "/public/Image/linkIcon.svg"
import mailIcon from "/public/Image/Email.svg"
import twitterIcon from "/public/Image/twitter.svg"
import phone from "/public/Image/phone.svg"
import blueCircle from "/public/Image/circle.svg"

import vector from "/public/Image/vector.png"
import { StyledButton } from "../Button"

import { motion } from "framer-motion"

import { useInView } from "framer-motion"

import { useRef } from "react"
import styled from "styled-components"
import { TextField, Stack, FormGroup, Typography } from "@mui/material"

const mainPrimary = `#04A5FF`
const darkGreen = `#CBCBCB`

const CssTextField = styled(TextField)({
  transition: "all 0.3s ease-in-out",
  backgroundColor: "white",

  "& label": { color: "gray" },
  "& helperText": { color: "white" },
  "& .MuiInputBase-input": { color: "black" },

  "& label.Mui-focused": {
    transition: "all 0.3s ease-in-out",
    color: mainPrimary,
  },
  "& .MuiInput-underline:after": {
    transition: "all 0.3s ease-in-out",
    borderBottomColor: mainPrimary,
  },

  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      transition: "all 0.3s ease-in-out",
      borderColor: mainPrimary,
    },
    "&:hover fieldset": {
      transition: "all 0.3s ease-in-out",
      borderColor: darkGreen,
    },
    "&.Mui-focused fieldset": {
      transition: "all 0.3s ease-in-out",
      borderColor: darkGreen,
    },
  },
})

const CssMessageField = styled(TextField)({
  transition: "all 0.3s ease-in-out",
  backgroundColor: "white",

  "& label": { color: "gray" },
  "& helperText": { color: "white" },

  "& .MuiInputBase-input": { color: "black", height: "8rem" },

  "& label.Mui-focused": {
    transition: "all 0.3s ease-in-out",
    color: mainPrimary,
  },
  "& .MuiInput-underline:after": {
    transition: "all 0.3s ease-in-out",
    borderBottomColor: mainPrimary,
  },

  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      transition: "all 0.3s ease-in-out",
      borderColor: mainPrimary,
    },
    "&:hover fieldset": {
      transition: "all 0.3s ease-in-out",
      borderColor: darkGreen,
    },
    "&.Mui-focused fieldset": {
      transition: "all 0.3s ease-in-out",
      borderColor: darkGreen,
    },
  },
})

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <>
      <div className=" h-[100vh] flex  justify-evenly -mt-[10rem] items-center p-16 mx-16 mb-[20rem]">
        <div className=" flex-col  items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
            style={{ display: "flex", spaceX: "3", alignItems: "center" }}
          >
            <div>
              <Image src={vector} height={50} width={100} />
            </div>

            <div>
              <h1 className="text-xl font-regular ml-3">06</h1>
            </div>
          </motion.div>

          <div className="flex space-x-3 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl font-bold  text-primary mb-4">
                Contact Us
              </h1>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex    text-black  space-x-2 items-center   ">
              <a
                href="https://github.com/Nexus-2023"
                target="_blank"
                className="hover:scale-105  scale-100 ease-in-out duration-75"
              >
                <Image src={gitIcon} width={42} height={42} />
              </a>
              <a
                href="https://www.linkedin.com/company/nexus-network-staking-infra/"
                target="_blank"
                className="hover:scale-105  scale-100 ease-in-out  duration-150"
              >
                <Image src={linkedinIcon} width={42} height={42} />
              </a>
              <a
                href=""
                target="_blank"
                className="hover:scale-105  scale-100 ease-in-out  duration-150"
              >
                <Image src={mailIcon} width={42} height={82} />
              </a>
              <a
                href="https://twitter.com/_Nexus_Network"
                target="_blank"
                className="hover:scale-105  scale-100 ease-in-out  duration-150"
              >
                <Image src={twitterIcon} width={42} height={52} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <Stack sx={{ mt: 2 }}>
              <FormGroup>
                <CssTextField
                  label="Name"
                  id="username"
                  style={{
                    marginTop: 8,
                    width: "27rem",
                  }}
                  name="username"
                />
                <Typography
                  className="text-md text-[#111111] mb-8"
                  sx={{ marginTop: 1, fontWeight: "500" }}
                >
                  your full Name
                </Typography>

                <CssTextField
                  label="Email"
                  id="email"
                  type="email"
                  style={{
                    marginTop: 1,
                    width: "27rem",
                  }}
                  name="email"
                />
                <Typography
                  className="text-md text-[#111111]"
                  sx={{ mb: 2, marginTop: 1, fontWeight: "500" }}
                >
                  your Email
                </Typography>

                <CssMessageField
                  label="Message"
                  id="message"
                  multiline
                  rows={4}
                  style={{
                    marginTop: 1,
                    width: "27rem",
                  }}
                  name="message"
                />
                <Typography
                  className="text-md text-[#111111]"
                  sx={{ mb: 2, marginTop: 1, fontWeight: "500" }}
                >
                  your message
                </Typography>
              </FormGroup>
            </Stack>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            style={{ marginLeft: "-1rem" }}
          >
            <StyledButton color="#1A1A1A" round="0px">
              Send
            </StyledButton>
          </motion.div>
        </div>
        <div ref={ref} className="mt-[45rem]" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="  h-[70vh] w-[30vw]  hidden laptop:flex    z-10 relative items-center">
            {/* <PhoneCanvas /> */}
            <Image src={phone} width={450} height={450} />
            <div className="absolute top-20 left-20 -z-10">
              <Image src={blueCircle} width={500} height={500} />
            </div>
          </div>
        </motion.div>
      </div>
    </>
  )
}
