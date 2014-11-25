$(document).ready(function(){

    function rgb2hex(rgb) {
        if (/^#[0-9A-F]{6}$/i.test(rgb)) return rgb;

        rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
        function hex(x) {
            return ("0" + parseInt(x).toString(16)).slice(-2);
        }
        return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
    }

    var baseColourElement = $('.color-1')
        ,baseColour = baseColourElement.css('background-color')
        ,baseColourContrast = baseColourElement.css('color');

    $('header').append('<h2 style="color: '+baseColour+'; background-color: '+baseColourContrast+'">Base color: ' + rgb2hex( baseColour ) + '</h2>\n');

});
