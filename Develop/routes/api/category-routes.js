const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try{
    const categories = await Category.findAll(
      {
        include:[{model:Product}]
      }
    );
    res.status(200).json(categories);
  }catch(err){
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try{
    const category = await Category.findByPk(req.params.id,{
      include:[{model:Product}]
    });
    if(!category){
      res.status(404).json({message: 'No category found for that id.'});
      return;
    }
    res.status(200).json(category);
  }catch(err){
    res.status(500).json(err);
  }
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  // create a new category
  try{
    var newCat = {};
    newCat.category_name = req.body.category_name;
    const category = await Category.create(newCat);
    res.status(200).json(category);
  }catch(err){
    res.status(404).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try{
    var cat = req.body;
    const category = await Category.update(
      {category_name:cat.category_name},
      {where:{id:req.params.id}}
    );
    console.log("CATEGORY", category);
    res.status(200).json(category);
  }catch(err){
    res.status(404).json(err);
  }
});

router.delete('/:id',async (req, res) => {
  try{
    const del = await Category.destroy(
      {where:{id:req.params.id}
    });
    res.status(200).json(del);
  }catch(err){
    res.status(404).json(err);
  }
  // delete a category by its `id` value
});

module.exports = router;
