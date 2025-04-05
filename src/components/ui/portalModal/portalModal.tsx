// @ts-nocheck
import React from 'react'
import { useRef, useEffect, useState, ReactNode } from 'react'
import { createPortal } from 'react-dom'
import styles from "./styles.module.css"
interface PortalProps {
    children: ReactNode,
    onClose: () => void;
    overlayOff?: boolean;
}






export const Portal = (props:PortalProps) => {
    const ref = useRef<Element | null>(null)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        ref.current = document.querySelector<HTMLElement>("#portal")
        setMounted(true)
    }, [])

    const onClick = (e) => {

        if (e.target.className === 'prevent') return;
        e.stopPropagation()
        props.onClose()
    }



        return (mounted && ref.current) ? createPortal(
            props.overlayOff ? props.children :
        <div onClick={onClick} className={styles.overlay}>{props.children}</div>
        , ref.current) : null
        }

