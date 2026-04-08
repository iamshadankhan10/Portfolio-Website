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
          fn: () => 'Hi — I\'m a frontend developer building small interactive web apps and portfolio pieces. Type `projects` to see examples.',
        },

        projects: {
          description: 'List of notable projects',
          usage: 'projects',
          fn: () => `Projects:\n\n` +
            `- mac-os UI (this portfolio) — A React/Vite UI that mimics macOS.\n` +
            `- GitHub window demo — small integrations and sample components.\n` +
            `For details, check the GitHub profile with the \`github\` command.`,
        },

        resume: {
          description: 'Returns the public resume path',
          usage: 'resume',
          fn: () => 'Resume available at: /My%20Resume.pdf (open this URL in the browser to download)',
        },

        contact: {
          description: 'Contact information',
          usage: 'contact',
          fn: () => 'Email: your.email@example.com\nLinkedIn: https://www.linkedin.com/in/your-profile',
        },

        github: {
          description: 'Link to GitHub profile',
          usage: 'github',
          fn: () => 'GitHub: https://github.com/',
        },

        skills: {
          description: 'List top skills',
          usage: 'skills',
          fn: () => 'Skills: JavaScript, React, CSS/SCSS, Vite, UI design',
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