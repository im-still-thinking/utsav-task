"use client";

import MovieCard from "@components/home/movieCard";
import Navbar from "@components/home/navbar";
import { useGet } from "@hooks/use-get";
import { useState } from "react";



export default function Home() {
  
  const [type, setType] = useState('popular')
  const handleType = type => setType(type);
  let {data} = useGet(type)
  
  return (
    <div className="bg-gradient-to-br from-black to-slate-800 min-h-screen w-screen">
      {console.log('SAYAK', data)}
      <Navbar handleType={handleType}/>
      <div className="flex items-center justify-center mt-20">
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data?.results?.map((movie) => (
          <MovieCard key={movie.id} id={movie.id} movieTitle={movie.original_title} voteCount={movie.vote_count} voteAverage={movie.vote_average} type={type} popularity={movie.popularity} releaseDate={movie.release_date} overview={movie.overview} movieImage={movie.poster_path} />
        ))}
      </div>
      </div>
    </div>
  );
}
