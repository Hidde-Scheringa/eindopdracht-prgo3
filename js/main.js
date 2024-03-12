window.addEventListener('load', init);

const webserviceUrl = 'http://localhost/programeren%203/eindopdracht/webservice/'
const imageList = ['ahsoka tano', 'boba fett', 'cad bane', 'darth vader', 'din djarin', 'kanan jarrus', 'rex', 'sabine', 'thrawn', 'yularen'];
const minifigDetails = {
    'ahsoka tano': {
        name: 'Ahsoka Tano',
        religion: 'Jedi',
        race: 'Togruta',
        profession: 'Rebel',
        set: '75362 T-6 shuttle'
    },
    'boba fett': {
        name: 'Boba Fett',
        religion: 'Mandalorian',
        race: 'Mandalorian',
        profession: 'Bounty hunter',
        set: '10123 Cloud city'
    },
    'cad bane': {
        name: 'Cad Bane',
        religion: 'None',
        race: 'Duros',
        profession: 'Bounty hunter',
        set: '75323 The Justifier'
    },

    'darth vader': {
        name: 'Darth Vader',
        religion: 'Sith lord',
        race: 'Human',
        profession: 'Part of the Empire',
        set: '75352 Emperors Throne Room'
    },

    'din djarin': {
        name: 'Din Djarin',
        religion: 'Mandalorian',
        race: 'Mandalorian',
        profession: 'Father and bounty hunter',
        set: '75331 UCS Razor Crest'
    },

    'kanan jarrus': {
        name: 'Kanan Jarrus',
        religion: 'Jedi',
        race: 'Human',
        profession: 'Rebel',
        set: '75141 Kanans speeder bike'
    },

    'rex': {
        name: 'Rex',
        religion: 'None',
        race: 'Clone',
        profession: 'Soldier',
        set: '75367 UCS Venator'
    },

    'sabine': {
        name: 'Sabine Wren',
        religion: 'Mandalorian',
        race: 'Mandalorian',
        profession: 'Rebel',
        set: '75362 T-6 shuttle'
    },

    'thrawn': {
        name: 'Mitth raw naruodo also know as Thrawn',
        religion: 'none',
        race: 'Chiss',
        profession: 'Grand admiral of the Galactic Empire',
        set: '75170 The Phantom'
    },

    'yularen': {
        name: 'wullf Yularen',
        religion: 'none',
        race: 'Human',
        profession: 'admiral for the clone army and Galactic Empire',
        set: '75367 UCS Venator'
    }
};

function imgCreator() {
    const imgDiv = document.getElementById("imgContainer");

    for (let i = 0; i < imageList.length; i++) {
        const minifigImages = document.createElement("div");
        const minifigImg = document.createElement("img");
        const favoriteButton = document.createElement('button');
        const starIcon = document.createElement('div')
        starIcon.classList.add('star-icon')
        starIcon.innerHTML = '★'
        
        favoriteButton.innerHTML = 'Favoriet';
        favoriteButton.classList.add('favorite-button')
        favoriteButton.id = 'favoriteButton' + i;
        minifigImages.classList.add("minifig-container");
        
        minifigImg.classList.add("minifig-img");
        minifigImg.src = "./img/" + imageList[i] + ".png"
        minifigImg.setAttribute('minifig-info', imageList[i]);

        favoriteButton.onclick = function(){
            if (minifigImages.contains(starIcon)) {
                minifigImages.removeChild(starIcon);
            } else {
                minifigImages.insertBefore(starIcon, minifigImg);
            };
        };
        minifigImages.appendChild(minifigImg);
        minifigImages.appendChild(favoriteButton)
        imgDiv.appendChild(minifigImages);
    };
};

function imgClickHandler() {
    const minifigImgs = document.querySelectorAll('.minifig-img');
    minifigImgs.forEach(minifigImg => {
    minifigImg.addEventListener('click', function(e){ 
        minifigDetailPopUp(e)
    });  
});   
}

function minifigDetailPopUp(e) {
    let popUp = document.getElementById('minifig-detail')
    let popUpContent = document.getElementById('modal-content')
    popUpContent.innerHTML = ''
    let minifigData = e.target.getAttribute('minifig-info');
    let minifigInfo = minifigDetails[minifigData]

    minifigName = document.createElement('h1')
    minifigName.innerHTML = `${minifigInfo.name}.`;

    let minifigImg = document.createElement('img')
    minifigImg.src = `./img/${minifigData}.png`;

    popUpContent.appendChild(minifigName)
    popUpContent.appendChild(minifigImg)

    popUp.showModal()

    const closeButton = document.getElementById('closeButton')
    closeButton.addEventListener('click', function () {
        popUp.close()
    });
}


function init() {
    imgCreator()
    imgClickHandler()
}