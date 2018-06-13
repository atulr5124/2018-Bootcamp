var moviedb = [
	{title:"In Bruges", hasWatched: true, rating: 5},
	{title:"Frozen", hasWatched: false, rating: 4.5}
];

moviedb.forEach(function(movie){
	var result = "You have ";
	if(movie.hasWatched) {
		result += "watched ";
	} else {
		result += "not watched ";
	}
	result += "\""+movie.title+"\" - "+movie.rating+" stars";
	console.log(result);
});

