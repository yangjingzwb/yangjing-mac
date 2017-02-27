paymentApp.module("encypt", function(encypt, paymentApp, Backbone, Marionette, $, _) {

    //生成随机密钥
    encypt.generateMixed = function() {
        var num = "";
        for (var i = 0; i < 32; i++) {
            var id = Math.floor(Math.random() * 10);
            num += id;
        }
        return num;
    };

    //
    encypt.generateMixedForCA = function() {
        var num = "";
        for (var i = 0; i < 16; i++) {
            var id = Math.floor(Math.random() * 10);
            num += id;
        }
        return num;
    };

    //用公钥对私钥RSA加密
    encypt.h5CommonRsa = function(publicKey, randomKey) {
        //var num = this.generateMixed();
        var RSAUtils = new JSEncrypt();
        RSAUtils.setPublicKey(publicKey);
        var ekey = RSAUtils.encrypt(randomKey);
        return ekey;
    };

    //AES加密
    encypt.AES_Encode = function(plain_text, key) {
        GibberishAES.size(256);
        var edata = GibberishAES.aesEncrypt(plain_text, key);
        return edata;
    };

    //AES加密
    encypt.AES_EncodeForCA = function(plain_text, key) {
        GibberishAES.size(128);
        var edata = GibberishAES.aesEncrypt(plain_text, key);
        return edata;
    };


    //MD5加密
    encypt.h5MD5 = function(plain_text) {
        var sign = CryptoJS.MD5(plain_text).toString().toUpperCase();
        return sign;
    };
});
