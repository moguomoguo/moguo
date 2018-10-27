document.addEventListener('DOMContentLoaded', () => {
    let username = document.querySelector('#username');
    let password = document.querySelector('#password');
    let btnLogin = document.querySelector('#btnLogin');

    let statusCode = [200, 304];

    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (statusCode.indexOf(xhr.status) >= 0) {
            let res = xhr.responseText;

            if (res == 'success') {
                alert('登陆成功');
                location.href = '../index.html';
            } else {
                alert('用户名或密码错误');
            }
        }
    }

    btnLogin.onclick = function () {
        let _username = username.value;
        let _password = password.value;

        xhr.open('get', `../api/login.php?username=${_username}&password=${_password}`, true);
        xhr.send();
    }

    var code = document.getElementById('code');
    var showCode = document.getElementById('showCode');


    createCode();

    // 点击更换验证码
    showCode.onclick = function () {
        createCode();
    }

    function createCode() {
        // 显示4为随机验证码
        // 字符串拼接
        var mycode = '';
        for (var i = 0; i < 6; i++) {
            mycode += parseInt(Math.random() * 10);
        }

        showCode.innerHTML = mycode;
    }

})