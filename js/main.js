$(document).ready(function() {
    const BASE_URL = 'https://openapi.etsy.com/v2/public/listings/active.js';
    let searchTerm = 'backstreet_boys';
    let limit = '12';

    $.ajax({
        // BACK TICKS `` HELP ORGANIZE CONCATENATION WITHOUT USING STRINGS AND +
       url: `${BASE_URL}?api_key=${API_KEY}&limit=${limit}&includes=Images:1&keywords=${searchTerm}`,
        dataType: 'jsonp',
        method: 'GET',

        success: function(response) {
           // console.log('response', response)
            var source   = $("#entry-template").html();
            // this is going through HTML and getting all the "entry-templates" and assigning them to "source"
            var template = Handlebars.compile(source);
            // we are passing "source" through Handlebars and using compile method and passing in the template we just built

            var context = {
                results: response.results
            };
            // these are our results listing from esty from success function (response)
            var html = template(context);
            // this is passing in our context into our template
            $('.row').html(html);
        //    this is getting the "row" call from HTML and assigning it to our template that we assigned to "html"
        },

// This will print in the console
        error: function (xhr) {
           console.log('uh oh, something went wrong', xhr.status);
        }

    });
});