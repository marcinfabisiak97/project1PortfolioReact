import { useState, useEffect } from "react"
const useScroll = (skillref) => {
    const [scrolled, setScrolled] = useState(false);
    const handleScroll = () => {
        const YPosition = skillref.current.getBoundingClientRect().top;
        const offset = window.scrollY;
        if (offset > YPosition) return setScrolled(true);
        return setScrolled(false);
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    });
    return [scrolled]
}
export default useScroll 