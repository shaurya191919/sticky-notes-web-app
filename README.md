# sticky-notes-web-app


This is a simple web application built with Node.js and Express framework, allowing users to create, read, and delete sticky notes. The frontend is designed using EJS templates for dynamic rendering of data and CSS for styling. The app utilizes filesystem operations to store and manage the notes.

## Technologies Used:
- **Node.js:** JavaScript runtime environment for server-side scripting.
- **Express:** Web application framework for Node.js to handle HTTP requests and routes.
- **EJS (Embedded JavaScript):** Templating language for generating HTML markup with plain JavaScript.
- **HTML/CSS/JavaScript:** Frontend technologies for structure, styling, and client-side scripting.
- **GSAP (GreenSock Animation Platform):** JavaScript animation library used for draggable functionality.

## Features:
1. **Create Note:**
   - Users can create a new sticky note by providing a title and details.
   - Submitted data is stored as a text file in the `/files` directory on the server.

2. **Read Note:**
   - All existing notes are displayed on the homepage.
   - Each note is clickable, leading to a detailed view of the note's contents.

3. **Delete Note:**
   - Users can delete a note by clicking the "delete" link next to each note.
   - Deletes the corresponding text file from the `/files` directory.

4. **Draggable Notes:**
   - Utilizes GSAP for draggable functionality, allowing users to move notes around the screen.

## File Structure:
- **`app.js`:** Entry point of the application. Defines routes, middleware, and starts the server.
- **`/public`:** Directory for static files such as CSS, JavaScript, and images.
- **`/views`:** Contains EJS templates for rendering dynamic HTML content.
- **`/files`:** Directory to store text files representing each note.

## Setup Instructions:
1. Clone the repository.
2. Install dependencies using `npm install`.
3. Run the application with `node app.js`.
4. Access the application at `http://localhost:3000`.



## Author:
[Shaurya Singh]


