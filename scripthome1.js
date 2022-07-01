
const url = 'https://disease.sh/v3/covid-19/countries/spain?strict=true';

fetch(url)
.then(response => response.json())
.then(data => {
  let casos = document.getElementById('cyfer')
  casos.innerHTML = `<p>${data.cases}</p>`
  console.log(data)

  let activos = document.getElementById('cyferup')
  activos.innerHTML = `<p>${data.active}</p>`
  console.log(data)

  let recuperados = document.getElementById('cyferdown')
  recuperados.innerHTML = `<p>${data.recovered}</p>`
  console.log(data)

});
