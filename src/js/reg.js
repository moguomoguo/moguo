document.addEventListener('DOMContentLoaded', () => {
    let username = document.querySelector('#username');
    let password = document.querySelector('#password');
    let btnReg = document.querySelector('.btnReg');

    let statusCode = [200, 304];


    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (statusCode.indexOf(xhr.status) >= 0) {
            let res = xhr.responseText;

            let formGroup = username.parentNode;
            let txt = formGroup.querySelector('.help-block');
            let icon = formGroup.querySelector('.form-control-feedback');

            if (res === 'no') {
                formGroup.classList.remove('has-success');
                icon.classList.remove('sr-only', 'glyphicon-ok');
                icon.classList.add('glyphicon-remove');
                formGroup.classList.add('has-error', 'has-feedback');
                txt.innerText = '已存在';
            } else if (res === 'yes') {
                formGroup.classList.remove('has-error');
                icon.classList.remove('sr-only', 'glyphicon-remove');
                icon.classList.add('glyphicon-ok');
                formGroup.classList.add('has-success', 'has-feedback');
                txt.innerText = '';
            }

        }
    }

    // 检测用户是否被占用
    username.onblur = () => {
        xhr.open('get', '../api/check_user.php?username=' + username.value, true);
        xhr.send();
    }

    let xhr_reg = new XMLHttpRequest();
    xhr_reg.onload = function () {
        if (statusCode.indexOf(xhr_reg.status) >= 0) {
            let res = xhr_reg.responseText;
            if (res === 'success') {
                alert('注册成功');
                location.href = '../html/login.html';
            } else {
                alert('注册失败');
            }
        }
    }

    // 注册
    btnReg.onclick = function () {
        // 获取用户名，密码
        let _username = username.value;
        var _password = password.value;

        xhr_reg.open('get', `../api/reg.php?username=${_username}&password=${_password}`, true);
        xhr_reg.send();
    }


    var code = document.getElementById('code');
    var showCode = document.getElementById('showCode');
    var btnLogin = document.getElementById('btnLogin');

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