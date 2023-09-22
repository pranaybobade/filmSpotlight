import Skeleton from '../../../components/Loader/Loader'
import { Swiper, SwiperSlide } from 'swiper/react'
import Img from '../../../components/lazyLoading/Img'
// import required modules
import { Autoplay, } from 'swiper/modules';


const Backdrops = ({ data, loading }) => {
  return (
    <>
      {
        loading ? (
          <div className='w-full h-auto my-10 flex justify-center items-center'>
            <Skeleton />
          </div>) : (
          <div className="videoWrapper text-white  my-9 mx-3 sm:mx-5 md:mx-16">
            <h2 className="text-2xl tracking-wider">Backdrops</h2>
            <Swiper className="BackdropItems w-full h-full  my-3"
              direction='horizontal'
              grabCursor={'true'}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}

              modules={[Autoplay]}
            >
              {
                data?.backdrops?.map((backdrop, index) => {
                  return (
                    <SwiperSlide
                      key={index} className='md:h-[85vh]'
                    >
                      <Img className={'object-cover object-top'} src={`https://image.tmdb.org/t/p/original/${backdrop?.file_path}`} />
                    </SwiperSlide>
                  )
                })}
            </Swiper>

          </div>
        )
      }
    </>
  )
}

export default Backdrops