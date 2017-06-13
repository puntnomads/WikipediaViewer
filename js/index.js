$(document).ready(function(){
window.onkeyup = keyup;
var inputSearchTerm;
function keyup(e) {
inputTextValue = e.target.value;
  if (e.keyCode == 13) {
var url ="https://en.wikipedia.org/w/api.php?action=opensearch&datatype=json&limit=10&search="+inputTextValue+"&callback=?";
for (var i = 0; i < 10; i++) {
    (function(i) {
      $.getJSON(url, function (data) {
$("#text_"+i).text(data[1][i]); $("#description_"+i).text(data[2][i]);
$("#url_"+i).attr("href", data[3][i]);
      });
    })(i);
}
  }
}
});
