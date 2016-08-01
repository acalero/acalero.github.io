--- 
layout: post 
title: Errores comunes del análisis estático (parte II)
date: '2016-08-01T07:00:00.000+01:00' 
dateReady: 2016-08-01
locale: es
author: Antonio Calero 
comments: true
share: true
imagefeature: 2016-08-01-errores-comunes-analisis-estatico-II.png
category: 
- calidad
description: Continuamos con la recopilación de errores graves que provocan rechazo y mala fama al análisis estático. 

---

Si aún no has leído [los cinco primeros errores más comunes](/2016/07/20/errores-comunes-analisis-estatico-I) puedes hacerlo ahora y así ponerte en contexto. 

A continuación te dejo con el resto de la recopilación:

## Error #6. Las herramientas no se complementan con otros tipos de tests

Aunque en los últimos años ha mejorado mucho hay cosas que el análisis estático no puede detectar: problemas de configuración, errores que solo se dan en tiempo de ejecución, ... 

Por eso no basta solo con el análisis estático. Siempre tienes que proporcionar un buen conjunto de tests que aseguren otros aspectos de calidad (unitarios, integración, rendimiento, ...). Estos tests pueden asegurar que el código cumple con ciertos requisitos de forma diferente a como lo hace el análisis estático. 

Es un error muy común pensar que solo usando análisis estático vas a poder solucionar todos tus problemas. Nada más lejos de la realidad. El análisis estático es potente, pero no tanto.

## Error #7. La configuración del IDE es la de por defecto

No puedes dejar que cada desarrollador trabaje con un IDE con configuraciones que no estén alineadas con las herramientas de análisis estático. 

Hay que proporcionar las configuraciones adecuadas para cada IDE de forma que las inspecciones de código que se hagan en el IDE sean las mismas (o lo más parecidas posible) a las normativas definidas y al análisis estático. De nada sirve que la configuración del IDE indente con cuatro espacios y que luego la regla de análisis estático valide que sea con dos espacios. Tienes que revisar con mucho detalle todas las reglas existentes en el IDE y activar/desactivar las reglas que sean necesarias para alinearlas con los estándares definidos.

Cada vez que se añada una regla nueva en el análisis estático habrá que revisar que los IDEs también la incluyen. En el caso de SonarQube esto es bastante sencillo al poder utilizar el plugin "SonarLint" que incluso permite sincronizarse con el servidor de SonarQube de forma automática.

## Error #8. No hay difusión, no hay seguimiento, así que no hay mejora continua

Ya tienes todo montado y funcionando. Los desarrolladores están motivados y el ciclo de desarrollo incluye el análisis estático como un paso más. ¿Y ahora qué? 

Si poco a poco vas abandonando el proceso y no difundes las mejoras, no haces seguimiento, no pides feedback a los equipos, no actualizas las herramientas, no incluyes reglas nuevas, ... el análisis estático acabará siendo ineficiente y no se producirá un ciclo de mejora continua. Dejará de aportar valor en poco tiempo.

Es fundamental comunicar los cambios, revisar el proceso frecuentemente, revisar y proponer reglas, hablar con los equipos para ver si hay más cosas que se puedan incluir en el análisis estático, comprobar y comunicar los resultados (¿hay menos errores en producción o todo sigue igual?). 

## Error #9. Las quejas sobre los falsos positivos

Muy común. Una vez alguien detecta un falso positivo el análisis estático pierde todo su prestigio y "ya no vale". Hay desarrolladores que están deseando que eso ocurra para quitarle valor.

Y es que las herramientas no son perfectas (ni los humanos tampoco, a pesar de que algunos desarrolladores tengan el ego muy alto), eso es evidente, por tanto habrá casos en los que la herramienta no será lo suficientemente inteligente como para saber si ese trozo de código va a producir un error o no. Ante la duda, se marca como posible defecto y ya el desarrollador deberá tomar la decisión final.

Por ejemplo, en SonarQube es muy fácil marcar falsos positivos, así que no debería haber quejas sino todo lo contrario. Incluso si alguna regla produce demasiados falsos positivos entonces habrá que revisarla en profundidad porque es probable que haya que desactivarla o activar otras alternativas.

