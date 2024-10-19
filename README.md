
# Trello Clone - TaskFlow

## Overview

**TaskFlow** is a Trello-inspired task management app that allows users to create, edit, move, and delete tasks across different boards. The app leverages **React** for UI, **React DnD** for drag-and-drop functionality, **useReducer** and **useContext** for state management, and **Tailwind CSS** for a clean, responsive user interface.

---

## Features

- **Task Management**: Create, edit, and delete tasks across multiple columns (e.g., To Do, In Progress, Done).
- **Drag and Drop**: Move tasks between columns using React DnD.
- **State Management**: Utilizes React's `useReducer` for managing complex state and `useContext` for global state sharing.
- **Responsive Design**: Built with **Tailwind CSS** to ensure the app is fully responsive across different screen sizes.
- **Efficient State Handling**: Minimal re-rendering and optimized performance through reducer-based state management.

---

## Built With

- [**React**](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [**React DnD**](https://react-dnd.github.io/react-dnd/) - For implementing drag-and-drop features.
- [**useReducer**](https://reactjs.org/docs/hooks-reference.html#usereducer) - A React Hook for managing complex state logic.
- [**useContext**](https://reactjs.org/docs/context.html) - A React Hook to easily pass data through the component tree.
- [**Tailwind CSS**](https://tailwindcss.com/) - A utility-first CSS framework for styling and responsive design.
- [**HTML5 Backend for React DnD**](https://react-dnd.github.io/react-dnd/docs/backends/html5) - Used for enabling HTML5 drag-and-drop capabilities.

---

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/taskflow.git
   cd taskflow
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm start
   ```

4. **Open in the browser:**
   ```
   http://localhost:3000
   ```

---

## Usage

1. **Create a Task**: Click the "Add another card" button under the appropriate column to add a task.
2. **Move a Task**: Drag and drop tasks between columns (To Do, In Progress, Done).
3. **Edit/Delete Tasks**: Coming soon.

---

## Code Structure

- **App.js**: The main component that houses the Trello context provider and manages the state using `useReducer`.
- **CardList.js**: Represents each column (To Do, In Progress, Done) and handles task creation.
- **Card.js**: Individual task card component with drag-and-drop functionality using React DnD.

---

## Contributing

We welcome contributions to this project! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a pull request.


## Acknowledgements

- Thanks to the creators of React, React DnD, and Tailwind CSS for their powerful tools.
- Inspired by the functionality of Trello for task management.

---

check the deployed project here : https://trello-clone-theta-lilac.vercel.app/

**Author**: [Basit Manzoor](https://github.com/basit438)

--
