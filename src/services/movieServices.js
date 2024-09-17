const key=import.meta.env.VITE_API;
const baseUrl="https://api.themoviedb.org/3";
const endpoints={
    popular:`${baseUrl}/movie/popular?api_key=${key}`,
    topRated:`${baseUrl}/movie/top_rated?api_key=${key}`,
    trending:`${baseUrl}/movie/popular?api_key=${key}&langauge=en-US&page=2`,
    comedy:`${baseUrl}/search/movie?api_key=${key}&langauge=en-US&query=comedy&page=1&include+adult=false`,
    upcoming:`${baseUrl}/movie/upcoming?api_key=${key}`
};

export function createImageUrl(filename,size){
    return `https://image.tmdb.org/t/p/${size}/${filename}`
}
export default endpoints;
