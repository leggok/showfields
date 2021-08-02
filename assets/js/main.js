$('.slider').slick({            
    dots: true,
    arrows: false,
});         
$(function(){            
    $(window).scroll(function(){
        if($(window).scrollTop()>300){                                    
            $(".menu").addClass('df')
        }else{                    
            $(".menu").removeClass('df')
        }
    });
    $(".hamburger, #menu_shadow").click(function(){
        $(".hamburger").toggleClass("is-active");
        $("body").toggleClass("open");
    });

    $(".mobile_menu a").click(function(){
        $(".hamburger").removeClass("is-active");
        $("body").removeClass("open");
    });                        
    $(".accordeon .footer_list").hide().prev().click(function() {
        $(this).parents(".accordeon").find(".footer_list").not(this).slideUp().prev().removeClass("active");
        $(this).next().not(":visible").slideDown().prev().addClass("active");
    });
});
jQuery(function($) {
    user_email.addEventListener('focus', function(event) {
        $('#status').text('');
    });
    mob_user_email.addEventListener('focus', function(event) {
        $('#mob_status').text('');
    });
    send_btn.addEventListener('click', function(event) {
    if ( validateForm() ) {
        event.preventDefault();
        $('#status').text('Failure!!!! Try again');
    }else{
        sendMessage();            
        $('#user_email').val('');
        $('#status').text('Success!!!!');
    }
    });
    mob_send_btn.addEventListener('click', function(event) {
    if ( validateFormMob() ) {
        event.preventDefault();
        $('#mob_status').text('Failure!!!! Try again');
    }else{
        sendMessage();            
        $('#mob_user_email').val('');
        $('#mob_status').text('Success!!!!');
    }
    });
    function validateForm() {
        $('#status').text('');      
        let reg = /^\w+([\.-]?\w+)*@(((([a-z0-9]{2,})|([a-z0-9][-][a-z0-9]+))[\.][a-z0-9])|([a-z0-9]+[-]?))+[a-z0-9]+\.([a-z]{2}|(com|net|org|edu|int|mil|gov|arpa|biz|aero|name|coop|info|pro|museum))$/i;
        let el_e = $("#user_email");
        let v_email = el_e.val()?false:true;
    
        if ( !reg.test( el_e.val() ) ) {
            v_email = true;
            $('#user_email').val('');
            $('#status').text('Failure!!!! Try again');            
        }
            return v_email;
    };
    function validateFormMob() {
        $('#status').text('');      
        let reg = /^\w+([\.-]?\w+)*@(((([a-z0-9]{2,})|([a-z0-9][-][a-z0-9]+))[\.][a-z0-9])|([a-z0-9]+[-]?))+[a-z0-9]+\.([a-z]{2}|(com|net|org|edu|int|mil|gov|arpa|biz|aero|name|coop|info|pro|museum))$/i;
        let el_e = $("#mob_user_email");
        let v_email = el_e.val()?false:true;
    
        if ( !reg.test( el_e.val() ) ) {
            v_email = true;
            $('#mob_user_email').val('');
            $('#mob_status').text('Failure!!!! Try again');            
        }
            return v_email;
    };
    function sendMessage(){
        const BOT_TOKEN = '1742544832:AAGLxm_DQYHy1YdzZnxIL6eLK1HGkV_W4e0';
        const CHAT_ID = '-1001480500270';
        const text = ' Email: '+user_email.value +mob_user_email.value;
        if(text!==""){
            axios
                .get('https://api.telegram.org/bot'+BOT_TOKEN+'/sendMessage?chat_id='+CHAT_ID+'&text='+text);
        }
    };
});