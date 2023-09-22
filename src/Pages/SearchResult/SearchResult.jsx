/** @format */

import { useParams } from "react-router-dom";
import { useGetDataQuery } from "../../redux/Slices/TMDB_API_SLICE/Data";
import Loader from "../../components/Loader/Loader";
import Cards from "../Movies/Cards";
import { useState } from "react";
import { TMDB_API_KEY } from "../../utils/api";
import { useEffect } from "react";
const SearchResult = () => {
	const { query } = useParams();
	const [page, setPage] = useState(1);
	const [result, setResults] = useState([]);
	const { data, isLoading } = useGetDataQuery(
		`search/multi?query=${query}&${TMDB_API_KEY}&page=${page}`
	);

	useEffect(() => {
		if (page === 1) {
			setResults(data?.results);
		} else {
			setResults([...result, ...data?.results]);
		}
	}, [data]);
	return (
		<section className='searchResults pt-16 sm:px-5 md:px-10 min-h-screen'>
			{isLoading ? (
				<div className='w-full h-screen flex justify-center items-center'>
					<Loader />
				</div>
			) : (
				<div>
					{result?.length > 0 ? (
						<>
							<div className='Title text-white text-lg font-wider my-3 px-5'>
								{`Search ${
									result?.total_results > 1 ? "Results" : "Result"
								} of ${query}
                               `}
							</div>
							<div className='results text-white'>
								<Cards data={result} isLoading={isLoading} />
							</div>
							{data?.total_pages > 1 && (
								<div className='w-full my-3 flex justify-center items-center'>
									<button
										onClick={() => setPage(page + 1)}
										className='text-sm tracking-wider bg-white py-2 px-5 rounded-full hover:bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white  transition-all ease-in duration-75 '>
										Load More
									</button>
								</div>
							)}
						</>
					) : (
						<div className='text-white my-3 text-xl font-bold font-wider'>
							{!isLoading && <h1>No Result Found</h1>}
						</div>
					)}
				</div>
			)}
		</section>
	);
};

export default SearchResult;
