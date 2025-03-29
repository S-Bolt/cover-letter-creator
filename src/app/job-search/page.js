"use client";
import { useState } from "react";

export default function JobSearch() {
  const [jobQuery, setJobQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");
  const [timeFilter, setTimeFilter] = useState("qdr:h1");
  const jobSites = [
    "linkedin.com/jobs",
    "jobs.lever.co",
    "greenhouse.io",
    "jobs.workable.com",
  ];

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
  }

  return (
    <main>
      <div className="flex flex-col justify-center items-center">
        <h1>Job Search Tool</h1>
        <form onSubmit={handleSubmit} className="flex flex-row space-x-4">
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
          {/*Submit Button*/}
          <div className="">
            <div className="my-6"></div>
            <button
              type="submit"
              className=" bg-primary text-white py-2 px-4 rounded-lg  hover:bg-orange-700 active:shadow-inner transition"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <ul>
        {jobSites.map((site) => (
          <li key={site}>
            <button
              onClick={() => handleJobSearch(site)}
              className="bg-gray-200 border-2 rounded-2xl p-2"
            >
              {site}
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}
