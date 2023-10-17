```javascript
const User = require('../models/User');
const Strain = require('../models/Strain');
const Cultivator = require('../models/Cultivator');
const Dispensary = require('../models/Dispensary');
const dbConnect = require('./dbConnect');

const seed = async () => {
  await dbConnect();

  // Create dummy data
  const admin = new User({
    username: 'admin',
    password: 'admin',
    role: 'admin',
  });

  const cultivators = Array.from({ length: 20 }, (_, i) => new Cultivator({
    name: `Cultivator ${i + 1}`,
    strains: [],
  }));

  const dispensaries = Array.from({ length: 15 }, (_, i) => new Dispensary({
    name: `Dispensary ${i + 1}`,
    inventory: [],
  }));

  const strains = Array.from({ length: 100 }, (_, i) => new Strain({
    name: `Strain ${i + 1}`,
    type: ['Sativa', 'Hybrid', 'Indica'][Math.floor(Math.random() * 3)],
    thcLevel: Math.random() * 30,
    cbdLevel: Math.random() * 20,
    betaCaryophyllene: Math.random() * 10,
    betaMyrcene: Math.random() * 10,
    limonene: Math.random() * 10,
    effects: ['Energetic', 'Happy', 'Creative', 'Focused', 'Inspired', 'Calm', 'Relaxed'][Math.floor(Math.random() * 7)],
    cultivator: cultivators[Math.floor(Math.random() * 20)]._id,
  }));

  // Assign strains to cultivators and dispensaries
  strains.forEach((strain, i) => {
    const cultivator = cultivators[Math.floor(i / 5)];
    const dispensary = dispensaries[Math.floor(i / 7)];

    cultivator.strains.push(strain._id);
    dispensary.inventory.push({
      strain: strain._id,
      quantity: Math.floor(Math.random() * 100),
    });
  });

  // Save all data to the database
  await Promise.all([
    admin.save(),
    ...cultivators.map(cultivator => cultivator.save()),
    ...dispensaries.map(dispensary => dispensary.save()),
    ...strains.map(strain => strain.save()),
  ]);

  console.log('Database seeded successfully');
};

seed().catch(console.error);
```