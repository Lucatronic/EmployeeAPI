const express = require("express");
const employeeController = require("../../controllers/employeeController");
const recordController = require("../../controllers/recordController");
const { updateOneEmployee } = require("../../database/Employee");

const router = express.Router();

/**
 * @openapi
 * /api/v1/employees:
 *   get:
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
router.get("/", employeeController.getAllEmployees)
router.get("/:employeeId", employeeController.getOneEmployee)
router.get("/:workoutId/records", recordController.getRecordForWorkout)
router.post("/", employeeController.createNewEmployee)
router.patch("/:employeeId", employeeController.updateOneEmployee)
router.delete("/:workoutId", employeeController.deleteOneWorkout);

module.exports = router;
