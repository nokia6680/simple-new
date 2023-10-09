var $range = $(".js-range-slider"),
    $input = $(".js-input"),
    instance,
    min = 0,
    max = 50;

$range.ionRangeSlider({
    skin: "big",
    type: "single",
    min: min,
    max: max,
    from: 5,
    onStart: function(data) {
        $input.prop("value", data.from);
    },
    onChange: function(data) {
        $input.prop("value", data.from);
    }
});

instance = $range.data("ionRangeSlider");

$input.on("change keyup", function() {
    var val = $(this).prop("value");

    // validate
    if (val < min) {
        val = min;
    } else if (val > max) {
        val = max;
    }

    instance.update({
        from: val
    });
});