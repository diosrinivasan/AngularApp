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
$(function () {
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
// var app = angular.module('myapp', ['ngAnimate', 'ui.bootstrap']);
// app.factory("States", function () {
//     var states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Dakota", "North Carolina", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];
//     return states;
// });
// app.controller('RatingDemoCtrl', function ($scope) {
// });
// app.controller("TypeaheadCtrlS", function ($scope, States) {

//     $scope.sourceS = undefined;

//     $scope.source = States;

// });
// app.controller("TypeaheadCtrlD", function ($scope, States) {

//     $scope.destinationD = undefined;

//     $scope.destination = States;

// });
// app.controller("DateController", function ($scope, States) {
//     $scope.popup1 = {
//         opened: false
//     };
//     $scope.today = function () {
//         $scope.date = new Date().getDate() + "-" + new Date().getMonth() + "-" + new Date().getFullYear();
//     };
//     $scope.today();
//     $scope.open1 = function () {
//         $scope.popup1.opened = true;
//     };
//     $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
//     $scope.format = $scope.formats[0];
//     $scope.dateOptions = {
//         'year-format': "'yy'",
//         'starting-day': 1,
//         'minDate': new Date().getDate() + "-" + new Date().getMonth() + "-" + new Date().getFullYear()
//     };
// });
