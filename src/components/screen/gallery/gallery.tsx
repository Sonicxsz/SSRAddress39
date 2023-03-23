import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ImgBlock from "@/components/ui/imgBlock/imgBlock";
import styles from './gallery.module.css'
import { useState, useEffect } from 'react'
import { GetServerSideProps } from "next/types";

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



export const getServerSideProps = async () => {
  const data = await (await fetch('http://localhost:8081/php/rest/gallery.php')).json() as string[]

	return {
	  props: {
		data,
	  },
	}
  }
 


 

export default Gallery

