import './CSS/About.css'
import { motion as m } from 'framer-motion'

export default function About() {
    return (
        <m.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.5}}>
            <main id='about'>
                <h1>BBB Mission & Vision</h1>
                <div id='about-flex'>
                    <div>
                        <h3>Mission</h3>
                        <p>Better Bathroom Bureau is an organization dedicated to helping residents and visitors of Seattle access bathroom facilities around the city.</p>
                        <p>Our web app catalogues bathrooms that users of the site submit, along with user reviews and ratings for each facility.</p>
                    </div>
                    <div>
                        <h3>Vision</h3>
                        <p> Our goal is to share insight into available bathrooms and collect first-hand accounts of user experiences, in order to help users have a better bathroom experience.</p>
                    </div>
                </div>
            </main>
        </m.div>
    )
}