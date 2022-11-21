const email = 'marcibfabisiak123@gmail.com'
const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop);
const copyEmail = (email) => navigator.clipboard.writeText(email)
export { scrollToRef, copyEmail, email }