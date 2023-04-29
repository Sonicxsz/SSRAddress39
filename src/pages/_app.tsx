import '@/styles/globals.css';
import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import store from '@/store/store';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Spinner from '@/components/svg/Spinner';
import { func } from '@/common/hooks/withMessage';

function Loading () {
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const handleStart = (url:string) => (url !== router.asPath) &&  setLoading(true)
    const handleComplete = () =>  setTimeout(() => setLoading(false), 300)


    useEffect(() => {
        router.events.on('routeChangeStart', handleStart)
        router.events.on('routeChangeComplete', handleComplete)
        router.events.on('routeChangeError', handleStart)
        return () => {
            router.events.off('routeChangeStart', handleStart)
            router.events.off('routeChangeComplete', handleComplete)
            router.events.off('routeChangeError', handleStart)
        }
    })

    return loading ? (
        <div className='loadingWrapper'>
            <Spinner />
        </div>
    ) : null

}



export default function App({ Component, pageProps }: AppProps) {
    

    return ( <>
                <Loading />
                <Provider store={store}>
                <Component {...pageProps} />
                 </Provider>
            </> 
    );
}
