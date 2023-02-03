let btn=document.getElementById("btn");
let countryinp=document.getElementById("country-inp");
btn.addEventListener("click",()=>
{
    let countryName=countryinp.value;
    let finalURl= 'https://restcountries.com/v3.1/all'
   console.log(finalURl);
   fetch(finalURl).then((response)=> response.json())
   .then((data)=> {
    console.log(data);
   });
});
