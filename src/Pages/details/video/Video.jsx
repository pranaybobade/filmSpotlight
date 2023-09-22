import Skeleton from "../../../components/Loader/Loader";
import { Swiper, SwiperSlide } from 'swiper/react'
import ReactPlayer from "react-player";
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';

const Video = ({ data, loading }) => {
    return (
        <>
            {
                loading ? (
                    <div className="flex justify-center items-center w-full h-screen">
                        <Skeleton />
                    </div>
                ) : (
                    <>
                        {
                            data?.length>0 && <div className="videoWrapper text-white mx-3 sm:mx-5 md:mx-16 my-9">
                                <h2 className="text-xl md:text-2xl ml-1.5 tracking-wider my-3">Official Videos</h2>
                                {
                                    loading ? (
                                        <div className="w-full h-full flex justify-center items-center">
                                            <Skeleton />
                                        </div>
                                    ) : (
                                        <Swiper className="videoItems w-full h-full"
                                            direction='horizontal'
                                            grabCursor={'true'}
                                            navigation={true}
                                            modules={[Navigation]}
                                        >
                                            {
                                                data?.map((video) => {
                                                    return (
                                                        <SwiperSlide className="video-swiper-slide" key={video?.id}>
                                                            <div className="sm:h-screen">
                                                                <ReactPlayer

                                                                    url={`https://www.youtube.com/watch?v=${video?.key}`}
                                                                    controls
                                                                    width="100%"
                                                                    height="100%"
                                                                />
                                                            </div>

                                                        </SwiperSlide>
                                                    )
                                                })}
                                        </Swiper>
                                    )
                                }
                            </div>
                        }
                    </>
                )
            }
        </>
    )
}

export default Video