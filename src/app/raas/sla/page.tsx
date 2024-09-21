import React from "react"

const SLApage = () => {
  return (
    <div className="px-24 pb-16 mt-[5rem]">
      <div className="px-16 w-full flex flex-col">
        <h1 className="text-xl font-semibold text-blue-400">
          Nexus Network Service Level Agreement
        </h1>
        <p>Last updated: 6th September 2024</p>

        <p className="mt-4">
          This Service Level Agreement (this “SLA”) sets forth certain
          maintenance and support policies and procedures with respect to the
          Service provided by Shifu Software Solutions Pte Ltd (“Shifu”) to a
          customer (“Customer”) pursuant to a separate agreement between Shifu
          and Customer that incorporates this SLA by reference (each a “Customer
          Agreement”). Capitalized terms not defined in this SLA have the
          meanings given them in the Customer Agreement.
        </p>

        <h2 className="text-lg font-semibold mt-8 text-blue-400">Summary</h2>
        <p className="mt-2">
          As further described below, Shifu will use commercially reasonable
          efforts to: (i) provide Customer with basic customer support via
          Shifu’s standard support channels during Shifu’s normal business hours
          (Monday-Friday, 9:00 am – 7:00 pm IST); and (ii) ensure that the
          Monthly Availability Percentage of the Service is at least 99.8%.
        </p>

        <h2 className="text-lg font-semibold mt-8 text-blue-400">
          Definitions
        </h2>
        <ul className="list-disc ml-6 mt-2">
          <li>
            <strong>“Downtime”</strong> means a time period during which the
            Service is unavailable for use by Customer due to reasons within
            Shifu’s reasonable control...
          </li>
          <li>
            <strong>“Emergency Downtime”</strong> means Downtime due to a
            short-term emergency condition and that: (i) lasts for fewer than
            three (3) hours; and (ii) occurs no more often than one (1) time per
            calendar quarter.
          </li>
          <li>
            <strong>“Error”</strong> means a failure of the Service to conform
            to the specifications set forth in the Documentation that results in
            an inability to use, or a material restriction in the use of, the
            Service.
          </li>
          <li>
            <strong>“Excused Downtime”</strong> means any Downtime that is
            Maintenance Downtime or Emergency Downtime...
          </li>
          <li>
            <strong>“Maintenance Downtime”</strong> means Downtime for
            maintenance or backup purposes...
          </li>
          <li>
            <strong>“Monthly Availability Percentage”</strong> means the
            percentage of time over the course of each calendar month that the
            Service is available for use by Customer, excluding Excused
            Downtime.
          </li>
        </ul>

        <h2 className="text-lg font-semibold mt-8 text-blue-400">Support</h2>
        <p className="mt-2">
          With respect to Errors identified by Customer during the term of the
          Customer Agreement, Shifu will use commercially reasonable efforts to
          provide Customer with basic customer support via Shifu’s standard
          support channels during Shifu’s normal business hours (Monday-Friday,
          9:00 am – 7:00 pm IST)...
        </p>

        <h2 className="text-lg font-semibold mt-8 text-blue-400">
          Service Availability
        </h2>
        <p className="mt-2">
          Shifu will use commercially reasonable efforts to ensure that the
          Monthly Availability Percentage for the Service is at least 99%. The
          Monthly Availability Percentage will be measured on a monthly basis,
          with all hours weighted equally (except for Excused Downtime)...
        </p>

        <table className="mt-8 border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">
                Actual Availability
              </th>
              <th className="border border-gray-300 px-4 py-2">
                Service Credit
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">97.5 - 99%</td>
              <td className="border border-gray-300 px-4 py-2">5%</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">95 - 97.5%</td>
              <td className="border border-gray-300 px-4 py-2">10%</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">{"<95%"}</td>
              <td className="border border-gray-300 px-4 py-2">20%</td>
            </tr>
          </tbody>
        </table>

        <p className="mt-4">
          For purposes of clarity, the downtime credit percentages identified in
          the table above are calculated solely against the fixed subscription
          fees...
        </p>
      </div>
    </div>
  )
}

export default SLApage
