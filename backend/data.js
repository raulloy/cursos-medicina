import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Raul Loyola',
      email: 'raul.loy@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'User',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  courses: [
    {
      name: 'Anatomy 101',
      slug: 'anatomy-101',
      category: 'Anatomy',
      image: '/images/anatomy.png',
      price: 120,
      seatsAvailable: 50,
      duration: '8 weeks',
      instructor: 'Dr. John Doe',
      rating: 4.8,
      numReviews: 30,
      status: 1,
      description: 'Comprehensive course on human anatomy.',
      videoLinks: [
        {
          name: 'Crash Course Anatomy & Physiology Preview',
          video:
            'https://www.youtube.com/watch?v=pVkUCrgQCCc&list=PL8dPuuaLjXtOAKed_MxxWBNaPno5h3Zs8',
        },
        {
          name: 'Introduction to Anatomy & Physiology',
          video:
            'https://www.youtube.com/watch?v=i5tR3csCWYo&list=PL8dPuuaLjXtOAKed_MxxWBNaPno5h3Zs8',
        },
      ],
    },
    {
      name: 'Pharmacology Fundamentals',
      slug: 'pharmacology-fundamentals',
      category: 'Pharmacology',
      image: '/images/pharmacology.png',
      price: 299,
      seatsAvailable: 25,
      duration: '12 weeks',
      instructor: 'Dr. Jane Smith',
      rating: 4.5,
      numReviews: 20,
      status: 1,
      description: 'Learn the basics of pharmacology and drug interactions.',
      videoLinks: [
        {
          name: 'Interaction of pharmaceutical substances part 1',
          video:
            'https://www.youtube.com/watch?v=sbRnDfJIatc&list=PLozb1R7B1GKzlc1IKehQ2_0q_Kfdg48wK',
        },
        {
          name: 'Interaction of pharmaceutical substances part 2',
          video:
            'https://www.youtube.com/watch?v=_68CairahfU&list=PLozb1R7B1GKzlc1IKehQ2_0q_Kfdg48wK',
        },
        {
          name: 'Cholinergic drugs part 1',
          video:
            'https://www.youtube.com/watch?v=Y540ewlPa2o&list=PLozb1R7B1GKzlc1IKehQ2_0q_Kfdg48wK',
        },
        {
          name: 'Cholinergic drugs part 2',
          video:
            'https://www.youtube.com/watch?v=DxBLtHJ6nXM&list=PLozb1R7B1GKzlc1IKehQ2_0q_Kfdg48wK',
        },
      ],
    },
  ],
};
export default data;
