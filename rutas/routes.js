const express =require('express');
const router = express.Router();


//Opcion 0 Muetra todo
//const products = require('../jsonFolder/energia.json');
//console.log(products);

//Opcion 1 solo products
//const products = require('../jsonFolder/energia.json');
//console.log(products.products);

//Opcion 2 solo products
const varenergia = require('../jsonFolder/energia.json');
const varcpu = require('../jsonFolder/equipopersonal.json');
const varimp = require('../jsonFolder/impresion.json');
const varproy = require('../jsonFolder/proyector.json');

//const varproducts = require('../jsonFolder/energia.json');
//console.log({jproducts});
// rutas

/*
router.route('/:opcion')
  .get(function (req,res)
  {
        res.json({jproducts})
  }
);*/

router.get('/:numeroX', (req, res) => {
  console.log(typeof req.params.numeroX);
  const varnumX = parseInt(req.params.numeroX);
  console.log(typeof varnumX);
  console.log(varnumX);


  switch (varnumX) {
    case 1:
      res.json(varenergia);
      break;
    case 2:
      res.json(varcpu);
      break;
    case 3:
      res.json(varimp);
      break;
    case 3:
      res.json(varproy);
      break;
    default:
    res.status(404);
    res.json({"error":'Bad request'});
      break;
  }

/*
  if (varnumX == 1)
  {
    //res.status(404);
    res.json(varenergia)
    return ;

  }
  else {
    res.status(404);
    res.json({"error":'Bad request'});
    return ;
  }
*/


});

module.exports = router;
