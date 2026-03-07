import DeliveryPage from '../components/screen/delevery/delevery';
import Layout from '@/layout/layout';
import { GetStaticProps } from 'next';
import { deleveryProps } from '@/types/types';
import { API } from '@/common/config/api';

export default function Delevery({ data }: deleveryProps) {
    return (
        <Layout>
            <DeliveryPage data={data} />
        </Layout>
    );
}

export const getStaticProps: GetStaticProps<deleveryProps> = async () => {
    const res = await fetch(API.items);
    const data = await res.json();
    return {
        props: {
            data,
        },
    };
};
