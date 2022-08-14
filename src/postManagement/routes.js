const Router = require('express-promise-router');
const controller = require('./controller');

const router = Router({ mergeParams: true });

module.exports = (authController) => {

    const baseRoute = '/post';
    router.route(`${baseRoute}`)
        .get(
            authController.authenticateUser,
            controller.get
        )

    router.route(`${baseRoute}`)
        .post(
            authController.authenticateUser,
            controller.post
        )

    router.route(`${baseRoute}/:identifier`)
        .put(
            authController.authenticateUser,
            controller.update
        )

    router.route(`${baseRoute}/:identifier`)
        .delete(
            authController.authenticateUser,
            controller.remove
        )
    
    return router;
}
