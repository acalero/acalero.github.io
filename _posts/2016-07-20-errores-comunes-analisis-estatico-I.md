--- 
layout: post 
title: Errores comunes del análisis estático (parte I)
date: '2016-07-20T07:00:00.000+01:00' 
dateReady: 2016-07-20
locale: es
author: Antonio Calero 
comments: true
share: true
imagefeature: 2016-07-20-errores-comunes-analisis-estatico-I.jpg
category: 
- calidad
description: El análisis estático es hoy en día una de las técnicas más utilizadas a la hora de prevenir defectos. Ya forma parte del ciclo de desarrollo como un paso más antes de poder liberar una versión. Sin embargo en muchas ocasiones se cometen errores graves que provocan rechazo y mala fama.

---


## Error #1. Que los defectos potenciales no paren el build (o saltarse el umbral de calidad)

El análisis estático tiene que ayudarnos a prevenir defectos de forma temprana antes de que ese código llegue a los usuarios. Hay que ser capaz de sacar "tarjeta roja" cuando se detecten los problemas más graves. 

Limitar lo que detectan las herramientas a simples "advertencias" es uno de los mayores errores. Hacer eso provoca que los resultados acaben siendo ignorados por los desarrolladores. Si la versión sigue su ciclo independientemente de lo que el análisis estático detecta no hay de que preocuparse y finalmente se ignora.

Así que si sigues una estrategia de publicar el código independientemente de los resultados del análisis estático estás cometiendo un grave error.

## Error #2. Las reglas las definen los arquitectos y no se tiene en cuenta a los desarrolladores

Cuando digo arquitectos me refiero a ese perfil que se supone experto pero que ya lleva unos años sin programar, llámalo arquitecto, analista, o de la forma que prefieras. 

Para que el análisis estático sea efectivo es esencial que los desarrolladores formen parte del equipo que define las reglas a aplicar. Que los desarrolladores no colaboren y no afecten a las herramientas hará que las rechacen. 

Ellos son los que se tienen que preocupar de la calidad de su código todos los días así que tendrás que dejarles que forman parte del juego, o será imposible que sirva de algo. 

## Error #3. No aplicar los estándares desde el inicio

Una de las peores cosas que pueden ocurrir es de repente tener que resolver problemas que fueron introducidos hace mucho tiempo. 

Simple y llanamente porque no se habían configurado las herramientas y el ciclo de desarrollo no seguía los estándares. 

Para evitar esto puedes seguir una estrategia "fix the leak" y centrarte solo en el código nuevo o el que modificas, pero también es verdad que si usas el análisis estático desde el principio todo será más fácil.

## Error #4. Normativas de desarrollo no alineadas con el análisis estático

¿Tienes normativas de desarrollo? Seguro que sí. ¿Y están mapeadas en tu herramienta de análisis estático? Seguro que no. Este error es también muy grave. 

En algún momento alguien dentro de la organización estableció una normativa de desarrollo y la escribió en un documento o wiki. Esa normativa se viene usando durante mucho tiempo y define como trabajar en los proyectos, que nomenclatura usar, la arquitectura de las aplicaciones, buenas prácticas, etc. Si después todo eso no se usa en el análisis estático entonces se estarán usando diferentes varas de medir. 

Para evitarlo debes configurar reglas que cubran esa normativa, pero no puedes olvidarte tampoco de actualizar la normativa para incluir toda la información necesaria sobre el análisis estático: herramientas utilizadas, como ejecutarlas, que reglas se usan, que prioridades, como solucionar algunas evidencias comunes, como abordar los proyectos 'legacy', ...

La relación entre las normativas y el análisis estático debe ser bidireccional y estar siempre actualizada.

## Error #5. Las herramientas no usan reglas personalizadas

¿Estás seguro que no hay nada especial en la forma de desarrollar de tu organización? ¿No tienes una arquitectura personalizada que te gustaría supervisar que se cumple? 

Aunque muchas reglas son comunes para todos siempre hay algo que es específico y que debes controlar desde el principio. Crea tus propias reglas y personaliza aquellas que te lo permitan.

***

Y hasta aquí este primer "pack" de errores comunes que deberías evitar en el uso de análisis estático. En la siguiente entrega continuaremos con el resto. ¿Has cometido o estás cometiendo esos errores? ¿Estás de acuerdo con esta primera lista?

<div style="text-align: center;">__________________________________________________</div>
<div style="text-align: center;">
    <a href="https://mikealdo.github.io/2016/04/29/10-biggest-mistakes-in-using-static-analysis.html">
    <span
      style="font-size: small;">Adaptación del artículo original de <strong>Michael Davidek</strong></span><br>
    </a>
</div>