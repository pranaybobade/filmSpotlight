import { useParams } from "react-router-dom"
import Carousel from "../../components/Carousel/Carousel"
import { useGetMoviesQuery } from "../../redux/Slices/TMDB_API_SLICE/Data"
import ExploreBanner from "./Explore/ExploreList"
import { TMDB_API_KEY } from "../../utils/api"

const Explore = () => {
    const { mediaType } = useParams()
    const { data, isLoading } = useGetMoviesQuery(`${mediaType}/popular?${TMDB_API_KEY}`)

    return (
        <>
            <Carousel data={data} isLoading={isLoading} mediaType={mediaType} />
            <ExploreBanner />
        </>
    )
}


export default Explore