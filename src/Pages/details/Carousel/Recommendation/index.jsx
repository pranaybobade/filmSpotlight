import { useGetDataQuery } from '../../../../redux/Slices/TMDB_API_SLICE/Data'
import Slider from '../../../../components/Slider/Slider'
import { TMDB_API_KEY } from '../../../../utils/api'

const Recommendation = ({ mediaType, id }) => {
    const { data, isLoading } = useGetDataQuery(`${mediaType}/${id}/recommendations?${TMDB_API_KEY}`)
    return (

        <>
            {
                data?.results?.length > 0 && <section className="mx-3 sm:mx-5 md:mx-16 text-white text-2xl tracking-wider">
                    <h2>Recommendations</h2>
                    <Slider movies={data} endpoint={mediaType} />
                </section>
            }
        </>
    )
}

export default Recommendation