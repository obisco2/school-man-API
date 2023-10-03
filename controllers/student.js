const studentqueries = require('../models/student');

async function registerstudents(req, res) {
  try {
    const result = await authModel.register(req.body);
    if (result) {
      res.status(200).json({ message: 'YOUR ACCOUNT IS CREATED SUCCESSFULLY AS A STUDENT', data: result });
    } else {
      res.status(200).json({ message: 'INVALID ROLE WAS INPUTTED' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function loginStudents(req, res) {
  try {
    const result = await authModel.login(req.body);
    if (result) {
      res.status(200).json({ message: 'YOU ARE LOGGED IN SUCCESSFULLY' });
    } else {
      res.status(200).json({ message: 'INVALID LOGIN DETAILS' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function getstudentprofile(req, res) {
  try {
    const result = await studentqueries.getProfileQueries(req.body);
    if (result) {
      res.status(200).json(result);
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
}

async function enrollcourse(req, res) {
  try {
    const result = await studentqueries.enrollStudentQuery(req.body);
    if (result) {
      res.status(201).json({ message: 'COURSE ENROLLED SUCCESSFULLY', data: result });
    }
  } catch (error) {
    res.status(501).json(error.message);
  }
}

const deletecourse = async (req, res) => {
  try {
    const result = await studentqueries.studentDeleteCourse(req.body);
    if (result) {
      res.status(201).json({ message: 'COURSE DELETED SUCCESSFULLY', data: result });
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
}

module.exports = {
  registerstudents,
  loginStudents,
  getstudentprofile,
  enrollcourse,
  deletecourse,
}
