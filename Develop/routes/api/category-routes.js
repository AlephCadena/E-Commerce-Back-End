const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const allCategories = await Category.findAll({
      include: [{model: Product}],
    });
    res.status(200).json(allCategories);
  } catch (err) {
    res.status(500).json(err);
  }
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
  try {
    const allCategories = await Category.findByPk(req.params.id, {
      include: [{model: Product}],
    });
    if (!allCategories) {
      res.status(404).json({message: "That does not seem to exist."});
    }
    res.status(200).json(allCategories);
  } catch (err) {
    res.status(500).json(err);
  }
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  try {
    const allCategories = await Category.create(req.body);
    res.status(200).json('New Category Created');
  } catch (err) {
    res.status(500).json(err);
  }
  // create a new category
});

router.put('/:id', async (req, res) => {
  try {
    const allCategories = await Category.update(req.body, {
      where: {id: req.params.id}
    });
    if (!allCategories) {
      res.status(404).json({message: 'That does not seem to exist'})
    }
    res.status(200).json('Category has ben updated');
  } catch (err) {
    res.status(500).json(err);
  }
  // update a category by its `id` value
});

router.delete('/:id', async (req, res) => {
  try {
    const allCategories = await Category.destroy({
      where: { id: req.params.id },
    });
    if (!allCategories) {
      res.status(400).json('That does not seem to exist');
    }
    res.status(200).json('Category has been deleted');
  } catch (err) {
    res.status(400).json(err);
  }
  // delete a category by its `id` value
});

module.exports = router;
