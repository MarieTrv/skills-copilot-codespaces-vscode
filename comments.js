// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create comments array
const comments = [
    {
        username: 'Alice',
        comment: 'I love this article!'
    },
    {
        username: 'Bob',
        comment: 'I love this article!'
    },
    {
        username: 'Charlie',
        comment: 'I love this article!'
    }
];

// Create a GET route that sends the comments array to the client
app.get('/comments', (req, res) => {
    res.json(comments);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
