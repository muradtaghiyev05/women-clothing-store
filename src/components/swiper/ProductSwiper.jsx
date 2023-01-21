import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css'

const ProductSwiper = ({ images }) => {

  return (
      <div className='product-swiper-container'>
        <Swiper
            slidesPerView={1}
            spaceBetween={10}
            grabCursor={true}
            navigation={true}
            breakpoints={{
                350: {
                    width: 350,
                    height: 350,
                    slidesPerView: 1
                },
                576: {
                    width: 450,
                    height: 450,
                    slidesPerView: 1
                }
            }}
            modules={[Navigation]}
            className='product-images-slider'
        >
            {images.map((item, index) => (
                <SwiperSlide key={index} className='product-image-slide'>
                    <LazyLoadImage
                        src={item}
                        alt='product'
                        effect="blur"
                        placeholderSrc={item}
                        width='100%'
                        height='100%'
                    />
                </SwiperSlide>
            ))}
        </Swiper>
      </div>
  )
}

export default ProductSwiper