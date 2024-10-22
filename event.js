function rewardUser() {
    fetch('/reward', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId: '1234' }) // Example data
    }).then(response => {
        return response.json();
    }).then(data => {
        alert('Reward unlocked: ' + data.reward);
    }).catch(error => {
        console.error('Error:', error);
    });
}

