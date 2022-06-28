async function getData() {
    const config = {
        headers: {
          "Accept": "application/json"
        }
      }
    const res = await fetch('https://disease.sh/v3/covid-19/all', config);
    const result = await res.json();
    console.log(result);
    console.log(result.active);
    createDataCard(result);
  }

getData()

// Poner html dentro de const

// const createDataCard = (result) => {
//   const cardHTML = `
//         <div class="container">
//           <section class="stats">
//               <span class="totalcase" id="stat1">Total Case ${result.cases}</span>
//               <span class="activecase">Active Case ${result.active}</span>
//               <span class="recoveredcase">Recovered Case ${result.recovered}</span>
//               <span class="deathcase">Death Case ${result.deaths}</span>
//           </section>
//         </div>
//       `;
//   main.innerHTML = cardHTML;
// };


// funcion para conseguir data de pais especifico

// async function getCountryData() {
//   const config = {
//     headers: {
//       "Accept": "application/json"
//     }
//   }
//   const res = await fetch('#', config);
//   const result = await res.json();
  
// }