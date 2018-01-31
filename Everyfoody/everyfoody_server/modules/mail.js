var nodemailer = require('nodemailer');

module.exports.transport = nodemailer.createTransport({  
    service: 'gmail',
    auth: {
        user: 'email',
        pass: 'password'
    }
});

module.exports.option = {  
    from: 'sender email',
    to: 'reciever email',
    subject: '에브리푸디 사업자 인증요청',
    html:''
};


module.exports.html1 = '<!DOCTYPE html><html><head><meta charset="utf-8"><title></title></head><body><div style="margin : 20px auto; border: 1px solid #cccccc; width:500px;">'+
		'<div class="title" style="font-size: 30px; text-align: center; margin-top:15px">'+
		'사업자 등록 인증 메일입니다.</div><br><img src="';
module.exports.html2 = '"/><div style="text-align: center">인증을 받으시려면 : host_address/admin/confirm/';
module.exports.html3 =	'<br></div><div style="text-align: center; margin-bottom: 15px;">'+
		'인증을 거절하시려면 : host_address/admin/reject/';
module.exports.html4 = '</div></div></body></html>'

