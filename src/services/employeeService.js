const { v4: uuid } = require("uuid");
const Employee = require("../database/Employee");

const getAllEmployees = async (filterParams) => {
  try {
    const allEmployees = await Employee.getAllEmployees(filterParams);
    //console.log("allEmployees in Service:");
    //console.log(allEmployees);
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
    console.log("employeeToInsert:");
    console.log(employeeToInsert);
    const createdEmployee = await Employee.createNewEmployee(employeeToInsert);
    console.log("createdEmployee:");
    console.log(createdEmployee);
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

const deleteOneWorkout = async (workoutId) => {
  try {
    return await Employee.deleteOneWorkout(workoutId);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllEmployees,
  getOneEmployee,
  createNewEmployee,
  updateOneEmployee,
  deleteOneWorkout,
};
