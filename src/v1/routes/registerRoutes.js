const express = require("express");
const registerController = require("../../controllers/registerController");

const router = express.Router();

/**
* @swagger
* /api/v1/register:
*   post:
*     tags:
*       - Register
*     summary: Get access token.
*     description: To be able to create, update or delete a resource, it is necessary to register an user.
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*               email:
*                 type: string
*                 description: The user's email.
*                 example: someone@gmail.com
*               password:
*                 type: string
*                 description: The user's password.
*                 example: mypassword
*     responses:
*       201:
*         description: Register Ok
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 status:
*                   type: integer
*                   example: 201
*                 accessToken:
*                   type: string
*                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoic29tZW9uZUBnbWFpbC5jb20iLCJwYXNzd29yZCI6Im15cGFzc3dvcmQifSwiaWF0IjoxNjczODY4MzQxLCJleHAiOjE2NzM4NzU1NDF9.IuZeYOTGwOm913sG0N30NjxBSx3cxutq-ZPi_wFoSl4
*       5XX:
*         description: FAILED
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 status:
*                   type: string
*                   example: FAILED
*                 data:
*                   type: object
*                   properties:
*                     error:
*                       type: string
*                       example: "Some error message"
*/
router.post("/", registerController.registerUser);

module.exports = router;