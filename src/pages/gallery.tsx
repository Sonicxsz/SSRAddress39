import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ImgBlock from "@/components/imgBlock/imgBlock";
import styles from '../styles/gallery.module.css'
import { useState, useEffect } from 'react'

function GalleryPage() {
const [fullImages, setFullImages] = useState<string[]>([])


    async function requestImages() {
      let full = [];
      let data1 = await (await fetch('http://localhost:8081/php/rest/gallery.php')).json() as string[]

       for(let i = 0; i < data1.length; i++){
            full.push('/assets/gallery/' + data1[i])
          }
        setFullImages(full);

    }

    useEffect(() => {
        requestImages()
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
        
        <Carousel 
        draggable={false}
        infinite={true}
        autoPlay={true}
        itemClass={styles.carouselItem}
        responsive={responsive}>
          {fullImages.map((i, ind) => {
            return <div className={styles.galleryImgWrapper} key={ind}><ImgBlock styles={styles.galleryImg}  src={i} /></div>
          })}
        </Carousel>
        
        

  )
}

export default GalleryPage