const canvasZ = document.getElementById("main-z")
let colorCode = document.getElementById("color-input")
console.log(colorCode.value)

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
            pixel.id = `pixel-${pixelXNum}-${pixelZNum}`
            row.appendChild(pixel)
        }
    }

    let pix = document.querySelectorAll(".pixel")
    pix.forEach((pixel) =>
        pixel.addEventListener("click", () => {
            console.log(1)
            let colorCode = document.getElementById("color-input")
            pixel.style.backgroundColor = colorCode.value
            pixel.style.borderColor = colorCode.value

        }))

})
