$(document).ready(function(){
  $("#form0ne").submit(function(event){

    const input = $("input#input1").val();

    let array = input.split('');
    let newArray = [];
    
    array.forEach(function(element) {
      if (element === "a" || element === "e" || element === "i" || element === "o" || element === "u"){
        element = "-";
        newArray.push(element);
      } else {
        newArray.push(element);
      }
    });
    alert(newArray.join(''));
  });
});