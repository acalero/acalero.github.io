--- 
layout: post 
title: Más allá de la deuda técnica. La deuda de la gestión
date: '2016-09-04T07:00:00.000+01:00' 
dateReady: 2016-09-04
locale: es
author: Antonio Calero 
comments: true
share: true
imagefeature: 2016-09-04-modelo-deuda-jira.jpg
category: 
- calidad
description: Parece que por fin todo el mundo entiende el concepto de deuda técnica. Ha costado un poco (es un término del año 1992) pero está ayudando mucho a entender porque los proyectos de software fracasan. Ahora bien, ¿qué pasa con la deuda que no es "técnica"?

---

## La deuda técnica

El concepto de deuda técnica fue introducido por Ward Cunningham en el año 1992 y viene a significar que las malas prácticas en el desarrollo de software provocan una situación de deuda que repercute en un sobrecoste no sólo en el proceso de mantenimiento del software de un sistema de información sino también en su propio funcionamiento.

La [deuda técnica](http://opinion.excentia.es/2012/03/la-deuda-tecnica-y-el-metodo-sqale.html) se calcula detectando un conjunto de malas prácticas sobre diferentes características del software (estructura, complejidad, código duplicado, defectos potenciales, malas prácticas, ...) y en función del coste que tiene solucionarlas. Esto permite obtener un ratio de deuda técnica viene a decirnos la calidad general de nuestro código y como de “sostenible” es a lo largo del tiempo. Algo así como los "intereses" que estamos pagando si hacemos las cosas mal.

Herramientas como SonarQube han popularizado este concepto al permitir automatizar mediante análisis estático y de forma más o menos "objetiva" el cálculo de los valores asociados a la deuda. Sin embargo esto ha hecho que siempre hablemos de deuda referida a la calidad del código. ¿Qué pasa con todo lo que rodea al software que no sea código? Es evidente que también puede repercutir en la deuda general del proyecto... pero, ¿alguien alguna vez se ha parado a medirlo, o al menos lo ha intentado?

Si es que mira que los técnicos somos raros (por no decir insultos), resulta que construimos modelos para evaluar nuestra propia deuda "técnica" pero nadie evalua la deuda de [los que no saben programar](http://www.acalero.com/2016/07/27/los-gestores-deberian-programar), la deuda que no es técnica, la deuda de la gestión. ¿Acaso es menos importante?

## Un pequeño paso: un modelo de deuda para JIRA

Como todos los años por estas fechas, Atlassian celebra un concurso de desarrollo de plugins para motivar la creación y la innovación de productos en todo su ecosistema (el concurso se llama [Codegeist](http://codegeist.devpost.com/), y cualquiera puede participar). Personalmente me encanta el concurso porque se presentan muchas ideas muy interesantes (algunas un poco locas) que de otra manera seguro que no se llegarían a desarrollar. 

El año pasado en **excentia** ya participamos con una de esas ideas locas: representando los issues de JIRA en forma de ciudad en 3D (**[3D Issues Map for JIRA](https://marketplace.atlassian.com/1214149])**) y la verdad es que aunque de momento se haya quedado en algo experimental todos los comentarios fueron interesantes, y aprendimos mucho con la experiencia.

Una vez más no podíamos faltar a la cita, así que siendo Atlassian Expert y evangelista de SonarQube, no se me ocurría mejor forma de participar que juntando ambas pasiones. El resultado ha sido construir [un plugin para introducir el concepto de deuda en JIRA](https://marketplace.atlassian.com/1215774) de forma similar a la deuda técnica de SonarQube. Y lo he presentado al concurso así que podéis ver todos los detalles en [la página de producto del Codegeist](http://devpost.com/software/debt-tracker-and-assessment-for-jira) (y si queréis votar pues adelante). Ha sido bautizado como:
<p style="text-align:center"><a href="https://marketplace.atlassian.com/1215774"><strong>Debt Tracker and Assessment for JIRA</strong></a></p>

![Debt Tracker](/img/posts/2016-09-04-debt-tracker-screenshot-1.png)

### La base del modelo

Si en SonarQube el núcleo es el análisis estático del código fuente, en JIRA el núcleo es el análisis estático de los issues. La idea es que de la misma forma que se buscan patrones de malas prácticas en las líneas de código se busquen patrones de malas prácticas en los issues de JIRA. Se trata de un motor de reglas. 

![Debt Tracker](/img/posts/2016-09-04-debt-tracker-screenshot-2.png)

### La evaluación del modelo

Siguiendo el modelo de [SQALE](http://www.sqale.org/) y adaptándolo para nuestro contexto tendremos **para cada mala práctica un coste de remedio** asociado, que será al fin y al cabo la deuda que introduce esa mala práctica. La suma de todos los costes de las malas prácticas detectadas nos dará el valor de la deuda total de un proyecto (o de una issue en particular).

A partir del valor de deuda total y haciendo una estimación de la máxima deuda posible para el proyecto calculamos el ratio de deuda. **Este valor del ratio es el que nos permite conocer los intereses que estamos pagando por estar haciendo las cosas mal**.

### La calificación de deuda

Por último, con este ratio, podemos clasificar el proyecto, y de esa forma otorgarle una **calificación de deuda (rating)** que nos va a permitir compararlo frente a otros proyectos y conocer de forma sencilla como de sostenible es. 

---

Todo esto es lo que se ha implementado en el plugin, y lo que nos va a permitir introducir un modelo de calidad para evaluar los proyectos de JIRA.

Como en todos los modelos de este estilo, lo más importante son las reglas. Por eso el modelo debe ser configurable (y así se ha desarrollado) para que se puedan **activar y desactivar las reglas** según el contexto de cada organización y el nivel de exigencia que requiera.

En la primera versión ya se incluyen más de 10 reglas que espero que podamos ir aumentando. Si se te ocurre alguna regla no dudes en decírnoslo, y la incorporamos en la siguiente versión.

### En resumen...

- El modelo de deuda técnica casi siempre se ha aplicado al código fuente
- La deuda puede estar en otras actividades que no sean código (por ejemplo, en la gestión de issues de JIRA)
- Aprovechando el concurso Codegeist de Atlassian tenemos un plugin que introduce un nuevo modelo de deuda para JIRA
- Podéis probarlo gratis [descargándolo del Marketplace](https://marketplace.atlassian.com/1215774)

- [Más información sobre el modelo y el plugin en **excentia**](https://confluence.excentia.es/display/DEBTJIRA/Home)

¿Qué os parece? ¿Conocíais algo parecido? ¡Espero vuestros comentarios!