window.repo = "Pokabbie/pokeemerald-rogue/expansion"
window.checkUpdate = "5 ER"


fetch('https://raw.githubusercontent.com/ydarissep/dex-core/main/index.html').then(async response => {
	return response.text()
}).then(async rawHTMLText => {
	const parser = new DOMParser()
	const doc = parser.parseFromString(rawHTMLText, 'text/html')
    document.querySelector('html').innerHTML = doc.querySelector('html').innerHTML


    document.title = "ER Dex"
    document.getElementById("footerName").innerText = "Emerald Rogue\nYdarissep Pokedex"



    await fetch("https://raw.githubusercontent.com/ydarissep/dex-core/main/src/global.js").then(async response => {
        return response.text()
    }).then(async text => {
        await eval.call(window,text)
        document.getElementById("changelogMode").remove()
        document.getElementById("onlyShowChangedPokemon").remove()
    }).catch(error => {
        console.warn(error)
    })    

}).catch(error => {
	console.warn(error)
})


