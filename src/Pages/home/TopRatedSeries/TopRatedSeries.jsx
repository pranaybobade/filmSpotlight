import { useGetDataQuery } from '../../../redux/Slices/TMDB_API_SLICE/Data'
import Slider from '../../../components/Slider/Slider'
import { TMDB_API_KEY } from '../../../utils/api'

const TopRatedSeries = ({ title }) => {
    const { data, isLoading } = useGetDataQuery(`tv/top_rated?${TMDB_API_KEY}`)

    return (
        <section className='my-5'>
            <h2 className='title text-white font-bold md:text-xl py-5 px-2'>{title}</h2>
            <div className='carousal relative'>
                <Slider movies={data} loading={isLoading} endpoint={'tv'} />
            </div>
        </section>
    )
}

export default TopRatedSeries