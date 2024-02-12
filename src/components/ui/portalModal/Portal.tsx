import React from 'react'
import { useRef, useEffect, useState, ReactNode } from 'react'
import { createPortal } from 'react-dom'
import styles from "./portal.module.css"
interface PortalProps {
    children: ReactNode,
    onClose: () => void;
}

function PortalModal() {
  return (
    <div>PortalModal</div>
  )
}





export const Portal = (props:PortalProps) => {
  const ref = useRef<Element | null>(null)
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>("#portal")
    setMounted(true)
  }, [])

  return (mounted && ref.current) ? createPortal(<div onClick={(e) => {
    if(e.target.className === 'prevent') return;
    e.stopPropagation()
    props.onClose()
  }
  } className={styles.overlay}>{props.children}</div>, ref.current) : null
}

export default PortalModal