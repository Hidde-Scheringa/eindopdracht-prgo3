<?php
/**
 * @return array
 */
function getDishes()
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
        ]

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
            "minifig" => "Darth Vader",
            "tags" => ['Sithlord', 'Star Wars']
        ],
        2 => [
            "minifig" => "Ahsoka Tano",
            "tags" => ['Jedi', 'Rebels', 'Clone Wars']
        ],
        3 => [
            "minifig" => "Cad bane",
            "tags" => ['Bounty hunter','Blue']
        ],
        4 => [
            "minifig" => "Cloud city Boba Fett",
            "tags" => ['Bounty hunter', 'Star Wars']
        ],
        5 => [
            "minifig" => "Phase 2 captain Rex",
            "tags" => ['Clone','Captain','501st']
        ],
        6 => [
            "minifig" => "Kanen Jarrus",
            "tags" => ['Jedi', 'Master','Father']
        ],
        7 => [
            "minifig" => "Grand admiral Thrawn",
            "tags" => ['Chiss', 'The empire']
        ],
        8 => [
            "minifig" => "Admiral Yularen",
            "tags" => ['Venator', 'The republic']
        ],
        9 => [
            "minifig" => "Din Djarin",
            "tags" => ['The Mandalorian', 'Father', 'Bounty hunter']
        ],
        10 => [
            "minifig" => "Sabine",
            "tags" => ['Rebel', 'Mandalorian']
        ],
    ];

    return $tags[$id];
}