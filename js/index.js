$('#bigbox').fullpage({
    navigation: true,
    sectionsColor: ['#f9dd67', '#84a2d4', '#ef674d', '#ffeedd', '#cf4759', '#85d9ed', '#8ac060', '#84d9ed'],
    afterLoad: function (a, index) {
        $('.section').eq(index - 1).addClass('animation').siblings().removeClass('animation');

        $('.section>div img').removeAttr('style')
        $('.section>div div').removeAttr('style')

        if (index == 2) {
            $('.section2 .search01').animate({
                marginLeft: -111,
            }, 1000, 'easeOutBack', function () {
                $('.section2 .search01').hide();
                $('.section2 .search02').show();
                $('.section2 .search02').delay(600).animate({
                    marginLeft: 130,
                    bottom: 450,
                    width: 148
                }, 1000);
                $('.section2 .sofas').delay(1000).animate({
                    width: 441,

                })
            })
        } else if (index == 4) {
            $('.section4 .carBox').animate({
                marginLeft: 1200,
            }, 2500, 'easeInElastic', function () {
                $('.section4 .keyboard').animate({
                    opacity: 1,
                }, 1000)
            })
        } else if (index == 6) {

            $('.section6 .box').animate({

                top:20,

            },1500,function(){
                $('.section6 .street').animate({

                    backgroundPositionX:-1300

                },2500,function(){

                    $('.section6 .man').animate({

                        height:140,

                    },1000,function(){

                        $('.section6 .man').animate({

                            right:-150,
                        },1000,function(){
                            $('.section .door').animate({
                                opacity:1,
                            },1000,function(){
                                $('.section6 .girl').animate({
                                    opacity:1,
                                })
                            })
                        })
                    })
                })
            })
            
        } else if (index == 8) {
            $('.section8').mousemove(function (e) {
                
                $('.section8 .hand').css('left', e.pageX - 65);
                $('.section8 .hand').css('top', e.pageY - 10);
            });

            $('.section8 .again').click(function(){

                // fullpage提供了一个专门用来跳转到指定屏数的方法
                // 写几就代表跳到第几屏
                $.fn.fullpage.moveTo(1);
            });
        }
    }
})