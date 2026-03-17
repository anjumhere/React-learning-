import React from "react";
import Card from "./components/card";

const App = () => {
  const jobOffers = [
    {
      companyLogo:
        "https://i.pinimg.com/1200x/75/ad/25/75ad255ebbf47f949a79efa26e28cbbe.jpg",
      companyName: "Google",
      jobPosted: "2 days ago",
      designation: "Senior UX/UI Designer",
      timing: "Full time",
      level: "Senior Level",
      salary: "$180/hr",
      location: "Mountain View, California",
    },
    {
      companyLogo:
        "https://i.pinimg.com/1200x/a7/8c/40/a78c406e4ad95f68bd8b014582ef3ece.jpg",
      companyName: "Apple",
      jobPosted: "5 days ago",
      designation: "Lead iOS Engineer",
      timing: "Full time",
      level: "Lead Level",
      salary: "$200/hr",
      location: "Cupertino, California",
    },
    {
      companyLogo:
        "https://i.pinimg.com/736x/91/92/1c/91921cec4f8a8cbe3d09e596e0659d81.jpg",
      companyName: "Microsoft",
      jobPosted: "1 day ago",
      designation: "Cloud Solutions Architect",
      timing: "Full time",
      level: "Senior Level",
      salary: "$165/hr",
      location: "Redmond, Washington",
    },
    {
      companyLogo:
        "https://i.pinimg.com/1200x/5a/62/70/5a62706bc5603694b1bd08acc40d3096.jpg",
      companyName: "Amazon",
      jobPosted: "3 days ago",
      designation: "Software Development Engineer",
      timing: "Full time",
      level: "Junior Level",
      salary: "$120/hr",
      location: "Seattle, Washington",
    },
    {
      companyLogo:
        "https://i.pinimg.com/1200x/85/fd/c3/85fdc35a83f3f1a88f6eb8101d28abc3.jpg",
      companyName: "Meta",
      jobPosted: "4 days ago",
      designation: "Product Designer",
      timing: "Full time",
      level: "Mid Level",
      salary: "$150/hr",
      location: "Menlo Park, California",
    },
    {
      companyLogo:
        "https://i.pinimg.com/1200x/56/ed/29/56ed295b5c3260b03a37452507256016.jpg",
      companyName: "Netflix",
      jobPosted: "1 day ago",
      designation: "Senior Frontend Engineer",
      timing: "Full time",
      level: "Senior Level",
      salary: "$190/hr",
      location: "Los Gatos, California",
    },
    {
      companyLogo:
        "https://i.pinimg.com/1200x/3c/16/69/3c166947763be9a6a9e2be1416447f00.jpg",
      companyName: "NVIDIA",
      jobPosted: "6 days ago",
      designation: "AI Research Engineer",
      timing: "Full time",
      level: "Senior Level",
      salary: "$175/hr",
      location: "Santa Clara, California",
    },
    {
      companyLogo:
        "https://i.pinimg.com/736x/81/45/49/814549c3994fad651b16436475b5d40f.jpg",
      companyName: "Salesforce",
      jobPosted: "3 days ago",
      designation: "UX Researcher",
      timing: "Part time",
      level: "Mid Level",
      salary: "$130/hr",
      location: "San Francisco, California",
    },
    {
      companyLogo:
        "https://i.pinimg.com/736x/cc/31/6f/cc316f97197528e5e26e613a93ab16a4.jpg",
      companyName: "X (Twitter)",
      jobPosted: "7 days ago",
      designation: "Machine Learning Engineer",
      timing: "Full time",
      level: "Junior Level",
      salary: "$125/hr",
      location: "San Francisco, California",
    },
    {
      companyLogo:
        "https://i.pinimg.com/1200x/b2/16/2e/b2162e335ea0dc101c0defc288b5ac67.jpg",
      companyName: "Tesla",
      jobPosted: "2 days ago",
      designation: "Embedded Software Engineer",
      timing: "Full time",
      level: "Mid Level",
      salary: "$140/hr",
      location: "Palo Alto, California",
    },
    {
      companyLogo:
        "https://i.pinimg.com/736x/2c/ea/3e/2cea3e7494f8f6f763216b708c21f4f2.jpg",
      companyName: "Uber",
      jobPosted: "4 days ago",
      designation: "Product Manager",
      timing: "Full time",
      level: "Senior Level",
      salary: "$185/hr",
      location: "San Francisco, California",
    },
    {
      companyLogo:
        "https://i.pinimg.com/1200x/70/80/b2/7080b24c3980c8f4d29412746b5c7ce9.jpg",
      companyName: "Airbnb",
      jobPosted: "5 days ago",
      designation: "UX/UI Designer",
      timing: "Part time",
      level: "Junior Level",
      salary: "$110/hr",
      location: "San Francisco, California",
    },
  ];
  return (
    <div className="parent">
      {jobOffers.map(function (com) {
        return (
          <Card
            company={com.companyName}
            image={com.companyLogo}
            jobPosted={com.jobPosted}
            position={com.designation}
            timing={com.timing}
            level={com.level}
            salary={com.salary}
            location={com.location}
          />
        );
      })}
    </div>
  );
};

export default App;
