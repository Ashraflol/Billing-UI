import React, { useEffect ,useState} from "react";
// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

function SwiperComponent(props) {
    let [mySwiper, setMySwiper] = useState(null) 
    useEffect(() => {
    let mySwiper = new Swiper('.swiper1', {
        loop: true,
        slidesPerView: '1',
        centeredSlides: true,
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });
    setMySwiper(mySwiper) 
    }, []) // See Note 2

    return(<>
        <div className={props.swiperclass + ' swiper'}>
        <div className="swiper-wrapper">
            <div className="swiper-slide">
                <img src="/stockimage1.jpeg"></img>
            </div>
            <div className="swiper-slide">
                <img src="/stockimage2.webp"></img>
            </div>
            <div className="swiper-slide">
                <img src="/stockimage3.avif"></img>
            </div>
            <div className="swiper-slide">
                <img src="/stockimage4.jpeg"></img>
            </div>
            <div className="swiper-slide">
                <img src="/stockimage5.jpeg"></img>
            </div>
        </div>
        <div className="swiper-pagination"></div>

        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>

        <div className="swiper-scrollbar"></div>
        </div>
    </>)
}


export default SwiperComponent;