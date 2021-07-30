const borderRadius = document.querySelector(".border-radius")
const box = document.querySelector(".box")
const offsetX = document.querySelector(".offsetX")
const offsetY = document.querySelector(".offsetY")
const blur = document.querySelector(".blur")
const spread = document.querySelector(".spread")
const shadowColor = document.querySelector(".shadow-color")
const boxColor = document.querySelector(".color")
const out = document.querySelector('.out')
const outSet = document.querySelector('.outset')
const inSet = document.querySelector('.inset')



//onchange
//oninput

borderRadius.oninput = cssGenerator
offsetX.oninput = cssGenerator
offsetY.oninput = cssGenerator
blur.oninput = cssGenerator
spread.oninput = cssGenerator
shadowColor.oninput = cssGenerator
boxColor.oninput = cssGenerator
outSet.oninput = cssGenerator
inSet.oninput = cssGenerator


function cssGenerator() {
    console.log(outSet.checked)
    console.log(borderRadius.value)
    box.style.borderRadius = borderRadius.value + "%"
    box.style.boxShadow = `${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${shadowColor.value}`

    out.innerHTML = `box-shadow:${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${shadowColor.value}; inset;<br>`
    out.innerHTML += `-webkit-box-shadow:${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${shadowColor.value}<br>`
    out.innerHTML += `-mox-box-shadow:${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${shadowColor.value}`
}
cssGenerator()
