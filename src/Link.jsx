import { EVENTS } from "./consts.js"

export function navigate (href) {
    window.history.pushState({},'', href)
    const navigationEvent = new Event(EVENTS.PUSHSTATE)
    window.dispatchEvent(navigationEvent)
}

// eslint-disable-next-line react/prop-types
export function Link ({target, to, ...props}) {

    const handleClick = () => {
        navigate(to)
    }

    return <a onClick={handleClick} href={to} target={target} {...props} />
}