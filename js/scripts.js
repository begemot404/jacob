$(document).ready(function () {

    $('.anchor[href^="/#"]').click(function () {
        if ($(window).innerWidth() <= 1000) {
            $('.menu-links').removeClass('active');
            $('.burger').removeClass('active');
        }
        var elementClick = $(this).attr("href");
        elementClick = elementClick.substring(1, 11);
        destination = $(elementClick).offset().top - 150;
        $('html, body').animate({ scrollTop: destination }, 500, 'swing');
        return false;
    });



    function closePopup() {
        $('.js-close-popup').on('click', function (e) {
            e.preventDefault();
            $('.popup').removeClass('js-popup-show');
            $('body').removeClass('no-scrolling');
        });
    }
    closePopup();

    $('.table-wrapper').scrollbar();
    $('.faq-wrap').scrollbar();
    $('.place-scroll').scrollbar();

    function maskInit() {
        $(".phone-mask").inputmask({
            mask: "+7(999)999-99-99",
            "clearIncomplete": true
        });

        $(".card-mask").inputmask({
            mask: "9999-9999-9999-9999"
        });
		
        $(".data-mask").inputmask({
            mask: "99.99.9999"
        });
		
		$(".time-mask").inputmask({
            mask: "99:99"
        });
		
		
    }
    maskInit();

    function checkValidate() {
        var form = $('form');

        $.each(form, function () {
            $(this).validate({
                ignore: [],
                errorClass: 'error',
                validClass: 'success',
                rules: {
                    FullName: {
                        required: true
                    },
                    LName: {
                        required: true
                    },
                    FName: {
                        required: true
                    },
                    MName: {
                        required: true
                    },
                    Email: {
                        required: true,
                        Email: true
                    },
                    PhoneNumber: {
                        required: true,
                        PhoneNumber: true
                    },
                    Message: {
                        required: true
                    },
                    Password: {
                        required: true,
                        normalizer: function normalizer(value) {
                            return $.trim(value);
                        }
                    }
                },
                errorElement: 'span',
                errorPlacement: function (error, element) {
                    var placement = $(element).data('error');
                    if (placement) {
                        $(placement).append(error);
                    } else {
                        error.insertBefore(element);
                    }
                },
                messages: {
                    PhoneNumber: 'Некорректный номер',
                    Email: 'Некорректный e-mail'
                }
            });
        });
        jQuery.validator.addMethod('Email', function (value, element) {
            return this.optional(element) || /\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6}/.test(value);
        });
        jQuery.validator.addMethod('PhoneNumber', function (value, element) {
            return this.optional(element) || /\+7\(\d+\)\d{3}-\d{2}-\d{2}/.test(value);
        });
    }
    checkValidate();

    if ($('.select').length > 1) {
        $('select').each(function () {
            let $this = $(this).not('.select-search');
            let parent = $(this).not('.select-search').parents('.select');
            $this.select2({
                minimumResultsForSearch: Infinity,
                dropdownParent: parent
            });
        });
        $('.select-search').each(function () {
            let $this = $(this);
            let parent = $(this).parents('.select');
            $this.select2({
                dropdownParent: parent
            });
        });
    } else {
        $('select').select2({
            minimumResultsForSearch: Infinity,
            dropdownParent: $('.select')
        });
    }

    $('.select-search').each(function () {
        let $this = $(this);
        let parent = $(this).parents('.select');
        $this.select2({
            minimumResultsForSearch: 0,
            dropdownParent: parent,
            language: {
                noResults: function (params) {
                    return "Найдено 0 строк";
                }
            }
        });
    });


    // восстановление пароля
    //$('#restore-password .btn').click(function(e){
    //    e.preventDefault();
    //    if($('#restore-password form').valid()) {
    //        $('#restore-password .btn').addClass('disabled');
    //        $('.clock-text').show();
    //        let dt = new Date();
    //        let time = dt.getFullYear() + '/' + (dt.getMonth()+1) + '/' + dt.getDate() + ' ' + dt.getHours() + ":" + (dt.getMinutes()+1) + ":" + dt.getSeconds();
    //        $('.clock').parent().show();
    //        $('.clock').countdown(time)
    //        .on('update.countdown', function(event) {
    //            $(this).html(event.strftime('%M:%S'));
    //        })
    //        .on('finish.countdown', function(event) {
    //            $(this).parent().hide();
    //            $('#restore-password .btn').removeClass('disabled');
    //        });
    //    }
    //});

    function openAccordion() {
        var wrap = $('.accordion-wrap');
        var accordion = wrap.find('.accordion-title');

        accordion.on('click', function () {
            var $this = $(this);
            var $parent = $(this).parent();
            var content = $this.next();

            if (content.is(':visible')) {
                $this.removeClass('active');
                $parent.removeClass('active');
                content.slideUp('fast');
            } else {
                $this.addClass('active');
                $parent.addClass('active');
                content.slideDown('fast');
            }

        });
    }
    openAccordion();

    $('.lk-prizes-slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipe: false
    });

    $('.superwinner-slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1281,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    if ($(window).innerWidth() < 1000) {
        $('.products-title').one('click', function () {
            $(this).parent().find('.products-list').slick({
                dots: false,
                arrows: true,
                infinite: true,
                speed: 300,
                slidesToShow: 1,
                slidesToScroll: 1
            });
        });
    }

    $('.close-tooltip').on('click', function (e) {
        e.preventDefault();
        $(this).parent().fadeOut();
    });

    $('.places-link').one('click', function (e) {
        $('.places-slider').slick({
            dots: false,
            arrows: true,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    });

    $('.boxes-slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

});

function OpenPopup(popupId) {
    $('body').removeClass('no-scrolling');
    $('.popup').removeClass('js-popup-show');
    popupId = '#' + popupId;
    $(popupId).addClass('js-popup-show');
    $('body').addClass('no-scrolling');
}