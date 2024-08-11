//api key from TMDB
const api = "api_key=e7bb1e2105f8ad039614da41f5ef9e90";

//  base url of the site 
const base_url = "https://api.themoviedb.org/3";
const banner_url = "https://image.tmdb.org/t/p/original";
const img_url = "https://image.tmdb.org/t/p/w300"; 

// requests for movies data
const requests = {
    fetchTrending:`${base_url}/trending/all/week?${api}&language=en-US`,
    fetchNetflixOrignals: `${base_url}/discover/tv?${api}&with_networks=213`,
    fetchActionMovies: `${base_url}/discover/movie?${api}&with_genres=28`,
    fetchComedyMovies:`${base_url}/discover/movie?${api}&with_genres=35`,
    fetchHorrorMovies: `${base_url}/discover/movie?${api}&with_genres=27`,
    fetchRomanceMovies:`${base_url}/discover/movie?${api}&with_genres=99`,

};


//used to truncate the string

function truncate(str,n){
    return str?.length > n ? str.substr(0,n-1) + "..." : str;
}
//banner
fetch(requests.fetchNetflixOrignals)
.then((res)=>res.json())



.then((data)=>{
    console.log(data.results);

    //very refrsht he movie well be change
    const setMovie=
    data.results[Math.floor(Math.random() * data.results.length-1)];
    var banner = document.getElementById("banner")
    var banner_title = document.getElementById("banner_title");
    var banner__desc = document.getElementById("banner_description");

    banner.style.backgroundImage=
    "url(" + banner_url + setMovie.backdrop_path + ")";
   banner__desc.innerText = truncate(setMovie.overview,1050);
    banner_title.innerText = setMovie.name;

});

// movies rows 
fetch(requests.fetchNetflixOrignals)
.then((res)=> res.json())

.then((data)=>{
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");

    row.className = "row";
    row.classList.add("netflixrow");

    headrow.appendChild(row);

    const title = document.createElement("h2");

    title.className = "row_title";
    title.innerText = "NETFLIX ORIGINALS"

    row.appendChild(title);

    const row_posters = document.createElement("div");
    row_posters.className = "row_posters";
    row.appendChild(row_posters);

    data.results.forEach((movie)=>{
        const poster = document.createElement("img");
        poster.className = "row_posterLarge";
         var s = movie.name.replace(/\s+/g,"");

         poster.id = s;
         poster.src = img_url + movie.backdrop_path;
         row_posters.appendChild(poster);
    });

});

// top rated 

fetch(requests.fetchTrending)
.then((res)=> res.json())

.then((data)=>{
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");

    row.className = "row";
   // row.classList.add("netflixrow");

    headrow.appendChild(row);

    const title = document.createElement("h2");

    title.className = "row_title";
    title.innerText = "TOP RATED";

    row.appendChild(title);

    const row_posters = document.createElement("div");
    row_posters.className = "row_posters";
    row.appendChild(row_posters);

    data.results.forEach((movie)=>{
        const poster = document.createElement("img");
        poster.className = "row_posterLarge";
        var s2 = movie.id;
         poster.id = s2;
         poster.src = img_url + movie.backdrop_path;
         row_posters.appendChild(poster);
    });

});
// top actions

fetch(requests.fetchActionMovies)
.then((res)=> res.json())

.then((data)=>{
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");

    row.className = "row";
   // row.classList.add("netflixrow");

    headrow.appendChild(row);

    const title = document.createElement("h2");

    title.className = "row_title";
    title.innerText = " ACTION MOVIES";

    row.appendChild(title);

    const row_posters = document.createElement("div");
    row_posters.className = "row_posters";
    row.appendChild(row_posters);

    data.results.forEach((movie)=>{
        const poster = document.createElement("img");
        poster.className = "row_posterLarge";
        var s2 = movie.id;
         poster.id = s2;
         poster.src = img_url + movie.backdrop_path;
         row_posters.appendChild(poster);
    });

});

//Top comdey

fetch(requests.fetchComedyMovies)
.then((res)=> res.json())

.then((data)=>{
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");

    row.className = "row";
   // row.classList.add("netflixrow");

    headrow.appendChild(row);

    const title = document.createElement("h2");

    title.className = "row_title";
    title.innerText = " COMEDY MOVIES";

    row.appendChild(title);

    const row_posters = document.createElement("div");
    row_posters.className = "row_posters";
    row.appendChild(row_posters);

    data.results.forEach((movie)=>{
        const poster = document.createElement("img");
        poster.className = "row_posterLarge";
        var s2 = movie.id;
         poster.id = s2;
         poster.src = img_url + movie.backdrop_path;
         row_posters.appendChild(poster);
    });

});

//HORROR
fetch(requests.fetchHorrorMovies)
.then((res)=> res.json())

.then((data)=>{
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");

    row.className = "row";
   // row.classList.add("netflixrow");

    headrow.appendChild(row);

    const title = document.createElement("h2");

    title.className = "row_title";
    title.innerText = " HORROR MOVIES";

    row.appendChild(title);

    const row_posters = document.createElement("div");
    row_posters.className = "row_posters";
    row.appendChild(row_posters);

    data.results.forEach((movie)=>{
        const poster = document.createElement("img");
        poster.className = "row_posterLarge";
        var s2 = movie.id;
         poster.id = s2;
         poster.src = img_url + movie.backdrop_path;
         row_posters.appendChild(poster);
    });

});

//ROMACNCE
fetch(requests.fetchRomanceMovies)
.then((res)=> res.json())

.then((data)=>{
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");

    row.className = "row";
   // row.classList.add("netflixrow");

    headrow.appendChild(row);

    const title = document.createElement("h2");

    title.className = "row_title";
    title.innerText = " ROMANCE MOVIES";

    row.appendChild(title);

    const row_posters = document.createElement("div");
    row_posters.className = "row_posters";
    row.appendChild(row_posters);

    data.results.forEach((movie)=>{
        const poster = document.createElement("img");
        poster.className = "row_posterLarge";
        var s2 = movie.id;
         poster.id = s2;
         poster.src = img_url + movie.backdrop_path;
         row_posters.appendChild(poster);
    });

});
