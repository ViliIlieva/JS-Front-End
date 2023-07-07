function inventory(input) {
    let heroRegister = [];

    for (const line of input) {
        let [name, level, ...[items]] = line.split(' / ');
        level = Number(level);
        let hero = [name, level, items];
        heroRegister.push(hero);
    }

    let sortedRegisterByHeroLevel = heroRegister
        .sort(([A, levelA, itemsA], [B, levelB, itemsB]) => {
            return levelA - levelB
        });

    for (const hero of sortedRegisterByHeroLevel) {
        console.log(
            `Hero: ${hero[0]}
             level => ${hero[1]}
             items => ${hero[2]}`);
    }
}

inventory([
        'Isacc / 25 / Apple, GravityGun',
        'Derek / 12 / BarrelVest, DestructionSword',
        'Hes / 1 / Desolator, Sentinel, Antara'
    ]
);

// inventory([
//         'Batman / 2 / Banana, Gun',
//         'Superman / 18 / Sword',
//         'Poppy / 28 / Sentinel, Antara'
//     ]
// );