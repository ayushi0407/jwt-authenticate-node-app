const Router = require('express-promise-router');
const controller = require('./controller');

const router = Router({ mergeParams: true });

module.exports = (authController) => {

    const baseRoute = '/post';
    router.route(`${baseRoute}`)
        .get(
            authController.authenticateUser,
            controller.getPostList
        )
    router.route(`${baseRoute}`)
        .post(
            authController.authenticateUser,
            controller.addPost
        )
    
    return router;
}
