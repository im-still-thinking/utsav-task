"use client";

import MovieCard from "@components/home/movieCard";
import ReviewSection from "@components/movieDetails/reviewSection";
import { useGet, useSimilar, useReviews } from "@hooks/use-get";
import Image from "next/image";

const page = ({ params }) => {
  let { data } = useGet(params.id);
  let { data: similar } = useSimilar(params.id);
  let { data: reviews } = useReviews(params.id);
  console.log("similar",similar);
  return (
    <div className="bg-gradient-to-br from-black to-slate-800 min-h-screen w-screen pt-20">
      <div className="bg-white/10 rounded-xl text-white container mx-auto w-[85%] flex flex-row">
        <div className="">
          <Image
            className="w-80 rounded-l-xl"
            src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
            alt="test"
            width={1000}
            height={1000}
          />
        </div>
        <div className="m-10 relative w-full">
          <div className="text-white text-4xl font-bold ">
            <a target="_blank" noopener="non-ferrer" href={data?.homepage}><h3 className="pointer-cursor hover:text-red-600">{data?.original_title}</h3></a>
            <div className="flex flex-row gap-2">
            <span className="text-white text-base px-3 p-1 w-fit rounded-full bg-white/20 font-bold">
             Lang: {data?.original_language}
          </span>
          <a target="_blank" noopener="non-ferrer" href={data?.homepage} className=" cursor-pointer text-white text-base px-7 p-1 w-fit rounded-full bg-red-600 font-bold">
             Visit
          </a>
          </div>
          </div>
          
          <h2 className="text-white/70 text-base mt-8">{data?.overview}</h2>

          <div className="flex flex-row gap-20 items-center">
            <div>
              <h2 className="text-white/70 text-sm mt-5">
                {" "}
                <span className="text-red-600">Popularity:</span>{" "}
                {data?.popularity}{" "}
              </h2>
              <h2 className="text-white/70 text-sm mt-1 flex flex-row items-center gap-4">
                {" "}
                <div className="text-red-600">Genres:</div>
                <div className="flex flex-row flex-wrap gap-2">
                  {data?.genres?.map((genre) => (
                    <div
                      className="px-2 bg-white/20 text-white rounded-full"
                      key={genre.id}
                    >
                      {genre.name}
                    </div>
                  ))}
                </div>
              </h2>
              <h2 className="text-white/70 text-sm mt-1">
                {" "}
                <span className="text-red-600">Release Date:</span>{" "}
                {data?.release_date}{" "}
              </h2>
              <h2 className="text-white/70 text-sm mt-1">
                {" "}
                <span className="text-red-600">Origin:</span>{" "}
                {data?.production_companies[0]?.origin_country}{" "}
              </h2>
            </div>
            <div>
              <h2 className="text-white/70 text-sm mt-5">
                {" "}
                <span className="text-red-600">Vote Count:</span>{" "}
                {data?.vote_count}{" "}
              </h2>
              <h2 className="text-white/70 text-sm mt-1">
                {" "}
                <span className="text-red-600">Vote Average:</span>{" "}
                {data?.vote_average}{" "}
              </h2>
              <h2 className="text-white/70 text-sm mt-1">
                {" "}
                <span className="text-red-600">Budget:</span> ${data?.budget}{" "}
              </h2>
              <h2 className="text-white/70 text-sm mt-1">
                {" "}
                <span className="text-red-600">Revenue:</span> ${data?.revenue}{" "}
              </h2>
            </div>
          </div>
        </div>
      </div>

    
        <div classNAme="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Customer Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews?.results?.slice(0, 5).map((review) => (
              <ReviewSection review={review.content} author={review.author}/>
            ))}
          </div>
        </div>

      <h2 className="text-2xl font-bold text-white text-center w-full mt-16">You might also like...</h2>
      <div className="flex items-center justify-center mt-5">
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {similar?.results?.map((movie) => (
          <MovieCard key={movie.id} id={movie.id} movieTitle={movie.original_title} type={'popularity'} popularity={movie.popularity} overview={movie.overview} movieImage={movie.poster_path} />
        ))}
      </div>
      </div>
    </div>
  );
};

export default page;
