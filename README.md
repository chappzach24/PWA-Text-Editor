# PWA-Text-Editor

J.A.T.E. is a simple web-based text editor designed for ease of use and offline access. It provides basic text editing capabilities along with the ability to save and retrieve documents locally using IndexedDB. Additionally, the application can be installed as a Progressive Web App (PWA) for improved accessibility and offline usage.

## Features

- **Text Editing**: J.A.T.E. utilizes CodeMirror, a versatile text editor implemented in JavaScript, allowing users to edit text with features like syntax highlighting, line numbers, and more.
- **Local Storage**: Documents edited within the text editor are automatically saved locally using IndexedDB, enabling users to access their content even when offline.
- **Progressive Web App (PWA)**: Users can install J.A.T.E. as a Progressive Web App (PWA) for a more app-like experience, including the ability to launch the editor from the home screen and work offline.

## Installation

1. Clone the repository:

    ```bash
    git clone git@github.com:chappzach24/PWA-Text-Editor.git
    ```

2. Install dependencies:

    ```bash
    cd PWA-Text-Editor
    npm install
    ```

3. Build the project:

    ```bash
    npm run build
    ```

4. Start the server:

    ```bash
    npm start
    ```

5. Navigate to `http://localhost:3000` in your web browser.

## Usage

- Launch the text editor by opening the provided URL in a web browser.
- Edit text within the editor as needed.
- Changes are automatically saved locally using IndexedDB.
- To install J.A.T.E. as a Progressive Web App (PWA), click on the "Install!" button in the navigation bar when prompted.

## Dependencies

- Express.js: Web server framework for Node.js.
- Workbox: Library for implementing service workers and caching strategies.
- CodeMirror: JavaScript library for creating text editors.

## Contributing

- https://github.com/woestyn101 Who helped wwith this prioject!

## License

This project is licensed under the [ISC License](LICENSE).
