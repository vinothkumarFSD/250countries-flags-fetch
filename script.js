var container = document.createElement("div");
container.className = "container";
container.style.backgroundColor="black";
var row = document.createElement("div");
row.className = "row";
container.append(row);
var res = fetch("https://restcountries.com/v3.1/all");
res.then((data) => data.json()).then((data1) => foo(data1));
function foo(data1) {
  console.log(data1);
  for (var i = 0; i < data1.length; i++) {
    row.innerHTML += `<div class="col-md-4">
    <div class="card border-primary mb-3" style="max-width: 18rem;">
      <div class="card-header text-center">
        <h5 class="card-title">${data1[i].name.common}</h5>
      </div>
    <img src="${data1[i].flags.svg}" class="card-img-top" alt="...">
    <div class="card-body text-center">Capital:${data1[i].capital}</div>
    <div class="card-body text-center">Region:${data1[i].region}</div>
    <div class="card-body text-center">latlng:${data1[i].latlng}</div>
    <button type="button" class="btn btn-light">Click view</button>
  </div>
  
</div>`;
    document.body.append(container);

  }
}