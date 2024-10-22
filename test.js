function checkLocation(userLat, userLon) {
    const rewardLat = 32.6092; // Latitude for the reward
    const rewardLon = -85.4515; // Longitude for the reward
    const radius = 0.001; // Set a small radius around the point

    // Check if user is within reward zone
    if (Math.abs(userLat - rewardLat) < radius && Math.abs(userLon - rewardLon) < radius) {
        alert("Congrats! You've found the reward location!");
    } else {
        alert("Keep searching, you're not in the right spot yet.");
    }
}

