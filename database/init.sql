-- Tabla de Departamentos
CREATE TABLE departamento (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL
);

-- Tabla de Empleados
CREATE TABLE empleado (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    id_departamento INT REFERENCES departamento(id)
);

-- Tabla de Gastos
CREATE TABLE gasto (
    id SERIAL PRIMARY KEY,
    fecha DATE NOT NULL,
    descripcion VARCHAR(255),
    monto NUMERIC(10, 2),
    id_empleado INT REFERENCES empleado(id),
    id_departamento INT REFERENCES departamento(id)
);
