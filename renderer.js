window.electronAPI.onUpdateTheme((event, theme) => {
    const root = document.documentElement
    root.style.setProperty('--scheme-theme', theme)
})