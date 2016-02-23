function parse(val) {
    var result = "Not found",
        tmp = [];
    location.search
    .replace ( "?", "" ) 
    // this is better, there might be a question mark inside
    .split("&")
    .forEach(function (item) {
        tmp = item.split("=");
        if (tmp[0] === val) 
        	result = decodeURIComponent(tmp[1]);
	    }
	);
    
    return result;
}