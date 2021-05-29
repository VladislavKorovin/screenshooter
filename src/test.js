//close window button
const {remote} = require('electron');
var win=remote.getCurrentWindow();
  function closeWindow(){
  window.close();
};
// upload
//test send file
// // ------------------Отправка---------------------------
var os = require("os");
$( "#submit" ).click( function() {
  let uemail = document.getElementById('email').value;
  let utitle = document.getElementById('title').value;
  let uftext = document.getElementById('fulltext').value;
  //OS info
  var hostname = os.hostname();
  var username = os.userInfo().username;
  var ifaces = os.networkInterfaces();
 var settings = {
   "url": "https://test-api-internal-op.apigee.lmru.tech/technical/tickets/v1/ticket",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "x-api-key": "pjYLXPzh00WefwTg7548VlTW2I88a4ml",
    "login": "API TEST",
    "password": "123",
    "Content-Type": "application/json",
    "Cookie": "NSC_ESNS=1f2cb4ec-6dbe-10b1-9678-0050569c6c6f_1590261177_0247682350_00000000009112106511"
  },
  "data": JSON.stringify({
    "Action": "Create",
    "Title": document.getElementById('title').value,
    "Description": document.getElementById('fulltext').value,
    "BP": "Корпоративные сервисы",
    "BS": "BPM Online",
    "ServiceItem": "Ошибка ITSM",
    "Contact": document.getElementById('email').value,
    "ContEmail": document.getElementById('email').value,
    "ContPhone": null,
    "TechDesc":"Имя пк: " + hostname + "<br/>Пользователь: " + username + "<br/>Тест. Поле может принимать html",
    "DopEmails": null,
    "ExternalNumber": "Номер внешней системы",
  }),
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
  return false;

});
// //-------------------------------------------
//Screenshot
$("#screentest").click( function() {
  var screenshot = require('desktop-screenshot');

  screenshot("screenshot.png", function(error, complete) {
      if(error)
          console.log("Screenshot failed", error);
      else
          console.log("Screenshot succeeded");
  });
});
