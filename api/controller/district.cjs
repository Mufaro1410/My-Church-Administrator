const District = require('../models/district.cjs')

const getDistricts = async (req, res) => {
  const districts = await District.findAll()
  if (districts) {
    res.status(200).json({ districts })
    // console.log(users);
  }
  return
}

const addDistrict = async (req, res) => {
  const district = await District.create(req.body)
  res.status(201).json({ district })
}

const getDistrict = async (req, res) => {
  const { id } = req.params
  const district = await District.findByPk({ id: id })
  if (!district) {
    return res.json({message: 'No district found'})
  }
  res.status(200).json({ district })
}

const updateDistrict = async (req, res) => {
  const { id } = req.params
  const district = await District.upsert(id, req.body)
  res.status(200).json({ district })
}

const removeDistrict = async (req, res) => {
  const { id } = req.params
  const district = await District.destroy(id)
  if (!district) {
    return
  }
  res.status(200).json({ district })
}

module.exports = {
  getDistricts,
  addDistrict,
  getDistrict,
  updateDistrict,
  removeDistrict,
}