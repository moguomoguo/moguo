$(function () {

    var s1 = new Swiper('.swiper-container', {
        autoplay: { //自动轮播+延时两秒
            delay: 2000,
            disableOnInteraction: false
        },
        loop: true, //无缝回路轮播
        speed: 500, //切换速度
        navigation: { //上下按钮
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        pagination: { //焦点跟随
            el: '.swiper-pagination',
            clickable: true, //点击焦点跳到指定图片
        },
        mousewheel: false //滚动滑轮可以切图

    });

    var oBox = document.getElementById('swiper-container');

    oBox.onmouseover = function () { //鼠标经过停止
        s1.autoplay.stop();
    }

    oBox.onmouseout = function () { //鼠标经过离开
        s1.autoplay.start();
    }

    $('.car').on('mouseover', function () {
        $('.carlist').css({
            'display': 'block',
            'z-index': 10
        });
        $('.car').on('mouseout', function () {
            $('.carlist').css('display', 'none');
        })
    });

    $('.fenlei').on('mouseover', function () {
        $('.zonglei').css('display', 'block');
        $('.fenlei').on('mouseout', function () {
            $('.zonglei').css('display', 'none');
        })
    });

    $('.zonglei').on('mouseover', function () {
        $('.zonglei').css('display', 'block');
        $('.zonglei').on('mouseout', function () {
            $('.zonglei').css('display', 'none');
        })
    });

    $('.head_car').on('mouseover', function () {
        $('.head_carlist').css({
            'display': 'block',
            'z-index': 10
        });
        $('.head_car').on('mouseout', function () {
            $('.head_carlist').css('display', 'none');
        })
    });

    var a = $('#head_nav'),
        b = a.offset();
    $(document).on('scroll', function () {
        var c = $(document).scrollTop();
        if (b.top < c) {
            a.css('display', 'block', )
        } else {
            a.css('display', 'none', )
        }
    })

    var str = Cookie.get('goodscookie');

    function add() {
        $.ajax({
            type: "get",
            url: "../api/car.php",
            async: true,
            data: {
                'id': str
            },
            success: function (str) {
                var dataList = JSON.parse(str);
                var carlist = $('.carlist');
                let ul = document.createElement('ul');
                ul.innerHTML = dataList.map(goods => {
                    return `<li data-id="${goods.id}">
                            <img src="${goods.imgurl}" width="90px" heigh="90px" position="absolute" left="-50px"/>
                            <span display="block" width="200px" overflow="hidden">${goods.title}</span>         
							<p class="good_price fr"><span>￥：${(goods.price * goods.off).toFixed(2)}</span></p>
						</li>`
                }).join('');
                carlist.innerHTML = '';
                carlist.append(ul);
            }
        });
    }

    add();


});