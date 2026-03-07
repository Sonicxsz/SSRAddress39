import React, { useState, useCallback } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import css from './styles.module.css';
import { useAppSelector } from '@/common/hooks/useRedux';
import { AiOutlineClose } from 'react-icons/ai';

const main = ['/assets/menu/main/1.jpg', '/assets/menu/main/2.jpg'];
const vine = ['/assets/menu/wine/1.jpg', '/assets/menu/wine/2.jpg'];
const children = ['/assets/menu/child/1.jpg'];
const additionalVine = ['/assets/menu/wineglass/1.jpg'];
const bar = ['/assets/menu/bar/1.jpg'];
const season = ['/assets/menu/special/1.jpg'];

const menus: Record<string, string[]> = {
    main,
    wine: vine,
    children,
    additionalVine,
    bar,
    season,
};

interface MenuModalProps {
    showModal: boolean;
    closeModal: () => void;
}

const CLOSE_DURATION = 250;

function MenuModal({ showModal, closeModal }: MenuModalProps) {
    const menuType = useAppSelector(
        (state) => state.controlSlice.menuModal.type,
    );
    const [isClosing, setIsClosing] = useState(false);

    const handleClose = useCallback(() => {
        if (isClosing) return;
        setIsClosing(true);
        setTimeout(() => {
            closeModal();
            setIsClosing(false);
        }, CLOSE_DURATION);
    }, [isClosing, closeModal]);

    const handleOverlayClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            handleClose();
        }
    };

    if (!showModal) return null;

    const images = menus[menuType] || [];

    return (
        <div
            className={`${css.overlay} ${isClosing ? css.overlayClosing : ''}`}
            onClick={handleOverlayClick}
        >
            <div className={`${css.wrapper} ${isClosing ? css.wrapperClosing : ''}`}>
                <Carousel
                    showThumbs={false}
                    infiniteLoop={true}
                    showStatus={false}
                    swipeable={true}
                    className={css.carSty}
                    showArrows={false}
                    renderIndicator={(onClickHandler, isSelected, index, label) => {
                        const defStyle: React.CSSProperties = {
                            marginLeft: 10,
                            display: 'inline-block',
                            width: '15px',
                            height: '15px',
                            borderRadius: '50%',
                            backgroundColor: isSelected
                                ? '#e0224a'
                                : 'rgba(255, 255, 255, 0.4)',
                            cursor: 'pointer',
                            transition: 'background-color 0.3s',
                        };
                        return (
                            <span
                                style={defStyle}
                                onClick={onClickHandler}
                                onKeyDown={onClickHandler}
                                key={index}
                                role="button"
                                tabIndex={0}
                                aria-label={`${label} ${index + 1}`}
                            />
                        );
                    }}
                >
                    {images.map((i) => {
                        return <img key={i} src={i} alt={i} />;
                    })}
                </Carousel>
            </div>
            <div onClick={handleClose} className={css.closeBtn}>
                <AiOutlineClose />
            </div>
        </div>
    );
}

export default MenuModal;