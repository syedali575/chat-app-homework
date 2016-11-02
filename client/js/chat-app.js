(function(){

window.form = window.form || {};

"use strict";




$(".login")
  .on("submit", function initiate(event){
    event.preventDefault();
    // console.log("submit button working");

    var uname = $(".username").val();


    $.ajax({
      url: "/login",
      method: "POST",
      data: JSON.stringify({ username: uname }),
      headers: {
        "Content-Type": "application/json"
      },
    })

    .done(function handleSuccess(success){
      console.log("Worked");
    })

    .fail(function notWorking(xhr){
      console.log(xhr,"Unable to communicate");

    });


  });

})();
