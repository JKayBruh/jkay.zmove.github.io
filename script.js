// Pokémon team data from the provided document
const pokemonTeams = {
    "Ghost": {
        "Ghost-1": [
            {
                "name": "Mimikyu",
                "item": "Life Orb",
                "ability": "Disguise",
                "shiny": true,
                "teraType": "Ghost",
                "evs": "252 Atk / 4 SpD / 252 Spe",
                "nature": "Jolly",
                "moves": ["Swords Dance", "Drain Punch", "Play Rough", "Shadow Sneak"]
            },
            {
                "name": "Blacephalon",
                "item": "Focus Sash",
                "ability": "Beast Boost",
                "shiny": true,
                "teraType": "Fire",
                "evs": "252 SpA / 4 SpD / 252 Spe",
                "nature": "Timid",
                "moves": ["Flamethrower", "Mind Blown", "Psychic", "Shadow Ball"]
            },
            {
                "name": "Banette-Mega",
                "item": "Banettite",
                "ability": "Prankster",
                "shiny": true,
                "teraType": "Ghost",
                "evs": "252 HP / 252 Atk / 4 Spe",
                "nature": "Adamant",
                "moves": ["Protect", "Disable", "Destiny Bond", "Phantom Force"]
            }
        ],
        "Ghost-2": [
            {
                "name": "Mimikyu",
                "item": "Life Orb",
                "ability": "Disguise",
                "shiny": true,
                "teraType": "Ghost",
                "evs": "252 Atk / 4 SpD / 252 Spe",
                "nature": "Jolly",
                "moves": ["Swords Dance", "Drain Punch", "Play Rough", "Shadow Sneak"]
            },
            {
                "name": "Lunala",
                "item": "Expert Belt",
                "ability": "Shadow Shield",
                "shiny": true,
                "teraType": "Psychic",
                "evs": "252 HP / 252 SpA / 4 SpD",
                "nature": "Modest",
                "moves": ["Moonblast", "Moongeist Beam", "Calm Mind", "Psychic"]
            },
            {
                "name": "Blacephalon",
                "item": "Focus Sash",
                "ability": "Beast Boost",
                "shiny": true,
                "teraType": "Fire",
                "evs": "252 SpA / 4 SpD / 252 Spe",
                "nature": "Timid",
                "moves": ["Mind Blown", "Shadow Ball", "Flamethrower", "Psychic"]
            }
        ],
    
        "Ghost-3": [
            {
                "name": "Mimikyu",
                "item": "Life Orb",
                "ability": "Disguise",
                "shiny": true,
                "teraType": "Ghost",
                "evs": "252 Atk / 4 SpD / 252 Spe",
                "nature": "Jolly",
                "moves": ["Swords Dance", "Drain Punch", "Play Rough", "Shadow Sneak"]
            },
            {
                "name": "Gengar",
                "item": "Focus Sash",
                "ability": "Curses Body",
                "shiny": true,
                "teraType": "Psychic",
                "evs": "252 HP / 252 SpA / 4 SpD",
                "nature": "Timid",
                "moves": ["Protect", "Shadow Ball", "Thunderbolt", "Destiny Bond"]
            },
            {
                "name": "Aegislash",
                "item": "Leftover",
                "ability": "Stance Change",
                "shiny": true,
                "teraType": "Fire",
                "evs": "252 Atk / 4 Hp / 252 Spe",
                "nature": "Adamant",
                "moves": ["Sword Dance", "Shadow Sneak", "King's Shield", "Sacred Sword"]
            }
        ]
    },
    "Poison": {
        "Poison-1": [
            {
                "name": "Beedrill-Mega",
                "item": "Beedrillite",
                "ability": "Adaptability",
                "shiny": true,
                "teraType": "Bug",
                "evs": "252 Atk / 4 SpD / 252 Spe",
                "nature": "Jolly",
                "moves": ["U-turn", "Poison Jab", "Knock Off", "Fell Stinger"]
            },
            {
                "name": "Tentacruel",
                "item": "Black Sludge",
                "ability": "Liquid Ooze",
                "shiny": true,
                "teraType": "Water",
                "evs": "252 HP / 252 Def / 4 SpD",
                "nature": "Relaxed",
                "moves": ["Flip Turn", "Toxic Spikes", "Knock Off", "Protect"]
            },
            {
                "name": "Gengar",
                "item": "Focus Sash / Ghostium Z",
                "ability": "Cursed Body",
                "shiny": true,
                "teraType": "Ghost",
                "evs": "252 SpA / 4 SpD / 252 Spe",
                "nature": "Timid",
                "moves": ["Protect", "Shadow Ball", "Thunderbolt", "Destiny Bond"]
            }
        ],
        "Poison-2": [
            {
                "name": "Venusaur-Mega",
                "item": "Venusaurite",
                "ability": "Thick Fat",
                "shiny": true,
                "teraType": "Grass",
                "evs": "252 SpA / 4 SpD / 252 Spe",
                "nature": "Modest",
                "moves": ["Giga Drain", "Sludge Bomb", "Earth Power", "Hidden Power [Fire]"]
            },
            {
                "name": "Ariados",
                "item": "Focus Sash",
                "ability": "Swarm",
                "shiny": true,
                "teraType": "Bug",
                "evs": "252 Atk / 252 Spe / 4 Hp",
                "nature": "Jolly",
                "moves": ["Sticky Web", "X-Scissor", "Poison Jab", "Megahorn"]
            },
            {
                "name": "Gengar",
                "item": "Focus Sash/ Ghostium Z",
                "ability": "Cursed Body",
                "shiny": true,
                "teraType": "Ghost",
                "evs": "252 SpA / 4 SpD / 252 Spe",
                "nature": "Timid",
                "moves": ["Protect", "Shadow Ball", "Thunderbolt", "Destiny Bond"]
            }
        ],
    
"Poison-3": [
            {
                "name": "Beedrill-Mega",
                "item": "Beedrillite",
                "ability": "Adaptability",
                "shiny": true,
                "teraType": "Bug",
                "evs": "252 Atk / 4 SpD / 252 Spe",
                "nature": "Jolly",
                "moves": ["U-turn", "Poison Jab", "Knock Off", "Fell Stinger"]
            },
            {
                "name": "Toxicroak",
                "item": "Focus Sash",
                "ability": "Dry Skin",
                "shiny": true,
                "teraType": "Water",
                "evs": "252 Atk / 252 Spe / 4 SpD",
                "nature": "Jolly / Adamant",
                "moves": ["Sucker Punch", "Sword Dance", "Poison Jab", "Drain Punch"]
            },
            {
                "name": "Gengar",
                "item": "Focus Sash / Ghostium Z",
                "ability": "Cursed Body",
                "shiny": true,
                "teraType": "Ghost",
                "evs": "252 SpA / 4 SpD / 252 Spe",
                "nature": "Timid",
                "moves": ["Protect", "Shadow Ball", "Thunderbolt", "Destiny Bond"]
            }
        ]
    },
    "Rock": {
        "Rock-1": [
            {
                "name": "Kleavor",
                "item": "Focus Sash",
                "ability": "Sharpness",
                "shiny": true,
                "teraType": "Bug",
                "evs": "252 Atk / 4 SpD / 252 Spe",
                "nature": "Jolly",
                "moves": ["Stone Axe", "Aerial Ace", "X-Scissor", "Night Slash"]
            },
            {
                "name": "Omastar",
                "item": "Focus Sash",
                "ability": "Swift Swim",
                "shiny": true,
                "teraType": "Rock",
                "evs": "252 SpA / 4 SpD / 252 Spe",
                "nature": "Modest",
                "moves": ["Shell Smash", "Ice Beam", "Earth Power", "Surf"]
            },
            {
                "name": "Terrakion",
                "item": "Focus Sash",
                "ability": "Justified",
                "shiny": true,
                "teraType": "Rock",
                "evs": "252 Atk / 4 SpD / 252 Spe",
                "nature": "Jolly",
                "moves": ["Swords Dance", "Rock Slide", "Close Combat", "Poison Jab"]
            }
        ],
        "Rock-2": [
            {
                "name": "Shuckle",
                "item": "Leftovers",
                "ability": "Sturdy",
                "shiny": true,
                "teraType": "Bug",
                "evs": "252 HP / 4 Def / 252 SpD",
                "nature": "Calm",
                "moves": ["Sticky Web", "Stealth Rock", "Toxic", "Encore"]
            },
            {
                "name": "Carracosta",
                "item": "Expert Belt",
                "ability": "Sturdy",
                "shiny": true,
                "teraType": "Water",
                "evs": "252 Atk / 4 SpD / 252 Spe",
                "nature": "Adamant",
                "moves": ["Shell Smash", "Waterfall", "Rock Slide", "Crunch"]
            },
            {
                "name": "Omastar",
                "item": "Focus Sash",
                "ability": "Swift Swim",
                "shiny": true,
                "teraType": "Rock",
                "evs": "252 SpA / 4 SpD / 252 Spe",
                "nature": "Modest",
                "moves": ["Shell Smash", "Surf", "Ice Beam", "Earth Power"]
            }
        ]
    },
    "Fighting": {
        "Fighting-1": [
            {
                "name": "Kommo-o",
                "item": "Kommonium Z",
                "ability": "Bulletproof",
                "shiny": true,
                "teraType": "Dragon",
                "evs": "4 Atk / 252 SpA / 252 Spe",
                "nature": "Naive",
                "moves": ["Clanging Scales", "Drain Punch", "Flamethrower", "Flash Cannon"]
            },
            {
                "name": "Breloom",
                "item": "Focus Sash",
                "ability": "Technician",
                "shiny": true,
                "teraType": "Grass",
                "evs": "252 Atk / 4 SpD / 252 Spe",
                "nature": "Jolly",
                "moves": ["Swords Dance", "Bullet Seed", "Mach Punch", "Spore"]
            },
            {
                "name": "Hawlucha",
                "item": "Focus Sash",
                "ability": "Unburden",
                "shiny": true,
                "teraType": "Fighting",
                "evs": "252 Atk / 4 SpD / 252 Spe",
                "nature": "Adamant",
                "moves": ["Swords Dance", "Close Combat", "Acrobatics", "Thunder Punch"]
            }
        ],
        "Fighting-2": [
            {
                "name": "Terrakion",
                "item": "Focus Sash",
                "ability": "Justified",
                "shiny": true,
                "teraType": "Rock",
                "evs": "252 Atk / 4 SpD / 252 Spe",
                "nature": "Jolly",
                "moves": ["Swords Dance", "Close Combat", "Rock Slide", "Poison Jab"]
            },
            {
                "name": "Blaziken",
                "item": "Focus Sash",
                "ability": "Speed Boost",
                "shiny": true,
                "teraType": "Fire",
                "evs": "252 Atk / 4 SpD / 252 Spe",
                "nature": "Adamant",
                "moves": ["Swords Dance", "Acrobatics", "Close Combat", "Earthquake"]
            },
            {
                "name": "Kommo-o",
                "item": "Kommonium Z",
                "ability": "Bulletproof",
                "shiny": true,
                "teraType": "Dragon",
                "evs": "4 Atk / 252 SpA / 252 Spe",
                "nature": "Naive",
                "moves": ["Clanging Scales", "Drain Punch", "Flamethrower", "Flash Cannon"]
            }
        ],
        "Fighting-3": [
            {
                "name": "Infernape",
                "item": "Focus Sash",
                "ability": "Blaze",
                "shiny": true,
                "teraType": "Fire",
                "evs": "4 Atk / 252 SpA / 252 Spe",
                "nature": "Naive / Timid",
                "moves": ["Nasty Plot", "Wacuume Wave", "Flamethrower", "Focus Blast / Aura Sphere"]
            },
            {
                "name": "Breloom",
                "item": "Focus Sash",
                "ability": "Technician",
                "shiny": true,
                "teraType": "Grass",
                "evs": "252 Atk / 4 SpD / 252 Spe",
                "nature": "Jolly",
                "moves": ["Swords Dance", "Bullet Seed", "Mach Punch", "Spore"]
            },
            {
                "name": "Lopunny-Mega",
                "item": "Lopunnite",
                "ability": "Scrappy",
                "shiny": true,
                "teraType": "Fighting",
                "evs": "252 Atk / 4 SpD / 252 Spe",
                "nature": "Jolly / Adamant",
                "moves": ["Fake Out", "U-Turn", "High Jump Kick", "Return / Frustration"]
            }
        ]
    }, 
    "Fairy": {
        "Fairy-1": [
            {
                "name": "Ribombee",
                "item": "Focus Sash",
                "ability": "Shield Dust",
                "shiny": true,
                "teraType": "Bug",
                "evs": "252 SpA / 4 SpD / 252 Spe",
                "nature": "Modest",
                "moves": ["Sticky Web", "Moonblast", "Bug Buzz", "Quiver Dance"]
            },
            {
                "name": "Diancie-Mega",
                "item": "Diancite",
                "ability": "Magic Bounce",
                "shiny": true,
                "teraType": "Rock",
                "evs": "4 Atk / 252 SpA / 252 Spe",
                "nature": "Hasty",
                "moves": ["Moonblast", "Earth Power", "Diamond Storm", "Protect"]
            },
            {
                "name": "Togekiss",
                "item": "Choice Specs",
                "ability": "Serene Grace",
                "shiny": true,
                "teraType": "Fairy",
                "evs": "252 SpA / 4 SpD / 252 Spe",
                "nature": "Timid",
                "moves": ["Air Slash", "Dazzling Gleam", "Aura Sphere", "Flamethrower"]
            }
        ],
        "Fairy-2": [
            {
                "name": "Azumarill",
                "item": "Sitrus Berry",
                "ability": "Huge Power",
                "shiny": true,
                "teraType": "Water",
                "evs": "252 HP / 252 Atk / 4 SpD",
                "nature": "Adamant",
                "moves": ["Belly Drum", "Aqua Jet", "Play Rough", "Knock Off"]
            },
            {
                "name": "Mimikyu",
                "item": "Life Orb",
                "ability": "Disguise",
                "shiny": true,
                "teraType": "Ghost",
                "evs": "252 Atk / 4 SpD / 252 Spe",
                "nature": "Jolly",
                "moves": ["Swords Dance", "Shadow Sneak", "Play Rough", "Drain Punch"]
            },
            {
                "name": "Gardevoir-Mega",
                "item": "Gardevoirite",
                "ability": "Pixilate",
                "shiny": true,
                "teraType": "Fairy",
                "evs": "252 SpA / 4 SpD / 252 Spe",
                "nature": "Timid",
                "moves": ["Calm Mind", "Hyper Voice", "Psychic", "Mystical Fire"]
            }
        ]
    },
    "Ground": {
        "Ground-1": [
            {
                "name": "Garchomp",
                "item": "Focus Sash",
                "ability": "Rough Skin",
                "shiny": true,
                "teraType": "Dragon",
                "evs": "252 Atk / 4 SpD / 252 Spe",
                "nature": "Jolly",
                "moves": ["Stealth Rock", "Earthquake", "Outrage", "Rock Tomb"]
            },
            {
                "name": "Excadrill",
                "item": "Focus Sash",
                "ability": "Mold Breaker",
                "shiny": true,
                "teraType": "Ground",
                "evs": "252 Atk / 4 SpD / 252 Spe",
                "nature": "Jolly",
                "moves": ["Stealth Rock", "Earthquake", "Rock Tomb", "Rapid Spin"]
            },
            {
                "name": "Torterra",
                "item": "Focus Sash",
                "ability": "Overgrow",
                "shiny": true,
                "teraType": "Grass",
                "evs": "252 Atk / 4 SpD / 252 Spe",
                "nature": "Adamant",
                "moves": ["Shell Smash", "Crunch", "Headlong Rush", "Seed Bomb"]
            }
        ],
        "Ground-2": [
            {
                "name": "Gliscor",
                "item": "Toxic Orb",
                "ability": "Poison Heal",
                "shiny": true,
                "teraType": "Ground",
                "evs": "252 HP / 184 Def / 72 Spe",
                "nature": "Impish",
                "moves": ["Stealth Rock", "Rain Dance", "Spikes", "Earthquake"]
            },
            {
                "name": "Swampert-Mega",
                "item": "Swampertite",
                "ability": "Swift Swim",
                "shiny": true,
                "teraType": "Water",
                "evs": "252 Atk / 4 SpD / 252 Spe",
                "nature": "Adamant",
                "moves": ["Earthquake", "Waterfall", "Ice Punch", "Low Kick"]
            },
            {
                "name": "Torterra",
                "item": "Focus Sash",
                "ability": "Overgrow",
                "shiny": true,
                "teraType": "Grass",
                "evs": "252 Atk / 4 SpD / 252 Spe",
                "nature": "Adamant",
                "moves": ["Shell Smash", "Crunch", "Headlong Rush", "Seed Bomb"]
            }
        ]
    },
    "Dragon": {
        "Dragon-1": [
            {
                "name": "Latios",
                "item": "Focus Sash",
                "ability": "Levitate",
                "shiny": true,
                "teraType": "Dragon",
                "evs": "252 SpA / 4 SpD / 252 Spe",
                "nature": "Timid",
                "moves": ["Thunderbolt", "Luster Purge", "Dragon Pulse", "Ice Beam"]
            },
            {
                "name": "Salamence",
                "item": "Focus Sash",
                "ability": "Moxie",
                "shiny": true,
                "teraType": "Dragon",
                "evs": "252 Atk / 4 SpD / 252 Spe",
                "nature": "Adamant",
                "moves": ["Outrage", "Dragon Dance", "Fly", "Earthquake"]
            },
            {
                "name": "Dragonite",
                "item": "Life Orb",
                "ability": "Multiscale",
                "shiny": true,
                "teraType": "Dragon",
                "evs": "252 Atk / 4 SpD / 252 Spe",
                "nature": "Adamant",
                "moves": ["Dragon Dance", "Extreme Speed", "Outrage", "Fly"]
            }
        ],
        "Dragon-2": [
            {
                "name": "Garchomp",
                "item": "Focus Sash",
                "ability": "Rough Skin",
                "shiny": true,
                "teraType": "Dragon",
                "evs": "252 Atk / 4 SpD / 252 Spe",
                "nature": "Jolly",
                "moves": ["Dragon Claw", "Stealth Rock", "Earthquake", "Fire Fang"]
            },
            {
                "name": "Kyurem",
                "item": "Focus Sash",
                "ability": "Pressure",
                "shiny": true,
                "teraType": "Dragon",
                "evs": "252 SpA / 4 SpD / 252 Spe",
                "nature": "Timid",
                "moves": ["Ice Beam", "Draco Meteor", "Earth Power", "Psychic"]
            },
            {
                "name": "Kommo-o",
                "item": "Kommonium Z",
                "ability": "Bulletproof",
                "shiny": true,
                "teraType": "Dragon",
                "evs": "4 Atk / 252 SpA / 252 Spe",
                "nature": "Naive",
                "moves": ["Clanging Scales", "Drain Punch", "Flamethrower", "Flash Cannon"]
            }
        ]
    },
    "Dark": {
        "Dark-1": [
            {
                "name": "Greninja",
                "item": "Choice Specs",
                "ability": "Protean",
                "shiny": true,
                "teraType": "Water",
                "evs": "252 SpA / 4 SpD / 252 Spe",
                "nature": "Timid",
                "moves": ["Ice Beam", "Grass Knot", "Sludge Wave", "Dark Pulse"]
            },
            {
                "name": "Bisharp",
                "item": "Focus Sash",
                "ability": "Defiant",
                "shiny": true,
                "teraType": "Dark",
                "evs": "252 Atk / 4 SpD / 252 Spe",
                "nature": "Adamant",
                "moves": ["Swords Dance", "Iron Head", "Sucker Punch", "Knock Off"]
            },
            {
                "name": "Weavile",
                "item": "Focus Sash",
                "ability": "Pressure",
                "shiny": true,
                "teraType": "Dark",
                "evs": "252 Atk / 4 SpD / 252 Spe",
                "nature": "Jolly",
                "moves": ["Low Kick", "Knock Off", "Ice Shard", "Icicle Crash"]
            }
        ],
        "Dark-2": [
            {
                "name": "Absol",
                "item": "Focus Sash",
                "ability": "Super Luck",
                "shiny": true,
                "teraType": "Dark",
                "evs": "252 Atk / 4 SpD / 252 Spe",
                "nature": "Jolly",
                "moves": ["Sword Dance", "Sucker Punch", "Knock Off / Baton Pass", "Stone Edge / Play Rough"]
            },
            {
                "name": "Sharpedo-Mega",
                "item": "Sharpedonite",
                "ability": "Speed Boost -> Strong Jaw",
                "shiny": true,
                "teraType": "Dark",
                "evs": "252 Atk / 4 SpD / 252 Spe",
                "nature": "Adamant",
                "moves": ["Ice Fang", "Waterfall", "Crunch", "Protect"]
            },
            {
                "name": "Greninja",
                "item": "Choice Specs",
                "ability": "Protean",
                "shiny": true,
                "teraType": "Water",
                "evs": "252 SpA / 4 SpD / 252 Spe",
                "nature": "Timid / Naive",
                "moves": ["Ice Beam", "Grass Knot", "Sludge Wave / Gunk Shot", "Dark Pulse"]
            }
        ]
    },
    "Steel": {
        "Steel": [
            {
                "name": "Durant",
                "item": "Choice Scarf",
                "ability": "Truant",
                "shiny": true,
                "teraType": "Bug",
                "evs": "252 Atk / 4 SpD / 252 Spe",
                "nature": "Jolly",
                "moves": ["Entrainment", "Crunch", "X-Scissor", "Iron Head"]
            },
            {
                "name": "Scizor",
                "item": "Focus Sash",
                "ability": "Technician",
                "shiny": true,
                "teraType": "Bug",
                "evs": "252 HP / 252 Atk / 4 SpD",
                "nature": "Adamant",
                "moves": ["Protect", "Swords Dance", "Bullet Punch", "Bug Bite"]
            },
            {
                "name": "Bisharp",
                "item": "Focus Sash",
                "ability": "Defiant",
                "shiny": true,
                "teraType": "Dark",
                "evs": "4 HP / 252 Atk / 252 Spe",
                "nature": "Adamant",
                "moves": ["Protect", "Swords Dance", "Iron Head", "Sucker Punch"]
            }
        ]
    },
    "Bug": {
        "Bug": [
            {
                "name": "Durant",
                "item": "Choice Scarf",
                "ability": "Truant",
                "shiny": true,
                "teraType": "Bug",
                "evs": "252 Atk / 4 SpD / 252 Spe",
                "nature": "Jolly",
                "moves": ["Entrainment", "Crunch", "X-Scissor", "Iron Head"]
            },
            {
                "name": "Scizor",
                "item": "Focus Sash",
                "ability": "Technician",
                "shiny": true,
                "teraType": "Bug",
                "evs": "252 HP / 252 Atk",
                "nature": "Adamant",
                "moves": ["Protect", "Swords Dance", "Bullet Punch", "Bug Bite"]
            },
            {
                "name": "Volcarona",
                "item": "Focus Sash",
                "ability": "Flame Body",
                "shiny": true,
                "teraType": "Bug",
                "evs": "252 SpA / 4 SpD / 252 Spe",
                "nature": "Modest",
                "moves": ["Protect", "Quiver Dance", "Giga Drain", "Flamethrower"]
            }
        ]
    },
    "Psychic": {
        "Psychic-1": [
            {
                "name": "Solgaleo",
                "item": "Focus Sash",
                "ability": "Full Metal Body",
                "shiny": true,
                "teraType": "Psychic",
                "evs": "252 Atk / 4 SpD / 252 Spe",
                "nature": "Jolly",
                "moves": ["Sunsteel Strike", "Crunch", "Zen Headbutt", "Rock Slide"]
            },
            {
                "name": "Latios-Mega",
                "item": "Latiosite",
                "ability": "Levitate",
                "shiny": true,
                "teraType": "Dragon",
                "evs": "252 SpA / 4 SpD / 252 Spe",
                "nature": "Timid",
                "moves": ["Luster Purge", "Dragon Pulse", "Thunderbolt", "Ice Beam"]
            },
            {
                "name": "Victini",
                "item": "Normalium Z",
                "ability": "Victory Star",
                "shiny": true,
                "teraType": "Psychic",
                "evs": "252 SpA / 4 SpD / 252 Spe",
                "nature": "Timid",
                "moves": ["Celebrate", "Stored Power", "Searing Shot", "Scorching Sands"]
            }
        ],
        "Psychic-2": [
            {
                "name": "Lunala",
                "item": "Expert Belt",
                "ability": "Shadow Shield",
                "shiny": true,
                "teraType": "Psychic",
                "evs": "252 SpA / 4 SpD / 252 Spe",
                "nature": "Timid",
                "moves": ["Moongeist Beam", "Moonblast", "Psyshock", "Calm Mind"]
            },
            {
                "name": "Jirachi",
                "item": "Choice Scarf",
                "ability": "Serene Grace",
                "shiny": true,
                "teraType": "Steel",
                "evs": "252 Atk / 4 SpD / 252 Spe",
                "nature": "Jolly",
                "moves": ["Iron Head", "Drain Punch", "Fire Punch", "Ice Punch"]
            },
            {
                "name": "Latios-Mega",
                "item": "Latiosite",
                "ability": "Levitate",
                "shiny": true,
                "teraType": "Dragon",
                "evs": "252 SpA / 4 SpD / 252 Spe",
                "nature": "Timid",
                "moves": ["Dragon Pulse", "Luster Purge", "Ice Beam", "Thunderbolt"]
            }
        ],
        "Psychic-3": [
            {
                "name": "Latios",
                "item": "Focus Sash / Choie Scarf(1vs3 Dragon)",
                "ability": "Levitate",
                "shiny": true,
                "teraType": "Dragon",
                "evs": "252 SpA / 4 SpD / 252 Spe",
                "nature": "Timid",
                "moves": ["Dragon Pulse", "Luster Purge", "Ice Beam", "Thunderbolt"]
            },
            {
                "name": "Alakazam",
                "item": "Focus Sash",
                "ability": "Magic Guard",
                "shiny": true,
                "teraType": "Psychic",
                "evs": "252 SpA / 4 SpD / 252 Spe",
                "nature": "Timid",
                "moves": ["Psychic", "Shadowball", "Calm Mind", "Focus Blast"]
            },
            {
                "name": "Metagross-Mega",
                "item": "Metagrossite",
                "ability": "Tough Claw",
                "shiny": true,
                "teraType": "Psychic",
                "evs": "252 Atk / 4 SpD / 252 Spe",
                "nature": "Jolly",
                "moves": ["Power-Up Punch", "Zen Headbutt", "Bullet Punch / Thunder Punch", "Meteor Mash"]
            }
        ]
    },
    "Electric": {
        "Electric": [
            {
                "name": "Galvantula",
                "item": "Focus Sash",
                "ability": "Compound Eyes",
                "shiny": true,
                "teraType": "Bug",
                "evs": "252 SpA / 4 SpD / 252 Spe",
                "nature": "Timid",
                "moves": ["Sticky Web", "Thunderbolt", "Bug Buzz", "Energy Ball"]
            },
            {
                "name": "Zekrom",
                "item": "Focus Sash",
                "ability": "Teravolt",
                "shiny": true,
                "teraType": "Dragon",
                "evs": "252 Atk / 4 SpD / 252 Spe",
                "nature": "Adamant",
                "moves": ["Fusion Bolt", "Crunch", "Outrage", "Brick Break"]
            },
            {
                "name": "Thundurus-Therian",
                "item": "Focus Sash",
                "ability": "Volt Absorb",
                "shiny": true,
                "teraType": "Electric",
                "evs": "252 SpA / 4 SpD / 252 Spe",
                "nature": "Timid",
                "moves": ["Nasty Plot", "Thunderbolt", "Dark Pulse", "Sludge Wave"]
            }
        ]
    },
    "Fire": {
        "Fire-1": [
            {
                "name": "Charizard-Mega-Y",
                "item": "Charizardite Y",
                "ability": "Drought",
                "shiny": true,
                "teraType": "Fire",
                "evs": "252 SpA / 252 Spe / 4 Hp",
                "nature": "Timid",
                "moves": ["Solar Beam", "Scorching Sands", "Flamethrower", "Roost"]
            },
            {
                "name": "Darmanitan",
                "item": "Focus Sash / Choice Scarf",
                "ability": "Sheer Force",
                "shiny": true,
                "teraType": "Fire",
                "evs": "252 Atk / 4 SpD / 252 Spe",
                "nature": "Adamant",
                "moves": ["Flare Blitz", "Close Combat", "Bite", "Thrash"]
            },
            {
                "name": "Blacephalon",
                "item": "Focus Sash",
                "ability": "Beast Boost",
                "shiny": true,
                "teraType": "Fire",
                "evs": "252 SpA / 4 SpD / 252 Spe",
                "nature": "Timid",
                "moves": ["Flamethrower", "Shadow Ball", "Psychic", "Mind Blown"]
            }
        ],
        "Fire-2": [
            {
                "name": "Torkoal",
                "item": "Heat Rock",
                "ability": "Drought",
                "shiny": true,
                "teraType": "Fire",
                "evs": "248 HP / 252 Def / 8 SpA",
                "nature": "Bold",
                "moves": ["Yawn", "Stealth Rock", "Eruption", "Rapid Spin"]
            },
            {
                "name": "Reshiram",
                "item": "Life Orb",
                "ability": "Turboblaze",
                "shiny": true,
                "teraType": "Dragon",
                "evs": "252 SpA / 4 SpD / 252 Spe",
                "nature": "Timid",
                "moves": ["Fusion Flare", "Draco Meteor", "Earth Power", "Shadow Ball"]
            },
            {
                "name": "Blaziken",
                "item": "Focus Sash",
                "ability": "Speed Boost",
                "shiny": true,
                "teraType": "Fire",
                "evs": "252 Atk / 4 SpD / 252 Spe",
                "nature": "Adamant",
                "moves": ["Swords Dance", "Earthquake", "Close Combat", "Fire Punch"]
            }
        ]
    },
    "Flying": {
        "Flying-1": [
            {
                "name": "Dragonite",
                "item": "Expert Belt",
                "ability": "Multiscale",
                "shiny": true,
                "teraType": "Dragon",
                "evs": "252 Atk / 4 SpD / 252 Spe",
                "nature": "Adamant",
                "moves": ["Extreme Speed", "Outrage", "Fly", "Dragon Dance"]
            },
            {
                "name": "Gyarados-Mega",
                "item": "Gyaradosite",
                "ability": "Mold Breaker",
                "shiny": true,
                "teraType": "Water",
                "evs": "252 Atk / 4 Def / 252 Spe",
                "nature": "Adamant",
                "moves": ["Dragon Dance", "Crunch", "Earthquake", "Waterfall"]
            },
            {
                "name": "Thundurus-Therian",
                "item": "Life Orb",
                "ability": "Volt Absorb",
                "shiny": true,
                "teraType": "Electric",
                "evs": "252 SpA / 4 SpD / 252 Spe",
                "nature": "Timid",
                "moves": ["Thunderbolt", "Nasty Plot", "Focus Blast", "Hidden Power [Ice]"]
            }
        ],
        "Flying-2": [
            {
                "name": "Togekiss",
                "item": "Choice Scarf",
                "ability": "Serene Grace",
                "shiny": true,
                "teraType": "Fairy",
                "evs": "252 SpA / 4 SpD / 252 Spe",
                "nature": "Timid",
                "moves": ["Air Slash", "Aura Sphere", "Flamethrower", "Dazzling Gleam"]
            },
            {
                "name": "Salamence",
                "item": "Focus Sash",
                "ability": "Moxie",
                "shiny": true,
                "teraType": "Dragon",
                "evs": "252 Atk / 4 SpD / 252 Spe",
                "nature": "Adamant",
                "moves": ["Dragon Dance", "Outrage", "Fire Fang", "Fly"]
            },
            {
                "name": "Hawlucha",
                "item": "Focus Sash",
                "ability": "Unburden",
                "shiny": true,
                "teraType": "Fighting",
                "evs": "252 Atk / 4 SpA / 252 Spe",
                "nature": "Naughty",
                "moves": ["Acrobatics", "Swords Dance", "Thunder Punch", "Close Combat"]
            }
        ]
    },
    "Grass": {
        "Grass-1": [
            {
                "name": "Torterra",
                "item": "Focus Sash",
                "ability": "Overgrow",
                "shiny": true,
                "teraType": "Grass",
                "evs": "252 Atk / 4 Def / 252 Spe",
                "nature": "Adamant",
                "moves": ["Shell Smash", "Seed Bomb", "Headlong Rush", "Crunch"]
            },
            {
                "name": "Ferrothorn",
                "item": "Leftovers",
                "ability": "Iron Barbs",
                "shiny": true,
                "teraType": "Grass",
                "evs": "252 HP / 128 Def / 128 SpD",
                "nature": "Relaxed",
                "moves": ["Protect", "Gyro Ball", "Leech Seed", "Spikes"]
            },
            {
                "name": "Leavanny",
                "item": "Focus Sash",
                "ability": "Swarm",
                "shiny": true,
                "teraType": "Bug",
                "evs": "252 Atk / 252 Spe / 4 Hp",
                "nature": "Jolly",
                "moves": ["Sticky Web", "Swords Dance", "Leaf Blade", "X-Scissor"]
            }
        ],
        "Grass-2": [
            {
                "name": "Breloom",
                "item": "Focus Sash",
                "ability": "Technician",
                "shiny": true,
                "teraType": "Grass",
                "evs": "4 HP / 252 Atk / 252 Spe",
                "nature": "Jolly",
                "moves": ["Spore", "Swords Dance", "Close Combat", "Bullet Seed"]
            },
            {
                "name": "Leavanny",
                "item": "Focus Sash",
                "ability": "Swarm",
                "shiny": true,
                "teraType": "Bug",
                "evs": "4 HP / 252 Atk / 252 Spe",
                "nature": "Jolly",
                "moves": ["Sticky Web", "Swords Dance", "Leaf Blade", "X-Scissor"]
            },
            {
                "name": "Celebi",
                "item": "Focus Sash",
                "ability": "Natural Cure",
                "shiny": true,
                "teraType": "Psychic",
                "evs": "252 SpA / 252 Spe / 4 Hp",
                "nature": "Timid",
                "moves": ["Nasty Plot", "Energy Ball", "Shadow Ball", "Psychic"]
            }
        ],
        "Grass-3": [
            {
                "name": "Venusaur-Mega",
                "item": "Venusaurite",
                "ability": "Thick Fat",
                "shiny": true,
                "teraType": "Grass",
                "evs": "252 SpA / 252 Spe / 4 Hp",
                "nature": "Modest",
                "moves": ["Energy Ball", "Sludge Bomb", "Earth Power", "Giga Drain"]
            },
            {
                "name": "Virizion",
                "item": "Focus Sash",
                "ability": "Justified",
                "shiny": true,
                "teraType": "Grass",
                "evs": "252 Atk / 4 SpD / 252 Spe",
                "nature": "Jolly",
                "moves": ["Swords Dance", "Close Combat", "Seed Bomb", "Stone Edge"]
            },
            {
                "name": "Shaymin-Sky",
                "item": "Focus Sash",
                "ability": "Serene Grace",
                "shiny": true,
                "teraType": "Grass",
                "evs": "252 SpA / 4 SpD / 252 Spe",
                "nature": "Timid",
                "moves": ["Air Slash", "Earth Power", "Energy Ball", "Hidden Power [Ice]"]
            }
        ]
    },
    "Ice": {
        "Ice": [
            {
                "name": "Cloyster",
                "item": "Focus Sash",
                "ability": "Skill Link",
                "shiny": true,
                "teraType": "Water",
                "evs": "252 Atk / 4 Def / 252 Spe",
                "nature": "Adamant",
                "moves": ["Shell Smash", "Icicle Spear", "Rock Blast", "Razor Shell"]
            },
            {
                "name": "Kyurem-Black",
                "item": "Choice Scarf",
                "ability": "Teravolt",
                "shiny": true,
                "teraType": "Dragon",
                "evs": "252 Atk / 4 Def / 252 Spe",
                "nature": "Naive",
                "moves": ["Outrage", "Ice Beam", "Fusion Bolt", "Earth Power"]
            },
            {
                "name": "Weavile",
                "item": "Focus Sash",
                "ability": "Pressure",
                "shiny": true,
                "teraType": "Dark",
                "evs": "252 Atk / 4 SpD / 252 Spe",
                "nature": "Jolly",
                "moves": ["Knock Off", "Low Kick", "Icicle Crash", "Ice Shard"]
            }
        ]
    },
    "Normal": {
        "Normal-1": [
            {
                "name": "Smeargle",
                "item": "Focus Sash",
                "ability": "Own Tempo",
                "shiny": true,
                "teraType": "Normal",
                "evs": "116 HP / 140 Def / 252 Spe",
                "nature": "Jolly",
                "moves": ["Spore", "Sticky Web", "Stealth Rock", "Endeavor"]
            },
            {
                "name": "Ursaluna",
                "item": "Flame Orb",
                "ability": "Guts",
                "shiny": true,
                "teraType": "Ground",
                "evs": "252 Atk / 4 SpD / 252 Spe",
                "nature": "Adamant",
                "moves": ["Swords Dance", "Facade", "Fire Punch", "Headlong Rush"]
            },
            {
                "name": "Kangaskhan-Mega",
                "item": "Kangaskhanite",
                "ability": "Parental Bond",
                "shiny": true,
                "teraType": "Normal",
                "evs": "252 Atk / 4 SpD / 252 Spe",
                "nature": "Jolly",
                "moves": ["Outrage", "Headbutt", "Crunch", "Brick Break"]
            }
        ],
        "Normal-2": [
            {
                "name": "Smeargle",
                "item": "Focus Sash",
                "ability": "Own Tempo",
                "shiny": true,
                "teraType": "Normal",
                "evs": "252 HP / 252 Spe / 4 Def",
                "nature": "Jolly",
                "moves": ["Spore", "Light Screen", "Stealth Rock", "Reflect"]
            },
            {
                "name": "Snorlax",
                "item": "Chesto Berry",
                "ability": "Thick Fat",
                "shiny": true,
                "teraType": "Normal",
                "evs": "252 HP / 252 Def / 4 SpD",
                "nature": "Relaxed",
                "moves": ["Body Slam", "Curse", "Amnesia", "Rest"]
            },
            {
                "name": "Kangaskhan-Mega",
                "item": "Kangaskhanite",
                "ability": "Parental Bond",
                "shiny": true,
                "teraType": "Normal",
                "evs": "252 Atk / 4 SpD / 252 Spe",
                "nature": "Jolly",
                "moves": ["Fake Out", "Headbutt", "Power-Up Punch", "Outrage"]
            }
        ]
    },
    "Water": {
        "Water-1": [
            {
                "name": "Cloyster",
                "item": "Focus Sash",
                "ability": "Skill Link",
                "shiny": true,
                "teraType": "Water",
                "evs": "252 Atk / 4 SpD / 252 Spe",
                "nature": "Adamant",
                "moves": ["Shell Smash", "Icicle Spear", "Rock Blast", "Razor Shell"]
            },
            {
                "name": "Gyarados-Mega",
                "item": "Gyaradosite",
                "ability": "Mold Breaker",
                "shiny": true,
                "teraType": "Water",
                "evs": "252 Atk / 4 SpD / 252 Spe",
                "nature": "Adamant",
                "moves": ["Waterfall", "Crunch", "Earthquake", "Dragon Dance"]
            },
            {
                "name": "Greninja",
                "item": "Focus Sash",
                "ability": "Protean",
                "shiny": true,
                "teraType": "Water",
                "evs": "252 SpA / 4 SpD / 252 Spe",
                "nature": "Timid",
                "moves": ["Ice Beam", "Grass Knot", "Surf", "Sludge Wave"]
            }
        ],
        "Water-2": [
            {
                "name": "Omastar",
                "item": "Focus Sash",
                "ability": "Weak Armor",
                "shiny": true,
                "teraType": "Rock",
                "evs": "4 Def / 252 SpA / 252 Spe",
                "nature": "Modest",
                "moves": ["Shell Smash", "Ice Beam", "Earth Power", "Surf"]
            },
            {
                "name": "Cloyster",
                "item": "Focus Sash",
                "ability": "Shell Armor",
                "shiny": true,
                "teraType": "Water",
                "evs": "252 Atk / 4 Def / 252 Spe",
                "nature": "Adamant",
                "moves": ["Shell Smash", "Icicle Spear", "Rock Blast", "Razor Shell"]
            },
            {
                "name": "Carracosta",
                "item": "Weakness Policy",
                "ability": "Sturdy",
                "shiny": true,
                "teraType": "Water",
                "evs": "252 Atk / 4 Def / 252 Spe",
                "nature": "Jolly",
                "moves": ["Shell Smash", "Waterfall", "Crunch", "Rock Slide"]
            }
        ]
    }
};

