import needle from 'needle'; 

// Function to handle POST requests
function sendPost(url, data) {
    needle.post(url, data, (err, res) => {
        if (err) {
            console.error(err);
        } else if (res && res.body) {
            console.log(res.body);
        } else {
            console.error('No response body');
        }
    });
}

// Function to handle GET requests
function sendGet(url) {
    needle.get(url, (err, res) => {
        if (err) {
            console.error(err);
        } else if (res && res.body) {
            console.log(res.body);
        } else {
            console.error('No response body');
        }
    });
}

// Send multiple POST requests to save students
sendPost('http://localhost:3000/save-student', {
    stdnum: "202101234",
    fname: "Mary Jane",
    lname: "Watson",
    age: 21
});

sendPost('http://localhost:3000/save-student', {
    stdnum: "202102345",
    fname: "Jamaika",
    lname: "Pascual",
    age: 21
});

sendPost('http://localhost:3000/save-student', {
    stdnum: "202103456",
    fname: "Toby",
    lname: "Roror",
    age: 18
});

sendPost('http://localhost:3000/save-student', {
    stdnum: "202104567",
    fname: "Ginger",
    lname: "Lake",
    age: 20
});

sendPost('http://localhost:3000/save-student', {
    stdnum: "202105678",
    fname: "Ore",
    lname: "Coki",
    age: 22
});

// Update a student's last name
sendPost('http://localhost:3000/update', {
    fname: "Mary Jane"
});

// Remove a student
sendPost('http://localhost:3000/remove-user', {
    stdnum: "202102345"
});

// Remove all students
sendPost('http://localhost:3000/remove-all-user', {});

// Search for a student using their student number
sendGet('http://localhost:3000/user?stdnum=202102345');

// Display all students
sendGet('http://localhost:3000/members');