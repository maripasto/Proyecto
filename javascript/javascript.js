const boton = document.getElementById("btnEvaluar");

boton.addEventListener("click", function() {
    let puntaje = 0;

    // Pregunta 1
    let res1 = document.getElementById("res1");
    if (document.getElementById("q1b").checked) {
        res1.innerHTML = "¡Correcto!";
        res1.style.color = "green";
        puntaje++;
    } else {
        res1.innerHTML = "Incorrecto. Nació en 1831.";
        res1.style.color = "red";
    }

    // Pregunta 2
    let res2 = document.getElementById("res2");
    if (document.getElementById("q2a").checked) {
        res2.innerHTML = "¡Correcto!";
        res2.style.color = "green";
        puntaje++;
    } else {
        res2.innerHTML = "Incorrecto. Pertenecía a los escolapios.";
        res2.style.color = "red";
    }

    // Pregunta 3
    let res3 = document.getElementById("res3");
    if (document.getElementById("q3b").checked) {
        res3.innerHTML = "¡Correcto!";
        res3.style.color = "green";
        puntaje++;
    } else {
        res3.innerHTML = "Incorrecto. Fundó las Hijas de la Divina Pastora.";
        res3.style.color = "red";
    }

    // Pregunta 4
    let res4 = document.getElementById("res4");
    if (document.getElementById("q4b").checked) {
        res4.innerHTML = "¡Correcto!";
        res4.style.color = "green";
        puntaje++;
    } else {
        res4.innerHTML = "Incorrecto. Se destacó en botánica y propiedades de plantas.";
        res4.style.color = "red";
    }

    // Pregunta 5
    let res5 = document.getElementById("res5");
    if (document.getElementById("q5c").checked) {
        res5.innerHTML = "¡Correcto!";
        res5.style.color = "green";
        puntaje++;
    } else {
        res5.innerHTML = "Incorrecto. Fue canonizado en 2017.";
        res5.style.color = "red";
    }

    // Pregunta 6
    let res6 = document.getElementById("res6");
    if (document.getElementById("q6a").checked) {
        res6.innerHTML = "¡Correcto!";
        res6.style.color = "green";
        puntaje++;
    } else {
        res6.innerHTML = "Incorrecto. Su nombre era Manuel Míguez González.";
        res6.style.color = "red";
    }

    // Pregunta 7
    let res7 = document.getElementById("res7");
    if (document.getElementById("q7b").checked) {
        res7.innerHTML = "¡Correcto!";
        res7.style.color = "green";
        puntaje++;
    } else {
        res7.innerHTML = "Incorrecto. Nació en España.";
        res7.style.color = "red";
    }

    // Pregunta 8
    let res8 = document.getElementById("res8");
    if (document.getElementById("q8c").checked) {
        res8.innerHTML = "¡Correcto!";
        res8.style.color = "green";
        puntaje++;
    } else {
        res8.innerHTML = "Incorrecto. Fue ordenado en 1856.";
        res8.style.color = "red";
    }

    // Pregunta 9
    let res9 = document.getElementById("res9");
    if (document.getElementById("q9a").checked) {
        res9.innerHTML = "¡Correcto!";
        res9.style.color = "green";
        puntaje++;
    } else {
        res9.innerHTML = "Incorrecto. Viajó a Cuba.";
        res9.style.color = "red";
    }

    // Pregunta 10
    let res10 = document.getElementById("res10");
    if (document.getElementById("q10b").checked) {
        res10.innerHTML = "¡Correcto!";
        res10.style.color = "green";
        puntaje++;
    } else {
        res10.innerHTML = "Incorrecto. Buscaba la formación integral de las personas.";
        res10.style.color = "red";
    }

    // Resultado final
    let resultadoFinal = document.getElementById("resultadoFinal");
    resultadoFinal.innerHTML = "Obtuviste " + puntaje + " de 10 respuestas correctas.";
});