import { useState, useEffect } from "react"
const email = 'marcibfabisiak123@gmail.com'
const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop);
const copyEmail = (email) => navigator.clipboard.writeText(email)
const useScroll = (skillref) => {
    const [scrolled, setScrolled] = useState(false);
    {/*using handleScroll to slide to upper place */ }
    const handleScroll = () => {
        const YPosition = skillref.current.getBoundingClientRect().top;
        const offset = window.scrollY;
        if (offset > YPosition) return setScrolled(true);
        return setScrolled(false);
    };
    {/*using useRef hook to make navigation */ }
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    });
    return [scrolled]
}
export { useScroll, scrollToRef, copyEmail, email }