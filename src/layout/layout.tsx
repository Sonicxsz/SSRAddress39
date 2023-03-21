import Footer from '@/components/ui/footer/footer';
import IconsBar from '@/components/ui/iconBar/iconBar';
import Navigation from '@/components/ui/navbar/navigation';
import styles from '../styles/layout.module.css';
import { useLayoutLogic } from './useLayoutLogic';
import { useAppDispatch } from '@/common/hooks/useRedux';
import { openModal, closeModal } from '../common/utils/setters'
import Modal from '@/components/ui/modal/modal';
function Layout({ children }: { children: React.ReactNode }) {
    const dispatch =useAppDispatch()
    const {
        moveToContact,
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
    
    
    
    return (
        <div className={styles.app}>
            <div className={styles.main}>
                <Navigation
                    openModalDelevery={() => openModal(dispatch,setModalDelevery)}
                    openModalCarrer={() => openModal(dispatch,setModalCarreer)}
                    openModalBooking={() => openModal(dispatch,setModalBooking)}
                    moveToContact={moveToContact}
                />
                <Modal label={modalLang.vacancy} showModal={modalCarreer} closeModal={() => closeModal(dispatch, setModalCarreer)} type="career"/>
				<Modal label={modalLang.booking} showModal={modalBooking} closeModal={() => closeModal(dispatch,setModalBooking)} type="booking"/>
				<Modal label={modalLang.delevery} showModal={modalDelevery} closeModal={() => closeModal(dispatch,setModalDelevery)} type="delivery"/>
                {children}
            </div>
            <Footer>
                <IconsBar />
            </Footer>
        </div>
    );
}

export default Layout;
