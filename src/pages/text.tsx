import NewsItem from '@/components/ui/newsItem/newsItem'
import UnderBook from '@/components/ui/underBook/underBook'
import Layout from '@/layout/layout'
function Text() {
  return (
    <Layout>
        <div className='test'>
            <NewsItem />
            <NewsItem />
            <NewsItem />

        </div>
    </Layout>
  )
}

export default Text