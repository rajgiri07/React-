import React from 'react'
import Card from './components/card'
const App = () => {

const jobOpenings = [
  {
    brandLogo: "https://imgs.search.brave.com/0Ec6FtBVVNRzoek1eZO-7oR3jIQoxSKYI6rHO5shr5A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvNTAwcC8w/MS8xMC9hbWF6b24t/bG9nby12ZWN0b3It/NDY4NjAxMTAuanBn",
    brandName: "Amazon",
    time: "5 days ago",
    jobTitle: "Senior UI/UX Designer",
    jobType: "Part Time",
    level: "Senior Level",
    salary: "$120/hr",
    location: "Mumbai, India"
  },

  {
    brandLogo: "https://imgs.search.brave.com/jkbMhUzFlfiqzmU4cnbqA5ScYzzLfJqTT1pJXORG2CM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzUv/NzQ2LzA1Ni9zbWFs/bC9nb29nbGUtYXBw/LWxvZ28taW4tYmln/LXN1ci1zdHlsZS0z/ZC1yZW5kZXItaWNv/bi1kZXNpZ24tY29u/Y2VwdC1lbGVtZW50/LWlzb2xhdGVkLXRy/YW5zcGFyZW50LWJh/Y2tncm91bmQtZnJl/ZS1wbmcucG5n",
    brandName: "Google",
    time: "2 days ago",
    jobTitle: "Frontend Developer",
    jobType: "Full Time",
    level: "Junior Level",
    salary: "$100/hr",
    location: "Bangalore, India"
  },

  {
   brandLogo :"https://imgs.search.brave.com/0G3zswVKXfTlp6PZxRqEg1ArVaD0q14zdTItUYYmSa4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZXBuZ2xvZ29z/LmNvbS91cGxvYWRz/L21pY3Jvc29mdC13/aW5kb3dzLWxvZ28t/aW1hZ2VzLTE5LnBu/Zw",
    brandName: "Microsoft",
    time: "1 day ago",
    jobTitle: "React Developer",
    jobType: "Full Time",
    level: "Mid Level",
    salary: "$110/hr",
    location: "Hyderabad, India"
  },

  {
    brandLogo:"https://imgs.search.brave.com/Z-H0bsQ_EiV3vqHAccJzENDCPJmGY7hJXuIhtzxNfwQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb2dv/ZG93bmxvYWQub3Jn/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE0/LzA0L2Npc2NvLWxv/Z28tMC5wbmc",
       brandName: "Cisco",
    time: "3 days ago",
    jobTitle: "Software Engineer",
    jobType: "Full Time",
    level: "Senior Level",
    salary: "$130/hr",
    location: "Bangalore, India"
  },

  {
    brandLogo:"https://imgs.search.brave.com/_21nlv4-9ZmEMKNd_hNpIdo5aQlDPkqQdaCHe9_jTXU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNzMv/NDk1LzIwNy9zbWFs/bC9tZXRhLWxvZ28t/cm91bmRlZC1nbG9z/c3ktaWNvbi13aXRo/LXRyYW5zcGFyZW50/LWJhY2tncm91bmQt/ZnJlZS1wbmcucG5n",
     brandName: "Meta",
    time: "4 days ago",
    jobTitle: "Frontend Engineer",
    jobType: "Full Time",
    level: "Mid Level",
    salary: "$115/hr",
    location: "Gurgaon, India"
  },

  {
    brandLogo: "https://imgs.search.brave.com/YuKXp7kkbYQaOLwIS7Q54a1uYq38E-d0DRjLTB6uvVk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb2dv/d2lrLmNvbS9jb250/ZW50L3VwbG9hZHMv/aW1hZ2VzL3Rjcy10/YXRhLWNvbnN1bHRh/bmN5LXNlcnZpY2Vz/Mjc5Mi5sb2dvd2lr/LmNvbS53ZWJw",
    brandName: "Tcs",
    time: "6 days ago",
    jobTitle: "UI Designer",
    jobType: "Part Time",
    level: "Mid Level",
    salary: "$105/hr",
    location: "Mumbai, India"
  },

  {
    brandLogo: "https://imgs.search.brave.com/uFiCiWscNOighNcyRhZHsod5rYC8AmboTGbFmc83qNw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjMv/MDEvV2lwcm8tTG9n/by01MDB4MjgxLmpw/Zw",
    brandName: "Wipro",
    time: "2 days ago",
    jobTitle: "Full Stack Developer",
    jobType: "Full Time",
    level: "Senior Level",
    salary: "$125/hr",
    location: "Noida, India"
  },

  {
    brandLogo:"https://imgs.search.brave.com/RTQUNPZA8-fBMJHV8OrWSfMFcEsaBUEyV2ngCvhpZfo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/aWJtLmNvbS9kZXNp/Z24vbGFuZ3VhZ2Uv/MzFjYzE4ZmRlM2Rj/Y2EwNGZjY2FmMzAz/NTY0OGEzN2EvOGJh/ci1sZWdhbC5zdmc",
 brandName:"IBM",
    time: "1 day ago",
    jobTitle: "Java Developer",
    jobType: "Full Time",
    level: "Junior Level",
    salary: "$90/hr",
    location: "Pune, India"
  }
]
console.log(jobOpenings);

   return (
    <div className="parent">
      {jobOpenings.map(function(elem){
        return  <Card logo={elem.brandLogo} company={elem.brandName} time={elem.time} title={elem.jobTitle} type={elem.jobType} level={elem.level} salary={elem.salary} location={elem.location}/>
      })}
    </div>
  )
}

export default App