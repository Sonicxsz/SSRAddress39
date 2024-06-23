import styles from './style.module.css'
import React, { useEffect, useRef } from 'react';
import cn from 'classnames';

interface DropdownMenu {
    items: DropdownMenuItem[],
    onClick: (type:string) => void,
    onClose: () => void,
    visible: boolean
}

interface  DropdownMenuItem {
    title: string,
    type: string,

}
export const DropdownMenu = ({items,visible,onClose,onClick}:DropdownMenu) => {
    const ref = useRef(null)

    const clickHandler = (e: MouseEvent) => {
            if(e.target !== ref.current) {
                onClose()
            }
    }
    useEffect(() => {
        if(!visible) return
        document.addEventListener('click', clickHandler)

        return () => document.removeEventListener('click', clickHandler)
    }, [visible]);

    return <div className={cn(styles.dropdown, visible && styles.dropdownActive)} ref={ref}>
        {items?.map(el =>  <span onClick={(e) => {
            e.stopPropagation()
            onClick(el.type)
        }} key={el.title} className={styles.dropdownItem}>{el.title}</span>)}
    </div>
}