const axios = require('axios');

const Dev = require('../models/Dev');

module.exports = {

  async index(req, res) {
    const users = await Dev.findAll();

    return res.json(users);
  },

  async store(req, res) {
    const { github_username, techs, latitude, longitude } = req.body;

    let dev = await Dev.findOne({ where: { github_username } });

    if (!dev) {

      const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
      const { name = login, avatar_url } = apiResponse.data;
      let { bio } = apiResponse.data;

      if (bio === null) {
        bio = "";
      }

      dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs,
        latitude,
        longitude
      })

    }

    return res.json(dev);
  },

  async delete(req, res) {
    const { github_username } = req.query;

    const dev = await Dev.destroy({
      where: {
        github_username
      }
    });

    if (!dev) {
      return res.status(404).end();
    }
    return res.status(204).end();

  },


  async update(req, res) {

    const { id, name, avatar_url, bio, latitude, longitude, techs } = req.body;

    const dev = await Dev.findOne({ where: { id } });


    if (dev) {
      dev.update({
        name: name,
        avatar_url: avatar_url,
        bio: bio,
        latitude: latitude,
        longitude: longitude,
        techs: techs,
      })
    }

    return res.status(204).end();

  },


}
