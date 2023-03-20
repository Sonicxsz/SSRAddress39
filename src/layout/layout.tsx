import Footer from '@/components/ui/footer/footer';
import IconsBar from '@/components/ui/iconBar/iconBar';
import Navigation from '@/components/ui/navbar/navigation';
import styles from '../styles/layout.module.css';
import { useLayoutLogic } from './useLayoutLogic';
import { useAppDispatch } from '@/common/hooks/useRedux';
import Modal from '@/components/ui/modal/modal';
function Layout({ children }: { children: React.ReactNode }) {
    const dispatch =useAppDispatch()
    const {
        moveToContact,
        scroll,
        modalLang,
        isMidl,
        toContact,
        modalBooking, 
        modalCarreer, 
        modalDelevery,
        setModalDelevery, 
        setModalBooking, 
        setModalCarreer 
    } = useLayoutLogic();

    const closeModal = (setter:any): void => {
        dispatch(setter(false))
    }
    const openModal = (setter:any): void => {
        dispatch(setter(true))
    }
    
    return (
        <div className={styles.app}>
            <div className={styles.main}>
                <Navigation
                    openModalDelevery={() => openModal(setModalDelevery)}
                    openModalCarrer={() => openModal(setModalCarreer)}
                    openModalBooking={() => openModal(setModalBooking)}
                    moveToContact={moveToContact}
                />
                <Modal label={modalLang.vacancy} showModal={modalCarreer} closeModal={() => closeModal(setModalCarreer)} type="career"/>
				<Modal label={modalLang.booking} showModal={modalBooking} closeModal={() => closeModal(setModalBooking)} type="booking"/>
				<Modal label={modalLang.delevery} showModal={modalDelevery} closeModal={() => closeModal(setModalDelevery)} type="delivery"/>
                {children}
            </div>
            <Footer>
                <IconsBar />
            </Footer>
        </div>
    );
}

export default Layout;
