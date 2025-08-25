# Patient Assessment Form 📋

[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)[![React Router](https://img.shields.io/badge/React_Router-v6-CA4245?style=for-the-badge&logo=react-router)](https://reactrouter.com/)[![Ant Design](https://img.shields.io/badge/Ant_Design-UI-1677FF?style=for-the-badge&logo=ant-design)](https://ant.design/)

A modern, responsive, and comprehensive web application for managing patient assessments. Built with a robust React frontend, this project features a dual-form system for both creating new and updating existing patient records, all within a professional and intuitive user interface powered by Ant Design.

## ✨ Key Features

-   **Dual Form System:** Includes two separate, dedicated pages:
    -   **Submit Form:** For creating a brand new patient assessment from scratch.
    -   **Update Form:** Simulates fetching existing patient data and pre-populating the form for easy updates.
-   **Complex Form Fields:** Utilizes advanced Ant Design components like multi-select dropdowns, date pickers, and sliders for capturing detailed clinical data.
-   **Professional UI/UX:** Built with a clean layout, a consistent design language, and a sticky header for a polished, enterprise-grade user experience.
-   **Fully Responsive Design:** The layout is mobile-first, ensuring a seamless experience on any device, from large desktops to small smartphones.
-   **Clear Submission Feedback:** Provides instant user feedback with success messages upon form submission, confirming that the data has been processed.

---

## 📂 Data Handling & Submission

This project is a **frontend-only application** designed to demonstrate UI/UX and client-side logic.

### 1. How Data is Handled

Upon clicking the "Submit" or "Update" button, the application performs the following actions:
1.  Validates all form fields to ensure the data is complete.
2.  Collects all the data into a single JavaScript object.
3.  **Logs this object to the browser's developer console.**

### 2. Viewing the Output

To see the captured data:
1.  Run the project locally (see instructions below).
2.  Open your browser's Developer Tools (usually by pressing `F12` or `Ctrl+Shift+I`).
3.  Click on the **"Console"** tab.
4.  Fill out and submit either form.
5.  The complete form data object will appear in the console.

> **Note on Production Use:** This console-logging approach is for demonstration purposes only. A production-ready application would send this data via a secure API request to a backend server for storage in a database.

---

## 🛠️ Technology Stack

-   **Frontend:** Built with **React** for creating a dynamic, component-based user interface.
-   **Routing:** **React Router DOM** is used to manage navigation between the "Submit" and "Update" pages.
-   **UI Framework:** **Ant Design** provides a comprehensive library of enterprise-class UI components for a polished and consistent look and feel.
-   **Bootstrapped with:** **Create React App**.

---

## 🚀 How to Run Locally

To get a local copy up and running, follow these simple steps.

### Prerequisites

-   Node.js (v16 or later) & npm
-   Git

### Installation

1.  **Clone the repository (replace `YourUsername` with your GitHub username):**
    ```sh
    git clone https://github.com/YourUsername/Patient-Assessment-Form.git
    cd Patient-Assessment-Form
    ```

2.  **Install project dependencies:**
    ```sh
    npm install
    ```

3.  **Start the development server:**
    ```sh
    npm start
    ```
    The application will now be running on `http://localhost:3000`.

---

## 📜 Available Scripts

In the project directory, you can run:

-   `npm start`: Runs the app in development mode.
-   `npm run build`: Bundles the application for production to the `build` folder.
-   `npm test`: Launches the test runner in interactive watch mode.
