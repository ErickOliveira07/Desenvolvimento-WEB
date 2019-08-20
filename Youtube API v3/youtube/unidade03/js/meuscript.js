$(document).ready(function() {
    $.get("https://www.googleapis.com/youtube/v3/videos", {
            part: 'statistics',
            id: 'rjNGd6CQIck',
            key: 'AIzaSyArfqwSRqvszFXGOst69evKxpACOngG1I0'},
            function(data) {
                console.log(data);
            }
    )
});

// IMPORTANTE:
// Para utilizar dados estatiticos do video
// Object > items > 0 > statistics