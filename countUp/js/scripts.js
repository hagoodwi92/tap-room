$(document).ready(function() {
  $("#form0ne").submit(function(event) {
  event.preventDefault();
  let number1 = parseInt($("input#number1").val());
  let number2 = parseInt($("input#number2").val());
  
  for (let i = 0; i <= number1; i += number2) {
    alert(i);
  }

  });
});