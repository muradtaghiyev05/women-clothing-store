import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import BannerImg from '../../assets/other-images/home-banner.webp';
import CategoriesSlider from "../categories-slider/CategoriesSlider";
import NewProducts from '../new-products/NewProducts'

const Home = () => {

    const { pathname, hash, key } = useLocation();

    useEffect(() => {
        if (hash === '') {
            window.scrollTo(0, 0);
        }
    }, [pathname, hash, key]);

    return (
    <div className='home'>
        <div className='hero-container'>
            <img src={BannerImg} alt='hero' />
            <div className="hero-info">
                <h2>Hər Zövqə Uyğun</h2>
                <Link to={`/products/Bütün Geyimlər`}><button className="hero-btn">Bütün Geyimlər</button></Link>
            </div>
        </div>
        <div className="new-products-container">
            <h1>Yeni Gələn Geyimlər</h1>
            <NewProducts />
            <Link to='/products/Bütün Geyimlər' className="all-link Link">Bütün Geyimlər</Link>
        </div>
        <div className="categories-slider-container">
            <CategoriesSlider />
        </div>
    </div>
    )
}

export default Home