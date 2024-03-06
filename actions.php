<?php
/**
 * @return array
 */
function getDishes()
{
    return [
        [
            "id" => 1,
            "name" => "Pizza",
            "kitchen" => "Italian",
        ],
        [
            "id" => 2,
            "name" => "Kale",
            "kitchen" => "Dutch",
        ],
        [
            "id" => 3,
            "name" => "Lasagna",
            "kitchen" => "Italian",
        ],
        [
            "id" => 4,
            "name" => "Kebab",
            "kitchen" => "Turkish",
        ],
        [
            "id" => 5,
            "name" => "Paella",
            "kitchen" => "Spanish",
        ]
    ];
}

/**
 * @param $id
 * @return mixed
 */
function getDishDetails($id)
{
    $tags = [
        1 => [
            "minifig" => "Darth Vader",
            "tags" => ['Sithlord', 'Star Wars']
        ],
        2 => [
            "minifig" => "Ahsoka",
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