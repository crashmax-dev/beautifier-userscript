import './style.css'

declare global {
  interface Window {
    switchTheme(event: unknown): void
  }
}

unsafeWindow.switchTheme({ target: { checked: true } })
