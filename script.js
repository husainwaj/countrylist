var get_ctry = document.getElementById("get_ctry");
var search = document.getElementById("search");
var div_main = document.getElementById("div_main");
var search_searchbox = document.getElementById("search_searchbox");

function country() {
  fetch(`https://restcountries.com/v2/all`)
    .then(res => res.json())
    .then(data => display(data))
}

get_ctry.addEventListener('click', fetchCtry);
function fetchCtry() {
  div_main.innerHTML = ""
  fetch(`https://restcountries.com/v2/name/${search.value}`)
    .then(res => res.json())
    .then(data => display(data))
}

function display(data) {
  data.forEach(ctry => {
    var divx = document.createElement("div");
    divx.style.width = '40rem'
    divx.className = "card center";
    divx.id = "divx"
    divx.innerHTML = `
    <div class="row">
  <div class="col-sm-4">
    <div >
      <div>
      <img src="${ctry.flag}" class="img" alt="...">
      </div>
    </div>
  </div>
  <div class="col-sm-8">
    <div>
      <div class = "padding">
      <b><h4>${ctry.name}</h4><b>
      <h6>Currency: ${ctry.currencies.map((ele) => { return ele.name })}</h6>
      <h6>Current date and time: ${ctry.timezones}</h6>
      <a href="https://www.google.com/maps/place/${ctry.name}" target="_blank"><button class="btnx "><b>show map</b></button></a>
      <a href="detail.html?Country_ID=${ctry.alpha3Code}" target="_blank"><button class="btny"><b>details</b></button></a>
      </div>
    </div>
  </div>
</div>`
    div_main.appendChild(divx);
  });
}
