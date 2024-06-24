function main(fuel) {
    let n = fuel.length;
    if (n === 1) {
        return 0;
    }

    let maxReach = 0; //furthest airport index you can reach
    let nextMaxReach = 0; // furthest airport index you can potentially reach in the next step
    let planesUsed = 0;
    let i = 0;

    while (i < n) {
        nextMaxReach = Math.max(nextMaxReach, i + fuel[i]);
        // If the current max reach is the current index, we need to hire a new plane
        if (i === maxReach) {
            planesUsed += 1; // Hire a new plane
            maxReach = nextMaxReach;
            // DeadLock: If after hiring a new plane we still can't reach further, it's not possible
            if (maxReach >= n - 1) {
                return planesUsed;
            }
            if (maxReach === i) {
                return -1;
            }
        }
        // Move to the next airport
        i += 1;
    }
    return -1;
}

console.log(main([2, 1, 2, 3, 1])); // Output: 2
console.log(main([1, 1, 3, 12, 5, 0, 0, 0, 0, 0, 0, 0, 0, 6])); // Output: 3