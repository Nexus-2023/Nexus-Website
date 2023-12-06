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
  "What is Nexus Network ?":
    "Nexus Network is a revolutionary staking infrastructure for Ethereum rollups. It provides a secure and non-custodial solution for staking ETH locked in rollup bridges, ensuring consistent returns.",
  "How does Nexus Network enhance security ?":
    "We employ a security-first approach, utilizing a non-custodial solution that facilitates direct transfers between rollups and validators. Our Distributed Validator Technology (DVT) adds redundancy, mitigating risks associated with validator failures.",
  "What problems does Nexus Network solve for rollups ?":
    "Nexus Network addresses challenges related to ETH supply in bridges and the capital efficiency of rollups. By securely staking ETH in bridges, we enhance network security and optimize capital efficiency.",

  "Can I integrate Nexus Network with my rollup easily?":
    "Absolutely! Nexus Network offers a pluggable staking infrastructure. Integrate within minutes by calling Nexus contracts, and enjoy a modular solution that adapts to the unique needs of your rollup.",
  "How does customizable staking limits work?":
    "You have the flexibility to define the proportion of ETH staked in your rollup bridge. Set customizable staking limits from 1% to 100%, aligning with your rollup's growth and financial goals.",
  "What is one-stop validator management?":
    "Nexus Network simplifies validator operations for rollups. Share your preferred validator set, and our architecture will manage the staking process seamlessly. No extra responsibilities for your rollup team.",
  "How does Nexus Network ensure continuous operations for my rollup?":
    "Once registered, Nexus Network automates validator creation and ETH staking based on the proportions defined by your rollup. Continuous monitoring ensures seamless operations without extra effort from your team.",
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
      <div className="p-16  tablet:m:16 m:4  w-[100vw]  flex-col justify-center    items-center    flex   ">
        <div className="flex justify-center text-4xl font-semibold mb-8">
          FAQ
        </div>

        {Object.entries(Q_A).map(([ques, ans]) => (
          <Accordion
            sx={{ boxShadow: "0px 2px 2px 0px gray", maxWidth: "60vw" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <AddIcon />
              <Typography
                sx={{
                  ml: "8px",
                  fontWeight: "500",
                  fontSize: "20px",
                  "@media (max-width: 1024px)": {
                    fontSize: "16px",
                  },

                  "@media (max-width: 500px)": {
                    fontSize: "14px",
                  },
                }}
              >
                {ques}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  color: "#0A85E0",
                  ml: "8px",
                  mt: "-8px",
                  fontSize: "16px",
                  "@media (max-width: 1024px)": {
                    fontSize: "16px",
                  },
                  "@media (max-width: 500px)": {
                    fontSize: "14px",
                  },
                }}
              >
                {ans}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
      <div ref={ref} className="mt-[12rem]" />
    </motion.div>
  )
}
