import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #10a37f;
    --secondary-color: #0a8a6e;
    --background-light: #ffffff;
    --background-dark: #0f172a;
    --text-light: #1e293b;
    --text-dark: #e2e8f0;
    --nav-light: #f8fafc;
    --nav-dark: #1e293b;
    --border-light: #e2e8f0;
    --border-dark: #334155;
    --shadow-light: rgba(0, 0, 0, 0.1);
    --shadow-dark: rgba(0, 0, 0, 0.3);
    --transition: all 0.3s ease;
  }

  body[data-theme='light'] {
    --background: var(--background-light);
    --text: var(--text-light);
    --nav-bg: var(--nav-light);
    --border: var(--border-light);
    --shadow: var(--shadow-light);
  }

  body[data-theme='dark'] {
    --background: var(--background-dark);
    --text: var(--text-dark);
    --nav-bg: var(--nav-dark);
    --border: var(--border-dark);
    --shadow: var(--shadow-dark);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Söhne', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
    background-color: var(--background);
    color: var(--text);
    transition: var(--transition);
    line-height: 1.6;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .main-content {
    transition: margin-left 0.3s ease;
  }
`;

export default GlobalStyles;