## Error #10. Empezar el análisis estático con demasiadas reglas 

Es preferible tener pocas reglas que puedas entender e ir corrigiendo a tener muchas reglas que no sabes ni porque están ahí y que no puedas corregir. 

Si no tienes tiempo suficiente para hacer un primer estudio de lo que quieres incorporar y las reglas que necesitas activar, prueba con un conjunto muy básico (aquellas que sean más graves) y empieza a sacar métricas del análisis estático. No te preocupes. Divide y vencerás. Empieza con lo mínimo y poco a poco trabaja en mejorarlo. Ese es el objetivo y ese ciclo de mejora continua es lo que más te va a ayudar. 

Añade reglas poco a poco evitando las más controvertidas e inconvenientes y será la mejor forma de asegurar la calidad de tu código.

Puedes empezar incluso sin reglas. Te sorprendería ver cuanta información valiosa pueden aportar métricas como la complejidad ciclomática o el código duplicado (o repetido). Pero eso lo dejo para otro artículo.

## Bola extra. Los malvados gestores

Efectivamente. No pensarías que es todo tan fácil, ¿verdad? Recuerda que aunque [los gestores deberían programar](2016/07/27/los-gestores-deberian-programar) no lo hacen, así que no saben nada de esto ni le van a dar importancia. Tienes que conseguir ganarte a los gestores para estar de tu parte o no vas a tener una forma de poder dedicar suficiente tiempo a preocuparte por el análisis estático.

Esto es así porque no es algo a corto plazo sino más a medio o largo plazo y hay que invertir tiempo. Tienes que hacer entender a los gestores que el análisis estático tiene un gran retorno de inversión (o aliarte con alguno que piense así). Tienen que entender los requisitos, los objetivos y permitir que se dedique tiempo suficiente. 

Lo que pasará si no consigues alinearte con ellos es que dedicarás mucho esfuerzo que no servirá de nada. 

***

Con esto completamos el segundo "pack" de errores comunes que deberías evitar en el uso de análisis estático.

### En conclusión...

El análisis estático no es simplemente instalar una herramienta y ya está. Requiere dedicación, colaboración, difusión y una serie de tareas adicionales que si no se tienen en cuenta te llevarán al fracaso. Así que ya sabes, como con todo en esta vida, cuando te embarques en esa difícil misión de implantar análisis estático, reflexiona y planifica bien todo lo que vas a hacer, porque de eso dependerá que el análisis estático sume todas sus ventajas a tu proceso de desarrollo.

En resumen:
- No permitas que las versiones liberadas se salten los umbrales de calidad
- Ten en cuenta la opinión de los desarrolladores a la hora de definir las reglas
- Intenta utilizar el análisis estático desde el principio, y no solo cuando ya estas a punto de poner en producción el proyecto
- Alinea tus normativas de desarrollo con el análisis estático
- Utiliza reglas personalizadas para intentar cubrir los casos especiales de tu arquitectura
- No te olvides de los tests (unitarios, integración, ...), el análisis estático solo ve una parte de los posibles problemas potenciales
- Sincroniza la configuración del IDE con el análisis estático, que en todos sitios se mida lo mismo
- Difunde, difunde y difunde. Obten feedback y lleva el análisis estático a un ciclo de mejora continua (como todo lo demás)
- Los falsos positivos se pueden (y deben) gestionar, que no te frenen con ellos
- Keep It Small and Simple (KISS), hay muchas reglas que se pueden activar pero lo mejor es simplificar y empezar con pocas, que puedan resolverse
- Busca el apoyo de la gestión/dirección, sin ellos no podrás tener éxito y harás un sobreesfuerzo que no servirá de nada


Esas son algunas de las cosas que tienes que tener en cuenta pero seguro que tú conoces más, así que deja un comentario y seguimos debatiendo.

<div style="text-align: center;">__________________________________________________</div>
<div style="text-align: center;">
    <a href="https://mikealdo.github.io/2016/04/29/10-biggest-mistakes-in-using-static-analysis.html">
    <span
      style="font-size: small;">Adaptación del artículo original de <strong>Michael Davidek</strong></span><br>
    </a>
</div>