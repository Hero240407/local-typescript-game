# TypeScript Quest

TypeScript Quest is an interactive, browser-based game designed to help users learn and practice TypeScript concepts in a fun and engaging way. Solve coding challenges, earn virtual money and XP, complete side quests, and customize your experience!

## Features

*   **Interactive Learning:** Solve TypeScript problems ranging from basic syntax to more advanced concepts.
*   **Gamified Progression:**
    *   **Levels:** Over 25 main levels with increasing difficulty.
    *   **XP & Money:** Earn Experience Points (XP) and virtual money for correct answers.
    *   **Side Quests:** Over 25 side quests to challenge your understanding and reward exploration.
*   **In-Game Shop:** Spend your earned money on:
    *   Hints to help with difficult problems.
    *   XP and money boosts.
    *   Utility items like level skips or second chances.
    *   Cosmetic items and fun unlocks (conceptual for now, can be expanded).
*   **Dynamic UI:**
    *   Clean, modern interface inspired by gaming dashboards.
    *   Dark mode by default, with a toggle for light mode.
    *   VSCode-like input area for code-based answers.
    *   Filtered views for shop items and side quests to manage display.
*   **Auto-Save:** Your progress (level, money, XP, completed quests, purchases, theme) is automatically saved in your browser's local storage.
*   **Responsive Design:** Playable on various screen sizes, from desktop to mobile.
*   **Built with Web Technologies:** Pure HTML, CSS, and JavaScript – no external frameworks or libraries required for core functionality.

## How to Play

1.  **Setup:**
    *   Ensure you have all three project files in the same directory:
        *   `index.html`
        *   `style.css`
        *   `script.js`
2.  **Launch:**
    *   Open the `index.html` file in any modern web browser (e.g., Chrome, Firefox, Edge, Safari).
3.  **Gameplay:**
    *   You'll start at the Welcome Screen. Click "Start Your Quest".
    *   Each level presents a TypeScript problem or question.
    *   Enter your answer in the provided input field (text for simple answers, a code editor for code challenges).
    *   Submit your answer. You'll receive feedback and, if correct, rewards.
    *   Use the sidebar to:
        *   Check your player stats (level, XP, money).
        *   Browse and buy items from the shop.
        *   View and track your side quests.
    *   Progress through levels, complete quests, and aim to master TypeScript!

## Project Structure

*   **`index.html`**: Contains the HTML structure of the game, including all UI elements and placeholders for dynamic content.
*   **`style.css`**: Defines all the visual styling for the game, including layouts, colors, themes (dark/light), and responsive design.
*   **`script.js`**: Houses all the game logic, including:
    *   Level definitions and answers.
    *   Shop item data and actions.
    *   Side quest definitions and requirements.
    *   Game state management (XP, money, progress).
    *   DOM manipulation to update the UI.
    *   Event handling for user interactions.
    *   Local storage for auto-saving.

## Customization & Expansion

This game is designed to be a foundation. Here are ways you can expand it:

*   **Add More Content:**
    *   **Levels:** Add new objects to the `levels` array in `script.js`.
    *   **Side Quests:** Add new objects to the `sideQuestsData` array.
    *   **Shop Items:** Add new objects to the `shopItemsData` array, defining their effects in the `action` function.
*   **Enhance UI/UX:**
    *   Implement actual theme switching for purchased cosmetic themes.
    *   Add more detailed modals for shop item descriptions or quest info.
    *   Improve the "VSCode-like" input with basic syntax highlighting (complex, might require a library).
*   **Advanced Features:**
    *   Implement a backend for leaderboards or user accounts (requires server-side technology).
    *   Create more complex problem types (e.g., debugging existing code, drag-and-drop exercises).
    *   Add mini-games related to TypeScript concepts.
*   **Code Evaluation:** For code-based questions, the current answer checking is a simple string comparison. For more robust evaluation, consider:
    *   Using Abstract Syntax Trees (ASTs) for structural comparison.
    *   Integrating a sandboxed JavaScript/TypeScript execution environment (e.g., using Web Workers or an iframe). This is a significant undertaking.

## Contributing

While this is a self-contained project, if it were open source, contributions could involve:
*   Adding new levels and educational content.
*   Improving UI/UX elements.
*   Refactoring code for better performance or readability.
*   Implementing new game mechanics or features.
*   Fixing bugs.
