import HomePage from '@/components/screen/home/home';
import Layout from '@/layout/layout';
import { useEffect } from 'react';



export default function Home() {
    useEffect(() =>{
        fetch('http://localhost:8081/php/rest/items.php').then(data => data.json()).then(data => console.log(data))
    }, [])

    return (
        <Layout>
            <HomePage />
        </Layout>
    );
}
