const { v4: uuid } = require("uuid");
const Employee = require("../database/Employee");

const getAllEmployees = async (filterParams) => {
  try {
    const allEmployees = await Employee.getAllEmployees(filterParams);
    return allEmployees;
  } catch (error) {
    throw error;
  }
};

const getOneEmployee = async (employeeId) => {
  try {
    const employee = await Employee.getOneEmployee(employeeId);
    return employee;
  } catch (error) {
    throw error;
  }
};

const createNewEmployee = async (newEmployee) => {
  const employeeToInsert = {
    ...newEmployee,
    id: uuid(),
    createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };
  try {
    const createdEmployee = await Employee.createNewEmployee(employeeToInsert);
    return createdEmployee;
  } catch (error) {
    throw error;
  }
};

const updateOneEmployee = async (employeeId, changes) => {
  try {
    const updatedEmployee = await Employee.updateOneEmployee(employeeId, changes);
    return updatedEmployee;
  } catch (error) {
    throw error;
  }
};

const deleteOneEmployee = async (employeeId) => {
  try {
    return await Employee.deleteOneEmployee(employeeId);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllEmployees,
  getOneEmployee,
  createNewEmployee,
  updateOneEmployee,
  deleteOneEmployee,
};
