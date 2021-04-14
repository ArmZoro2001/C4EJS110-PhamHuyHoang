const result = fetch('https://pokeapi.co/api/v2/pokemon/pikachu/?fbclid=IwAR122rOzfpHrNSrW6oRojt6p0lYgIziBBmTjEmU4J6au1KymUg0AJu9dJS8');
console.log(result);

async function load() {
    const conn = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu/?fbclid=IwAR122rOzfpHrNSrW6oRojt6p0lYgIziBBmTjEmU4J6au1KymUg0AJu9dJS8');
    const data = await conn.json();
    console.log(data.moves[0].move.name);
    let x = document.getElementById('a');
    for(let i in data.moves[0].move){
        x.insertAdjacentHTML('beforeend',`<p>${data.moves[0].move.name}</p>`)
    }
    a.innerHTML = data.moves[0].move.name;
  }
load();