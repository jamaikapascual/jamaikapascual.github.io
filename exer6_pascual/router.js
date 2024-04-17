import { saveStudent, updateStudent, removeStudent, removeAllStudents, getStudent, getAllStudents } from './controller.js'

function router(app) {
    //save a new student
    app.post('/save-student', saveStudent);
    //update student last name             
    app.post('/update', updateStudent);
    //remove student                
    app.post('/remove-user', removeStudent);
    //remove all student             
    app.post('/remove-all-user', removeAllStudents);
    //get student      
    app.get('/user', getStudent);
    //get all student                       
    app.get('/members', getAllStudents);   

    // Define a default route handler for the root URL ("/")
    app.get('/', (req, res) => {
        res.send('Welcome to the Student Management System');
    });
}

export default router;