import { useParams } from "react-router-dom"
import DetailBanner from "./DetailBanner/DetailBanner"
import { useGetDataQuery } from "../../redux/Slices/TMDB_API_SLICE/Data"
import Video from "./video/Video"
import Backdrops from "./backdrops/Backdrops"
import Similar from "./Carousel/Similiar"
import Recommendation from "./Carousel/Recommendation"
import { TMDB_API_KEY } from "../../utils/api"

const Detail = () => {
    const { mediaType, id } = useParams()
    const { data, isLoading } = useGetDataQuery(`${mediaType}/${id}?${TMDB_API_KEY}`)
    const { data: images, isLoading: imagesLoading } = useGetDataQuery(`${mediaType}/${data?.id}/images?${TMDB_API_KEY}`)
    const { data: videos, isLoading: videoLoading } = useGetDataQuery(`/${mediaType}/${id}/videos?${TMDB_API_KEY}`);
    return (
        <section>
            <DetailBanner data={data} isLoading={isLoading} mediaType={mediaType} id={id} video={videos?.results} videoLoading={videoLoading}/>
            <Video data={videos?.results} loading={videoLoading} />
            {
                images?.backdrops?.length > 0 && <Backdrops data={images} loading={imagesLoading} />
            }
            <Similar mediaType={mediaType} id={id} />
            <Recommendation mediaType={mediaType} id={id} />
        </section>
    )
}

export default Detail