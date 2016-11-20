

$(document).ready(function () {
  
$('a.pravno, a.changeData').click(function (){
        setTimeout(function(){ $('#pravno form, #izmenaPodataka form').validator(); }, 10);
        
    });
    
    
      $(".shopingCart a").click(function () {
        $("#shopingCartSmall").slideToggle();
    });
    $('.filtr-container').filterizr();
    
    $('.carousel').carousel({
        interval: 5000 //changes the speed
    });
    $('.slider-product').carousel({
        interval: 5000 //changes the speed
    });



    







  



    $("#hideRow").click(function () {
        $("#hiddenRow").toggle();
    });




    $("#hideRow1").click(function () {
        $("#hiddenRow1").toggle();
    
});


});



$(document).ready(function () {
    $("button#history").click(function () {
        $("tbody tr:nth-child(3),tbody tr:nth-child(4),tbody tr:nth-child(5),tbody tr:nth-child(6)").toggle();

        if ($.trim($(this).text()) === 'PRIKAЕЅI CELU ISTORIJU') {
            $(this).text('SAKRIJ ISTORIJU');
        } else {
            $(this).text('PRIKAЕЅI CELU ISTORIJU');
        }

        return false;
    });
});


$(document).ready(function () {
    $("#reply").click(function () {
        $("#hiddenDiv3").toggle();
    });
});

$(function () {
    $('.show').click(function () {
        $(this).closest('.show').toggleClass('hide');
    });
});

$(document).ready(function () {
    $(".show").click(function () {
        $(".shopHidden").toggle("slide");
         if ($.trim($(this).text()) === 'Show order summary') {
            $(this).text('Hide order summary');
        } else {
            $(this).text('Show order summary');
        }
    });
});








