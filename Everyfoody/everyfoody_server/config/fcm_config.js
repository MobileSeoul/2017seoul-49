var FCM = require('fcm-push');
var serverKey = 'fcmKey';
module.exports  = new FCM(serverKey);