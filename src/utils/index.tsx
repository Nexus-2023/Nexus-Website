export const openCalendly = () => {
  if (typeof window) {
    window.open("https://calendly.com/mnkrj500/30min", "_blank")
    return false
  }
}
