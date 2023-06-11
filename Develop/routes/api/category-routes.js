const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
router.get('/', async (req, res) => {
// find all categories with its associated Products
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
// find one category by its `id` value with its associated Products
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
  
});
 // create a new category
router.post('/', async (req, res) => {  
  try{
    const category = await Category.create(req.body);
    res.status(200).json(category);
  }catch(err){
    res.status(404).json(err);
  }
});
// update a category by its `id` value
router.put('/:id', async (req, res) => { 
  try{
    var cat = req.body;
    const category = await Category.update(
      {category_name:cat.category_name},
      {where:{id:req.params.id}}
    );
    res.status(200).json(category);
  }catch(err){
    res.status(404).json(err);
  }
});
 // delete a category by its `id` value
router.delete('/:id',async (req, res) => {
  try{
    const del = await Category.destroy(
      {where:{id:req.params.id}
    });
    res.status(200).json(del);
  }catch(err){
    res.status(404).json(err);
  } 
});

module.exports = router;
