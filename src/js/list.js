$(document).ready(function () {

    let goodslist = document.querySelector('#goodslist');
    let toobar = document.querySelector('.toobar');

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {

        if (xhr.readyState === 4) {
            let data = JSON.parse(xhr.responseText);

            let ul = document.createElement('ul');
            ul.innerHTML = data.map(goods => {
                return `<a href="#"><li data-id="${goods.id}">
                            <img src="${goods.imgurl}"/>
                            <h4>${goods.title}</h4>
                            <p class="price">原价：<del>${goods.price}</del></p>
                            <p class="new">现价：<span>${(goods.price * goods.off).toFixed(2)}</span></p>
                        </li></a>`

            }).join('');

            goodslist.innerHTML = '';
            goodslist.appendChild(ul);
        }
    }

    xhr.open('get', '../api/list.php');

    xhr.send();

    let desc = false;
    toobar.onclick = e => {
        // 价格排序
        if (e.target.className === 'sort-price') {
            desc = !desc;
            xhr.open('get', '../api/list.php?sort=price' + (desc ? '&desc' : ''), true);
            xhr.send();
        }
    }

    //传参到详情页    
    goodslist.onclick = function (e) {
        if (e.target.parentNode.tagName.toLowerCase() == 'li') {
            var id = e.target.parentNode.getAttribute('data-id');
            console.log(id);
        }
        location.href = '../html/goods.html?id=' + id;
    }




});