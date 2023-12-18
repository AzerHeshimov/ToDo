
"use strict";

$(document).ready(function () {
    $('.btn').click(function (e) {
        e.preventDefault();

        let inputValue = $('input').val();

        if (!isNaN(inputValue)) {
            // If the input is a number
            let repeatedValue = '';
            for (let i = 0; i < parseInt(inputValue); i++) {
                repeatedValue += `<h2>${inputValue}</h2>`;
            }
            $(".col-md-3").append(repeatedValue);
        } else {
            // If the input is a string or a combination of letters and numbers
            $(".col-md-3").append(`<h2>${inputValue}</h2>`);
        }

        $('input').val(''); // Clear the input value
    });
});
