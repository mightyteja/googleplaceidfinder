document.getElementById('button1').addEventListener('click', loadText); // Invokes the LoadText Function which executes the URL
var proxy = "https://cors-anywhere.herokuapp.com/"; // To bypass the Cross Domain Issue for Google domain
//Breaking of the URL for Easier Navigation
var url = 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=';
var query = $("#query"); //'Best Hotels in chennai';// // Getting the input from User
var key = '&key=';
var keyInput = $('#key');  // Key for authorization
var placeDetails = 'https://maps.googleapis.com/maps/api/place/details/json?placeid=';
var output = '';
function loadText() {
    // Create XHR request
    var xhr = new XMLHttpRequest();//OPEN - type url/file , async
    xhr.open('GET', proxy + url + query.val() + key + keyInput.val(), true);
    // xhr.open('GET', proxy + url + query + key + keyInput, true); 
    xhr.onload = function xhr(result) {
        if (this.readyState == 4 && this.status == 200) {
            var user = JSON.parse(this.responseText);
            var placeID = user.results;
            // output += placeID[0].place_id;
            // console.log(output);
            for (var i = 0; i < placeID.length; i++) {
                output += placeID[i].name + ' - ' + placeID[i].place_id + '<br/>' + '<hr/>';
            }
            status += user.status;
            // console.log(output);
            document.getElementById('output_place').innerHTML = output;
            document.getElementById('error_output').innerHTML = status;
            //code for the page details starts                  
            //https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJN1t_tDeuEmsRUsoyG83frY4&key=YOUR_API_KEY
        }//end of onload if statement
    } // end of onload
    xhr.send();
}