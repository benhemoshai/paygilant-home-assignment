# Paygilant Home Assignment - README

## Project Overview

The Paygilant Home Assignment is a React-based application that allows users to view, search, and interact with a list of posts fetched from an external API. It includes features such as a responsive UI, dynamic search functionality, and navigation for a seamless user experience.

### Preview:

[Preview](./src/assets/demo-gif.gif)

### Link to a demo:

[Paygilant Home Assignment - Live Demo](https://paygilant-home-assignment.vercel.app/)

---

## Features

### 1. **View Posts - with Search Functionality**

- Fetches and displays a list of posts from the JSONPlaceholder API.
- Posts are shown in a grid format using responsive design principles.
- Includes a real-time search bar to filter posts by their title.
- Search bar features a dynamic `X` button to clear the search query and responsive styling with Tailwind CSS.

### 2. **View Post Details**

- Navigate to a detailed view of a post by clicking on a post card.
- Displays the post's title and full content.

### 3. **Add a Post**

- Includes a "New Post" page with a form for adding a new post.
- Users can provide a title and body for the new post.

### 4. **Responsive Navigation Bar**

- Includes links to the main page ("Posts") and the "New Post" creation page.
- Designed to be responsive using Tailwind CSS.
- Mobile menu with a toggle button for smaller screens.

### 5. **Additional Enhancements**

- "Latest Posts" section header with gradient text styling.
- Dynamic display of the number of available posts.
- Smooth hover effects and transitions for interactivity.

---

## Steps to Run the Application Locally

### Prerequisites

- Node.js and npm installed on your local machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/benhemoshai/paygilant-home-assignment.git
   ```
2. Navigate to the project directory:
   ```bash
   cd paygilant-home-assignment
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

1. Start the development server:
   ```bash
   npm run dev
   ```
2. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

---

## Deployment

The application has been deployed and is accessible at the following link:

[Paygilant Home Assignment - Live Demo](https://paygilant-home-assignment.vercel.app/)

---

## Additional Notes

- The application uses `lucide-react` for icons, providing a clean and modern look.
- The project is styled entirely using Tailwind CSS for fast and flexible design.
- The search functionality dynamically updates as the user types, enhancing the user experience.
- React Router is used to enable smooth navigation between different parts of the application.
