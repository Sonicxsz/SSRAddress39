// @ts-nocheck
import React from 'react'
import { useRef, useEffect, useState, ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import css from './styles.module.css';
import { useAppSelector } from '@/common/hooks/useRedux';
import { CloseIcon } from 'next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon';
import styles from '@/components/ui/portalModal/styles.module.css';
interface PortalProps {
    children: ReactNode,
    onClose: () => void;
}


const main = [
    '/assets/menu/main/1.jpg',
    '/assets/menu/main/2.jpg',
    '/assets/menu/main/3.jpg',
];

const vine = [
    '/assets/menu/wine/1.jpg',
    '/assets/menu/wine/2.jpg',
];
const winter =  [
    '/assets/menu/winter/winter.jpg',
]
const children = [
    '/assets/menu/child/1.jpg',
];
const additionalVine = [
    '/assets/menu/wineglass/1.jpg',
];
const menus = {
    main: main,
    wine: vine,
    children: children,
    additionalVine: additionalVine,
    winter:winter
}

interface MenuModal {
    showModal: boolean;
    closeModal: () => void;
}

function MenuModal({showModal, closeModal}:MenuModal) {
    const menuType = useAppSelector(state => state.controlSlice.menuModal.type)
    if(!showModal) return null
  return (
      <div className={css.overlay} suppressHydrationWarning={true} >
        <div className={css.wrapper}>
            <Carousel   showThumbs={false}
                        infiniteLoop={true}
                        showStatus={false} responsive={{ }}
                        swipeable={false}
            >
                {menus[menuType]?.map((i, ind) => {
                    return  <img key={i} src={i} alt={i} />
                })}
            </Carousel>
        </div>
          <div onClick={closeModal} className={css.closeBtn}>
              <CloseIcon width={50} height={50}/>
          </div>
      </div>

  )
}




export default MenuModal
