import Footer from '@/components/footer/footer';
import IconsBar from '@/components/iconBar/iconBar';
import Navigation from '@/components/navbar/navigation';
import styles from '../styles/layout.module.css';
import { useLayoutLogic } from './useLayoutLogic';

function Layout({ children }: { children: React.ReactNode }) {
    const {
        closeModal,
        openModal,
        moveToContact,
        scroll,
        modalLang,
        modalDelevery,
        setModalDelevery,
        modalBooking,
        isMidl,
        setModalBooking,
        modalCarreer,
        setModalCarreer,
        toContact,
    } = useLayoutLogic();

    return (
        <div className={styles.app}>
            <div className={styles.main}>
                <Navigation
                    openModalDelevery={() => openModal(setModalDelevery)}
                    openModalCarrer={() => openModal(setModalCarreer)}
                    openModalBooking={() => openModal(setModalBooking)}
                    moveToContact={moveToContact}
                />
                {children}
            </div>
            <Footer>
                <IconsBar />
            </Footer>
        </div>
    );
}

export default Layout;
