"use client";
import Navbar from "@/components/navbar";
import { useState } from "react";

export default function JobSearch() {
  const [jobQuery, setJobQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");
  const [timeFilter, setTimeFilter] = useState("qdr:h1");
  const [clickedSites, setClickedSites] = useState({});
  const jobSites = {
    Linkedin: "linkedin.com/jobs",
    Glassdoor: "glassdoor.com/Job",
    Jobvite: "jobvite.com",
    Myworkdayjobs: "myworkdayjobs.com",
    Remotive: "remotive.com/remote-jobs",
    Wellfound: "wellfound.com/jobs",
    Lever: "jobs.lever.co",
    Greenhouse: "greenhouse.io",
    Workable: "jobs.workable.com",
    Workatastartup: "workatastartup.com",
    Builtin: "builtin.com/job/",
    Applytojob: "applytojob.com",
    Smartrecruiters: "jobs.smartrecruiters.com",
    Paylocity: "recruiting.paylocity.com",
  };

  const usStates = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ];

  const timeFilters = {
    "Past Hour": "qdr:h1",
    "Past 6 Hours": "qdr:h6",
    "Past 24 Hours": "qdr:d1",
    "Past 2 Days": "qdr:d2",
    "Past Week": "qdr:w1",
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (!jobQuery) {
      alert("Please enter a job title.");
      return;
    }
  }

  function handleJobSearch(site) {
    const query = encodeURIComponent(jobQuery);
    const location = encodeURIComponent(locationQuery);
    const time = encodeURIComponent(timeFilter);

    const googleSearchURL = `https://www.google.com/search?q="${query}"+site:${site}+${location}&tbs=${time}`;

    window.open(googleSearchURL, "_blank");

    setClickedSites((prev) => ({
      ...prev,
      [site]: true,
    }));
  }

  return (
    <main>
      <Navbar />
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl my-8">Job Search Tool</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row space-x-4"
        >
          {/*JobTitle*/}
          <div className="flex flex-col">
            <label className="text-center">Job Title</label>
            <input
              type="text"
              name="query"
              value={jobQuery}
              onChange={(e) => setJobQuery(e.target.value)}
              placeholder="Enter Job Title"
              className="border-2 rounded-lg p-2"
            />
          </div>
          {/*Location*/}
          <div className="flex flex-col">
            <label className="text-center">Location</label>
            <select
              id="location"
              name="location"
              value={locationQuery}
              onChange={(e) => setLocationQuery(e.target.value)}
              placeholder="Enter Location"
              className="border-2 rounded-lg p-2"
            >
              <option value="">Select a State</option>
              {usStates.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>
          {/*Time*/}
          <div className="flex flex-col">
            <label className="text-center">Time Filter</label>
            <select
              id="timeFilter"
              name="timeFilter"
              value={timeFilter}
              onChange={(e) => setTimeFilter(e.target.value)}
              placeholder="Enter Location"
              className="border-2 rounded-lg p-2"
            >
              {Object.entries(timeFilters).map(([label, value]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>
        </form>
      </div>
      <div className="flex justify-center m-8">
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm sm:text-base ">
          {Object.entries(jobSites).map(([name, site]) => (
            <li
              key={name}
              className="flex justify-center items-center text-black"
            >
              <button
                onClick={() => handleJobSearch(site)}
                className={`bg-gray-200  rounded-2xl p-2 w-36 transition ${
                  clickedSites[site] ? "border-primary border-2" : "border-2"
                }`}
              >
                {name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
