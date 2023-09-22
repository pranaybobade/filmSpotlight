import { useGetDataQuery } from "../../../redux/Slices/TMDB_API_SLICE/Data"
import Slider from '../../../components/Slider/Slider'
import { TMDB_API_KEY } from "../../../utils/api"
const Popular = ({ title, }) => {
    const { data, isLoading } = useGetDataQuery(`movie/popular?${TMDB_API_KEY}`)
    return (
        <section className='my-5'>
            <h2 className='title text-white font-bold md:text-xl py-5 px-2'>{title}</h2>
            <div className='carousal relative'>
                <Slider movies={data} loading={isLoading} endpoint={'movie'} />
            </div>
        </section>
    )
}

export default Popular