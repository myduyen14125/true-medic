// index.js
// commonJS
const faker = require("faker");

//Set locale to use Vietnamese 
// faker.locale = 'vi'
module.exports = () => {
  const data = { blogs: [] };
  // Create 1000 users
  for (let i = 0; i < 20; i++) {
    data.blogs.push({
      id: i,
      createdAt: faker.date.recent(),
      title: faker.name.title(),    
      thumbnail: faker.image.business(),
      description: faker.lorem.sentence(),
      content: faker.lorem.paragraph(),
    });
  }
  return data;
};
