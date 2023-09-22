import React from 'react'
import Img from '../../../components/lazyLoading/Img'
import ProgressBar from '../../../components/ProgressBar'
import dayjs from 'dayjs'
import { useNavigate, useParams } from 'react-router-dom'
import Loader from '../../../components/Loader/Loader'
import BackgroundFall from '../../../assets/nothing.webp'
const Cards = ({ data, isLoading}) => {
    const { mediaType } = useParams()
    const navigate = useNavigate()
    return (
        <>
            <section>
                <div className='Profile-wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-y-2 sm:gap-x-3 place-items-center' >
                    {
                        data?.map((item) => {
                            return (
                                <div className={`${item?.media_type === 'person' && 'px-5'}`} key={item?.id} onClick={() => navigate(`/${mediaType || item?.media_type}/${item?.id}`)} >
                                    {
                                        isLoading ? (
                                            <Loader />
                                        ) : (
                                            <div className={`relative Profile w-full h-full cursor-pointer overflow-hidden `} >
                                                <Img src={item?.backdrop_path ? `https://image.tmdb.org/t/p/w500/${item?.backdrop_path || item?.profile_path||item?.poster_path}` : BackgroundFall} className={'w-full h-full object-cover object-center'} />


                                                <div className='overlay-content absolute top-0 left-0 w-full h-full z-10 flex flex-col justify-center  transition-all sm:opacity-0 sm:hover:opacity-100 duration-300 bg-black/60 sm:hover:bg-black/90'>
                                                    <div className='content flex flex-col justify-center gap-3 pl-[4%] pt-[8%] sm:pt-[10%]'>
                                                        <div className='rating'>
                                                            <ProgressBar rating={item?.vote_average?.toFixed(1) || item?.popularity?.toFixed(1)} />
                                                        </div>
                                                        <div className='year'>
                                                            <span>{dayjs(item?.release_date).format('YYYY')}</span>
                                                        </div>
                                                        <div className='name text-ellipsis'>
                                                            <h1>{item?.original_name || item?.original_title || item?.title || item?.name}</h1>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </section >
        </>
    )
}

export default Cards