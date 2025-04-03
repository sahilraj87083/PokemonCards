
let card = document.getElementById("main")
let s = ""
let links = [
"https://i.pinimg.com/736x/2d/a3/e2/2da3e25b594272fadb7076899bcae1d6.jpg" ,
"https://i.pinimg.com/564x/f2/95/76/f295769d9bd3c34ffc552e837f5304ae.jpg ",
"https://purepng.com/public/uploads/large/purepng.com-pokemonpokemonpocket-monsterspokemon-franchisefictional-speciesone-pokemonmany-pokemonone-pikachu-1701527786846qmowo.png",
"https://static.printler.com/cache/e/b/b/0/c/4/ebb0c4fd8a1a6f49bfa237815c6872bac9ce28e2.jpg" ,
"https://static.pokemonpets.com/images/monsters-images-800-800/6172-Shiny-Pichu-Spikyeared.webp" ,
"https://m.media-amazon.com/images/I/51-TwoVXK9L.jpg" ,
"https://img.pokemondb.net/artwork/large/eevee.jpg" ,
"https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-scarlet-violet/3/30/Koraidon-2x.png?width=325",
"https://e7.pngegg.com/pngimages/97/276/png-clipart-pokemon-eevee-illustration-pokemon-go-pokemon-x-and-y-pikachu-eevee-pokemon-mammal-vertebrate-thumbnail.png" ];

for(let i = 1; i <= 78; i++){
    let index = Math.floor(Math.random()*links.length)
    s += `<div class="cards"><img src = ${links[index]} alt=""></div>`
}
card.innerHTML = s;