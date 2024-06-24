function main(input) {
    const airports = input.slice(0);//take a copy of it

    for (let i = 0; i < airports.length; i++) {

    }
}

function deadLock(fuel, index, finalPos, airports) {
    if (fuel === 1 && airports[index + 1] === 0 && airports.length !== index + 1) return false;
}

function canReach(fuel) { }

function getMaxReach() { }

main([1, 6, 3, 4, 5, 0, 0, 0, 6]);