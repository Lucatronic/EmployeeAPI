const DB = require("./db.json");

const path = require("path");
const sqlite3 = require('sqlite3').verbose();
const db_name = path.join(__dirname, "base.db");
const db = new sqlite3.Database(db_name, err => {
  if (err) {
    return console.error(err.message);
  } else {
    console.log("Conexión exitosa con la base de Datos");
  }
})


const { saveToDatabase } = require("./utils");

/**
 * @openapi
 * components:
 *   schemas:
 *     Empleado:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: 61dbae02-c147-4e28-863c-db7bd402b2d6
 *         nombre:
 *           type: string
 *           example: Nestor B
 *         telefono:
 *           type: string
 *           example: +595994234853
 *         departamente:
 *           type: string
 *           example: Desarrollo
 *         createdAt:
 *           type: string
 *           example: 14/01/2023, 2:21:56 PM
 *         updatedAt:
 *           type: string
 *           example: 14/01/2023, 2:21:56 PM
 */
const getAllEmployees = (filterParams) => {
  try {
    return new Promise((resolve, reject) => {

      let sql = 'SELECT * FROM empleado ORDER BY Nombre';
      let param = [];

      if (filterParams.departamento) {
        sql = 'SELECT * FROM empleado WHERE departamento = ? ORDER BY Nombre';
        param = [filterParams.departamento]
      }

      //console.log("SQL:");
      //console.log(sql);

      db.all(sql, param, (err, rows) => {
        if (err) {
          reject({ status: 500, message: err.message });
        }
        //console.log("rows:");
        //console.log(rows);
        resolve(rows);
      });
    });

  } catch (error) {
    console.log(error);
    throw { status: 500, message: error };
  }
};

const getOneEmployee = (employeeId) => {
  try {
    return new Promise((resolve, reject) => {

      let sql = 'SELECT * FROM empleado WHERE id = ?';
      let param = [employeeId];

      db.get(sql, param, (err, row) => {
        if (err) {
          reject({ status: 500, message: err.message });
        }

        if (!row) {
          reject({
            status: 400,
            message: `Can't find employee with the id '${employeeId}'`,
          });
        }
        resolve(row);

      });
    });

  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const createNewEmployee = (newEmployee) => {
  try {

    return new Promise((resolve, reject) => {
      db.run('INSERT INTO empleado(id, nombre, telefono, departamento, createdAt, updatedAt) VALUES(?,?,?,?,?,?)', [
        newEmployee.id,
        newEmployee.nombre,
        newEmployee.telefono,
        newEmployee.departamento,
        newEmployee.createdAt,
        newEmployee.updatedAt],
        function (err) {
          if (err) {
            reject({ status: 500, message: err.message });
          }
          console.log("New employee has been added into the database with ID = " + newEmployee.id + " and Name = " + newEmployee.nombre);
          resolve(newEmployee);
        });
    });

  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

const updateOneEmployee = (employeeId, changes) => {
  try {

    return new Promise((resolve, reject) => {
      const updatedEmployee = {
        employeeId,
        ...changes,
        updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
      };


      db.run('UPDATE empleado SET nombre = ?, telefono = ?, departamento = ?, updatedAt = ? WHERE id = ?', [
        changes.nombre,
        changes.telefono,
        changes.departamento,
        new Date().toLocaleString("en-US", { timeZone: "UTC" }),
        employeeId],
        function (err) {
          if (err) {
            reject({ status: 500, message: err.message });
          }
          console.log("Entry updated successfully");
          resolve(updatedEmployee);
        });
    });

  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const deleteOneEmployee = (employeeId) => {
  try {

    return new Promise((resolve, reject) => {
      db.run('DELETE FROM empleado WHERE id = ?', employeeId, function (err) {
          if (err) {
            reject({ status: 500, message: err.message });
          }
          console.log("Entry deleted");
          resolve(true);
        });
    });
    
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

module.exports = {
  getAllEmployees,
  getOneEmployee,
  createNewEmployee,
  updateOneEmployee,
  deleteOneEmployee,
};
