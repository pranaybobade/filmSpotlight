import Skeleton from '../../../components/Loader/Loader';
import Img from '../../../components/lazyLoading/Img';
import avatar from '../../../assets/profile.avif'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useNavigate } from 'react-router-dom';

const Cast = ({ data, loading }) => {
    const navigate = useNavigate()
    return (
        <>

            {
                data?.length > 0 &&
                <div>
                    <h2 className='my-3 text-2xl tracking-wider'>Cast</h2>
                    {
                        loading ? (
                            <div>
                                <Skeleton />
                            </div>
                        ) : (
                            <Swiper className='list w-full h-full flex justify-center'
                                grabCursor={true}
                                slidesPerView={3}
                                spaceBetween={10}
                                freeMode={true}
                            >
                                {
                                    data?.map((item) => {
                                        return (
                                            <SwiperSlide key={item.id} className='cast-swiper-slide' onClick={() => navigate(`/person/${item?.id}`)}>
                                                <div className={`profileImg w-44 h-[200px] rounded-full mr-10 `}>
                                                    <Img src={item?.profile_path ? `https://image.tmdb.org/t/p/w500/${item?.profile_path}` : avatar} className={' w-full h-full object-cover object-top '} />
                                                </div>
                                                <h1 className={`text-sm tracking-wider mt-1 pl-5`}>{item?.name}</h1>
                                            </SwiperSlide>
                                        )
                                    })
                                }
                            </Swiper>
                        )
                    }
                </div>
            }




        </>
    )
}

export default Cast