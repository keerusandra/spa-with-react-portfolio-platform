# Single Page Application with React - Portfolio Platform

## Overview

The Portfolio Platform Application is a React-based web application designed to display creative projects in a modern and responsive portfolio layout. Users can browse projects, search for specific projects, and dynamically add new projects through an interactive form.

This application demonstrates core React concepts including component-based architecture, state management with hooks, dynamic rendering, event handling, and responsive design.

---

## Features

### Landing Page

* Displays a collection of project cards.
* Each project card includes:

  * Project title
  * Description
  * Technologies used
  * Project image
  * Project link

### Search Functionality

* Users can search projects by title.
* Results update dynamically as the user types.

### Add New Projects

* Users can add new projects using a form.
* Newly added projects appear immediately on the page without requiring a refresh.

### Responsive Design

* Layout adapts to desktop, tablet, and mobile screen sizes.
* Uses CSS Grid for flexible project card placement.

---

## Technologies Used

* React
* JavaScript (ES6+)
* CSS3
* Vite

---

## Project Structure

```text
src/
│
├── components/
│   ├── Header.jsx
│   ├── SearchBar.jsx
│   ├── ProjectCard.jsx
│   ├── ProjectList.jsx
│   └── ProjectForm.jsx
│
├── data/
│   └── projects.js
│
├── styles/
│   └── App.css
│
├── App.jsx
└── main.jsx
```

---

## Component Relationships

### App.jsx

The root component that manages application state. It stores project data, handles searching, and passes data and functions to child components.

### Header.jsx

Displays the application's title and introductory text.

### SearchBar.jsx

Provides an input field that allows users to filter projects by title.

### ProjectForm.jsx

Contains the form used to add new projects to the portfolio.

### ProjectList.jsx

Receives project data from App.jsx and renders a collection of ProjectCard components.

### ProjectCard.jsx

Displays information for an individual project.

---

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Navigate to the project folder:

```bash
cd project-showcase
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open the application in your browser using the local URL provided by Vite.

---

## Usage

1. View available projects on the landing page.
2. Use the search bar to filter projects by title.
3. Fill out the project form to add a new project.
4. Submit the form to display the new project instantly.

---

## Future Improvements

* Edit existing projects
* Delete projects
* Save project data using a backend API or JSON Server
* Project category filtering
* Dark mode support
* Project detail pages

---

## Author

Created as a React portfolio and project showcase application to demonstrate component-based development, state management, dynamic rendering, and responsive web design.
