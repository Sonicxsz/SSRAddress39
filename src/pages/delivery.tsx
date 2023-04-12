import DeliveryPage from '../components/screen/delevery/delevery'
import Layout from '@/layout/layout';
import { GetStaticProps } from 'next';
import { deleveryProps } from '@/types/types';



export default function Delevery({data}:deleveryProps) {
  

    return (
        <Layout>
            <DeliveryPage data={data}  />
        </Layout>
    );
}


export  const getStaticProps: GetStaticProps<deleveryProps> = async (context) => {
	const res = await fetch('http://localhost:3001/api/v1/items')
	const data = await res.json() 
	
	return {
	  props: {
		data,
	  },
	}
  }
 