import { useGetDataQuery } from '../../../redux/Slices/TMDB_API_SLICE/Data';
import Carousel from '../../../components/carousel/Carousel';
import { TMDB_API_KEY } from '../../../utils/api';
const HeroBanner = () => {
    const { data, isLoading } = useGetDataQuery(`movie/top_rated?${TMDB_API_KEY}`)

    return (
        <Carousel data={data} isLoading={isLoading} mediaType={'movie'}/>
    )
}

export default HeroBanner