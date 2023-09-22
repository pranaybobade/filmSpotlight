import { useParams } from 'react-router-dom'
import { useGetDataQuery } from '../../redux/Slices/TMDB_API_SLICE/Data'
import Skeleton from '../../components/Loader/Loader'
import Img from '../../components/lazyLoading/Img'
import dayjs from 'dayjs'
import { TMDB_API_KEY } from '../../utils/api'

const PersonDetail = () => {

  const { id } = useParams()
  const { data, isLoading } = useGetDataQuery(`person/${id}?${TMDB_API_KEY}`)
  const { data: images } = useGetDataQuery(`person/${id}/images?${TMDB_API_KEY}`)
  return (
    <section className='min-h-screen'>
      {
        isLoading ? (
          <div className='w-full h-screen flex justify-center items-center'>
            <Skeleton />
          </div>
        ) : (
          <div className='person-detail-wrapper text-white pt-20'>
            <div className='top-section px-5 flex flex-col md:flex-row gap-x-4 items-center'>
              <div className='Profile-img w-44 md:w-[16rem]'>
                <Img src={`https://image.tmdb.org/t/p/w500/${data?.profile_path}`} />
              </div>
              <div className='detail md:w-[80%] md:px-5'>
                <h2 className='text-2xl font-wider my-1.5'>{data?.name} {data?.birthday != null ? dayjs(data?.birthday).format("YYYY") : ''}</h2>

                <p className='text-sm tracking-wider text-justify'>{data?.biography}</p>
              </div>
            </div>
            <div className='bottom-sec px-5 mt-8 mb-5'>
              <h2 className='text-4xl font-wider mt-5 mb-3 ml-3'>Images</h2>
              <div className='Profile-wrapper grid grid-cols-2 md:grid-cols-3 place-items-center' >
                {
                  images?.profiles?.map((item, index) => {
                    return (
                      <div className='Profile w-[95%]' key={index}>
                        <Img src={`https://image.tmdb.org/t/p/w500/${item?.file_path}`} />
                      </div>
                    )
                  })
                }
              </div>

            </div>
          </div>
        )
      }
    </section>
  )
}

export default PersonDetail