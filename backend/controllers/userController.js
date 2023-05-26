import asyncHandler from 'express-async-handler'

// @desc Auth user/ set Token
// route POST /api/user/auth
// @access Public
const authUser = asyncHandler(async (req, res) => {
    res.status(401)
    throw new Error('Something went wrong')
});

export {
    authUser,
}