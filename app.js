
"use strict";

$(document).ready(function () {
    $('.btn').click(function (e) {
        e.preventDefault();

        let a =$('input').val();
        $('#myInput').val('');
        if ( (a/2)> 0 ) {
            for (let i = 0; i < a; i++) {
                
                $(".box").append(`<h2>${a}</h2>`);
            }
           
        } else {
            $(".box").append(`<h2>${a}</h2>`);
        }
        
    });
});













