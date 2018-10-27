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

	let goodslist = document.querySelector('#goodslist');
	let xhr = new XMLHttpRequest();
	xhr.onreadystatechange = () => {
		if (xhr.readyState === 4) {
			let data = JSON.parse(xhr.responseText);
			let ul = document.createElement('ul');
			ul.innerHTML = data.map(goods => {
				return `<li data-id="${goods.id}">
							<p class="good_check"><input type="checkbox" name="good" value="" /></p>
                            <img src="${goods.imgurl}"/>
                            <h4>${goods.title}</h4>
                            <p class="good_price fl"><span>${(goods.price * goods.off).toFixed(2)}</span></p>
                            <p class="num">
                                <span class="cutnum fl">-</span>
                                <input type="text" value="1" class="fl nownum">
                                <span class="addnum fl">+</span>
                            </p>
                            <p class="good_total">${(goods.price * goods.off).toFixed(2)}</p>
                            <p class="good_del"><a href="javascript:">删除</a></p>
                        </li>`

			}).join('');
			goodslist.innerHTML = '';
			goodslist.appendChild(ul);
		}
	}
	xhr.open('get', '../api/car.php');
	xhr.send();

	$('#goodslist').on('click', '.addnum', function () {
		var val = $(this).prev().val();
		val++;
		if (val >= 100) {
			val = 100;
		}
		$(this).prev().val(val);
		price($(this));
		var arr = checknum();
		allnum(arr);
		allprice(arr);
	});

	//减数量
	$('#goodslist').on('click', '.cutnum', function () {
		var val = $(this).next().val();
		val--;
		if (val <= 1) {
			val = 1;
		}
		$(this).next().val(val);
		price($(this));
		var arr = checknum();
		allnum(arr);
		allprice(arr);
	});

	//小计
	function price(now) {
		var pri = now.parent().prev().text();
		pri = $.trim(pri);
		var num = now.parent().find('input').val();
		var all = pri * num;
		now.parent().next().html(all.toFixed(2));
	}

	//删除单行
	$('#goodslist').on('click', '.good_del', function () {
		var mes = confirm('您确定要删除该行吗？');
		console.log(mes);
		if (mes) {
			$(this).parent().remove();
		}
		update();
		var arr = checknum();
		allnum(arr);
		allprice(arr);
	});

	function update() {
		if ($('.addnum').size() == 0) {
			$('#del').remove();
		}
	}

	//全选
	var ischecked = true;
	$('#allchecked').on('click', function () {

		//prop() 添加属性(行为的)  attr（）添加属性 
		if (ischecked) {
			$('#allchecked input').prop('checked', 'checked');
			$('.good_check input').prop('checked', 'checked');
		} else {
			$('#allchecked input').removeAttr('checked');
			$('.good_check input').removeAttr('checked');
		}
		ischecked = !ischecked;
		var arr = checknum();
		//总数量
		allnum(arr);
		//总价格
		allprice(arr);
	});

	//全删
	$('#delall').on('click', 'a', function () {
		var arr = checknum();

		var mes = confirm('您确定要删除多行吗？');
		if (mes) {
			for (var i = arr.length - 1; i >= 0; i--) {
				$('.good_check').eq(arr[i]).parent().remove();
			}
			update();
		}
		var arr = checknum();
		allnum(arr);
		allprice(arr);
	});

	//勾选的数量
	function checknum() {
		var arr = [];
		var le = $('.good_check input').size();
		for (var i = 0; i < le; i++) {
			if ($('.good_check input').eq(i).prop('checked')) {
				arr.push(i);
			}
		}
		return arr;
	}

	//全选补充
	$('#goodslist').on('click', '.good_check', function () {
		var arr = checknum(); //被勾选的
		if (arr.length == $('.good_check').size()) {
			$('#allchecked input').prop('checked', 'checked');
		} else {
			$('#allchecked input').removeAttr('checked');
		}

		//总数量
		allnum(arr);
		//总价格
		allprice(arr);
	});

	//数量
	function allnum(arr) {
		var num = 0;
		for (var i = 0; i < arr.length; i++) {
			num += parseInt($('.nownum').eq(arr[i]).val());
		}
		$('.allnum').html(num);
	}

	function allprice(arr) {
		var price = 0;
		for (var i = 0; i < arr.length; i++) {
			var nowpri = $('.good_total').eq(arr[i]).text();
			nowpri = $.trim(nowpri);
			price = nowpri * 1 + price * 1;
		}
		$('.totalprice').html(price.toFixed(2));
	}

	function getQueryString(name) {
		var result = window.location.search.match(new RegExp("[\?\&]" + name + "=([^\&]+)", "i"));
		if (result == null || result.length < 1) {
			return "";
		}
		return result[1];
	}

	var goodscookie = Cookie.get('goodscookie');
	// 判断cookie
	// goodscookie = JSON.parse(goodscookie);
	var str = Cookie.get('goodscookie');
	console.log(str)

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