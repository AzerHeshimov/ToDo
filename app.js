
"use strict";

$(document).ready(function () {
    $('.btn').click(function (e) {
        e.preventDefault();

        let a =$('input').val();
        $('#myInput').val('');
        let b = a/2;
        if ( typeof b == 'number' && typeof b !== 'string'  ) {
            for (let i = 0; i < a; i++) {
                
                $(".box").append(`<h2>${a}</h2>`);
            }
           
        } else {
            $(".box").append(`<h2>${a}</h2>`);
        }
       
        
        
        
        
        
        
    });
});

