const express = require("express");
const employeeController = require("../../controllers/employeeController");
const auth = require("../../middlewares/auth");

const router = express.Router();

/**
* @openapi
* /api/v1/employees:
*   get:
*     summary: Retrieve a list of employees
*     description: Retrieve a list of employees
*     tags:
*       - Employee
*     parameters:
*       - in: query
*         name: departamento
*         schema:
*           type: string
*         description: The department of the company where the employee works
*     responses:
*       200:
*         description: OK
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 status:
*                   type: string
*                   example: OK
*                 data:
*                   type: array
*                   items:
*                     $ref: "#/components/schemas/Empleado"
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
router.get("/", employeeController.getAllEmployees);
/**
* @swagger
* /api/v1/employees/{id}:
*   get:
*     tags:
*       - Employee
*     summary: Retrieve a single employee.
*     description: Retrieve a single employee.
*     parameters:
*       - in: path
*         name: id
*         required: true
*         description: ID of the employee to retrieve.
*         schema:
*           type: string
*     responses:
*       200:
*         description: OK
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 status:
*                   type: string
*                   example: OK
*                 data:
*                   $ref: "#/components/schemas/Empleado"
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
router.get("/:employeeId", employeeController.getOneEmployee);
/**
* @swagger
* /api/v1/employees:
*   post:
*     security:
*       - bearerAuth: []
*     tags:
*       - Employee
*     summary: Create a single employee.
*     description: Create a single employee.
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*               nombre:
*                 type: string
*                 description: The employee's name.
*                 example: Monica Benitez
*               telefono:
*                 type: string
*                 description: The employee's phone.
*                 example: 595983123456
*               departamento:
*                 type: string
*                 description: The employee's department.
*                 example: Desarrollo
*     responses:
*       201:
*         description: Created
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 status:
*                   type: string
*                   example: CREATED
*                 data:
*                   $ref: "#/components/schemas/Empleado"
*       403:
*         description: Forbidden
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 status:
*                   type: integer
*                   example: 403
*                 message:
*                   type: string
*                   example: Forbidden
*       5XX:
*         description: Failed
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
router.post("/", auth, employeeController.createNewEmployee);
/**
* @swagger
* /api/v1/employees/{id}:
*   patch:
*     security:
*       - bearerAuth: []
*     tags:
*       - Employee
*     summary: Update a single employee.
*     description: Update a single employee.
*     parameters:
*       - in: path
*         name: id
*         required: true
*         description: ID of the employee to update.
*         schema:
*           type: string
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*               nombre:
*                 type: string
*                 description: The employee's name.
*                 example: Monica Benitez
*               telefono:
*                 type: string
*                 description: The employee's phone.
*                 example: 595983123456
*               departamento:
*                 type: string
*                 description: The employee's department.
*                 example: Desarrollo
*     responses:
*       200:
*         description: OK
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 status:
*                   type: string
*                   example: OK
*                 data:
*                   $ref: "#/components/schemas/Empleado"
*       403:
*         description: Forbidden
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 status:
*                   type: integer
*                   example: 403
*                 message:
*                   type: string
*                   example: Forbidden
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
router.patch("/:employeeId", auth, employeeController.updateOneEmployee);
/**
* @swagger
* /api/v1/employees/{id}:
*   delete:
*     security:
*       - bearerAuth: []
*     tags:
*       - Employee
*     summary: Delete a single employee.
*     description: Delete a single employee.
*     parameters:
*       - in: path
*         name: id
*         required: true
*         description: ID of the employee to delete.
*         schema:
*           type: string
*     responses:
*       204:
*         description: No Content
*       403:
*         description: Forbidden
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 status:
*                   type: integer
*                   example: 403
*                 message:
*                   type: string
*                   example: Forbidden
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
router.delete("/:employeeId", auth, employeeController.deleteOneEmployee);

module.exports = router;
