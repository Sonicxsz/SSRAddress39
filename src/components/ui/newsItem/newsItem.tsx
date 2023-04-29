import React from 'react'
import styles from './newsItem.module.css'
import Link from 'next/link'

function NewsItem() {
  return (
    <div className={styles.container}>
      
        <div className={styles.content}>
          <h3 className={styles.title}>Пасхальное предложение Адрес39</h3>
          <p className={styles.description}>Мы готовы представить вам наше посхальное предложение дставить вам наше посхальное предложениедставить вам наше посхальное предложениедставить вам наше посхальное предложениедставить вам наше посхальное предложениедставить вам наше посхальное предложение</p>
          <button className={styles.btn}><Link href="/news">Открыть</Link></button>
        
        </div>
    </div>
  )
}

export default NewsItem