---
title: 'Guia básica de Markdown'
description: 'Esta es una pequeña guia rápida de como usar la sintaxis de Markdown. '
pubDate: 'Oct 01 2023'
heroImage: '/markdown.png'
---

Aquí tenéis una pequeña guia rápida de como usar la sintaxis de Markdown.

## Encabezados

Las siguientes etiquetas `<h1>`—`<h6>` representan los seis niveles de encabezado `<h1>` es el más alto y `<h6>` el más bajo

# H1

## H2

### H3

#### H4

##### H5

###### H6

## Párrafos

Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.

Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.

## Imagenes

#### Syntaxis

```markdown
![Alt text](./full/or/relative/path/of/image)
```

#### Se muestra

![blog placeholder](/blog-placeholder-about.jpg)

## Blockquotes o Citas

The blockquote element represents content that is quoted from another source, optionally with a citation which must be within a `footer` or `cite` element, and optionally with in-line changes such as annotations and abbreviationsn 🔥 .
El elemento Blockquote o Cita representa el contenido que está siendo citado y que proviene de otra fuente.

### Citas sin Atribución

#### Sintaxis

```markdown
> Es el vecino el que elige al alcalde y es el alcalde el que quiere que sean los vecinos el alcalde.
> **Fijate** que puedes seguir utilizando _syntaxis Markdown_ dentro de un texto citado.
```

#### Muestra

> Es el vecino el que elige al alcalde y es el alcalde el que quiere que sean los vecinos el alcalde.
> **Fijate** que puedes seguir utilizando _syntaxis Markdown_ dentro de un texto citado.

### Blockquote with attribution

#### Syntaxis

```markdown
> De todas las historias de la Historia, la más triste sin duda es la de España, porque termina mal.<br>
> — <cite>Jaime Gil de Viedma[^1]</cite>
```

#### Muestra

> De todas las historias de la Historia, la más triste sin duda es la de España, porque termina mal.<br>
> — <cite>Jaime Gil de Viedma[^1]</cite>

[^1]: Esta cita fue extraida del poema _Apología y petición_, de su libro Moralidades, 1959.

## Tablas

#### Syntaxis

```markdown
| Itálica   | Negrita     | Código   |
| --------- | ----------- | -------- |
| _italica_ | **Negrita** | `codigo` |
```

#### Muestra

| Itálica   | Negrita     | Código   |
| --------- | ----------- | -------- |
| _italica_ | **Negrita** | `Código` |

## Bloques de Código

#### Syntaxis

Podemos utilizar 3 comillas invertidas ``` en una nueva linea, escribir el bloque de código, y cerrar este bloque con otras 3 comillas invertidas, en muchos casos podrás indicar el lenguaje del que se trata para que aplique el resaltado específico de ese lenguaje, por ejemplo html, javascript, css, markdown, typescript, txt, bash

````markdown
```html
<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <title>Aprendiendo Markdown</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```
````

Muestra

```html
<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <title>Aprendiendo Markdown</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```

## Tipos de lista

### Lista numerada

#### Syntaxis

```markdown
1. Primer item
2. Segundo item
3. Tercer item
```

#### Muestra

1. Primer item
2. Segundo item
3. Tercer item

### Lista no numerada

#### Syntaxis

```markdown
- Un item
- Otro item
- Y uno más
```

#### Muestra

- Un item
- Otro item
- Y uno más

### Listas dentro de listas

#### Syntaxis

```markdown
- Frutas
  - Manzana
  - Naranja
  - Platano
- Lacteos
  - Yogurt
  - Queso
```

#### Muestra

- Frutas
  - Manzana
  - Naranja
  - Platano
- Lacteos
  - Yogurt
  - Queso

## Otros elementos — abbr, sub, sup, kbd, mark

#### Syntaxis

```markdown
<abbr title="Graphics Interchange Format">GIF</abbr> es un formato de imagen.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Teclea <kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Supr</kbd> para cerrar Sesión.

La mayoría de las <mark>salamandras</mark> son nocturnas, y cazan insectos, bichos, y otros animales pequeños.
```

#### Muestra

<abbr title="Graphics Interchange Format">GIF</abbr> es un formato de imagen.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Teclea <kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Supr</kbd> para cerrar Sesión.

La mayoría de las <mark>salamandras</mark> son nocturnas, y cazan insectos, bichos, y otros animales pequeños.
