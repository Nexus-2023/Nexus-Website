"use client"
import React from "react"

import Link from "next/link"
import { ScheduleCallLink } from "../Client/ClientSchedule"
import ClientFade from "../Client/ClientFade"
import { usePostHog } from "posthog-js/react"
export default function Footer() {
  const posthog = usePostHog()
  return (
    <ClientFade delay={500}>
      <div
        className={`justify-center items-center flex  z-10     md:px-16 px-0  mx-auto   `}
        id="Footer"
      >
        <div
          className="h-full   w-full lg:p-16 py-24 flex    items-center   relative       "
          id="FooterM"
        >
          <div className=" w-full    px-8 flex md:flex-row flex-col justify-center">
            <div className="  w-full justify-center flex" id="c1">
              <div className="flex flex-col space-y-4">
                <img
                  src="/Images/Logo/logo.png"
                  width="120px"
                  height="120px"
                  alt="effect"
                  className=" "
                />

                <p className=" xl:text-base text-sm lg:text-md  text-gray-400">
                  © 2024 Nexus Network, Inc.
                </p>
              </div>
            </div>

            <div className=" flex w-full space-x-24 md:mt-0 mt-16 justify-center">
              <div className="flex flex-col  " id="c2">
                <p className=" sm:text-base text-sm text-gray-400 mb-3">
                  Socials
                </p>

                <Link
                  href={"https://twitter.com/NexusNetwork_0x"}
                  target="_blank"
                  onClick={() => posthog?.capture("external_link_clicked")}
                  className="sm:text-base text-sm mb-2 hover:text-[var(--button-primary)] duration-300  transition-all  ease-in-out"
                >
                  Twitter
                </Link>

                <Link
                  href={
                    "https://www.linkedin.com/company/nexus-network-staking-infra/"
                  }
                  onClick={() => posthog?.capture("external_link_clicked")}
                  target="_blank"
                  className="sm:text-base text-sm mb-2 hover:text-[var(--button-primary)] duration-300  transition-all  ease-in-out"
                >
                  Linkedin
                </Link>

                <Link
                  href={"https://discord.gg/Qb8zu5sDkj"}
                  target="_blank"
                  onClick={() => posthog?.capture("external_link_clicked")}
                  className="sm:text-base text-sm mb-2 hover:text-[var(--button-primary)] duration-300  transition-all  ease-in-out"
                >
                  Discord
                </Link>
              </div>

              <div className="flex flex-col " id="c3">
                <p className=" sm:text-lg text-sm text-gray-400 mb-2">Links</p>

                <Link
                  href={"https://docs.nexusnetwork.co.in/"}
                  target="_blank"
                  onClick={() => posthog?.capture("external_link_clicked")}
                  className="sm:text-base text-sm mb-2 hover:text-[var(--button-primary)] duration-300  transition-all  ease-in-out"
                >
                  Documentation
                </Link>

                <div className="sm:text-base text-sm mb-2 hover:text-[var(--button-primary)] duration-300  transition-all  ease-in-out">
                  Demo
                </div>
                <ScheduleCallLink />

                <Link
                  href={"/terms"}
                  target="_blank"
                  className="sm:text-base text-sm mb-2 hover:text-[var(--button-primary)] duration-300  transition-all  ease-in-out"
                >
                  Terms of service
                </Link>

                <Link
                  href={"/privacy"}
                  target="_blank"
                  className="sm:text-base text-sm mb-2 hover:text-[var(--button-primary)] duration-300  transition-all  ease-in-out"
                >
                  Privacy policy
                </Link>
                <Link
                  href={"/raas/sla"}
                  target="_blank"
                  className="sm:text-base text-sm mb-2 hover:text-[var(--button-primary)] duration-300  transition-all  ease-in-out"
                >
                  SLA
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ClientFade>
  )
}
