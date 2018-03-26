$(document).ready(function() {

  $("#formOne").submit(function(event) {
    var favoriteThings = ["#favFood", "#favoriteVacation", "#favoriteColor"];
    var vacationInput = $("input#favoriteVacation").val();
    var colorInput = $("input#favoriteColor").val();
    var foodInput = $("input#favFood").val();
    // favoriteThings.forEach(function(blank) {
    //   var userInput = $("input" + blank).val();
    //   $("." + blank).text(userInput);
    // });
    console.log(favoriteThings);
          // favoriteColor.push(Color);
    // form = new Array();
    event.preventDefault();

    // append
    $(".food-result").append(foodInput);
    $(".vacation-result").append(vacationInput);
    $(".color-result").append(colorInput);

    $(".result").show();

  });

});

//   $(formOne).submit(function() {
//     var favFoods = $("#favFood").val();
//     var favoriteVacation = $("#favoriteVacation").val();
//     var favoriteColor = $("#favoriteColor").val();
//     function pushToArrays(favFoods, favoriteVacation, favoriteColor);{
//       favFoods.push(Food);
//       favoriteVacation.push(Vacation);

//
//   });
// });