// Type colors mapping
const typeColors = {
    "Normal": "var(--normal)",
    "Fire": "var(--fire)",
    "Water": "var(--water)",
    "Electric": "var(--electric)",
    "Grass": "var(--grass)",
    "Ice": "var(--ice)",
    "Fighting": "var(--fighting)",
    "Poison": "var(--poison)",
    "Ground": "var(--ground)",
    "Flying": "var(--flying)",
    "Psychic": "var(--psychic)",
    "Bug": "var(--bug)",
    "Rock": "var(--rock)",
    "Ghost": "var(--ghost)",
    "Dragon": "var(--dragon)",
    "Dark": "var(--dark)",
    "Steel": "var(--steel)",
    "Fairy": "var(--fairy)"
};

// Function to get Pokémon image URL
function getPokemonImage(name) {
    const baseName = name.replace('-Mega', '').replace('-Therian', '').replace('-Sky', '').replace('-Black', '');
    return `https://img.pokemondb.net/sprites/home/normal/${baseName.toLowerCase()}.png`;
}
function getCorrectPokemonImage(name) {
    const specialForms = {
        // Mega Evolution
        'Banette-Mega': 'banette-mega',
        'Gengar-Mega': 'gengar-mega',
        'Diancie-Mega': 'diancie-mega',
        'Charizard-Mega-Y': 'charizard-mega-y',
        'Blaziken-Mega': 'blaziken-mega',
        'Venusaur-Mega': 'venusaur-mega',
        'Beedrill-Mega': 'beedrill-mega',
        'Gyarados-Mega': 'gyarados-mega',
        'Scizor-Mega': 'scizor-mega',
        'Kangaskhan-Mega': 'kangaskhan-mega',
        'Latios-Mega': 'latios-mega',
        'Swampert-Mega': 'swampert-mega',
        'Gardevoir-Mega': 'gardevoir-mega',
        'Sharpedo-Mega': 'sharpedo-mega',
        'Metagross-Mega': 'metagross-mega',
        'Lopunny-Mega': 'lopunny-mega',
        
        // Therian Forme
        'Thundurus-Therian': 'thundurus-therian',
        
        // Các form khác
        'Shaymin-Sky': 'shaymin-sky',
        'Kyurem-Black': 'kyurem-black',
        'Deoxys-Attack': 'deoxys-attack',
        'Rotom-Heat': 'rotom-heat',
        'Aegislash-Blade': 'aegislash-blade'
    };
     if (specialForms[name]) {
        return `https://img.pokemondb.net/sprites/home/shiny/${specialForms[name]}.png`;
    }

    const baseName = name.replace(/-Mega|-Therian|-Sky|-Black/g, '');
    return `https://img.pokemondb.net/sprites/home/shiny/${baseName.toLowerCase()}.png`;
}

