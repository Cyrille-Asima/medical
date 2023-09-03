import asyncHandler from '../middleware/asyncHandler.js';
import User from '../models/userModel.js';

//@desc Auth user & token
//@route Post/api/users/login
//@access  Public
const authUser = asyncHandler(async (req, res) => {
    res.send('auth user')
})


//@desc Register user
//@route Post/api/users
//@access  Public
const registerUser = asyncHandler(async (req, res) => {
    res.send('register user')
})


//@desc Logout user/ clear cookie
//@route Post/api/users/logout
//@access  Private
const logoutUser = asyncHandler(async (req, res) => {
    res.send('logout user')
})

//@desc Get user profile
//@route Get/api/users/profile
//@access  private

const getUserProfile = asyncHandler(async (req, res) => {
    res.send('get user profile ')
})


//@desc Update user profile
//@route Put/api/users/profile
//@access  Private

const updateUserProfile = asyncHandler(async (req, res) => {
    res.send('update user profile ')
})


//@desc Get users
//@route Get/api/users
//@access  Private/Admin

const getUsers = asyncHandler(async (req, res) => {
    res.send('get user ')
})

//@desc Get users by ID
//@route Get/api/users/:id
//@access  Private/Admin

const getUsersByID = asyncHandler(async (req, res) => {
    res.send('get user by id ')
})

//@desc Delete users
//@route Delete/api/users/:id
//@access  Private/Admin

const deleteUser = asyncHandler(async (req, res) => {
    res.send('delete user ')
})

//@desc Update users
//@route Put/api/users/:id
//@access  Private/Admin

const UpdateUser = asyncHandler(async (req, res) => {
    res.send('update user ')
})


export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    deleteUser,
    getUsersByID,
    UpdateUser
}