--- 
layout: post 
title: Aprovecha las herramientas de análisis estático
date: '2016-03-07T07:00:00.000+01:00' 
dateReady: 2016-03-07
locale: es
author: Antonio Calero 
comments: true
share: true
category: 
- desarrollo
- software
imagefeature: 2016-03-07-aprovecha-analisis-estatico.jpg
description: Se trata de una de las '97 cosas que todo programador debería saber'. ¿Lo conoces? Es un libro que recopila la sabiduría de multiples expertos sobre desarrollo de software y que sirve como referencia de todo aquello que deberíamos recordar pero que nunca nos acordamos de hacer cuando estamos creando nuestro código. 

---

El [libro de Kevlin Henney](http://shop.oreilly.com/product/9780596809492.do) tiene la suerte de contar con contribuciones de grandes expertos, incluyendo a Uncle Bob, por ejemplo. Aunque el libro es de 2010 sigue siendo una de las mejores referencias para las buenas prácticas en el desarrollo de software

Hoy quería centrarme en la número 79 y recordar que las herramientas están ahí para ayudarte, no estas solo y no puedes saberlo todo.

Remontándonos a la época donde el lenguaje C era el nuevo lenguaje de moda, los recursos de cpu y de almacenamiento eran algo de lujo. Los primeros compiladores estaban diseñados con esto en mente, para que se redujese el número de veces que se parseaba el código. Esto hacía que el compilador solo comprobase un subconjunto de todos los bugs posibles que se podían detectar en tiempo de compilación. 

Para compensar esta situación, __Stephen Johnson__ escribió una herramienta que se llamaba __[lint](https://es.wikipedia.org/wiki/Lint)__ (esto ya si que os sonará de algo, verdad... ¿de dónde pensabáis que venía [pylint](https://www.pylint.org/), [jslint](http://www.jslint.com/help.html), [sonarlint](http://www.sonarlint.org/), ...?). Esta herramienta implementaba parte del análisis estático que había sido eliminada de su hermano mayor -el compilador de C-. Sin embargo, en aquella época, las herramientas de análisis estático se ganaron la reputación de detectar demasiados falsos positivos y de únicamente centrarse en convenciones de nombres que no siempre eran necesarias.

Pero hoy en día el abanico actual de lenguajes, compiladores y analizadores estáticos es muy diferente. La memoria y la CPU no son el factor determinante, por lo que los compiladores deberían poder incluir muchas más comprobaciones. Casi todos los lenguajes disponen de una herramienta que comprueba evidencias de estilo, buenas prácticas y a veces hasta errores que son muy difícil de detectar, como por ejemplo referencias a nulo. La mayoría de herramientas, como [splint](http://www.splint.org/) para C o [pylint](https://www.pylint.org/) para Python, son configurables, lo que significa que puedes elegir que errores o advertencias quieres detectar a través de ficheros de configuración, desde la línea de comandos, o en tu entorno de desarrollo favorito. 

Y si todo lo demás no es suficiente, y al final te encuentras solo en la búsqueda de errores o tienes una normativa de desarrollo que tu compilador o tu herramienta favorita no controla, pues siempre puedes pensar en construir tu propio analizador estático. No es tan difícil. La mayoría de lenguajes ya exponen su arbol sintáctico (AST) y sus herramientas de compilación como librerías estándar. Puede parecer una locura pero no lo es. Utilizando reglas [XPath](https://es.wikipedia.org/wiki/XPath) o kits de desarrollo como [SSLR de SonarQube](http://docs.sonarqube.org/display/DEV/SSLR) puedes construir tu propio conjunto de buenas prácticas y utilizarlos en diferentes herramientas para ayudarte. 

Así que no seas insconciente, benefíciate de todas las ventajas de las herramientas de análisis estático porque no estas solo ahí fuera.

<div style="text-align: center;">__________________________________________________</div>
<div style="text-align: center;">
    <a href="http://programmer.97things.oreilly.com/wiki/index.php/Sarah_Mount">
    <span
      style="font-size: small;">Contribución original de Sarah Mount para el libro <strong>97 cosas que todo programador debería saber</strong></span><br>
    </a>
</div>
  
  
