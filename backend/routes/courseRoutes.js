import express from 'express';
import Course from '../models/courseModel.js';

const courseRouter = express.Router();

courseRouter.get('/', async (req, res) => {
  const courses = await Course.find();
  res.send(courses);
});

courseRouter.get('/slug/:slug', async (req, res) => {
  const course = await Course.findOne({ slug: req.params.slug });
  if (course) {
    res.send(course);
  } else {
    res.status(404).send({ message: 'Course Not Found' });
  }
});
courseRouter.get('/:id', async (req, res) => {
  const course = await Course.findById(req.params.id);
  if (course) {
    res.send(course);
  } else {
    res.status(404).send({ message: 'Course Not Found' });
  }
});

export default courseRouter;
