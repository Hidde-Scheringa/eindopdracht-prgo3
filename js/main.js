const imageList = ['ahsoka tano', 'boba fett', 'cad bane', 'darth vader','din djarin','kanan jarrus','rex','sabine','thrawn','yularen'];

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
        religion: 'Mandolorian',
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
        religion: 'Bounty hunter',
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


const imgDiv = document.getElementById("imgContainer");

for (let i = 0; i < imageList.length; i++) {
    const minifigImages = document.createElement("div");
    const minifigImg = document.createElement("img");
    
    minifigImg.src = "./img/" + imageList[i] + ".png"
    
    minifigImg.setAttribute('minifig-info', imageList[i]);

    minifigImg.addEventListener('click', function () {
        const minifigNames = this.getAttribute('minifig-info');
        const minifigInfo = minifigDetails[minifigNames];
        if (minifigInfo) {
            alert(
            `Name: ${minifigInfo.name},
            Religion: ${minifigInfo.religion},
            Race: ${minifigInfo.race},
            Profession: ${minifigInfo.profession},
            Set: ${minifigInfo.set}`)
        }
    });

    minifigImages.appendChild(minifigImg);
    imgDiv.appendChild(minifigImages);
}