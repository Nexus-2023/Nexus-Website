"use client"
import React from "react"
import Image from "next/image"

import gitIcon from "/public/Image/githubIcon.svg"
import linkedinIcon from "/public/Image/linkIcon.svg"
import mailIcon from "/public/Image/Email.svg"
import twitterIcon from "/public/Image/twitter.svg"
import phone from "/public/Image/phone.svg"
import blueCircle from "/public/Image/circle.svg"
import emailjs from "@emailjs/browser"
import vector from "/public/Image/vector.png"
import { StyledButton } from "../Button"

import { motion } from "framer-motion"

import { useInView } from "framer-motion"

import { useRef, useState } from "react"
import styled from "styled-components"
import { TextField, Stack, FormGroup, Typography } from "@mui/material"
import Alert from "@mui/material/Alert"
import CloseIcon from "@mui/icons-material/Close"
import IconButton from "@mui/material/IconButton"
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
  const [aleartErrorOpen, setaleartErrorOpen] = useState(false)
  const [aleartPendingOpen, setaleartPendingOpen] = useState(false)
  const [aleartSucceessOpen, setaleartSucceessOpen] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const formRef = useRef()
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handlaleartErrorclose = () => {
    setaleartErrorOpen(false)
  }
  const handlaleartPendingclose = () => {
    setaleartPendingOpen(false)
  }
  const handlaleartSuccessclose = () => {
    setaleartSucceessOpen(false)
  }

  const handleChange = e => {
    const { target } = e
    const { name, value } = target

    setForm({
      ...form,
      [name]: value,
    })
  }
  const secviceKey = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_API_KEY
  const templateKey = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_API_KEY
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_API_KEY

  const handleSubmit = e => {
    e.preventDefault()
    setaleartPendingOpen(true)

    try {
      emailjs
        .send(
          secviceKey,
          templateKey,
          {
            from_name: form.name,
            to_name: "Nexus Team",
            from_email: form.email,
            to_email: "office@nexusnetwork.co.in",
            message: form.message,
          },
          publicKey
        )
        .then(
          () => {
            handlaleartPendingclose()
            setaleartSucceessOpen(true)
            setForm({
              name: "",
              email: "",
              message: "",
            })

            setTimeout(() => {
              handlaleartSuccessclose()
            }, 2000)
          },
          error => {
            handlaleartPendingclose()
            setaleartErrorOpen(true)
            console.error(error)

            setTimeout(() => {
              handlaleartErrorclose()
            }, 2000)
          }
        )
    } catch (error) {
      handlaleartPendingclose()
      setaleartErrorOpen(true)
      console.error(error)

      setTimeout(() => {
        handlaleartErrorclose()
      }, 2000)
    }
  }

  return (
    <>
      <div className=" h-[100vh] flex  relative justify-evenly -mt-[10rem] items-center p-16 mx-16 mb-[20rem]">
        {aleartErrorOpen && (
          <>
            <Alert
              severity="error"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={handlaleartErrorclose}
                ></IconButton>
              }
              sx={{ position: "absolute", top: "8rem" }}
            >
              Faild to send Email
            </Alert>
          </>
        )}

        {aleartSucceessOpen && (
          <>
            <Alert
              severity="success"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={handlaleartSuccessclose}
                ></IconButton>
              }
              sx={{ position: "absolute", top: "8rem" }}
            >
              Email Successfully Send
            </Alert>
          </>
        )}

        {aleartPendingOpen && (
          <>
            <Alert
              severity="warning"
              sx={{ position: "absolute", top: "8rem" }}
            >
              Email pending
            </Alert>
          </>
        )}
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
                href="mailto:office@nexusnetwork.co.in"
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
              <form ref={formRef} onSubmit={handleSubmit}>
                <CssTextField
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  label="name"
                  id="name"
                  style={{
                    marginTop: 8,
                    width: "27rem",
                  }}
                  name="name"
                />
                <Typography
                  className="text-md text-[#111111] mb-8"
                  sx={{ marginTop: 1, fontWeight: "500" }}
                >
                  your full Name
                </Typography>

                <CssTextField
                  required
                  label="Email"
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
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
                  required
                  label="Message"
                  id="message"
                  value={form.message}
                  onChange={handleChange}
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
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.5 }}
                  style={{ marginLeft: "-1rem" }}
                >
                  <StyledButton color="#1A1A1A" round="0px">
                    Send
                  </StyledButton>
                </motion.div>
              </form>
            </Stack>
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
