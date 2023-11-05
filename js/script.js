//  Coded By Mr MHM
//  CONTACT => MHM-DEV.IR
//  ^_^

$('document').ready(function() {

    // menu
    $('.menu-item').click(function() {
        var all = '.home , .about , .skills , .images , .contact';
        $(all).removeClass('active');

        $(this).addClass('active');
    })

    // show page by click menu items
    function showPage(page) {
        var all = '.main , #about , #skills , #images , #contact';
        $(all).css('display', 'none');

        $(page).fadeIn('slow');
    }

    $('.home').click(function() {
        showPage('.main');
    })
    $('.about').click(function() {
        showPage('#about');
    })
    $('.skills').click(function() {
        showPage('#skills');
    })
    $('.images').click(function() {
        showPage('#images');
    })
    $('.contact').click(function() {
        showPage('#contact');
    })




    // gallery images
    function gallery(src) {
        $('.show_image').show();
        $('.show_image img').attr('src', src);
    }
    $('.show_image').click(function() {
        $('.show_image').hide()
    })


    $('#showImages1').click(function() {
        gallery('img/portfolio/appShowWeb.png')
    })
    $('#showImages2').click(function() {
        gallery('img/portfolio/linkShorter.png')
    })
    $('#showImages3').click(function() {
        gallery('img/portfolio/appUi.png')
    })
    $('#showImages4').click(function() {
        gallery('img/portfolio/whoisWeb.png')
    })
    $('#showImages5').click(function() {
        gallery('img/portfolio/numberOneWeb.png')
    })
    $('#showImages6').click(function() {
        gallery('img/portfolio/sahra.png')
    })
    $('#showImages7').click(function() {
        gallery('img/portfolio/adminPanelBlog.png')
    })
    $('#showImages8').click(function() {
        gallery('img/portfolio/numberOnePanel.png')
    })



    // contact
    // $('form').submit(function(){
    // var name = $('#name').val();
    // var numail = $('#numail').val();
    // var texta = $('#text');

    //         if((name != "") && (numail != "")){
    //                 var mydata = $(this).serialize();
    //         $.ajax({
    //                 type: "POST",
    //                 url: "message.php",
    //                 data: mydata,
    //                 success: function(mess){
    //                         if(mess == 'ok'){
    //                                 alert( "پیغام شما با موفقیت ارسال شد . \n بزودی پاسخ برایتان ارسال خواهد شد .");
    //                         }
    //                         else{
    //                                 alert('خطا در ارسال پیغام ، لطفا بعداً دوباره تلاش کنید .')
    //                         }
    //                 }

    //         });
    //                 $('form button').hide();
    //                 return false;
    //         }
    //         else{
    //                 alert('لطفا مقادیر داده شده را کامل کنید .')
    //                 return false;

    //         }
    // })






})