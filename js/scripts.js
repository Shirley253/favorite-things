$(document).ready(function() {
  $(formOne).submit(function() {
    var favFoods = $("#favFood").val();
    var favoriteVacation = $("#favoriteVacation").val();
    var favoriteColor = $("#favoriteColor").val;
  })
})
function pushToArrays(favFoods, favoriteVacation, favoriteColor){
  favFoods.push(Food);
  favoriteVacation.push(Vacation);
  favoriteColor.push(Color);

  $("#formOne").submit(function(event) {
    var favoriteThings = ["#favFood", "#favoriteVacation", "#favoriteColor"];

    blanks.forEach(function(blank) {
      var userInput = $("input." + blank).val();
      console.log(userInput);
      $("." + blank).text(userInput).val();
    });
    $("#story").show();
    event.preventDefault();
  });
});

$(function()}
  $(".button").click(function() {
  // $("p").addClass(favoriteThings);
