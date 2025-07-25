# MVG-Page

MVG-Page is a React-based single-page application serving as the official portfolio website for MVG Games, showcasing company information, project highlights, and contact options. The project is bootstrapped with Create React App for a zero-configuration setup, enabling quick local development and standardized build processes. It is hosted on Netlify, leveraging continuous deployment, automatic builds, and a global CDN for fast, reliable delivery.

## Table of Contents

1. [Features](#features)
2. [Technology Stack](#technology-stack)
3. [Installation](#installation)
4. [Available Scripts](#available-scripts)
5. [Deployment](#deployment)
6. [Project Structure](#project-structure)
7. [Contributing](#contributing)
8. [License](#license)
9. [Contact](#contact)

## Features

- **Responsive design**: Optimized for both desktop and mobile devices
- **Smooth single-page navigation**: Implemented with anchor links or React Router for seamless section transitions
- **Portfolio section**: Showcases game projects with images, descriptions, and external links to demos and repositories
- **Embedded media support**: Includes YouTube demo videos to highlight gameplay and trailers
- **Contact form**: Simple form or direct email link for easy inquiries from visitors

## Technology Stack

- **React (v18+)**: For building UI components and managing application state
- **JavaScript (ES6+) & JSX**: For component logic and templating
- **Create React App**: For a modern build setup with no initial configuration required
- **Netlify**: For hosting, continuous integration, and global CDN delivery

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/MaiineV/MVG-Page.git
   ```
2. Install dependencies:
   ```bash
   cd MVG-Page
   npm install
   # or
   yarn install
   ```
3. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

## Available Scripts

In the project directory, you can run:

- `npm start`: Runs the app in development mode at [http://localhost:3000](http://localhost:3000)
- `npm run build`: Builds the app for production into the `build/` folder
- `npm test`: Launches the test runner in interactive watch mode
- `npm run eject`: Ejects the Create React App configuration, giving full control over build tools (irreversible)

## Deployment

1. Connect the GitHub repository to Netlify via the “New site from Git” workflow.
2. Set the build command to `npm run build` and the publish directory to `build/` in Netlify settings.
3. Netlify will automatically build and deploy the site on each push to the `main` branch.

## Project Structure

```
MVG-Page/
├── public/          # Static files and index.html
├── src/             # Source code
│   ├── components/  # Reusable React components
│   ├── assets/      # Images, icons, videos
│   ├── App.js       # Main App component
│   ├── index.js     # Entry point
│   └── styles/      # CSS/SCSS files
├── .gitignore       # Files to ignore in Git
├── package.json     # Project metadata and scripts
└── README.md        # This file
```

## Contributing

Contributions are welcome! Please:

1. Open an issue to discuss significant changes before coding.
2. Fork the repository and create a new branch for your feature or fix.
3. Ensure all tests and lint checks pass.
4. Submit a pull request with a clear description of your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

Maintained by MVG Games. For questions or feedback, reach out via:

- Email: `your-email@example.com`
- GitHub Issues: https://github.com/MaiineV/MVG-Page/issues
