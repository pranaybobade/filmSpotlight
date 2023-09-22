import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from 'swiper/modules'
import Loader from '../Loader/Loader'
import Img from '../lazyLoading/Img';
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

const Carousel = ({ data, isLoading, mediaType }) => {
    const navigate = useNavigate()
    const truncateString = (str, num) => {
        if (str?.length > num) {
            return str.slice(0, num) + '....';
        } else {
            return str;
        }
    }

    return (
        <Swiper className="mySwiper h-screen w-full text-white"
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            centeredSlides={true}
            modules={[Autoplay]}
        >
            {
                isLoading ? (
                    <Loader />
                ) : (
                    data?.results?.map((item, id) => {
                        return (
                            <SwiperSlide key={id}>
                                <div className='h-full w-full relative'>
                                    {/* Background Image */}
                                    <Img src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path || item?.profile_path}`} className={'w-full h-full object-cover object-center relative'} />
                                    {/* Content */}
                                    <div className='content absolute w-full top-[23%] p-4 md:p-8 z-40'>
                                        <h1 className='text-3xl md:text-5xl font-bold'>{item?.original_title || item?.original_name || item?.name}</h1>
                                        <div className={`my-4 `}>
                                            <button className='border bg-[#ff0000] text-white text-sm  font-bold tracking-wider border-[#ff0000] py-2 w-24 rounded-full ' onClick={() => navigate(`/${mediaType}/${item?.id}`)}>Play</button>
                                        </div>
                                        <p className='text-gray-400 text-sm my-2 font-bold'>{dayjs(item?.release_date).format('MMM D,YYYY')}</p>
                                        <p className='w-full font-semibold text-sm sm:text-lg md:text-xl md:max-w-[70%] lg:max-w-[35%] text-gray-200 '>{truncateString(item?.overview, 150)}</p>
                                    </div>
                                </div>
                                <div className='w-full h-full bg-black/80 absolute  top-0'></div>
                            </SwiperSlide>
                        )
                    })
                )
            }
        </Swiper>

    )
}

export default Carousel