# Bucles (Loops) en JavaScript

Los bucles nos permiten ejecutar un bloque de código repetidas veces, lo cual es fundamental para trabajar con listas de datos o tareas repetitivas.

## Tipos de Bucles

### 1. For (Clásico)
Es el más utilizado para iteraciones controladas por un contador.
```javascript
for (let i = 0; i < 10; i++) { ... }
```

### 2. While
Ejecuta el bloque mientras la condición sea verdadera.
```javascript
while (condicion) { ... }
```

### 3. Do...While
Similar al `while`, pero garantiza que el código se ejecute **al menos una vez**, ya que la condición se evalúa al final.

### 4. For...Of (ES6)
Introducido en ECMAScript 6, es la forma más sencilla de recorrer **arrays** (arreglos) y otros elementos iterables.
```javascript
for (let item of lista) { ... }
```

### 5. For...In
Se utiliza para iterar sobre las **propiedades de un objeto**.
```javascript
for (let propiedad in objeto) { ... }
```
