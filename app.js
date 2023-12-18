
"use strict";

$(document).ready(function () {
    $('.btn').click(function (e) {
        e.preventDefault();

        let inputValue =$('input').val();
        $('#myInput').val('');
        if (!isNaN(inputValue)) {
           
            
            for (let i = 0; i < parseInt(inputValue); i++) {
                
                $(".col-md-3").append(`<h2>${inputValue}</h2>`);
            }
            $(".col-md-3").append(repeatedValue);
        } else {
            
            $(".col-md-3").append(`<h2>${inputValue}</h2>`);
        }
        
        
    });
});

