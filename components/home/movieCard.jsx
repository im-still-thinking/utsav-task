import Image from "next/image"
import Link from "next/link"

export default function movieCard({id, movieImage, movieTitle, genre, overview, releaseDate, popularity, voteCount, voteAverage, type}) {
  return (
    <Link href={`/${id}`}>
    <div className="bg-white/10 hover:bg-white/20 rounded-lg p-2 flex flex-row gap-3 w-[350px] cursor-pointer transform hover:scale-105 transition duration-500">
        <div className="">
           <Image className="w-52 rounded-md" src={`https://image.tmdb.org/t/p/w500/${movieImage}`} alt={movieTitle} width={1000} height={1000} />
        </div>
        <div className="">
          <div className="flex flex-col gap-2">
              <h3 className="text-white text-xl font-semibold line-clamp-2">{movieTitle}</h3>
              {type == 'popular' && <div className="text-red-500 text-sm ">Popularity: <span className="">{popularity}</span></div>}
              {type == 'upcoming' && <div className="text-red-500 text-sm ">Release Date: <br /> <span className="">{releaseDate}</span></div>}
              {type == 'top_rated' && <><div className="text-red-500 text-sm ">Vote Count: <span className="">{voteCount}</span></div>
              <div className="text-red-500 text-sm ">Vote Average: <span className="">{voteAverage}</span></div></>}
              <h4 className="text-white font-semibold">{genre}</h4>
              <h5 className="text-white text-sm"><span className=" w-40 h-40 line-clamp-5">{overview}</span></h5>
          </div>
          
        </div>
    </div>
    </Link>
  )
}