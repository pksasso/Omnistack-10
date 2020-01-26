const axios = require('axios');

const User = require('../models/User');

module.exports = {

  async index(req, res) {
    const users = await User.findAll();

    return res.json(users);
  },


  async store(req, res) {
    const { github_username, techs, latitude, longitude } = req.body;

    let user = await User.findOne({ where: { github_username } });

    if (!user) {

      const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
      const { name = login, avatar_url } = apiResponse.data;
      let { bio } = apiResponse.data;

      if (bio === null) {
        bio = "";
      }

      user = await User.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs,
        latitude,
        longitude
      })

    }

    return res.json(user);
  }
}





















// const axios = require('axios');
// const Dev = require('../models/Dev');
// const parseStringAsArray = require('../utils/parseStringAsArray');

// module.exports = {

//   async index(req, res) {
//     const devs = await Dev.find();

//     return res.json(devs);
//   },

//   async store(req, res) {
//     const { github_username, techs, latitude, longitude } = req.body;

//     let dev = await Dev.findOne({ github_username });

//     if (!dev) {
//       const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

//       const { name = login, avatar_url, bio } = apiResponse.data;

//       const techsArray = parseStringAsArray(techs);

//       const location = {
//         type: 'Point',
//         coordinates: [longitude, latitude],
//       }

//       dev = await Dev.create({
//         github_username,
//         name,
//         avatar_url,
//         bio,
//         techs: techsArray,
//         location
//       })
//     }

//     return res.json(dev);
//   },

//   async update(req, res) {

//     const { _id, name, avatar_url, bio, latitude, longitude, techs } = req.body;

//     const dev = await Dev.findById(_id);

//     const techsArray = parseStringAsArray(techs);
//     const location = {
//       type: 'Point',
//       coordinates: [longitude, latitude],
//     }

//     dev.name = name;
//     dev.avatar_url = avatar_url;
//     dev.bio = bio;
//     dev.location = location;
//     dev.techs = techsArray;

//     dev.save();

//     return res.status(204).end();

//   },

//   async delete(req, res) {
//     const { github_username } = req.query;

//     const dev = await Dev.findOneAndDelete({ github_username });
//     if (!dev) {
//       return res.status(404).end();
//     }
//     return res.status(204).end();

//   }

// };