import needle from 'needle';

// POST request to '/add-book'
needle.post(
    'http://localhost:3000/add-book',
    { bookName: 'Harry Potter and the Philosopher’s Stone',
      isbn: '978-0-7475-3269-9',
      author: 'J.K Rowling',
      yearPublished: '1997'},

    // { bookName: 'Harry Potter and the Chamber of Secrets',
    //   isbn: '0-7475-3849-2',
    //   author: 'J.K Rowling',
    //   yearPublished: '1998'},

    // { bookName: 'The Little Prince',
    // isbn: '978-0156012195',
    // author: 'Antoine Saint-Exupery',
    // yearPublished: '1943'},


    (err, res) => {
        if (err) {
            console.error(err);
        } else {
            console.log(res.body);
        }
    }
);
