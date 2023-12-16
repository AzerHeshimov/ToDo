"use strict";
$(document).ready(function () {
    $('.btn').click(function (e) {
        e.preventDefault();

        let inputValue = $('input').val(); 

        let processInput = (inputValue) => {
            if (isNaN(inputValue)) {
               
                $('.col-md-3').append(`<h2>${inputValue}</h2>`);
            } else {
                
                var result = inputValue * inputValue;
                $('.col-md-3').append(`<h2>${result}</h2>`);
            }
        };

        processInput(inputValue);
    });
});
