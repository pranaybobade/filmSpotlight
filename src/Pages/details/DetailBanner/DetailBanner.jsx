/** @format */

import Skeleton from "../../../components/Loader/Loader";
import Img from "../../../components/lazyLoading/Img";
import ProgressBar from "../../../components/ProgressBar";
import { useGetDataQuery } from "../../../redux/Slices/TMDB_API_SLICE/Data";
import dayjs from "dayjs";
import Cast from "../Cast";
import { TMDB_API_KEY } from "../../../utils/api";
import ReactPlayer from "react-player";
import { useState } from "react";
import { ChevronLeftCircle } from "lucide-react";
import { useEffect } from "react";
import Loader from "../../../components/Loader/Loader";

const DetailBanner = ({ data, isLoading, mediaType, id, video, videoLoading }) => {
    const backgroundimage = {
        backgroundImage:
            "url(" +
            `https://image.tmdb.org/t/p/original/` +
            `${data?.backdrop_path}` +
            ")",
    };
    const { data: credits, isLoading: castLoading } = useGetDataQuery(
        `${mediaType}/${id}/credits?${TMDB_API_KEY}`
    );
    const director = credits?.crew?.filter(
        (director) => director.job === "Director"
    );
    const writer = credits?.crew?.filter(
        (writer) =>
            writer.job === "Screenplay" ||
            writer.job === "Story" ||
            writer.job === "Writer"
    );

    const [active, setActive] = useState(false);

    const [trailer, setTrailer] = useState(null)

    useEffect(() => {
        video?.find((item) => {
            if (item?.name == 'Official Trailer' || item?.name == 'Main Trailer') {
                setTrailer(item)
            }
        })
    })

    return (
        <div className="min-h-screen">
            {!isLoading ? (
                <div className='main  text-white'>
                    {/* Background Image */}
                    <div
                        className=' background relative h-[50vh] bg-cover bg-fixed bg-center'
                        style={backgroundimage}>
                        <div className='bg-gradient-to-t from-black absolute w-full h-full' />
                    </div>

                    {/* Content */}
                    <div className='details relative'>
                        <div className='mt-[-12rem] flex flex-col md:flex-row  md:justify-center md:gap-x-7 items-center'>
                            <div className='poster w-[50%] sm:w-[40%] md:w-[18rem] lg:w-[20rem] mx-auto md:mx-0 my-auto'>
                                <Img
                                    src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
                                />
                            </div>

                            <div className='Content text-white px-4 my-4 relative z-10 md:w-[50%] top-0'>
                                {/* Heading */}
                                <div className='heading my-3'>
                                    <h1 className='text-3xl font-semibold tracking-widest'>
                                        {data?.original_title || data?.original_name}{" "}
                                        {dayjs(data?.release_date).format("YYYY")}
                                    </h1>

                                    {/* Subheading */}
                                    <p className='my-3 text-gray-300 tracking-wider'>
                                        {data?.tagline}
                                    </p>
                                </div>
                                {/* Rating and Genres */}
                                <div className='rating flex gap-5 items-center  my-4'>
                                    <ProgressBar rating={data?.vote_average.toFixed(1)} />

                                    <div className="bg-[#ff0000] px-5 py-1.5 rounded-full text-sm tracking-wider">
                                        {data?.genres[0]?.name}
                                    </div>
                                </div>
                                {/* Overview */}
                                <div className='leading-5 tracking-wider overview my-3 text-sm l'>
                                    <p className='my-1'>{data?.overview}</p>
                                </div>
                                {/* t */}
                                <div className='my-4'>
                                    {
                                        trailer && <button
                                            onClick={() => setActive(true)}
                                            className='bg-[#ff0000] w-40 h-10 rounded-full tracking-wider text-sm'>
                                            Watch Trailer
                                        </button>
                                    }
                                </div>

                                {/* <Genres mediaType={mediaType} id={_generes} /> */}
                                <div className='my-2 text-sm tracking-wider text-gray-400 flex flex-col gap-y-1'>
                                    <p>Status: {data?.status}</p>
                                    <p>
                                        Release Date:{" "}
                                        {dayjs(data?.released_date).format("MMM D YYYY")}
                                    </p>
                                    {director?.length > 0 ? (
                                        <p>Director: {director[0]?.name}</p>
                                    ) : null}
                                    {writer?.length > 0 ? <p>Writer: {writer[0]?.name}</p> : null}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Top Cast */}
                    <div className='topCast Wrapper mx-3 sm:mx-5 md:mx-16'>
                        <Cast data={credits?.cast} loading={castLoading} />
                    </div>

                    <div
                        className={`fixed top-0 left-0 w-full z-20 h-screen bg-black ${active ? "block" : "hidden"
                            } flex justify-center items-center backdrop-blur-md`}>
                        <div
                            className='absolute top-7 sm:top-3 left-9  h-10 rounded-full tracking-wider text-sm text-center leading-9 cursor-pointer'
                            onClick={() => setActive(false)}>
                            <ChevronLeftCircle color='#ffffff' />
                        </div>
                        <div className='w-full h-[90vh] sm:h-full px-5 py-12'>
                            {
                                videoLoading ? (
                                    <Loader />
                                ) : (
                                    trailer && <ReactPlayer
                                        url={`https://www.youtube.com/watch?v=${trailer?.key}?origin=http://127.0.0.1:5173`}
                                        controls
                                        width='100%'
                                        height='100%'
                                    />
                                )
                            }
                        </div>
                    </div>
                </div>
            ) : (
                <div className='flex justify-center items-center h-[100vh]'>
                    <Skeleton />
                </div>
            )}
        </div>
    );
};

export default DetailBanner;
