
document.getElementById("btnEvaluar").addEventListener("click", function() {

    let puntaje = 0;

    // Respuestas correctas
    let respuestas = {
        q1: "b",
        q2: "a",
        q3: "b",
        q4: "b",
        q5: "c",
        q6: "a",
        q7: "b",
        q8: "b",
        q9: "a",
        q10: "b"
    };

    // Recorrer las 10 preguntas
    for (let i = 1; i <= 10; i++) {

        let pregunta = document.querySelector('input[name="q' + i + '"]:checked');

        if (!pregunta) {
            document.getElementById("resultadoFinal").innerHTML =
                "Debes responder todas las preguntas.";
            return;
        }

        if (pregunta.id === "q" + i + respuestas["q" + i]) {
            puntaje++;
        }
    }

    // Mostrar resultado
    let mensaje = "Resultado: " + puntaje + "/10 puntos. ";

    if (puntaje === 10) {
        mensaje += "¡Felicitaciones! Has respondido correctamente todas las preguntas.";
    } 
    else if (puntaje >= 7) {
        mensaje += "¡Muy bien! Tienes un buen conocimiento.";
    } 
    else if (puntaje >= 5) {
        mensaje += "Buen intento. ¡Puedes mejorar!";
    } 
    else {
        mensaje += "Te invito a estudiar e intentarlo nuevamente.";
    }

    document.getElementById("resultadoFinal").innerHTML = mensaje;

});


// Botón para reiniciar
document.getElementById("btnReiniciar").addEventListener("click", function() {

    let opciones = document.querySelectorAll('input[type="radio"]');

    for (let opcion of opciones) {
        opcion.checked = false;
    }

    document.getElementById("resultadoFinal").innerHTML = "";

});
