---
title: 'Tu aplicación basada en IA con Javascript'
description: 'Introducción a LangChain en Javascript'
pubDate: 'Oct 12 2023'
heroImage: '/langchain/langchainjs.png'
---

El boom de la Inteligencia Artificial ha dado un impulso creativo enorme en el desarrollo web y la programación. Cada día salen nuevas aplicaciones basadas en IA, y la verdad es que los posibles casos de uso son infinitos.

Hasta yo, como programador amateur, me he animado a desarrollar [mAI-Cover](https://www.mai-cover.com/), una pequeña WebApp muy molona que deberías conocer.

Sin embargo, hay una detalle casi omnipresente en todas las aplicaciones, tutoriales o documentación sobre IA, y es que casi todo está escrito en Python 🐍, y para los que no dominamos este lenguaje _todavía_… resulta un poco inaccesible.

![Not anymore](/langchain/notanymore.gif)

Hoy quiero llamar la atención sobre [Langchain](https://js.langchain.com/docs/get_started/introduction) un potente Framework Open Source, que nos ofrece una estupenda suite de herramientas para trabajar y extender las capacidades de ChatGPT y en realidad, casi cualquier otro modelo.

La versión principal está diseñada para ser utilizada en Python, sí, pero lo bueno es que también cuenta con una versión para ser utilizada en Javascript que podemos usar en cualquiera de nuestras aplicaciones de node.

Pero...

### ¿Qué es Langchain y cómo funciona??

Langchain nos ofrece sobre todo la posibilidad de:

#### Generar Prompts con instrucciones previas a los que añadir contenido en forma de variables.

Por ejemplo: “_Genera una descripción optimizada para SEO para una tienda online que comercializa_ `<variable>`.”

#### Modular y acotar el contexto sobre el que aplicar la inteligencia de nuestros modelos

Podremos hacer que nuestro Llm limite sus respuestas al contenido de nuestros apuntes de la carrera, de una web en concreto, de la política de Prevención de Riesgos de nuestra empresa, de una BBDD en SQL… lo que queramos…

#### Adaptar las respuestas y el output que obtenemos.

Nuestros <abbr title='Large Language Models'>Llm's</abbr> tienden a responder en texto, pero con pequeños ajustes podemos hacer que nos devuelvan el texto en Markdown, o nos generen un JSON a partir de la información extraída de nuestro input o documento. etc…

#### Incorporar herramientas e instrumentos que los modelos pueden utilizar para extender sus capacidades.

Con la utilización de agentes se le pueden incorporar herramientas para que extraiga resultados de la web, para que cree eventos en nuestro calendario, y con la integración de zappier… pues para casi cualquier cosa.

### ¿Y cómo lo hace?

Langchain funciona con la combinación de pequeños módulos o componentes, cada uno encargado de una pequeña funcionalidad o de realizar una pequeña operación, y es con la combinación de esas pequeñas funcionalidades u operaciones con las que se puede generar la funcionalidad completa.

Esto es, como unir los eslabones de una cadena, de ahí su nombre…

Y es esta modularidad en la generación de cadenas lo que consigue que se pueda utilizar para tantas aplicaciones como puedas imaginar.

También existen Cadenas ya predefinidas para casos de uso típicos, como el ConversationalRetrievalQAChain, que es genial para crear un chatbot que responda con la información de uno o varios documentos que le pasemos.

El esquema de la cadena sería algo más o menos como esto:

![ConversationalRetrievalQAChain](/langchain/chaingif.gif)

Y el código sería algo más o menos así:

```tsx
import { ChatOpenAI } from 'langchain/chat_models/openai'
import { ConversationalRetrievalQAChain } from 'langchain/chains'
import { HNSWLib } from 'langchain/vectorstores/hnswlib'
import { OpenAIEmbeddings } from 'langchain/embeddings/openai'
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter'
import { BufferMemory } from 'langchain/memory'
import * as fs from 'fs'

export const run = async () => {
  /* Initialize the LLM to use to answer the question */
  const model = new ChatOpenAI({})
  /* Load in the file we want to do question answering over */
  const text = fs.readFileSync('state_of_the_union.txt', 'utf8')
  /* Split the text into chunks */
  const textSplitter = new RecursiveCharacterTextSplitter({ chunkSize: 1000 })
  const docs = await textSplitter.createDocuments([text])
  /* Create the vectorstore */
  const vectorStore = await HNSWLib.fromDocuments(docs, new OpenAIEmbeddings())
  /* Create the chain */
  const chain = ConversationalRetrievalQAChain.fromLLM(
    model,
    vectorStore.asRetriever(),
    {
      memory: new BufferMemory({
        memoryKey: 'chat_history', // Must be set to "chat_history"
      }),
    }
  )
  /* Ask it a question */
  const question = 'What did the president say about Justice Breyer?'
  const res = await chain.call({ question })
  console.log(res)
  /* Ask it a follow up question */
  const followUpRes = await chain.call({
    question: 'Was that nice?',
  })
  console.log(followUpRes)
}
```

Te recomiendo echar un vistazo a la [Documentación](https://js.langchain.com/docs/get_started/introduction) y te garantizo que te hará volar la imaginación para tu próximo proyecto.

Este post es una simple introducción a qué es Langchain y que es lo que significa para el desarrollo de aplicaciones basadas en Inteligencia Artificial.

Si te ha sabido a poco en un próximo post crearemos paso a paso un chatbot capaz de responder sobre tus documentos.
