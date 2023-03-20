import HomePage from '@/components/screen/home/home';
import Layout from '@/layout/layout';



export default function Home() {
  

    return (
        <Layout>
            <HomePage openModalBooking={function (): void {
                throw new Error('Function not implemented.');
            } } openModalDelevery={function (): void {
                throw new Error('Function not implemented.');
            } } />
        </Layout>
    );
}
