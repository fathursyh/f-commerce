if (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches || localStorage.theme === 'dark') {
    document.documentElement.dataset.theme = 'dark'
} else {
    document.documentElement.dataset.theme = 'light'
}