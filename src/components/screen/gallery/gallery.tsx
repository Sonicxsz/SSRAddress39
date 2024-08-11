import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ImgBlock from "@/components/ui/imgBlock/imgBlock";
import styles from './gallery.module.css'
import { useState, useEffect } from 'react'
import { GetServerSideProps, GetStaticProps } from "next/types";
import { mainService } from "@/service/main.service";
import Head from "next/head";
function Gallery({data}:{data:string[]}) {
const [fullImages, setFullImages] = useState<string[]>([])

    async function requestImages(data:string[]) {
      let full = [];

       for(let i = 0; i < data.length; i++){
            full.push('/assets/gallery/' + data[i])
          }
        setFullImages(full);

    }

    useEffect(() => {
        requestImages(data)
    }, [])
 
  
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 535, min: 0 },
      items: 1
    }
  };

  return ( 
    <>
        <Head>
                <title>Галерея блюд и интерьера ресторана Адрес39</title>
                <meta
                    name="description"
                    content="Адрес39 – галерея блюд и интерьера нашего ресторана в Москве, мы подарим незабываемый уют и  атмосферу для вашего настроения"
                />
                <meta name='keywords' 
                    content="Адрес39,ресторан,винный бар,ЖК комплекс, Wellton Park ,винные бары,ресторан в Москве,разная кухня москва,МО ресторан,лучшие блюда в Москве,детское меню,японское меню,классическое меню,доставка,самовывоз,официальный сайт ресторана Адрес39,ресторан блюда меню, бронирование стола"
                />
                <meta name="robots" content="index, follow" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
          </Head>
        <Carousel 
        draggable={false}
        infinite={true}
        autoPlay={false}
        className={styles.calouselWrapper}
        itemClass={styles.carouselItem}
        responsive={responsive}>
          {fullImages.map((i, ind) => {
            return <div className={styles.galleryImgWrapper} key={ind}><ImgBlock styles={styles.galleryImg}  src={i} /></div>
          })}
        </Carousel>
        
        
        </>
  )
}





 

export default Gallery

