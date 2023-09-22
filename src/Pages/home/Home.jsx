import PopularMovies from "./PopularMovies/PopularMovies"
import PopularSeries from "./PopularSeries/PopularSeries"
import TopRated from "./TopRated/TopRated"
import TopRatedSeries from "./TopRatedSeries/TopRatedSeries"
import Upcoming from "./Upcoming/Upcoming"
import HeroBanner from "./heroBanner"

const Home = () => {

    return (
        <>
            <HeroBanner />
            <Upcoming title={'Upcoming'} />
            <PopularMovies title={'Popular Movies'} />
            <PopularSeries title={'Popular Series'} />
            <TopRated title={'Top Rated Movies'} />
            <TopRatedSeries title={'Top Rated Series'} />
        </>
    )
}

export default Home