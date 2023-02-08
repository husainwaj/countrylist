let division = document.getElementById("division")
let neighbour = document.getElementById("neighbour")
onload = view;
function view(Country_ID) {

  fetch(`https://restcountries.com/v2/all`)
    .then(res => res.json())
    .then(data => display_detail(data))
}
function display_detail(data) {

  function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }
  let exp = getParameterByName("Country_ID")

  data.forEach(ctry => {

    var divx = document.createElement("div");
    if (ctry.alpha3Code == exp) {

      divx.style.width = '60rem'
      divx.className = "container";
      // divx.id = "divx"
      divx.innerHTML = `
        <div>
        <h3>${ctry.name}<h3>
        </div>
        <div class="row">
          <div class="col-sm-6">
            <img src="${ctry.flag}" class="img_flag"; alt="...">
          </div>
          
          <div class="col-sm-6">
          <b>
            <p>Native Name: ${ctry.name}<p>
            <p>Capital: ${ctry.capital}</p>
            <p>Population: ${ctry.population}</p>
            <p>Region: ${ctry.region}</p>
            <p>Sub-region: ${ctry.subregion}</p>
            <p>Area: ${ctry.nativeName}</p>
            <p>Country: ${ctry.nativeName}</p>
            <p>Languages: ${ctry.languages.map((x) => x.name)}</p>
            <p>Currencies: ${ctry.currencies.map((cur) => cur.name)}</p>
            <p>Timezones: ${ctry.timezones}</p></b>
          </div>
          
        </div>`
      division.appendChild(divx);
      const abc = ctry.borders;
      data.forEach(ctry => {
        for (i = 0; i < abc.length; i = i + 1) {
          if (abc[i] == ctry.alpha3Code) {
            img = document.createElement("img");
            img.src = ctry.flag;
            img.className = "neighbour_img"
            neighbour.appendChild(img);
          }
        }
      })

    }
  });
}
