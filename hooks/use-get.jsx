import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

export const useGet = (id) => {

  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `https://api.themoviedb.org/3/movie/${id}?api_key=db75be3f6da59e6c54d0b9f568d19d16`,
    headers: {},
  };

  return useQuery({
    queryKey: ["movies", id],
    queryFn: async () => {
      try {
        const res = await axios.request(config)
          .then((response) => {
            console.log(response.data)
            return response.data;
          })
          .catch((error) => {
            console.log(error);
          });
          
      console.log("hehe",res);
      return res;
      } catch (err) {
        console.log(err);
      }
    },
    staleTime: 1000 * 60 * 10, // 10 mins
  });
};

export const useSimilar = (id) => {

  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `https://api.themoviedb.org/3/movie/${id}/similar?api_key=db75be3f6da59e6c54d0b9f568d19d16`,
    headers: {},
  };

  return useQuery({
    queryKey: ["movies", "similar" , id],
    queryFn: async () => {
      try {
        const res = await axios.request(config)
          .then((response) => {
            console.log(response.data)
            return response.data;
          })
          .catch((error) => {
            console.log(error);
          });
          
      console.log("hehe",res);
      return res;
      } catch (err) {
        console.log(err);
      }
    },
    staleTime: 1000 * 60 * 10, // 10 mins
  });
};

export const useReviews = (id) => {

    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=db75be3f6da59e6c54d0b9f568d19d16`,
      headers: {},
    };
  
    return useQuery({
      queryKey: ["movies", "reviews" , id],
      queryFn: async () => {
        try {
          const res = await axios.request(config)
            .then((response) => {
              console.log(response.data)
              return response.data;
            })
            .catch((error) => {
              console.log(error);
            });
            
        console.log("hi",res);
        return res;
        } catch (err) {
          console.log(err);
        }
      },
      staleTime: 1000 * 60 * 10, // 10 mins
    });
  };
