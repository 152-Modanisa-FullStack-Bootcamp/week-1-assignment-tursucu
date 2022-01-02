import "./styles.css";

//Show more button change style
document.getElementById('show-more').onclick = function changeStyle() {
  document.getElementById('show-more').style = "display: none";
  document.getElementById('text').style = "max-height: none";
}