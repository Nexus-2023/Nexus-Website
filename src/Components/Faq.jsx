import * as React from "react"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import Typography from "@mui/material/Typography"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import AddIcon from "@mui/icons-material/Add"
import { useInView, animate, useAnimate, motion } from "framer-motion"
import { useEffect, useRef } from "react"
const Q_A = {
  "Are we Decentrailized ?":
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  "Our Business Model":
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  "How to reach us ?":
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
}
export default function Faq() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-16 m-16 max-w-[100vw] flex-col justify-center  items-center h-[80vh]  flex   ]">
        <div className="flex justify-center text-4xl font-semibold mb-8">
          FAQ
        </div>

        {Object.entries(Q_A).map(([ques, ans]) => (
          <Accordion sx={{ boxShadow: "0px 2px 2px 0px gray" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <AddIcon />
              <Typography
                sx={{ ml: "8px", fontWeight: "500", fontSize: "20px" }}
              >
                {ques}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  color: "#0394FF",
                  ml: "8px",
                  mt: "-8px",
                  fontSize: "16px",
                }}
              >
                {ans}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
      <div ref={ref} className="-mt-[12rem]" />
    </motion.div>
  )
}
