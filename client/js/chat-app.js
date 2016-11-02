(function(){

window.chat = window.chat || {};

"use strict";

var token;
var uname;
var message;


window.chat.listenForMessages(function messageHandler(data) {
// console.log(data.message);
$(".messages")
.append("<p>" + data.username + "</p>" + "<p>" + data.message + "</p>")
});


$(".login")
  .on("submit", function initiate(event){
    event.preventDefault();
    // console.log("submit button working");

    uname = $(".username").val();

    $.ajax({
      url: "/login",
      method: "POST",
      data: JSON.stringify({ username: uname }),
      headers: {
        "Content-Type": "application/json"
      },
    })
    .done(function handleSuccess(data){
      console.log("Worked", data);
      token = data.token;
    })

    .fail(function notWorking(xhr){
      console.log(xhr,"Unable to communicate");
    });
  });




  $(".send-message")
    .on("submit", function sendMsg(event) {
      event.preventDefault()

      message = $(".message").val();

        $.ajax({
          url: "/chat",
          method: "POST",
          data: JSON.stringify({ message: message}),
          headers: {
          Authorization: token,
          "Content-Type": "application/json"
          }
        })

        .done(function handleSuccess(data){
          console.log("Worked", data);
        })
        .fail(function notWorking(xhr){
          console.log(xhr,"Unable to communicate");
        });

    });

})();
