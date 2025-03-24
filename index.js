
document.getElementById("form").addEventListener("submit", function(e){
    e.preventDefault()
    const color = document.getElementById("farbauswahl").value
    const mode = document.getElementById("modeAuswahl").value

    fetch(`https://www.thecolorapi.com/scheme?hex=${color.replace("#","")}&format=json&mode=${mode}&count=5`)
    .then(res => res.json())
    .then(data => {
        
        let html = ""
        let hexHTML =""
        
        for (let spalteFarbe of data.colors){
            console.log (spalteFarbe.hex.value)
            html += `
               <div style="background-color:${spalteFarbe.hex.value};flex:1" > </div>
            `
            hexHTML += ` 
            <div style="flex:1" > ${spalteFarbe.hex.value} </div>
            `
        }
        document.getElementById("colors").innerHTML = html
        document.getElementById("hexcolors").innerHTML = hexHTML
    })
    
})