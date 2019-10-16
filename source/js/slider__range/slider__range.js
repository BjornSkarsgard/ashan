$(function() {
    $("#slider-range").slider({
        range: true,
        min: 40,
        max: 15000,
        values: [2000, 7000],
        slide: function(event, ui) {
            $("#amount").val(ui.values[0]);
            $("#amount_1").val(ui.values[1]);
        }
    });
    $("#amount").val($("#slider-range").slider("values", 0));
    $("#amount_1").val($("#slider-range").slider("values", 1));
});