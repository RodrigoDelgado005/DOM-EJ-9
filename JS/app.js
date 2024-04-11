function colorParrafo() {
    let parrafo = document.getElementsByTagName('p')
    for (let f = 0; f < parrafo.length; f++)
        parrafo[f].style.color = '#f00'
}