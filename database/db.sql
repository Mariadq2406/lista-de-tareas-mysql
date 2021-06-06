-- Creando la base de datos --
CREATE DATABASE listadetareas;

--Usando la base de datos--
use listadetareas;

--Creando una tabla--
CREATE TABLE tareas (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
tarea VARCHAR(50) NOT NULL,
fecha DATE,
descripcion VARCHAR(160),
estatus VARCHAR(25)
);

--Mostrar tablas--
SHOW TABLES;

--Describir tabla--
describe tareas