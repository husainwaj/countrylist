var get_ctry = document.getElementById("get_ctry");
var search = document.getElementById("search");
var div_main = document.getElementById("div_main");
var search_searchbox = document.getElementById("search_searchbox");



function country() {
  fetch(`https://restcountries.com/v2/all`)
    .then(res => res.json())
    .then(data => display(data))
}
// async function country(){
// 	const response = await fetch('https://restcountries.eu/rest/v2/all');
// 	var data = await response.json();
// 	display(data);}

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
    let str="";
		for (let i of data){
			let time = dateTime(i.timezones[0]);
		    str +=
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
      <h6>Current date and time: ${time}</h6>
      <a href="https://www.google.com/maps/place/${ctry.name}" target="_blank"><button class="btnx "><b>Show Map</b></button></a>
      <a href="detail.html?Country_ID=${ctry.alpha3Code}" target="_blank"><button class="btny"><b>Details</b></button></a>
      </div>
    </div>
  </div>
</div>`
    div_main.appendChild(divx);
}});
 

function dateTime(timezone){
	let offset1 = timezone.split("C");
	let offset2 = offset1[1].split(":");
	let offset3=parseInt(offset2[0]);
	let offset4 =parseInt(offset2[1]);
	let offset = offset3+(offset4/60);
	let x = new Date();
	let month = x.getMonth();
	let months =["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	let day = x.getDate();
	let year = x.getFullYear();
	let str1 = ""
	let str=""
	let str2= ""
	str1= day+" " +months[month] + " "+ year;
	let localTime = x.getTime();
	let localOffset = x.getTimezoneOffset() * 60000;
	let utc = localTime + localOffset;
	let nd = new Date(utc + (3600000*offset));
	let h = nd.getHours();
	let m = nd.getMinutes();
	let h1="";
	let m1 ="";
	if(h<10){
		h1=h1+"0"+h.toString();
	}
	if(m<10){
		m1=m1+"0"+m.toString();
	}
	if(h<10){
		if(m<10){
			str2 = h1+":"+m1;
		}
		else{
			str2 = h1+":"+m;
		}
	}
	else{
		if(m<10){
			str2 = h+":"+m1;
		}
		else{
			str2 = h+":"+m;
		}
	}
	str=str1+" and "+str2;
	console.log(str);
	
	return(str)
}

}
