const canvasZ = document.getElementById("main-z");  // Corrected the ID

document.getElementById("enterBtn").addEventListener("click", () => {
    let pixelX = parseInt(document.getElementById("z-ax").value)
    let pixelZ = parseInt(document.getElementById("x-ax").value)

    canvasZ.innerHTML = ""

    for (let pixelXNum = 0; pixelXNum < pixelX; pixelXNum++) {
        let row = document.createElement("div")
        row.classList.add("main-z")
        canvasZ.appendChild(row)

        for (let pixelZNum = 0; pixelZNum < pixelZ; pixelZNum++) {
            const pixel = document.createElement("div")
            pixel.classList.add("pixel")
            row.appendChild(pixel)
        }
    }
})