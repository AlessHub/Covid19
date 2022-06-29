// async function test() {
//     const config = {
//         headers: {
//           "Accept": "application/json"
//         }
//       }
//     const res = await fetch('https://disease.sh/v3/covid-19/all', config);
//     const result = await res.json();
//     bandera(result);
//   }

// test()

// const bandera = (result) => {
//   const cardHTML = `
//   <div class="datos-box">
//   <h3 class="cypher" id="cyfer">${result.cases}</h3>
//   <div class="datos-box-numbers">
//       <img src="images/red-down.jpg" alt="" class="red-down">
//       <h3 class="cypher-up">${result.active}</h3>
//       <h3 class="cypher-down">${result.recovered}</h3>

//   </div>
// </div>
// `;
// main.innerHTML = cardHTML;
// }
const url = 'https://disease.sh/v3/covid-19/countries/{spain}';

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
