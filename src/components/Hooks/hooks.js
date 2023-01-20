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

const useChangeCopiedStateToDefaultAfter = (time) => {
    const [copied, setCopied] = useState(false)

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (copied) setCopied(false)
        }, time)
        return () => clearTimeout(timeout)
    }, [copied])
    return [copied, setCopied]
}
export { useChangeCopiedStateToDefaultAfter, useScroll } 