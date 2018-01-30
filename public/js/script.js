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
function readURL2(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            var filename = input.files[0]["name"];
            var ext = filename.split('.').pop().toLowerCase();
            if ($.inArray(ext, ['gif', 'png', 'jpg', 'jpeg']) == -1) {
                alert('invalid extension!');
                return false;
            }
            $('#blah2').show();
            $('#blah2')
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
    $("a.view-notification").click(function () {
        $("#viewnotificationModal").modal('show');
    });
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
    $('#journey-type').change(function () {
        var journeytype = $(this).val();
        $("div.journey-show").hide();
        if (journeytype == "International") {
            $("div.journey-show").show();
        }
    })
    $("select.compose-trip-type").click(function () {
        let traveller = $(this).val();
        if (traveller == "Compose Trip") {
      //  $("input[name='optradio'][value='"+traveller+"']").prop('checked',true)
        $("input[name='optradio'][value='"+traveller+"']").click();
        $("#viewnotificationModal").modal('hide');
        }
    });
    $("select.initiate-request-type").click(function () {
        let traveller = $(this).val();
        if (traveller == "Initiate Request") {
        //$("input[name='optradio'][value='"+traveller+"']").prop('checked',true)
        $("input[name='optradio'][value='"+traveller+"']").click();
        $("#viewnotificationModal").modal('hide');
        }
    });
    $("a.bid-box").click(function () {
        var idattr = $(this).attr('id').split('-')[2];

        if (!$("div#comment-color-box-" + idattr).is(':visible')) {
            $("div#comment-color-box-" + idattr).show();
        }
        else {
            $("div#comment-color-box-" + idattr).hide();
        }

    })





    $("a.btn-submit-function-1").click(function () {
        let fun = $(this);
        let parent = fun.parent();
        let parents = parent.parent().parent().next();
        let mode = parent.prev().prev().find("select").val();
        let tripmode = parent.prev().find("select").val();
        let max = parent.prev().prev().prev().find("input.max").val();
        let min = parent.prev().prev().prev().find("input.min").val();
        parents.append(`<div class="col-xs-12 comment-publish-box">
 
        <div class="row" style="margin:0px;">
      
     <div class="col-md-1 col-xs-3">
         <img class="img-circle img-responsive" style="margin:0 auto;width:45px;text-align:center;" src="https://lh3.googleusercontent.com/-CxXg7_7ylq4/AAAAAAAAAAI/AAAAAAAAAQ8/LhCIKQC5Aq4/s46-c-k-no/photo.jpg">
     </div>
     <div class="col-md-11 col-xs-9">
     <a class="dropdown-toggle pull-right" data-toggle="dropdown"><span class="glyphicon glyphicon-chevron-down"></span></a>
     <ul  class="dropdown-menu pull-right" style="clear:both;top:23%">
     <li><a href="#">Edit</a></li>
     <li><a href="#">Delete</a></li>
   </ul>
         <label>Srinivasan:</label>
         <p>
             <b>Bid Amount: </b>${min} - ${max}
             <b>Mode: </b>${mode} <b>Trip: </b>${tripmode}</p>
     </div></div>   
 </div>`);
    })
    $("a.btn-submit-function").click(function () {
        let fun = $(this);
        let parent = fun.parent();
        let parents = parent.parent();
        let mode = parent.prev().prev().find("select").val();
        let tripmode = parent.prev().find("select").val();
        let max = parent.prev().prev().prev().find("input.max").val();
        let min = parent.prev().prev().prev().find("input.min").val();
        parents.append(`<div class="col-xs-12 comment-publish-box">
     <div class="col-md-1 col-xs-3">
         <img class="img-circle img-responsive" style="margin:0 auto;width:45px;text-align:center;" src="https://lh3.googleusercontent.com/-CxXg7_7ylq4/AAAAAAAAAAI/AAAAAAAAAQ8/LhCIKQC5Aq4/s46-c-k-no/photo.jpg">
     </div>
     <div class="col-md-11 col-xs-9">
     <a class="dropdown-toggle pull-right" data-toggle="dropdown"><span class="glyphicon glyphicon-chevron-down"></span></a>
     <ul class="dropdown-menu pull-right" style="clear:both;top:23%">
     <li><a href="#">Edit</a></li>
     <li><a href="#">Delete</a></li>
   </ul>
         <label>Srinivasan:</label>
         <p>
             <b>Bid Amount: </b>${min} - ${max}
             <b>Mode: </b>${mode} <b>Trip: </b>${tripmode}</p>
     </div>
 </div>`);
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
    $(".nav li").on("click", function () {
        $(".nav li").removeClass("active");
        $(this).addClass("active");
    });
    $(window).scroll(function (e) {
        var $el = $('.nav-stacked');
        var isPositionFixed = ($el.css('position') == 'fixed');
        if ($(this).scrollTop() > 25 && !isPositionFixed) {
            $('.nav-stacked').css({ 'position': 'fixed', 'top': '0px' });
        }
        if ($(this).scrollTop() < 25 && isPositionFixed) {
            $('.nav-stacked').css({ 'position': 'static', 'top': '0px' });
        }
    });
    $(".nav-stacked li a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
    $("ul.dropdown-menu li").click(function () {

        $(this).addClass('active');
        $("ul.dropdown-menu li").removeClass('active');
    })
    $("button.comment-sections").click(function () {
        var comid = $(this).attr('id').split('-');
        $("div#show-section-" + comid[2]).toggle();
    })
    $('.modal').on('show.bs.modal', function () {
        if ($(document).height() > $(window).height()) {
            // no-scroll
            $('body').addClass("modal-open-noscroll");
        }
        else {
            $('body').removeClass("modal-open-noscroll");
        }
    })
    $('.modal').on('hide.bs.modal', function () {
        $('body').removeClass("modal-open-noscroll");
    })
    $("input[name='optradio1']").change(function () {

        let type = $(this).val();
        $(".ifc-code").hide();
        if (type == "Yes") {
            if ($(this).prop('checked')) {
                $("input[name='optradio1']").prop('checked', false);
                $(this).prop('checked', true);
                $(".ifc-code").show();
            }
        }
        else if (type == "No") {
            if ($(this).prop('checked')) {
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
            if ($(this).prop('checked')) {
                $("input[name='optradio']").prop('checked', false);
                $(this).prop('checked', true);
                $(".compose-trip").show();
            }
        }
        else if (type == "Initiate Request") {
            if ($(this).prop('checked')) {
                $("input[name='optradio']").prop('checked', false);
                $(this).prop('checked', true);
                $(".initiate-request").show();
            }

        }
        else {


        }
    })
});





