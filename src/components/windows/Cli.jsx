import React from 'react'
import MacWindow from './MacWindow'
import Terminal from 'react-console-emulator';
import "./cli.scss"

const Cli = ({ windowName, setWindowsState }) => {
  return (
    <MacWindow windowName={windowName} setWindowsState={setWindowsState}>
      <div className='cli-window'>
    <Terminal.default
      commands={{
        echo: {
          description: 'Echo a passed string.',
          usage: 'echo <string>',
          fn: (...args) => args.join(' '),
        },

        // help: {
        //   description: 'List available commands',
        //   usage: 'help',
        //   fn: () => `Available commands:\n\n` +
        //     `help            - List available commands\n` +
        //     `about           - Short bio\n` +
        //     `projects        - Show sample projects\n` +
        //     `resume          - Link to resume (public folder)\n` +
        //     `contact         - Contact information\n` +
        //     `github          - GitHub profile link\n` +
        //     `skills          - Key skills list\n` +
        //     `echo <string>   - Echo input back to you\n`,
        // },

        about: {
          description: 'Short bio about the portfolio owner',
          usage: 'about',
          fn: () => `---------------------------------------------------------------\n\n`+
            'Hi, I’m Shadan 👋.\n\n'+
          ` A Full Stack Developer in progress, passionate about building clean and interactive web applications.

            I work with the MERN stack and love turning ideas into real-world projects. Alongside development, I’m consistently improving my problem-solving skills through DSA.

            Currently exploring how AI can be integrated into modern web applications.`+
            `\n\n---------------------------------------------------------------\n\n`
               },

        projects: {
            description: 'List of notable projects',
            usage: 'projects',
            fn: () => `Projects:\n\n` +

            `1. Full-Stack Web Application (MERN)\n` +
            `   → Built a scalable full-stack app using Node.js, Express, MongoDB, and EJS\n` +
            `   → Designed RESTful APIs with proper CRUD operations\n` +
            `   → Implemented JWT authentication & role-based authorization\n` +
            `   → Followed MVC architecture for clean and maintainable code\n` +
            `   → Tested APIs using Postman\n\n\n` +
            `---------------------------------------------------------------\n\n` +
            

            `2. CloudPoint - Weather Application\n` +
            `   → Developed a real-time weather app using HTML, CSS, JavaScript\n` +
            `   → Integrated external weather APIs for live data\n` +
            `   → Displayed weather data with interactive UI & maps\n` +
            `   → Implemented proper error handling for API responses\n\n\n` +
           `---------------------------------------------------------------\n\n` +

            `3. macOS Portfolio (This Project)\n` +
            `   → Built a macOS-inspired UI using React & Vite\n` +
            `   → Implemented window system (open, close, minimize, maximize)\n` +
            `   → Created reusable components & smooth UI interactions\n\n` +

            `Use 'github' command to view source code → 🔗\n\n`+
            `---------------------------------------------------------------\n\n`
        },

        resume: {
          description: 'Returns the public resume path',
          usage: 'resume',
          fn: () => `---------------------------------------------------------------\n\n` +
            'Resume available at: https://raw.githubusercontent.com/iamshadankhan10/Portfolio-Website/main/public/resume.pdf (open this URL in the browser to download)',
        },

        contact: {
          description: 'Contact information',
          usage: 'contact',
          fn: () => 'Email: iamshadankhan10@gmail.com\nLinkedIn: https://www.linkedin.com/in/shadankhan10/',
        },

        github: {
          description: 'Link to GitHub profile',
          usage: 'github',
          fn: () => `\n` +
            'GitHub: https://github.com/iamshadankhan10\n\n' +
          `---------------------------------------------------------------\n\n`,
        },

        skills: {
          description: 'List top skills',
          usage: 'skills',
          fn: () => 'Skills: JavaScript, React, CSS/SCSS, Vite, ' +
           'UI design, Node.js, Express, MongoDB, Django, Python, AI integration, Git, RESTful APIs' +
           `\n---------------------------------------------------------------\n\n`,
        },
      }}
      welcomeMessage={`Welcome to the portfolio terminal!\n\nAvailable commands:
        \• about - Learn about me
        \• projects - View my projects
        \• resume - Get my resume
        \• contact - Get my contact info
        \• github - View my GitHub profile
        \• skills - View my skills
        \• echo - Echo input back to you

\n\nType 'help' for a short description of each command.`}
      promptLabel={'shadanrazakhan:~$'}
      promptLabelStyle={{ color: 'green' }}
    />
      </div>
    </MacWindow>
  )
}


export default Cli