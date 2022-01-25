$(function () {
  var id = "";
  var text = "";
  var numItems = $("section").length;
  var classList = $("section");
  //console.log(classList);
  //console.log("hey");

  for (var i = 0; i < numItems; i++) {
    id = classList[i].id;
    console.log(id);
    var navHeaderText = `<span><a class="nav-link" href="#${id}">${id}</a></span> `;
    //console.log(navHeaderText);
    $("#navbar").append(`${navHeaderText}`);
  }
});
