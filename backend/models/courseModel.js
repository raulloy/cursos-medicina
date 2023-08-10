import mongoose from 'mongoose';

const videoLinkSchema = new mongoose.Schema({
  name: { type: String, required: true },
  video: { type: String, required: true },
});

const courseSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    seatsAvailable: { type: Number, required: true },
    duration: { type: String },
    instructor: { type: String },
    rating: { type: Number, required: true },
    numReviews: { type: Number, required: true },
    status: { type: Number, required: true },
    description: { type: String, required: true },
    videoLinks: [videoLinkSchema],
  },
  {
    timestamps: true,
  }
);

const Course = mongoose.model('Course', courseSchema);
export default Course;
