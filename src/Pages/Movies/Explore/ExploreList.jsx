import { useEffect, useState } from 'react';
import Loader from '../../../components/Loader/Loader'
import { useGetMoviesQuery } from '../../../redux/Slices/TMDB_API_SLICE/Data';

import Cards from '../Cards';
import { useParams } from 'react-router-dom';
import { TMDB_API_KEY } from '../../../utils/api';

const ExploreBanner = () => {
    const { mediaType } = useParams()
    const [active, setActive] = useState({
        filter: 'popular',
        popular: true,
        top_rated: false
    })
    const [page, setPage] = useState(1)

    const { data, isLoading } = useGetMoviesQuery(`${mediaType}/${active?.filter}?${TMDB_API_KEY}&page=${page}`)

    const [cardData, setCardData] = useState([])

    useEffect(() => {
        setActive({
            filter: 'popular',
            popular: true,
            top_rated: false
        })
        setPage(1)
        setCardData(null)

    }, [mediaType])
    
    useEffect(() => {
        setPage(1)
    }, [active.filter])




    useEffect(() => {
        if (page === 1) {
            setCardData(data?.results)
        } else {
            setCardData([...cardData, ...data?.results])
        }
    }, [data])

    return (
        <>
            {
                isLoading ? (
                    <div className='w-full flex justify-center items-center h-screen'>
                        <Loader />
                    </div>
                ) : (
                    <>
                        <div className='main-wrapper-explore my-4 text-white px-3 sm:px-5 md:px-10'>
                            <div className=''>
                                <div className='heading py-2 flex flex-col sm:flex-row gap-y-3 md:flex justify-between items-center'>
                                    <div className='text-2xl tracking-wider'>
                                        {
                                            mediaType === 'tv' ? 'Tv Shows' : 'Movies'
                                        }
                                    </div>
                                    <div className='flex gap-4'>
                                        <button onClick={() => setActive({
                                            filter: 'popular',
                                            popular: true,
                                            top_rated: false
                                        })} className={`relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white `} >
                                            <span className={`relative px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0 ${active.popular ? 'bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 text-white' : 'bg-white'}`}>
                                                Popular
                                            </span>
                                        </button>
                                        <button onClick={() => setActive({
                                            filter: 'top_rated',
                                            popular: false,
                                            top_rated: true
                                        })} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white  ">
                                            <span className={`relative px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0 ${active.top_rated ? 'bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 text-white' : 'bg-white'}`}>
                                                Top Rated
                                            </span>
                                        </button>

                                    </div>
                                </div>
                                {/* Cards */}
                                {
                                    isLoading ? (
                                        <div>
                                            <Loader />
                                        </div>
                                    ) : (

                                        <Cards data={cardData} isLoading={isLoading} mediaTyp={'movie'} />
                                    )
                                }
                            </div>

                        </div>
                        <div className='w-full my-3 flex justify-center items-center'>
                            <button onClick={() => setPage(page + 1)} className='text-sm tracking-wider bg-white py-2 px-5 rounded-full hover:bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white  transition-all ease-in duration-75 '>
                                Load More
                            </button>
                        </div>
                        <div className='w-full my-3 flex justify-center items-center'>

                        </div>
                    </>
                )
            }
        </>
    )
}

export default ExploreBanner