<?php
/**
 * @return array
 */
function getMinifigs()
{
    return [
        [
            "id" => 1,
            "name" => "Darth Vader",
            "genre" => "The Original Triology",
        ],
        [
            "id" => 2,
            "name" => "Ahsoka Tano",
            "genre" => "Star Wars The Clone Wars",
        ],
        [
            "id" => 3,
            "name" => "Cad Bane",
            "genre" => "Star Wars The Clone Wars",
        ],
        [
            "id" => 4,
            "name" => "Cloud city Boba Fett",
            "genre" => "The Original Triology",
        ],
        [
            "id" => 5,
            "name" => "Phase 2 captain Rex",
            "genre" => "Star Wars The Clone Wars",
        ],

        [
            "id" => 6,
            "name" => "Kanan Jarrus",
            "genre" => "Star Wars Rebels",
        ],
        [
            "id" => 7,
            "name" => "Grand admiral Thrawn",
            "genre" => "Star Wars Rebels",
        ],
        [
            "id" => 8,
            "name" => "Admiral Yularen",
            "genre" => "Star Wars The Clone Wars",
        ],
        [
            "id" => 9,
            "name" => "Din Djarin",
            "genre" => "The Mandalorian",
        ],
        [
            "id" => 10,
            "name" => "Sabine",
            "genre" => "Star Wars Rebels",
        ]
    ];
}

/**
 * @param $id
 * @return mixed
 */
function getMinifigDetails($id)
{
    $tags = [
        1 => [
            'name' => 'Ahsoka Tano',
            'religion' => 'Jedi',
            'race' => 'Togruta',
            'profession' => 'Rebel',
            'set' => '75362 T-6 shuttle'
        ],
        2 => [
            'name' => 'Boba Fett',
            'religion' => 'Mandalorian',
            'race' => 'Mandalorian',
            'profession' => 'Bounty hunter',
            'set' => '10123 Cloud city'
        ],
        3 => [
            'name' => 'Cad Bane',
            'religion' => 'None',
            'race' => 'Duros',
            'profession' => 'Bounty hunter',
            'set' => '75323 The Justifier'
        ],
        4 => [
            'name' => 'Darth Vader',
            'religion' => 'Sith lord',
            'race' => 'Human',
            'profession' => 'Palpatines right hand',
            'set' => '75352 Emperors Throne Room'
        ],
        5 => [
            'name' => 'Din Djarin',
            'religion' => 'Mandalorian',
            'race' => 'Mandalorian',
            'profession' => 'Father and bounty hunter',
            'set' => '75331 UCS Razor Crest'
        ],
        6 => [
            'name' => 'Kanan Jarrus',
            'religion' => 'Jedi',
            'race' => 'Human',
            'profession' => 'Rebel',
            'set' => '75141 Kanans speeder bike'
        ],
        7 => [
            'name' => 'Rex',
            'religion' => 'None',
            'race' => 'Clone',
            'profession' => 'Soldier',
            'set' => '75367 UCS Venator'
        ],
        8 => [
            'name' => 'Sabine Wren',
            'religion' => 'Mandalorian',
            'race' => 'Mandalorian',
            'profession' => 'Rebel',
            'set' => '75362 T-6 shuttle'
        ],
        9 => [
            'name' => 'Mitth raw naruodo also know as Thrawn',
            'religion' => 'None',
            'race' => 'Chiss',
            'profession' => 'Grand admiral of the Galactic Empire',
            'set' => '75170 The Phantom'
        ],
        10 => [
            'name' => 'Wullf Yularen',
            'religion' => 'None',
            'race' => 'Human',
            'profession' => 'Admiral for the clone army and Galactic Empire',
            'set' => '75367 UCS Venator'
        ],
    ];

    return $tags[$id];
}