function getFallbackImage(name) {
    if (name.includes('-Mega')) {
        return 'https://via.placeholder.com/120x120/ff00ff/ffffff?text=Mega';
    }
    if (name.includes('-Therian')) {
        return 'https://via.placeholder.com/120x120/00ffff/ffffff?text=Therian';
    }
    return 'https://via.placeholder.com/120x120?text=Pokemon';
}

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    const typeSelector = document.querySelector('.type-selector');
    const teamSelector = document.querySelector('.team-selector');
    const teamDisplay = document.querySelector('.team-display');
    
    let currentType = null;
    
    // Create type buttons
    Object.keys(pokemonTeams).forEach(type => {
        const typeBtn = document.createElement('button');
        typeBtn.className = 'type-btn';
        typeBtn.textContent = type;
        typeBtn.style.backgroundColor = typeColors[type] || '#777';
        typeBtn.addEventListener('click', () => selectType(type));
        typeSelector.appendChild(typeBtn);
    });
    
    // Select a type
    function selectType(type) {
        currentType = type;
        teamSelector.innerHTML = '';
        teamDisplay.innerHTML = '';
        
        // Create team buttons for the selected type
        Object.keys(pokemonTeams[type]).forEach(team => {
            const teamBtn = document.createElement('button');
            teamBtn.className = 'team-btn';
            teamBtn.textContent = team;
            teamBtn.style.backgroundColor = typeColors[type] || '#777';
            teamBtn.addEventListener('click', () => displayTeam(type, team));
            teamSelector.appendChild(teamBtn);
        });
    }
    
    // Display a team
    function displayTeam(type, teamName) {
        const team = pokemonTeams[type][teamName];
        teamDisplay.innerHTML = '';
        
        const title = document.createElement('h2');
        title.className = 'team-title';
        title.textContent = `${teamName} - ${type} Team`;
        title.style.color = typeColors[type] || '#777';
        teamDisplay.appendChild(title);
        
        const grid = document.createElement('div');
        grid.className = 'pokemon-grid';
        
        team.forEach(pokemon => {
            const card = document.createElement('div');
            card.className = 'pokemon-card';
            
            const img = document.createElement('img');
            img.className = 'pokemon-image';
            img.src = getCorrectPokemonImage(pokemon.name);
img.onerror = function() {
    this.src = getFallbackImage(pokemon.name);
    this.onerror = null;
};
            
            const name = document.createElement('div');
            name.className = 'pokemon-name';
            name.textContent = pokemon.name;
            if (pokemon.shiny) {
                name.textContent += ' ★';
            }
            
            const item = document.createElement('div');
            item.className = 'pokemon-item';
            item.innerHTML = `<strong>Item:</strong> ${pokemon.item}`;
            
            const ability = document.createElement('div');
            ability.className = 'pokemon-item';
            ability.innerHTML = `<strong>Ability:</strong> ${pokemon.ability}`;
            
            const teraType = document.createElement('div');
            teraType.className = 'pokemon-item';
            teraType.innerHTML = `<strong>Tera Type:</strong> ${pokemon.teraType}`;
            
            const evs = document.createElement('div');
            evs.className = 'pokemon-item';
            evs.innerHTML = `<strong>EVs:</strong> ${pokemon.evs}`;
            
            const nature = document.createElement('div');
            nature.className = 'pokemon-item';
            nature.innerHTML = `<strong>Nature:</strong> ${pokemon.nature}`;
            
            const movesTitle = document.createElement('div');
            movesTitle.className = 'pokemon-item';
            movesTitle.innerHTML = '<strong>Moves:</strong>';
            
            const movesContainer = document.createElement('div');
            movesContainer.className = 'pokemon-moves';
            
            pokemon.moves.forEach(move => {
                const moveEl = document.createElement('span');
                moveEl.className = 'move';
                moveEl.textContent = move;
                movesContainer.appendChild(moveEl);
            });
            pokemon.moves.map(move => `
  <div class="move" data-move="${move}">${move}</div>
`).join("")

            
            card.appendChild(img);
            card.appendChild(name);
            card.appendChild(item);
            card.appendChild(ability);
            card.appendChild(teraType);
            card.appendChild(evs);
            card.appendChild(nature);
            card.appendChild(movesTitle);
            card.appendChild(movesContainer);
            
            grid.appendChild(card);
        });
        
        teamDisplay.appendChild(grid);
    }
    
    // Select the first type by default
    if (Object.keys(pokemonTeams).length > 0) {
        selectType(Object.keys(pokemonTeams)[0]);
    }
});
// ... (phần code cũ giữ nguyên)

// Thêm phần xử lý mode
document.querySelectorAll('.mode-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    
    if (this.dataset.mode === 'teams') {
      document.querySelector('.bosses-content').style.display = 'none';
      document.querySelectorAll('.teams-content').forEach(el => el.style.display = '');
    } else {
      document.querySelectorAll('.teams-content').forEach(el => el.style.display = 'none');
      document.querySelector('.bosses-content').style.display = 'block';
    }
  });
});
