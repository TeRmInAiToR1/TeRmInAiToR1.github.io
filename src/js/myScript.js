"use strict"

$(window).on('load', function () {
    $('.preloader').fadeOut('slow');
//    $('.preloader').delay(2500).fadeOut('slow');
});

$(document).ready(function(){
    new WOW().init();
    
    $("form").submit(function(event){
        event.preventDefault();
        
        $.ajax({
            type: "POST",
            url: "php/mail.php",
            data: $(this).serialize()
        }).done(function(){
            $(this).find("input").val("");
            alert("Успешно отправлено!");
            $("form").trigger("reset");
        });
        return false;
    });
    
    $("#exampleInputName").mask("+7(999) 999-9999");
    
    $(window).scroll(function(){
        let scrollDistance = $(window).scrollTop();
        $(".section").each(function(i, el){
            if($(el).offset().top - $("nav").outerHeight() - 100 <= scrollDistance){
                $("nav a").each(function(i, el){
                    if($(el).hasClass("activeNav")){
                        $(el).removeClass("activeNav");
                    }
                });
                
                $("nav .menu li a:eq("+ i +")").addClass("activeNav");
            }
            if (scrollDistance < 600){
                $("nav a").each(function(i, el){
                    if($(el).hasClass("activeNav")){
                        $(el).removeClass("activeNav");
                    }
                });
            } 
        });
    });
    
    let options = {threshold: [0.5]};//анимация сработает при появлении объекта на 50%
//    let observer = new IntersectionObserver(onEntry, options);
//    let elements = $(".element-animation");
//    elements.each(function(i, el){
//        observer.observe(el);
//    });
    
//    observer = new IntersectionObserver(onEntryST, options);
//    elements = $(".element-animation-sk");
//    elements.each(function(i, el){
//        observer.observe(el);
//    });
    
    let imgObserver = new IntersectionObserver(onEntryImg, options);
    let imgElements = $(".imgUploads1");
    imgElements.each(function(i, el){
        imgObserver.observe(el);
    });
    
    options = {threshold: [0.2]};
    imgElements = $(".imgUploads2");
    imgObserver = new IntersectionObserver(onEntryIm, options);
    imgElements.each(function(i, el){
        imgObserver.observe(el);
    });
    
    let optionsCarousel = {threshold: [0.1]};
    let observerCarousel = new IntersectionObserver(onEntryCarousel, optionsCarousel);
    let elementsCarousel = $(".image-link");
    elementsCarousel.each(function(i, el){
        observerCarousel.observe(el);
    });
    
    setTimeout(function(){ $(".my_modal").trigger('click'); }, 10000);
    
    $('.image-link').magnificPopup({type:'image'});
    
    let show = true;
    let countbox = ".benefits__inner";
    $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        let w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        let e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        let w_height = $(window).height(); // Высота окна браузера
        let d_height = $(document).height(); // Высота всего документа
        let e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.number').css('opacity', '1');
            $('.number').spincrement({
                thousandSeparator: "",
                duration: 3000,
            });
             
            show = false;
        }
    });
    
    let mapObserver = new IntersectionObserver(onEntryMap, optionsCarousel);
    let mapElements = $(".location");
    mapElements.each(function(i, el){
        mapObserver.observe(el);
    });
    
    
//    let map_container = document.getElementById('map_container');
//    let options_map = {
//        once: true,//запуск один раз, и удаление наблюдателя сразу
//        passive: true,
//        capture: true
//    };
//    map_container.addEventListener('click', start_lazy_map, options_map);
//    map_container.addEventListener('mouseover', start_lazy_map, options_map);
//    map_container.addEventListener('touchstart', start_lazy_map, options_map);
//    map_container.addEventListener('touchmove', start_lazy_map, options_map);
//
//    let map_loaded = false;
//    function start_lazy_map() {
//        if (!map_loaded) {
//            let map_block = document.getElementById('ymap_lazy');
//            map_loaded = true;
//            map_block.setAttribute('src', map_block.getAttribute('data_src'));
//            map_block.removeAttribute('data_src');
//            console.log('YMAP LOADED');
//        }
//    }
});
    
function countPrice(){
    let design = $('#siteDesign option:selected').text();
    let type = $('#siteType option:selected').text();
    let adaptability = $('#siteAdapt option:selected').text();
    
    let answers = {
        design: design,
        type: type,
        adaptability: adaptability,
        cost: 0,
        terms: 0,
        calculations(){
            if(this.design == 'Hi Tech'){
                this.cost += 2000;
                this.terms += 2;
            }
            else if(this.design == 'Organic & Natural'){
                this.cost += 1500;
                this.terms += 2;
            }
            else if(this.design == 'Полигональный'){
                this.cost += 1000;
                this.terms += 1;
            }

            if(this.type == 'Социальный') { this.cost += 3000; this.terms += 4; }
            else if(this.type == 'Комерческий') { this.cost += 4000; this.terms += 5; }
            else if(this.type == 'Информационный') { this.cost += 1500; this.terms += 1; }

            if(this.adaptability == 'Резиновый') { this.cost += 1500; this.terms += 2; }
            else if(this.adaptability == 'Pixel Perfect') { this.cost += 2000; this.terms += 1; }
            else if(this.adaptability == 'Адаптивный') { this.cost += 5000; this.terms += 4; }
        }
    };
    answers.calculations();
    console.log(answers.cost);
    let num_f = $('.numbers:first');
    let num_s = $('.numbers:last'); 
    num_f.text(answers.terms + " дней");
    num_s.text(answers.cost + " рублей");
    
    num_f.removeClass('col-1');
    num_f.addClass('col-4');
    
    num_s.removeClass('col-1');
    num_s.addClass('col-4');
}

//function onEntry(entry){
//    entry.forEach(change => {
//       if(change.isIntersecting){
//           change.target.classList.add('show-animation');
//       } 
//    });
//}
//function onEntryST(entry){
//    entry.forEach(change => {
//       if(change.isIntersecting){
//           change.target.classList.add('show-animation-sk');
//       } 
//    });
//}

function onEntryMap(entry){
    entry.forEach(change => {
       if(change.isIntersecting){
           $('.location script').each( function(){ this.src = this.getAttribute('data_src');
           this.removeAttribute('data_src');
                                              });
       } 
    });
}
function onEntryImg(entry){
    entry.forEach(change => {
       if(change.isIntersecting){
           $('.about_me img').each( function(){ this.src = this.getAttribute('data_src');
                                              });
       } 
    });
}
function onEntryIm(entry){
    entry.forEach(change => {
       if(change.isIntersecting){
           $('.reviews_container img').each( function(){ this.src = this.getAttribute('data_src');});
       } 
    });
}
function onEntryCarousel(entry){
    entry.forEach(change => {
       if(change.isIntersecting){
           $('.carousel_inner img').each( function(){ this.src = this.getAttribute('data_src');
                                              });
       } 
    });
}
//function getRandomInt(min, max) {
//  min = Math.ceil(min);
//  max = Math.floor(max);
//  return Math.floor(Math.random() * (max - min)) + min;
//}

//function notice(){
//    $(".my_modal_2").trigger('click');
//}

$('a[href^="#"]').click(function(){//плавный скрол к секциям
    let valHref = $(this).attr("href");
    $('html, body').animate({scrollTop: $(valHref).offset().top - 50 + "px"});
});