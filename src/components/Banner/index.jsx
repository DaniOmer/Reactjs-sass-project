import './banner.scss'
import Image from '../../assets/home-banner.jpg'

const Banner = () => {
    return (
        <section className="banner">
            <div className="banner__bg"></div>
            <img src={Image} alt="Nature" className="banner__image"/>
            <p className="banner__text">Chez vous, partout et ailleurs</p>
        </section>
    )
}

export default Banner
