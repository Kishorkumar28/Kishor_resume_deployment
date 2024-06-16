import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='parent-container'>
      <div ><p className='rolling-text resume '>Resume</p></div>
        <div className='personal-info-container '>
          <div className="personal-info scalineffect">
                <div className="name shimmer-text  " style={{fontSize:"35px",fontWeight:600,}}>Kishorkumar K</div>
                <div className="title" style={{fontSize:"30px",fontWeight:550,}}>Full Stack Developer</div>
                <div className="contact-info" style={{fontSize:"20px",fontWeight:500,}}>
                    <div>Email: kishor28092002@gmail.com</div>
                    <div>Phone: +91 8838897455</div>
                    <div>Website: www.johndoe.com</div>
                    <div>LinkedIn: <a href="https://www.linkedin.com/in/kishor-kumar-k-520788252/">Kishorkumar Linkedin Profile</a></div>
                    <div>GitHub: <a href='https://github.com/Kishorkumar28'>Kishorkumar Github Profile</a></div>
                </div>
          </div>
            <div className='scalineffect' >
              <img src="images/Kishor_pic.jpg" width={"300vh"} height={"300vw"} style={{objectFit:"cover", border:"10px solid #1498FD", borderRadius:"8vh"}} ></img>
            </div>
          
        </div>

    <div className="summary scalineffect">
        <div className="section-title shimmer-text" style={{fontSize:"35px",fontWeight:600}}>Summary</div>
        <div style={{fontSize:"20px",fontWeight:500}}>
        Motivated and enthusiastic Full Stack Developer with a strong foundation in web development and a passion for learning new technologies. Proficient in both front-end and back-end development, with hands-on experience in HTML, CSS, JavaScript, and Node.js. Skilled in using modern frameworks and libraries including React, Material-UI (Mui) and Bootstrap to build responsive and user-friendly web applications. Adept at problem-solving, with a keen eye for detail and a commitment to writing clean, efficient code. Seeking opportunities to leverage skills and contribute to impactful projects while continuing to grow and develop as a developer.        </div>
    </div>

    <div className="education scalineffect">
        <div className="section-title shimmer-text" style={{fontSize:"35px",fontWeight:600,}}>Education</div>
        <div className="degree" style={{fontSize:"20px",fontWeight:500}}>
            <div className="school" style={{fontSize:"25px",fontWeight:500}}>Sastra Deemed To Be University</div>
            <div className="program-year">
                <span className="program" style={{fontSize:"25px",fontWeight:500}}>Bachelor of Technology in Computer Science and Engineering</span> 
                <span className="year" style={{fontSize:"25px",fontWeight:550}}>2020 - 2024</span>
                <span>Recent graduate with a Bachelor's degree in B.Tech CSE. Throughout my university journey, I maintained a proactive approach to learning, consistently seeking opportunities to deepen my understanding of key concepts and technologies. Engaged in various projects and coursework,  I honed my skills in full stack development, mastering technologies such as HTML, CSS, JavaScript, React, Node.js, Python, and MongoDB. Eager to leverage my skills and contribute to innovative projects in the tech industry.</span>
            </div>
        </div>
    </div>

    <div className="skills scalineffect">
        <div className="section-title shimmer-text" style={{fontSize:"35px",fontWeight:600,}}>Skills</div>
        <div className="skill-list" style={{fontSize:"20px",fontWeight:600,}}>
            <ul>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>MongoDB</li>
                <li>Git</li>
                <li>Python</li>
                <li>Bootstrap</li>
            </ul>
        </div>
    </div>

    <div className="projects scalineffect">
        <div className="section-title shimmer-text" style={{fontSize:"35px",fontWeight:600,}}>Projects</div>
        <div className="project">
            <div className="project-name" style={{fontSize:"30px",fontWeight:550,}}>Hotel Booking Platform</div>
            <div className="description" style={{fontSize:"20px",fontWeight:550,}}>Built an Hotel Booking platform with a user-friendly and Reactive interface . Implemented features like property listing, hotel booking, User Signup and Login with Back End Intergration using MongoDB</div>
            <div className="technologies" style={{fontSize:"20px",fontWeight:550,}}>Technologies: React, MongoDB, Bootstrap, Material-UI (Mui), and Yup</div>
        </div>
        <div className="project">
            <div className="project-name" style={{fontSize:"30px",fontWeight:550,}}>Driver drowsiness Detection using DCNN</div>
            <div className="description" style={{fontSize:"20px",fontWeight:550,}}>This project proposes a real-time driver drowsiness detection system using Deep Convolutional Neural Networks (DCNN). The system continuously analyzes the driver's facial features and eye movements captured through an in-vehicle camera. It detects signs of drowsiness, such as prolonged eye closure or unusual facial expressions, and triggers alarms to alert the driver. Additionally, the system sends alert emails to the driver's registered Gmail account and SMS messages to a predefined emergency contact. This comprehensive approach aims to mitigate risks associated with driver drowsiness and enhance road safety.</div>
            <div className="technologies" style={{fontSize:"20px",fontWeight:550,}}>Technologies:  Python, Flask , Html, CSS, Javascript</div>
        </div>
        
    </div>

    <div className="certifications scalineffect">
        <div className="section-title shimmer-text" style={{fontSize:"35px",fontWeight:600,}}>Certifications</div>
        <div className="certification" >
            <div className="certification-name" style={{fontSize:"20px",fontWeight:550,}}>Cambridge English Level 1 Certificate in ESOL International</div>
            <div className="organization" style={{fontSize:"20px",fontWeight:550,}}>Cambridge Assessment English</div>
            <div className="year" style={{fontSize:"20px",fontWeight:550,}}>Year: 2019</div>
        </div>
        <div className="certification" >
            <div className="certification-name" style={{fontSize:"20px",fontWeight:550,}}>Bootcamp on Machine Learning</div>
            <div className="organization" style={{fontSize:"20px",fontWeight:550,}}>Developer Student Clubs by Google with Devtown</div>
            <div className="year" style={{fontSize:"20px",fontWeight:550,}}>Year: 2023</div>
        </div>
        <div className="certification" >
            <div className="certification-name" style={{fontSize:"20px",fontWeight:550,}}>IOT using Raspberry Pi Workshop</div>
            <div className="organization" style={{fontSize:"20px",fontWeight:550,}}>Top Engineers by MIT & Anna University Alumni </div>
            <div className="year" style={{fontSize:"20px",fontWeight:550,}}>Year: 2023</div>
        </div>
    </div>

    <div className='Deployments'>
      <div className="section-title shimmer-text" style={{fontSize:"35px",fontWeight:600,}}>My Deployments</div>
        <div style={{fontSize:"22px",fontWeight:550,}}>
          <div className='project-name scalineffect'>Hotel Booking Platform: <a href='https://projecthotelbookingbykishor.netlify.app/'>Click Here</a></div>
          <div className='project-name scalineffect'>E-Commerce Website: <a href='https://ecommercreactesample.netlify.app/'>Click Here</a></div>
          <div className='project-name scalineffect'>Dice Game: <a href='https://dicegameprojects.netlify.app/'>Click Here</a></div>
          <div className='project-name scalineffect'>Subscription Plans Example: <a href='https://subscriptionplansusingreactandvite.netlify.app/'>Click Here</a></div>
          <div className='project-name scalineffect'>Cart Page example: <a href='https://cartpageusingcontext.netlify.app/'>Click Here</a></div>
          <div className='project-name scalineffect'>E-Courses example: <a href='https://reactroutersample.netlify.app/'>Click Here</a></div>
          <div className='project-name scalineffect'>Calculator example: <a href='https://calculatorsampleusingdom.netlify.app/'>Click Here</a></div>
        </div>

        
      </div>
      
    </div>
  )
}

export default App
