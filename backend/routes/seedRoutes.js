import express from 'express';
import Course from '../models/courseModel.js';
import User from '../models/userModel.js';
import data from '../data.js';

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
  await Course.deleteMany();
  const createdCourses = await Course.insertMany(data.courses);

  await User.deleteMany();
  const createdUsers = await User.insertMany(data.users);

  res.send({ createdCourses, createdUsers });
});
export default seedRouter;
