import styles from './newsbar.module.css'
import NewsItem from '../newsItem/newsItem'
function NewsBar() {
  return (
    <div className={styles.container}>
        <h2>Новости Адрес39</h2>
      <div className={styles.wrapper}>
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
      </div>
    </div>
  )
}

export default NewsBar