--- 
layout: post 
title: Los principios de la inspección continua
date: '2016-03-03T07:00:00.000+01:00' 
dateReady: 2016-03-03
locale: es
author: Antonio Calero 
comments: true
share: true
category: 
- sonarqube
- calidad 
imagefeature: 2016-03-03-principios-inspeccion-continua.jpg
description: Ya vimos en el artículo anterior como la inspección continua es una forma clave para resolver los retos de la gestión de la calidad del código. ¿Pero exactamente cuáles son los principios que definen ese paradigma? ¿Los conoces?

---

Aprovechemos para recordar uno a uno los diez principios de la inspección continua:

<span class="fa-stack fa-md"><i class="fa fa-circle-o fa-stack-2x"></i><strong class="fa-stack-1x fa-stack-text">1</strong></span> Todas las partes interesadas en el proceso de desarrollo -y no sólo los desarrolladores o administradores- deben tener <strong>acceso inmediato a datos significativos sobre la calidad del software</strong>.

<span class="fa-stack fa-md"><i class="fa fa-circle-o fa-stack-2x"></i><strong class="fa-stack-1x fa-stack-text">2</strong></span> La gestión de la calidad del software debe ser preocupación de todos, desde el inicio del desarrollo, pero finalmente es <strong>responsabilidad de todo el equipo de desarrollo</strong>.

<span class="fa-stack fa-md"><i class="fa fa-circle-o fa-stack-2x"></i><strong class="fa-stack-1x fa-stack-text">3</strong></span> La calidad de software debe ser parte del proceso de desarrollo, lo que significa que <strong>las normas de calidad son uno de los requisitos imprescindibles para poder declarar que un software está completo</strong>.

<span class="fa-stack fa-md"><i class="fa fa-circle-o fa-stack-2x"></i><strong class="fa-stack-1x fa-stack-text">4</strong></span> <strong>Los requisitos de calidad de software deben ser objetivos</strong> y no permitir una aprobación/desaprobación de pase subjetivo (decisión errónea).

<span class="fa-stack fa-md"><i class="fa fa-circle-o fa-stack-2x"></i><strong class="fa-stack-1x fa-stack-text">5</strong></span> En la medida de lo posible, <strong>los requisitos de calidad de software deben ser comunes a todos los productos de software</strong>, independientemente de sus características específicas.</blockquote>

<span class="fa-stack fa-md"><i class="fa fa-circle-o fa-stack-2x"></i><strong class="fa-stack-1x fa-stack-text">6</strong></span><strong>Los datos de calidad de software deben estar al día</strong>, es decir, medidos en la última versión del código.

<span class="fa-stack fa-md"><i class="fa fa-circle-o fa-stack-2x"></i><strong class="fa-stack-1x fa-stack-text">7</strong></span><strong>Los productos de software deben ser inspeccionados de forma continua</strong>, para que se encuentren errores rápidamente, cuando son fáciles de corregir. Los desarrolladores deben ser capaces de detectar nuevos defectos de calidad tan pronto como se introducen, es decir, dentro de su herramienta de desarrollo mientras escriben código, similar a los correctores ortográficos.

<span class="fa-stack fa-md"><i class="fa fa-circle-o fa-stack-2x"></i><strong class="fa-stack-1x fa-stack-text">8</strong></span> Ya sea de manera proactiva o reactiva, <strong>los interesados deberán recibir una alerta cuando se introducen nuevos defectos de calidad</strong>, ya sea mediante el envío de correo electrónico, rompiendo la compilación o por otros métodos. La inyección de nuevas evidencias debe ser continua, permitiendo a los equipos la tomar decisiones rápidas sobre la calidad.

<span class="fa-stack fa-md"><i class="fa fa-circle-o fa-stack-2x"></i><strong class="fa-stack-1x fa-stack-text">9</strong></span> <strong>Los datos de calidad de software deben estar disponibles tanto en valores absolutos (en todo el código) y diferencial (nuevo código solamente)</strong> para que el equipo de desarrollo pueda estar en control total del flujo de entrada de evidencias.</blockquote>

<span class="fa-stack fa-md"><i class="fa fa-circle-o fa-stack-2x"></i><strong class="fa-stack-1x fa-stack-text">10</strong></span> Todas las nuevas evidencias y las evidencias más críticas existentes deben tener asignadas un camino claro con un calendario para su resolución.

El paradigma de inspección continua es muy eficaz, y se ha demostrado que funciona en el mundo real gracias a [herramientas como SonarQube]({{ site.url }}/2014-11-28/que-es-sonarqube), que se han convertido en estándar de facto para implementar el paradigma. 

Por mi experiencia puedo asegurar que el modelo de inspección continua se utiliza con éxito para gestionar la calidad del software interno en proyectos de todos los tamaños. En todos los casos, la inspección continua ha ayudado a mejorar significativamente la calidad y la estabilidad del software, que por lo general, suponen un ahorro muy importante que de otro modo se gastaría en el análisis de causa raíz y la gestión de crisis. 


