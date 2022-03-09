// Insert extra css, to check LocalStorage before DOM is loaded
export const setInitialTheme = `
  function getUserPreference() {
    if(window.localStorage.getItem('theme')) {
      return window.localStorage.getItem('theme')
    }
    window.localStorage.setItem('theme', 'dark')
    return 'dark'
  }
  document.documentElement.dataset.theme = getUserPreference();
`;
// Insert extra css, to prevent flash when DOM is loaded
export const extraCSS = `
  html[data-theme=dark] {
    background-color: hsl(76, 13%, 17%);
  }
  html[data-theme=light] {
    background-color: hsl(0, 0%, 96%);
  }
`;
