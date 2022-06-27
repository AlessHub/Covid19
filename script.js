async function test() {
    const config = {
        headers: {
          "Accept": "application/json"
        }
      }
    const res = await fetch('https://disease.sh/v3/covid-19/all', config);
    const result = await res.json();
    console.log(result);
    stat1.innerHTML = result.active.stat1
  }

test()