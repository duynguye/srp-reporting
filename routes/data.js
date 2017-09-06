var express = require('express');
var router = express.Router();
var Controller = require('./controlers/issues.js');

// /* GET users listing. */
// router.all('/:issuetype', function(req, res, next) {
// 	switch(req.params.issuetype) {
// 		case 'all':
// 			res.status(200).send(Controller.sendAll());
// 		    break;
//
//         case '59a4c632c542ddcfd3f34f47':
//         case '59a4c63217fafbf7c156651a':
//         case '59a4c632bbf8f4d833e1cf36':
//         case '59a4c6325c3bb8d588ec297e':
//         case '59a4c6323c6833ef4d5b635a':
//         case '59a4c632a763d54cbe0dfeec':
//             res.send(Controller.sendLocal());
//             break;
//
// 		default:
// 			var err = new Error('Bad request');
// 			err.status = 404;
// 			next(err);
// 		break;
// 	}
// });

const routeEndpoints = [
    '59a4c632c542ddcfd3f34f47',
    '59a4c63217fafbf7c156651a',
    '59a4c632bbf8f4d833e1cf36',
    '59a4c6325c3bb8d588ec297e',
    '59a4c6323c6833ef4d5b635a',
    '59a4c632a763d54cbe0dfeec'
];

router.all('/:id/:category?', function (req, res) {
    switch (req.params.id) {
        case 'all':
            res.status(200).send(Controller.sendAll());
            break;

        default:
            let results = false;
            routeEndpoints.map(function (route) {
                if (route === req.params.id) {
                    let data = Controller.sendData(req.params.id, req.params.category);
                    if (data) {
                        res.status(200).send(data);
                        results = true;
                    } else {
                        res.status(404).send({error: 'Category not found.'});
                        results = true;
                    }
                }
            });

            if (!results) {
                res.status(404).send({error: 'ID not found.'});
            }

            break;
    }
});

module.exports = router;
