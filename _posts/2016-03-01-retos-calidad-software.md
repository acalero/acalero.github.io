--- 
layout: post 
title: Los retos de la gestión de la calidad del código
date: '2016-03-01T07:00:00.000+01:00' 
dateReady: 2016-03-01
locale: es
author: Antonio Calero 
comments: true
share: true
category: 
- calidad 
- software 
imagefeature: 2016-03-01-retos-calidad-software.jpg
description: Los enfoques tradicionales de control de la calidad del código implican auditorías puntuales, que al final son auditorías periódicas del código fuente. Estas auditorías se realizan generalmente por auditores externos durante la "última recta" del proceso de desarrollo, durante o después de las pruebas funcionales. 

---

Por su naturaleza, las auditorías puntuales pueden provocar perturbaciones en el ciclo de desarrollo, ya que dan lugar a cambios en el software "completado". En el mejor de los casos, este método de control de calidad ocasionará retrasos y repetir trabajo. En el peor de los casos, conduce a la liberación de software de mala calidad. En cualquier caso, __el enfoque tradicional fomenta la percepción de que la construcción de software de calidad es demasiado complejo y caro__. 

Se necesita hacer hincapié en la calidad en todo el ciclo de desarrollo, con bucles de retroalimentación más cortos, para asegurar una rápida resolución de los problemas internos de calidad; en definitiva, un modelo que se base en la calidad desde el principio, en lugar de considerarse después de haber cometido los errores, __un modelo proactivo en lugar de reactivo__. 

Las auditorías puntuales se ejecutan, por diseño, a intervalos específicos y no de forma continua. Este enfoque de la gestión de la calidad del código tiene cuatro grandes tipos de deficiencias o retos a superar:

### Demasiado poco, demasiado tarde

Las auditorías puntuales identifican dos tipos de mejoras: __cambios cosméticos y cambios estructurales__.

Mientras que los cambios cosméticos requieren modificaciones menores, los cambios estructurales pueden incluir importantes reingenierías de software. 

Si bien pueden ser necesarios estos cambios, los planes de acción resultantes de las auditorías puntuales se definen demasiado tarde en el proceso; de manera que o la fecha de lanzamiento de una versión software necesita ser ampliada, para incluir esta reingeniería del software, o peor todavía, el software llegará a producción con un nivel bajo de calidad, y por lo tanto con baja mantenibilidad y capacidad de adaptación cuando surjan nuevos requisitos. 

### El rechazo de los desarrolladores

Los desarrolladores tienden a rechazar los planes de acción generados a partir de auditorías puntuales, ya que: 

* __Se generan fuera del equipo__, y lo normal es que sean vistos como una nueva restricción en el trabajo diario 
* __Son subjetivos__; evidencias que se suelen basan en el juicio de los auditores, más que en medidas objetivas 
* __Se pierde el contexto e historia de la información__, y por lo tanto se consideran irrelevantes 
* __Están invalidados por los cambios constantes__, el código está vivo y evoluciona tan rápido que la auditoría se hizo sobre código antiguo, provocando que esos datos rápidamente queden obsoletos 
* __No involucra__ a los desarrolladores y otras partes interesadas en el proceso de revisión y auditoría 
* Intervienen __demasiado tarde en el proceso__; para cuando una característica es auditada, los desarrolladores necesitan "reaprender" el código para hacer frente a una evidencia

### Falta de propiedad de los procesos

Hay una clara falta de apropiación del proceso de calidad dentro de la organización. 

Los auditores no pueden poseer el proceso, debido a que ni son propietarios del código ni tienen control sobre la resolución de los problemas. Del mismo modo, el modelo de command-and-control de los auditores evita que el equipo de desarrollo sea dueño del proceso, ya que no está involucrado en las auditorias o revisiones. 

Así que, _jaque mate_, al final tienes dos grupos inconexos que son ambos responsables de calidad, mientras que en realidad ninguno de ellos es responsable. 

### Heterogeneidad de los requerimientos

Los enfoques tradicionales miden el software en valores absolutos, como por ejemplo el número total de problemas encontrados con un umbral de calidad específico. Esto fuerza a los evaluadores a medir cada aplicación contra diferentes requisitos, en función de su origen. 

Por ejemplo, ¿un proyecto _legacy_ se hace con el mismo estándar de alta calidad que se espera de un proyecto nuevo? ¿el desarrollo interno podría ser juzgado de manera diferente que el código subcontratado? Todo esto se debe al hecho de que se debe autorizar el software para pasarlo a producción, y para ello hay que tener requisitos que definan los criterios.

Es muy poco práctico que cada proyecto deba alcanzar los mismos valores absolutos para los umbrales de calidad antes de su puesta en producción. El uso de este tipo de valores absolutos implica que sea casi imposible de conseguir requisitos comunes para todas las aplicaciones, y por lo tanto difícil de adoptar buenas prácticas en todos los ámbitos. 

## La inspección continua al rescate

Todos esos retos clave en la gestión de la calidad del código se combinan, a menudo, para crear una percepción de que _"la creación de software de calidad es cara"_. 

Para ser eficaz bajo el enfoque tradicional la gestión de calidad llega demasiado tarde en el proceso y altera el ciclo de desarrollo, causando retrasos inesperados, repitiendo trabajo no planificado o perdiendo características funcionales. Para agravar el problema, los equipos de desarrollo frenan o rechazan las evaluaciones de calidad, las ven como algo que reduce la productividad y la colaboración del equipo. 

Además, las empresas no obtienen mejoras a largo plazo en la calidad general, debido a que el enfoque tradicional no tiene en cuenta la necesidad de educar a los desarrolladores. Como resultado, los mismos o similares problemas de calidad surgen repetidamente durante el ciclo de vida del proyecto. 

__La inspección continua es un paradigma en la gestión de la calidad del código diseñado para hacer que la calidad del código forme parte integral del ciclo de vida de desarrollo de software__. Es un proceso holístico, plenamente efectivo, que aumenta tanto la calidad del software interno de un proyecto como la visibilidad de la calidad del software para todos los interesados. 

La clave del concepto de la inspección continua es __detectar problemas a tiempo__, cuando resolverlos sigue siendo barato y fácil. Bajo este modelo, _las auditorías de código automatizadas se realizan sobre una base diaria y se colocan a disposición de la organización_. 

Los miembros del equipo son alertados tan pronto como se encuentren nuevas evidencias para que puedan abordarse lo antes posible, mientras que el código está todavía fresco en la mente de los desarrolladores. La puntualidad de estas alertas tiene el beneficio añadido de que _educa a los programadores respecto a los malos hábitos y los conduce a codificar según los buenos_. 

__La inspección continua goza de mayor aprobación entre los equipos de desarrollo debido a su naturaleza de colaboración, que conduce a un sentimiento de verdadera propiedad del código, y ayuda a los equipos a ofrecer un mejor software.__ Con sus pequeños ciclos, con identificaciones rápidas y tratamiento de estas evidencias, se ha demostrado que aumentan la eficiencia de los equipos de desarrollo y aumentar la longevidad de las aplicaciones, mediante el fomento del desarrollo de código de mayor calidad.

La inspección continua de código es un elemento clave de apoyo para los [__jardineros del software__]({{ site.url }}/2016/02/25/jardineros-del-software) y es una de las mejores formas de mantener "sano" y "limpio" nuestro código.

¿Y tú? ¿Llevas a cabo un proceso de inspección continua?

