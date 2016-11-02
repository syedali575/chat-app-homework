(function(){

window.chat = window.chat || {};

"use strict";

var token;
var uname;


window.chat.listenForMessages(function messageHandler(data) {


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

        .ajax({
          url: "/chat",
          method: "POST",
          data: JSON.stringify({ username: uname}),
          headers: {
          Authorization: token,
          "Content-Type": "application/json"
          }
        });
    });

















})();
