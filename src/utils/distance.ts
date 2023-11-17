const radioTierraKm: number = 6378.0;

function degreesToRadians(degrees: number): number {
    return degrees * (Math.PI / 180.0);
}

function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const lat1Rad: number = degreesToRadians(lat1);
    const lon1Rad: number = degreesToRadians(lon1);
    const lat2Rad: number = degreesToRadians(lat2);
    const lon2Rad: number = degreesToRadians(lon2);

    const differenceLon: number = lon2Rad - lon1Rad;
    const differenceLat: number = lat2Rad - lat1Rad;

    const a: number =
        Math.pow(Math.sin(differenceLat / 2), 2) +
        Math.cos(lat1Rad) * Math.cos(lat2Rad) * Math.pow(Math.sin(differenceLon / 2), 2);
    const c: number = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return radioTierraKm * c;
}

export function radioAllow(lat2: number, lon2: number): boolean {
    const lat1: number = -17.783309;
    const lon1: number = -63.182122;
    const distance: number = calculateDistance(lat1, lon1, lat2, lon2);
    console.log(distance);
    return distance <= 519.93;
}


//console.log(radioAllow(-12.431678, -59.258028)); false
//console.log(radioAllow(-13.237846, -69.156935)); false
//console.log(radioAllow(-17.900002, -62.952886)); true
//console.log(radioAllow(-18.087945, -63.312174)); true