(function ($) {
    'use strict';

    var imJs = {
        m: function (e) {
            imJs.d();
            imJs.methods();
        },
        d: function (e) {
            this._window = $(window),
            this._document = $(document),
            this._body = $('body'),
            this._html = $('html')

        },

        methods: function (e) {
            imJs.featherAtcivation();
            imJs.backToTopInit();
            imJs.mobileMenuActive();
            imJs.stickyHeader();
            imJs.smothScroll();
            imJs.smothScroll_Two();
            imJs.stickyAdjust();
            imJs.contactForm();
            imJs.wowActive();
            imJs.awsActivation();
            imJs.publicationsToggle();
            imJs.initHeadline();
        },

        initHeadline: function () {
            if (window.initCdHeadline) {
                window.initCdHeadline();
            }
        },

        publicationsToggle: function () {
            $(document).on('click', '.pub-toggle-btn', function (e) {
                e.preventDefault();
                var $btn = $(this);
                var targetId = $btn.data('target');
                var $container = $(targetId);
                var isExpanded = $btn.hasClass('expanded');

                if (isExpanded) {
                    $container.find('.pub-extra-card').addClass('pub-item-hidden').removeClass('pub-card-animate');
                    $btn.removeClass('expanded');
                    $btn.attr('aria-expanded', 'false');
                    var count = $btn.data('count');
                    var label = targetId === '#conf-pubs' ? 'Conferences' : 'Publications';
                    $btn.find('.btn-text').text('Show More ' + label + ' (+' + count + ')');
                    $btn.find('i').replaceWith('<i data-feather="chevron-down"></i>');
                    if (window.feather) {
                        feather.replace();
                    }

                    var pubSection = document.getElementById('publications');
                    if (pubSection) {
                        var pubTop = pubSection.getBoundingClientRect().top + window.pageYOffset - 90;
                        window.scrollTo({ top: pubTop, behavior: 'smooth' });
                    }
                } else {
                    $container.find('.pub-extra-card').removeClass('pub-item-hidden').addClass('pub-card-animate');
                    $btn.addClass('expanded');
                    $btn.attr('aria-expanded', 'true');
                    $btn.find('.btn-text').text('Show Less');
                    $btn.find('i').replaceWith('<i data-feather="chevron-up"></i>');
                    if (window.feather) {
                        feather.replace();
                    }
                }
            });
        },



        contactForm: function () {
            $('.rwt-dynamic-form').on('submit', function (e) {
                e.preventDefault();
                var _self = $(this);
                var $submitBtn = _self.find('button[type="submit"]');
                var originalBtnHtml = $submitBtn.html();
                _self.find('.error-msg, .success-msg').remove();
                $submitBtn.attr('disabled', 'disabled').html('<span>Sending...</span> <i data-feather="loader"></i>');
                if (window.feather) feather.replace();

                var payload = {
                    name: _self.find('[name="contact-name"]').val(),
                    email: _self.find('[name="contact-email"]').val(),
                    phone: _self.find('[name="contact-phone"]').val() || 'N/A',
                    subject: _self.find('[name="subject"]').val(),
                    message: _self.find('[name="contact-message"]').val(),
                    _subject: 'Portfolio Message: ' + (_self.find('[name="subject"]').val() || 'New Inquiry')
                };

                $.ajax({
                    url: 'https://formsubmit.co/ajax/contactshahria@gmail.com',
                    type: 'POST',
                    dataType: 'json',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    data: JSON.stringify(payload),
                    success: function () {
                        $submitBtn.removeAttr('disabled').html(originalBtnHtml);
                        if (window.feather) feather.replace();
                        _self.find('.form-bottom-row').after('<div class="success-msg mt--15" style="color: #10b981; font-weight: 500; text-align: center;"><p>✓ Message sent successfully! I will respond promptly.</p></div>');
                        _self[0].reset();
                        setTimeout(function () {
                            _self.find('.success-msg').fadeOut('slow', function () { $(this).remove(); });
                        }, 6000);
                    },
                    error: function () {
                        $submitBtn.removeAttr('disabled').html(originalBtnHtml);
                        if (window.feather) feather.replace();
                        _self.find('.form-bottom-row').after('<div class="error-msg mt--15" style="color: #f43f5e; text-align: center;"><p>Unable to send right now. Please email directly at <a href="mailto:contactshahria@gmail.com" style="color: #fff; text-decoration: underline;">contactshahria@gmail.com</a></p></div>');
                    }
                });
            });
        },



        wowActive: function () {
            new WOW().init();
        },

        smothScroll: function () {
            $(document).on('click', '.smoth-animation', function (event) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: $($.attr(this, 'href')).offset().top - 50
                }, 300);
            });
        },
        // two scroll spy
        smothScroll_Two: function () {
            $(document).on('click', '.smoth-animation-two', function (event) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: $($.attr(this, 'href')).offset().top - 0
                }, 300);
            });
        },


        stickyAdjust: function (e) {
            // Sticky Top Adjust..,
            $('.rbt-sticky-top-adjust').css({
                top: 120
            });

            $('.rbt-sticky-top-adjust-two').css({
                top: 200
            });
            $('.rbt-sticky-top-adjust-three').css({
                top: 25
            });
        },

        featherAtcivation: function () {
            feather.replace()
        },


        backToTopInit: function () {
            // declare variable
            var scrollTop = $('.backto-top');
            $(window).scroll(function () {
                // declare variable
                var topPos = $(this).scrollTop();
                // if user scrolls down - show scroll to top button
                if (topPos > 100) {
                    $(scrollTop).css('opacity', '1');

                } else {
                    $(scrollTop).css('opacity', '0');
                }
            });

            //Click event to scroll to top
            $(scrollTop).on('click', function () {
                $('html, body').animate({
                    scrollTop: 0,
                    easingType: 'linear',
                }, 500);
                return false;
            });

        },

        stickyHeader: function (e) {
            $(window).scroll(function () {
                if ($(this).scrollTop() > 250) {
                    $('.header--sticky').addClass('sticky')
                } else {
                    $('.header--sticky').removeClass('sticky')
                }
            })
        },

        mobileMenuActive: function (e) {
            $('.humberger-menu').on('click', function (e) {
                e.preventDefault();
                $('.popup-mobile-menu').addClass('menu-open');
                imJs._html.css({
                    overflow: 'hidden'
                })
            });

            $('.close-menu-activation, .popup-mobile-menu .primary-menu .nav-item a').on('click', function (e) {
                e.preventDefault();
                $('.popup-mobile-menu').removeClass('menu-open');
                $('.has-droupdown > a').removeClass('open').siblings('.submenu').removeClass('active').slideUp('400');
                imJs._html.css({
                    overflow: ''
                })
            });

            $('.popup-mobile-menu').on('click', function (e) {
                e.target === this && $('.popup-mobile-menu').removeClass('menu-open');
                imJs._html.css({
                    overflow: ''
                })
            });


            $('.has-droupdown > a').on('click', function (e) {
                e.preventDefault();
                $(this).siblings('.submenu').toggleClass('active').slideToggle('400');
                $(this).toggleClass('open');
                imJs._html.css({
                    overflow: ''
                })
            });


            $('.nav-pills .nav-link').on('click', function (e) {
                $('.rn-popup-mobile-menu').removeClass('menu-open');
                imJs._html.css({
                    overflow: ''
                })
            })


        },

        awsActivation:function(e){
            AOS.init();
        },

    }
    imJs.m();


})(jQuery, window)
