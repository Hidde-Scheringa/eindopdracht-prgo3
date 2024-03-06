const imageList = ['ahsoka tano', 'boba fett', 'cad bane', 'darth vader','din djarin','kanan jarrus','rex','sabine','thrawn','yularen'];
let ahsoka = {
    name: 'Ahsoka Tano',
    religion: 'Jedi',
    Set: '75362 T-6 shuttle'
}

let bobaFett = {
    name: 'Boba Fett',
    religion: 'Mandalorian',
    profession: 'Bounty hunter',
    set: '10123 Cloud city'
}

let cadBane = {
    name:'Cad bane',
    religion:'None',
    profession: 'Bounty hunter',
    set: '75323 The Justifier'
}

let darthVader = {
    name: 'Darth Vader',
    religion: 'Sith lord',
    set: '75352 Emperors Throne Room'
}

let dindjarin = {
    name:'Din Djarin',
    religion: 'Mandolorian',
}

const imgDiv = document.getElementById("imgContainer");

for (let i = 0; i < imageList.length; i++) {
    const minifigImages = document.createElement("div")
    const minifigImg = document.createElement("img")
    minifigImg.src = "./img/" + imageList[i] + ".png"
    minifigImages.appendChild(minifigImg);
    imgDiv.appendChild(minifigImages);
}