import Img from '../lazyLoading/Img'
import Skeleton from '../Loader/Loader'
import { useNavigate } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import PosterBackground from '../../assets/nothing.webp'

const Carousel = ({ movies, loading, endpoint }) => {
    const navigate = useNavigate()
    return (
        <>
            {
                loading ? (
                    <div className='flex justify-center items-center h-20'>
                        <Skeleton />
                    </div>
                ) : (

                    <Swiper className="BackdropItems w-full h-full flex justify-center my-3"
                        grabCursor={true}
                        slidesPerView={'auto'}
                        spaceBetween={25}
                        freeMode={true}
                    >
                        {
                            movies?.results?.map((item) => {
                                return (
                                    <SwiperSlide key={item?.id} className={`cast-swiper-slide ${!item?.backdrop_path && 'posterBackground'}`} onClick={() => navigate(`/${endpoint}/${item?.id}`)}>
                                        {/* Img */}
                                        <Img src={item?.backdrop_path ? `https://image.tmdb.org/t/p/w500/${item?.backdrop_path}` : PosterBackground} alt={`${item.original_title}`} />

                                        <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white transition-all duration-500'>
                                            <p className='whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>{item?.title || item.original_name}</p>
                                        </div>
                                       
                                    </SwiperSlide>
                                )
                            })
                        }
                        )
                    </Swiper>
                )
            }
        </>
    )
}

export default Carousel