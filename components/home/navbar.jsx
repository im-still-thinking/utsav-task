import SearchBar from "@components/home/searchBar";

export default function navbar({handleType}) {
  return (
    <nav className="p-2 px-10 flex flex-row justify-between items-center">
      <div>
        <div className="w-20 h-10 bg-gray-500"></div>
      </div>
      <div className="flex flex-row justify-center items-center gap-12 text-slate-100/60">
        <h3 onClick={()=>{handleType("popular")}} className="cursor-pointer transform hover:text-slate-100 hover:-translate-y-1 transition duration-300">Popular</h3>
        <h3 onClick={()=>{handleType("upcoming")}} className="cursor-pointer transform hover:text-slate-100 hover:-translate-y-1 transition duration-300">Upcoming</h3>
        <h3 onClick={()=>{handleType("top_rated")}} className="cursor-pointer transform hover:text-slate-100 hover:-translate-y-1 transition duration-300">Top Rated</h3>
      </div>
      <div>
        <SearchBar />
      </div>
    </nav>
  );
}
