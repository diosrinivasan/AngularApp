function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            var filename = input.files[0]["name"];
            var ext = filename.split('.').pop().toLowerCase();
            if ($.inArray(ext, ['gif', 'png', 'jpg', 'jpeg', 'pdf']) == -1) {
                alert('invalid extension!');
                return false;
            }
            $('#blah').show();
            $('#blah')
                .attr('src', e.target.result)
                .width(50)
                .height(50);
        };


        reader.readAsDataURL(input.files[0]);
    }
}
function readURL1(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            var filename = input.files[0]["name"];
            var ext = filename.split('.').pop().toLowerCase();
            if ($.inArray(ext, ['gif', 'png', 'jpg', 'jpeg', 'pdf']) == -1) {
                alert('invalid extension!');
                return false;
            }
            $('#blah1').show();
            $('#blah1')
                .attr('src', e.target.result)
                .width(50)
                .height(50);
        };

        reader.readAsDataURL(input.files[0]);
    }
}
$(document).ready(function () {
    $('#datepickerSource,#sourcedetails,#destdetails').datepicker({
        autoclose: true,
        todayHighlight: true
    }).datepicker('update', new Date()); //Initialise any date pickers
    $("#destdetailss").click(function (event) {
        event.preventDefault();
        $('#destdetails').focus();
    })
    $("#sourcedetailss").click(function (event) {
        event.preventDefault();
        $('#sourcedetails').focus();
    })
    $('#sourcedetails').datepicker({
        autoclose: true,
        todayHighlight: true
    }).datepicker('update', new Date()); //Initialise any date pickers
    $('#expectedDoMa').datepicker({
        autoclose: true,
        todayHighlight: true
    }).datepicker('update', new Date());
    $('#expectedDoMaa').click(function (event) {
        event.preventDefault();
        $('#expectedDoMa').focus();
    })
    //Initialise any date pickers
    $("#expectedDoMii").click(function (event) {
        event.preventDefault();
        $('#expectedDoMi').focus();
    })
    $('#expectedDoMi').datepicker({
        autoclose: true,
        todayHighlight: true
    }).datepicker('update', new Date()); //Initialise any date pickers
    $('#destdetails').datepicker({
        autoclose: true,
        todayHighlight: true
    }).datepicker('update', new Date()); //Initialise any date pickers
    //Initialise any date pickers
    var jsonData = [
        {
            "id": 1,
            "name": "Andrew Pougher"
        },
        {
            "id": 2,
            "name": "Michele Moore"
        },
        {
            "id": 3,
            "name": "Michele Boob"
        },
        {
            "id": 4,
            "name": "Michael Moore"
        },
        {
            "id": 5,
            "name": "George Michael"
        }
    ]

    var productNames = new Array();
    var productIds = new Object();
    $.each(jsonData, function (index, product) {
        productNames.push(product.name);
        productIds[product.name] = product.id;
    });
    $('#sourceS').typeahead({
        source: productNames
    });
    $('#destD').typeahead({
        source: productNames
    });
    $('#destinationD').typeahead({
        source: productNames
    });
});

$(function () {
    $("[rel='popover']").popover();
    $('#journey-type').change(function () {
        var journeytype = $(this).val();
        $("div.journey-show").hide();
        if (journeytype == "International") {
            $("div.journey-show").show();
        }
    })
    $("a.bid-box").click(function(){
        var idattr=$(this).attr('id').split('-')[2];
        $("div.comment-color-box").hide();
        $("div#comment-color-box-"+idattr).show();
      
    })
 
    $('[rel="popover"]').popover({
        container: 'body',
        html: true,
        content: function () {
            var clone = $($(this).data('popover-content')).clone(true).removeClass('hide');
            return clone;
        }
    }).click(function (e) {
        e.preventDefault();
    });
    $(".nav li").on("click", function() {
      $(".nav li").removeClass("active");
      $(this).addClass("active");
    });

    $('#journey-type1').change(function () {
        var journeytype = $(this).val();
        $("div.journey-show1").hide();
        if (journeytype == "International") {
            $("div.journey-show1").show();
        }
    })
    $('#blah').hide();
    $('#blah1').hide();
    $('.panel-google-plus > .panel-footer > .input-placeholder, .panel-google-plus > .panel-google-plus-comment > .panel-google-plus-textarea > button[type="reset"]').on('click', function (event) {
        var $panel = $(this).closest('.panel-google-plus');
        $comment = $panel.find('.panel-google-plus-comment');

        $comment.find('.btn:first-child').addClass('disabled');
        $comment.find('textarea').val('');

        $panel.toggleClass('panel-google-plus-show-comment');

        if ($panel.hasClass('panel-google-plus-show-comment')) {
            $comment.find('textarea').focus();
        }
    });
    $('.panel-google-plus-comment > .panel-google-plus-textarea > textarea').on('keyup', function (event) {
        var $comment = $(this).closest('.panel-google-plus-comment');

        $comment.find('button[type="submit"]').addClass('disabled');
        if ($(this).val().length >= 1) {
            $comment.find('button[type="submit"]').removeClass('disabled');
        }
    });
    $("button.comment-sections").click(function () {
        var comid = $(this).attr('id').split('-');
        $("div#show-section-" + comid[2]).toggle();
    })
    $("input[name='optradio1']").change(function () {
        
                let type = $(this).val();
                $(".ifc-code").hide();
                if (type == "Yes") {
                    if($(this).prop('checked')){
                    $("input[name='optradio1']").prop('checked', false);
                    $(this).prop('checked', true);
                    $(".ifc-code").show();
                    }
                }
                else if (type == "No") {
                    if($(this).prop('checked')){
                        $("input[name='optradio1']").prop('checked', false);
                        $(this).prop('checked', true);
                        $(".ifc-code").hide();
                    }
                  
                }
                else {
        
        
                }
            })
    $("input[name='optradio']").change(function () {

        let type = $(this).val();
        $(".compose-trip").hide();
        $(".initiate-request").hide();
        if (type == "Compose Trip") {
            if($(this).prop('checked')){
            $("input[name='optradio']").prop('checked', false);
            $(this).prop('checked', true);
            $(".compose-trip").show();
            }
        }
        else if (type == "Initiate Request") {
            if($(this).prop('checked')){
                $("input[name='optradio']").prop('checked', false);
                $(this).prop('checked', true);
                $(".initiate-request").show();
            }
          
        }
        else {


        }
    })
});





