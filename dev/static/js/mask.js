var telItems = document.getElementsByClassName('js-phone-input');
var elNodes = document.querySelectorAll(".js-phone-input");

var prefixNumber = function prefixNumber(str) {
    if (str === "7") {
        return "7 (";
    }

    if (str === "8") {
        return "7 (";
    }

    if (str === "9") {
        return "7 (9";
    }

    return "7 (";
};

for (var i = 0; i < telItems.length; i++) {
    var input = telItems[i];

    input.addEventListener("input", function(e) {
        var value = this.value.replace(/\D+/g, "");
        var numberLength = 11;
        var result;

        if (this.value == '+7 ' || this.value == '') {
            this.value = '';
            return false;
        }

        if (this.value.includes("+8") || this.value[0] === "8") {
            result = "+";
        } else {
            result = "+";
        } //


        for (var i = 0; i < value.length && i < numberLength; i++) {
            switch (i) {
                case 0:
                    result += prefixNumber(value[i]);
                    continue;

                case 4:
                    result += ") ";
                    break;

                case 7:
                    result += "-";
                    break;

                case 9:
                    result += "-";
                    break;

                default:
                    break;
            }

            result += value[i];
        } //


        this.value = result;
    });
}
