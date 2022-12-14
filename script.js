// function to enlarge photos in the gallery page
$(function () {
    $('.pop').on('click', function () {
        $('.imagepreview').attr('src', $(this).find('img').attr('src'));
        $('#imagemodal').modal('show');
    });
});
// validate the full name of the user
function validateFullName(input) {
    var pattern = /^[a-zA-Z]+ [a-zA-Z]+( [a-zA-Z]+)*$/
        ;
    if (!pattern.test(input.value)) {
        input.setCustomValidity('Please enter a valid full name');
    } else {
        input.setCustomValidity('');
    }
}
// setting the min attribute of the arrival and leaving date type to today
$(document).ready(function () {
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth() + 1;
    var day = today.getDate();
    if (month < 10) {
        month = '0' + month;
    }
    if (day < 10) {
        day = '0' + day;
    }
    var minDate = year + '-' + month + '-' + day;
    $('input[type="date"]').attr('min', minDate);
})
// check that the leaving date cannot be before the arrival date
$(document).ready(function () {
    $('#leavingdate').on('input', function () {
        var leavingdate = new Date($(this).val());
        var arrivaldate = new Date($('#arrivaldate').val());
        if (arrivaldate >= leavingdate) {
            $(this).get(0).setCustomValidity('the leaving date cannot be before or the same as the arrival date');
        } else {
            $(this).get(0).setCustomValidity('');
        }
    });
});
// move to reservation page aamd select the correct option in the form when the room is selected
$(document).ready(function () {
    $(document).on('click', '.room', function () {
        roomOptionNum = this.getAttribute('val')
        sessionStorage.setItem('roomtype', roomOptionNum)
        location.href = 'reservation.html'
    });
});
$(document).ready(function () {
    storedval = sessionStorage.getItem('roomtype');
    if (storedval) {
        document.getElementById("roomselect").selectedIndex = storedval
        sessionStorage.clear();
        storedval = null;
    }
});