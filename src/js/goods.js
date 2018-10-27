$(function () {
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

    function getQueryString(name) {
        var result = window.location.search.match(new RegExp("[\?\&]" + name + "=([^\&]+)", "i"));
        if (result == null || result.length < 1) {
            return "";
        }
        return result[1];
    }

    var str = getQueryString("id");

    function add() {
        $.ajax({
            type: "get",
            url: "../api/goods.php",
            async: true,
            data: {
                'id': str
            },
            success: function (str) {
                var dataList = JSON.parse(str);
                var good = $('.good_right');
                let ul = document.createElement('ul');
                ul.innerHTML = dataList.map(goods => {
                    return `<li data-id="${goods.id}">
                            <h2>${goods.title}</h2>
                            <p class="category">分类：${goods.category}</p>
                            <p class="price">原价：<del>${goods.price}</del></p>
                            <p class="nowprice">现价：<span>${(goods.price * goods.off).toFixed(2)}</span></p>
                            <p class="hot">月销量：<span>${goods.commentCount}</span></p>
                            </li>`
                }).join('');

                good.innerHTML = '';
                good.append(ul);
            }
        });
    }

    add();

    $(".jqzoom").imagezoom();
    $('#thumblist li').click('div', function () {
        $(this).parents("li").remove().ClassName;
        $(this).parents("li").addClass("tb-selected");
        $(".jqzoom").attr('src', $(this).find("img").attr("mid"));
        $(".jqzoom").attr('rel', $(this).find("img").attr("big"));
    });

    //加数量
    $('.num').on('click', '.add', function () {
        var val = $(this).prev().val();
        val++;
        if (val >= 100) {
            val = 100;
        }
        $(this).prev().val(val);
    });

    //减数量
    $('.num').on('click', '.cut', function () {
        var val = $(this).next().val();
        val--;
        if (val <= 1) {
            val = 1;
        }
        $(this).next().val(val);
    });

    var tab = document.getElementsByClassName('tab')[0];
    var header = tab.firstElementChild.children;
    var content = tab.lastElementChild.children;
    // 1）初始化
    header[0].className = 'active';
    for (var i = 0; i < content.length; i++) {
        if (i > 0) {
            content[i].style.display = 'none';
        }
        // 绑定事件
        // 把i的值设置到html结构
        // header[i].setAttribute('idx',i);
        header[i].idx = i;
        header[i].onclick = function () {
            // 点击时获取html结构的idx属性
            // var idx = this.getAttribute('idx');
            // 获取当前点击的索引值
            var idx = this.idx;
            // 显示当前高亮，隐藏其他高亮
            // 显示当前内容，隐藏其他内容
            for (var i = 0; i < header.length; i++) {
                if (i === idx) {
                    header[i].className = 'active';
                    content[i].style.display = 'block';
                } else {
                    header[i].className = '';
                    content[i].style.display = 'none';
                }
            }
        }
    }

    $('#main .good').on('click', '.addcar', function () {
        var val = $('.shuliang').val();
        var val_1 = $('.carnum').text();
        console.log(val, val_1);
        $('.carnum').text(val * 1 + val_1 * 1);

        var goodscookie = Cookie.get('goodscookie');
        // 判断cookie
        if (goodscookie === "") {
            goodscookie = []
        } else {
            goodscookie = JSON.parse(goodscookie);
        }
        goodscookie.push(str);
        console.log(str)
        // 写入cookie
        document.cookie = 'goodscookie=' + JSON.stringify(goodscookie) + ';expires';
    });

    let carlist = document.querySelector('.carlist');
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            let data = JSON.parse(xhr.responseText);
            let ul = document.createElement('ul');
            ul.innerHTML = data.map(goods => {
                return `<li data-id="${goods.id}">
                <img src="${goods.imgurl}" width="90px" heigh="90px" position="absolute" left="-50px"/>
                <span display="block" width="200px" overflow="hidden">${goods.title}</span>         
                <p class="good_price fr"><span>￥：${(goods.price * goods.off).toFixed(2)}</span></p>
            </li>`
            }).join('');
            carlist.innerHTML = '';
            carlist.appendChild(ul);
        }
    }
    xhr.open('get', '../api/car.php');
    xhr.send();


});