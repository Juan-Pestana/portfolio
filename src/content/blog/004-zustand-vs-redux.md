---
title: 'State Global en React, sin chorradas'
description: 'Gestores de estado global en React, Zustand Vs Redux'
pubDate: 'Oct 19 2023'
heroImage: '/ZustandRedux/ZustandRedux.png'
---

Tomar la decisión sobre cómo gestionar el Estado de una aplicación en React, puede llegar a ser una tarea bastante abrumadora, y dependiendo del tipo de aplicación hay un montón de opciones.

Un **useState** de andar por casa, y mover props de componente en componente puede ser una opción, **useContext** como acercamiento al estado global cuando la cosa empieza a coger cierta dimensión y no te preocupan demasiado el rendimiento, o **Redux / Redux Toolkit** cuando te sobra el tiempo y quieres impresionar a alguien.

Todas estas opciones son perfectamente válidas según el tipo de aplicación, pero cambiar de una a otra puede ser una taréa muy pesada, y como el 80% de los proyectos que empiezo, no se como van a terminar… Hace ya tiempo que me puse a buscar una opción que permitiese hacer crecer la aplicación sin arrepentirme demasiado de decisiones tomadas.

Necesitaba un gestor de estado ligero, fácil de usar e implementar, y válido tanto para aplicaciones grandes como pequeñas.

La revelación llegó cuando un día para probar <a href='https://threejs.org/' target='_blank'>Three.js</a> decidí seguir <a href='https://youtu.be/qpOZup_3P_A?si=pgvN-xm-Q8QolaCN' target='_blank'>un tutorial</a> para hacer un <a href='https://minecrash.netlify.app' target='_blank'>Clon de Minecraft</a>

![minecraft](/ZustandRedux/minecraft.png)

Tengo un hijo de 8 años y ya se había cansado de su <a href='https://pokedex-dusky-theta.vercel.app/' target='_blank'>Pokedex</a> 😮‍💨

Ahí es donde descubrí <a href='https://zustand-demo.pmnd.rs/' target='_blank'>Zustand</a>.

Zustand combina lo mejor de los mundos: es fácil de usar y a la vez tremendamente potente.

- Proporciona una API minimalista para administrar el estado de tu aplicación, lo que consigue que tu código sea más fácil de mantener y de entender.

- Con Zustand podrás crear y gestionar el Estado global, sin tener que escribir un montón de código repetitivo.

- Podrás consumir y actualizar el estado sin tener que depender de Context ni Providers que envuelvan toda la aplicación.

- Se acavó lo de tener el estado por un lado, las acciones por otro y reducers complejos e infinitos.

- Para formas más complejas de Estado, puedes Implementar Immer sin problemas.

- Puedes y debes dividir el estado en Slices para cada funcionalidad, siguiendo el patrón **_separation of concerns_**, o como a mi me gusta llamarlo <abbr title='Cada Cosa Pa Su Cosa'>_CCPSC_</abbr>.

En definitiva podrás contar con un código bonito, sencillo y limpio y escalable.

### Para ilustrarlo, volvamos al ejemplo del Clon de Minecraft.

Piensa que cada cubo de los que puedes crear y eliminar en la aplicación tienen su textura y ocupan su espacio en el plano tridimensional, pueden ser miles de cubos y esto hay que reflejarlo en el Estado.

Con Zustand, consumismos y actualizamos el Estado, de una manera super sencilla y optima.

Aquí tienes todo el estado global de la aplicación:

```jsx
import { nanoid } from 'nanoid'
import create from 'zustand'

export const useStore = create((set) => ({
  texture: 'dirt',
  cubes: [
    {
      id: nanoid(),
      texture: 'grass',
      pos: [1, 3, 1],
    },
  ],
  addCube: (x, y, z) => {
    set((state) => ({
      cubes: [
        ...state.cubes,
        {
          id: nanoid(),
          texture: state.texture,
          pos: [x, y, z],
        },
      ],
    }))
  },
  removeCube: (id) => {
    set((state) => ({
      cubes: state.cubes.filter((cube) => {
        return cube.id !== id
      }),
    }))
  },
  setTexture: (texture) => {
    set(() => ({ texture }))
  },
}))
```

Para consumir el estado solo tienes que importar el hook **useStore** que acabamos de crear y seleccionar que acción o elemento del estado te quieres traer.

```jsx
import { useStore } from '../hooks/useStore'

export function Cube() {
  const [removeCube, addCube] = useStore((state) => [
    state.removeCube,
    state.addCube,
  ])
	const [cubes] = useStore((state) => [state.cubes])

...
}
```

Y ya está... Realmente no hay que complicarse la vida.

Como siempre te voy a recomendar que le eches un vistazo a <a href='https://docs.pmnd.rs/zustand/getting-started/introduction' target='_blank'>la documentación</a>, aunque en este caso os incluyo también <a href='https://dev.to/franklin030601/usando-zustand-con-react-js-33le' target='_blank'>un artículo</a> más detallado sobre el uso de Zustand, y <a href='https://www.youtube.com/watch?v=p2wF2wRjcN0&t=110s' target='_blank'>un video del bueno de Midu</a> con una comparativa más detallada.
