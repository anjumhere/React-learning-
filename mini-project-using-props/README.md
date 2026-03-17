🃏 Job Cards Component - React Mini Project
A responsive job listing cards component built with React.js featuring job offers from FAANG/MAANG tech giants.

📸 Project Preview
https://link-to-your-screenshot.png

A collection of job cards displaying positions from top tech companies

✨ Features
🎯 12 Job Cards - Displaying positions from Google, Apple, Microsoft, Amazon, Meta, Netflix, and more

🖼️ Company Logos - Each card features the company's logo

📅 Job Posting Time - Shows when the job was posted (e.g., "2 days ago")

💼 Job Details - Position, timing (full-time/part-time), experience level

💰 Salary Information - Hourly rate display

📍 Location - Company location with city and state

💾 Save/Bookmark - Each card has a save button for later reference

🎨 Responsive Design - Cards wrap responsively on different screen sizes

🛠️ Built With
React.js - Functional components with props

CSS3 - Flexbox for layout, custom styling

Lucide React - Bookmark icons

Google Fonts - Arial, Helvetica font family

📁 Project Structure
text
miniproject/
│
├── src/
│   ├── components/
│   │   └── Card.jsx           # Reusable card component
│   │
│   ├── data/
│   │   └── jobOffers.js       # Array of job objects with all data
│   │
│   ├── styles/
│   │   └── Card.css           # All styling for cards
│   │
│   └── App.js                  # Main component rendering all cards
│
├── public/
│   └── index.html
│
└── package.json
🚀 Getting Started
Prerequisites
Node.js (v14 or higher)

npm or yarn

Installation
Clone the repository

bash
git clone https://github.com/YOUR_USERNAME/react-learning-journey.git
cd react-learning-journey/miniproject
Install dependencies

bash
npm install
Install lucide-react for icons

bash
npm install lucide-react
Run the development server

bash
npm start
Open your browser

text
http://localhost:3000
🎯 Learning Objectives Achieved
This project helped me understand:

✅ React Basics

Creating functional components

Passing and using props

Component composition

✅ Data Management

Storing data in separate arrays

Mapping over data to create multiple components

Using unique keys for list items

✅ Styling

CSS Flexbox for layouts

Creating reusable styles

Responsive design principles

Box shadows and borders

Hover effects

✅ Problem Solving

Fixed layout issues with multi-line text

Consistent card heights

Proper spacing and alignment

📊 Job Data Structure
javascript
{
  companyLogo: "url-to-logo",
  companyName: "Google",
  jobPosted: "2 days ago",
  designation: "Senior UX/UI Designer",
  timing: "Full time",
  level: "Senior Level",
  salary: "$180/hr",
  location: "Mountain View, California"
}
🎨 Component Usage
jsx
import Card from './components/Card';

function App() {
  return (
    <div className="parent">
      {jobOffers.map((job, index) => (
        <Card 
          key={index}
          image={job.companyLogo}
          company={job.companyName}
          jobPosted={job.jobPosted}
          position={job.designation}
          timing={job.timing}
          level={job.level}
          salary={job.salary}
          location={job.location}
        />
      ))}
    </div>
  );
}
🔧 Customization
Modifying Job Data
Edit src/data/jobOffers.js to:

Add new companies

Update job details

Change salaries or locations

Add more cards

Styling Changes
Edit src/styles/Card.css to:

Change colors

Modify card dimensions

Adjust spacing

Add animations

🤔 Challenges Faced & Solutions
Challenge	Solution
Text wrapping breaking card layout	Added min-height to position titles
Inconsistent card heights	Used flexbox with proper spacing
Responsive design	Implemented flex-wrap and percentage widths
Multiple cards rendering	Used map() function with proper keys
📱 Responsive Behavior
Desktop: 3-4 cards per row

Tablet: 2 cards per row

Mobile: 1 card per row (with adjusted widths)

🚧 Future Improvements
Add hover animations

Implement dark mode

Add filtering by company or job type

Create detailed job view on card click

Add pagination for more cards

Implement search functionality

Add loading skeletons

Make save button functional with state

📚 What I Learned
Component Reusability: One Card component renders 12 different jobs

Props Drilling: Passing data from parent to child components

CSS Flexbox Mastery: Created complex layouts with flex properties

Data Separation: Keeping data separate from UI logic

Git Workflow: Committing and pushing projects to GitHub

🤝 Contributing
This is a learning project, but feel free to fork and enhance!

📝 License
This project is part of my React learning journey and is free to use for learning purposes.

🙏 Acknowledgments
Company logos from Pinterest

Icons from Lucide

Inspired by modern job board designs

📬 Contact
GitHub: Your Username

Project Link: https://github.com/YOUR_USERNAME/react-learning-journey/tree/main/miniproject

⭐ If you find this project helpful, please star the main repository!

Last Updated: March 2026
