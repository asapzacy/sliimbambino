import React from 'react'
import s from './Home.scss'

const Home = () => (
  <section className={s.container}>
    <main className={s.videoContainer}>
      <iframe
        className={s.video}
        src={'https://www.youtube.com/embed/Csp7mv7-Usw?rel=0'}
        allow={'autoplay; encrypted-media'}
        frameBorder={0}
        allowFullScreen
      />
    </main>
  </section>
)
export default Home
