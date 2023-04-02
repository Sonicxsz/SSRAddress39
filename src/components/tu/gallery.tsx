import Layout from "@/layout/layout";
import Gallery from "@/components/screen/gallery/gallery";
import { mainService } from "@/service/main.service";

function GalleryPage({data}: {data:string[]}) {
  return ( 
        <Layout>
          <Gallery data={data}/>
        </Layout>

  )
}

export  const getStaticProps = async () => {	
	const data = await mainService.getImages()
	
	return {
	  props: {
      data,
	  },
	}
  }

export default GalleryPage