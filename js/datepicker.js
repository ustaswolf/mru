(function($){
    $.fn.datePicker = function( options ){
        var settings = $.extend({items: []}, options );
        return this.each(function() {
            var $this = $(this);
            var $input = $this.find(".datePicker");
            var $span = $this.find("span");
            var emptyInputSpanVal = $span.text();

            $input.on("focus", function(){
                $span.html("");
            });
            $input.on("blur", function(){
                if($input.val().length == 0){
                    $span.html(emptyInputSpanVal);
                }else{
                    $span.html("");
                }
            });

            $span.click(function(){
                $input.focus();
                return false;
            });

            $input.keyup(function(I){
                switch(I.keyCode) {
                    case 13:  // enter
                    case 27:  // escape
                    case 38:  // стрелка вверх
                    case 40:  // стрелка вниз
                        break;
                    case 8:  // backspace
                        $span.html("");
                        break;
                    case 39:  // стрелка вправо
                        var t = $span.text();
                        break;
                    default:
                        break;
                }
            });
        });
    };
}(jQuery));