$().ready(function () {
    $("#form1").validate({
        debug: true,
        rules: {
            registname: {
                required:true,
                minlength:2,
                maxlength:8,
            },
            password: {
                required: true,
                checkPassword: true,
            },
            repassword: {
                required: true,
                equalTo: "#password",
            },
            email: {
                required: true,
                email: true,
            },
            pase: {
                maxlength: 200,
            },
            phone: {
                checkPhone: true,
            }
        },
        messages: {
            registname: {
                required: "*用户名不能为空",
                minlength: "*不能少于2个字符",
                maxlength: "*不能超过8个字符",
            },
            password: {
                required: "*请输入密码",
            },
            repassword: {
                required: "*请再次确认密码",
                equalTo: "*两次输入的密码不一致",
            },
            email: {
                required: "*请输入邮箱",
                email: "*请输入正确的邮箱",
            },
            pase: {
                maxlength: "*不能超过200个字",
            }
        },
        //当未通过验证的元素获得焦点时，移除错误提示
        focusCleanup:true, 
    });
    //自定义正则表达式
    $.validator.addMethod("checkPassword", function (value, element, params) {
        var checkPassword = /^\w{6,16}$/;
        return this.optional(element) || (checkPassword.test(value));
    }, "*请输入6-16位英文字母、数字和下画线");
    $.validator.addMethod("checkPhone", function (value, element, params) {
        var checkPhone = /^1\d{10}$/;
        return this.optional(element) || (checkPhone.test(value));
    }, "*请输入11位的手机号码");
});