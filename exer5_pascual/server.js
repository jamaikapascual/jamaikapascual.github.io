import express from 'express';
import { appendFileSync } from 'node:fs';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// GET route for /add-book
app.get('/add-book', (req, res) => {
    res.send('This endpoint is for adding books.');
});

app.post('/add-book', (req, res) => {
    // Extract book details from request body
    const{ bookName, isbn, author, yearPublished } = req.body;

    // Check if all fields are present and not em   pty
    if (!bookName || !isbn || !author || !yearPublished) {
        return res.json({ success: false});
    }

    // Save the data to a file
    let bookData = `${bookName},${isbn},${author},${yearPublished}\n`;
    try {
        appendFileSync('books.txt', bookData);
        console.log('Book added successfully.');
        return res.json({ success: true });
    } catch (err) {
        console.error('Error:', err);
        return res.json({ success: false });
    }
});

// Start the server
app.listen(3000, () => {
    console.log('Server started at port 3000');
});
