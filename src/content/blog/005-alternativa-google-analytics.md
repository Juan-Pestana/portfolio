---
title: 'Te la estás jugando con Google Analytics??'
description: 'Plausible, alternativa segura a Google Analytics'
pubDate: 'Oct 29 2023'
heroImage: '/Plausible/gdpr_vs_analytics.png'
---

Muy bien, ya has terminado tu último proyecto web, o blog, o similar y ahora es el momento de darle un poco de bombo en Redes Sociales, hablarle de él a tus amigos y conocidos, y ver en definitiva si alguien te hace caso. 🤓

Pero espera un momento… ¿Como te vas a enterar de si toda esta gente que te felicita y te pregunta por tu nuevo proyecto, realmente está entrando a verlo, o probarlo?

Necesitas una herramienta de _Analytics_…

Ya sabes que Google Analytics es lo que utiliza todo el mundo, así que te metes en Google para crearte una cuenta y ver como implementarlo, pero de repente ves que OJO… Ahí, entre los resultados de tu búsqueda aparece alguna noticia en la que se deja entrever que <a href='https://globalpoliticsandlaw.com/blog/2022/02/15/google-analytics-rgpd/' target='_blank'>Europa con su RGPD y Google están peleados</a> .

Google Analytics no es malo de por sí, con la configuración adecuada se puede llegar a anonimizar todo de manera suficiente como para que cumpla con los criterios de privacidad de la RGPD.

La cuestión o el problema es que, aún con esta configuración, vas a seguir mandando pequeños fragmentos de información del usuario a los servidores de Google en EEUU, donde son procesadas lejos del control que podría hacer Europa sobre esta información. Y esto es lo que a Europa no le gusta.

¿Sabías que muchas veces el único motivo por el que se hace necesario incorporar un _Cookie_ _Banner_ de esos, es porque esa web está enviando tu información fuera de Europa?

Pues sí, así es. Aunque no utilices ninguna otra _cookie_ en tu proyecto, y tengas toda la infraestructura alojada en Europa, si utilizas Google Analytics ya tienes que poner el dichoso _banner_ e informar al usuario de que sus datos saldrán de la Unión Europea.

Por esto, no es ninguna tontería hoy en día valorar alternativas.

Hoy os vengo a presentar <a href='https://plausible.io/' target='_blank'>Plausible</a>, que es la herramienta de _analytics_ que yo utilizo en mis proyectos. Rascando un poco te das cuenta de que hay muchas más, pero a mi, Plausible, me encantó por lo sencillo, ligero, y fácil de implementar que es.

¿Que tiene Plausible de particular?

Bueno, pues en realidad tres cosas:

- En primer lugar, que es de código abierto, por lo que podrías llegar a alojarlo en tu propio servidor
- Que está desarrollado con la privacidad como principal prioridad y con sus servidores en la Unión Europea,
- Por último, que la funcionalidad y los datos que aporta son, menos que GA sí, pero suficientes para la mayoría de los casos.

Lo único que necesitas para empezar a recibir analíticas en tu panel de Plausible es: crearte una cuenta, indicar el nombre del proyecto, indicar el dominio en el que está alojado, copiar el _Script_ que te da, y pegarlo en el _Head_ de tu proyecto.

```javascript
<script
  defer
  data-domain="yourdomain.com"
  src="https://plausible.io/js/script.js"
></script>
```

Solo con esto podrás conocer información sobre cuantas personas visitan tu proyecto, el país de origen, cuáles son las páginas más visitadas, y la web desde la que llegan los visitantes a tu proyecto.

![plausible dashboard](/Plausible/plausible_dashboard.webp)

Por supuesto, tiene un montón de opciones más de configuración para que puedas sacarle el máximo partido a tus datos.

Es súper sencillo traquear determinados eventos, como _clicks_ en un determinado botón o enlace por ejemplo, o el envío de un formulario. Para esto tan solo tienes que generar el nombre del evento que quieres crear, y añadir una clase CSS en el elemento para el que quieras “escuchar” los _clicks_.

Esta herramienta, así configurada, tiene la pequeña pega de que algunos _adBloquers_ como Ublock pueden hacer que no se envíe la información. Sin embargo, esto se puede prevenir <a href='https://plausible.io/docs/proxy/introduction' target='_blank'>generando un Proxy a tu propio servicio</a> con el que saltarte esta limitación y obtener mediciones más precisas.

Yo, como últimamente despliego mis proyectos en Vercel, tan solo tengo que crear un archivo vercel.json en mi proyecto, e indicar lo siguiente.

```json
{
  "rewrites": [
    {
      "source": "/stats/js/script.js",
      "destination": "https://plausible.io/js/script.js"
    },
    {
      "source": "/stats/api/event",
      "destination": "https://plausible.io/api/event"
    }
  ]
}
```

Con esto y un ajuste mínimo en el Script, lo tengo listo.

```javascript
<script
  src="/stats/js/script.js"
  data-api="/stats/api/event"
  data-domain="yourdomain.com"
></script>
```

### Precio

Plausible no es un servicio gratuito, ya que declaran que se financian únicamente por sus subscritores lo que le dá un punto más de independencia y seguridad. Sin embargo lo bueno es que por tan solo <a href='https://plausible.io/#pricing' target='_blank'>**9 euros/mes**</a> podrás recibir analíticas de hasta **50 proyectos diferentes, y 10K visitas al mes**. Esto lo hace muy interesante para los que como yo, tenemos muchos proyectos aunque pocos visitantes. 😄

Tienen 40 días de prueba gratuita y con lo sencillo que resulta implementarlo, creo que vale la pena probarlo.
