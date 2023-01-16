const employeeService = require("../services/employeeService");

const getAllEmployees = async (req, res) => {
  const { departamento } = req.query;
  try {
    const allEmployees = await employeeService.getAllEmployees({ departamento });
    console.log("allEmployees in Controller:");
    console.log(allEmployees);
    res.send({ status: "OK", data: allEmployees });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getOneEmployee = async (req, res) => {
  const {
    params: { employeeId },
  } = req;

  if (!employeeId) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "Parameter ':employeeId' can not be empty" },
    });
    return;
  }

  try {
    const employee = await employeeService.getOneEmployee(employeeId);
    res.send({ status: "OK", data: employee });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const createNewEmployee = async (req, res) => {
  const { body } = req;

  console.log("body:");
  console.log(body);

  if (
    !body.nombre ||
    !body.telefono ||
    !body.departamento
  ) {
    res.status(400).send({
      status: "FAILED",
      data: {
        error:
          "One of the following keys is missing or is empty in request body: 'nombre', 'telefono', 'departamento'",
      },
    });
  }

  const newEmployee = {
    nombre: body.nombre,
    telefono: body.telefono,
    departamento: body.departamento,
  };

  try {
    const createdEmployee = await employeeService.createNewEmployee(newEmployee);
    res.status(201).send({ status: "OK", data: createdEmployee });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILDED", data: { error: error?.message || error } });
  }
};

const updateOneEmployee = async (req, res) => {
  const {
    body,
    params: { employeeId },
  } = req;

  if (!employeeId) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "Parameter ':employeeId' can not be empty" },
    });
  }

  try {
    const updatedEmployee = await employeeService.updateOneEmployee(employeeId, body);
    res.send({ status: "OK", data: updatedEmployee });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const deleteOneWorkout = async (req, res) => {
  const {
    params: { workoutId },
  } = req;

  if (!workoutId) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "Parameter ':workoutId' can not be empty" },
    });
  }

  try {
    console.log("Ok0");
    if (await employeeService.deleteOneWorkout(workoutId)) {
      console.log("Ok1");
      res.status(204).send({ status: "OK" });
      console.log("Ok2");
    }

  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = {
  getAllEmployees,
  getOneEmployee,
  createNewEmployee,
  updateOneEmployee,
  deleteOneWorkout,
};
