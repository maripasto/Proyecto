
document.addEventListener("DOMContentLoaded", function() {

    let btnEvaluar = document.getElementById("btnEvaluar");
    let btnReiniciar = document.getElementById("btnReiniciar");
    let resultado = document.getElementById("resultadoFinal");

    // Respuestas correctas
    let respuestas = {
        q1: "q1b",
        q2: "q2a",
        q3: "q3b",
        q4: "q4b",
        q5: "q5c",
        q6: "q6a",
        q7: "q7b",
        q8: "q8b",
        q9: "q9a",
        q10: "q10b"
    };

    // Evaluar respuestas
    btnEvaluar.addEventListener("click", function() {

        let puntaje = 0;

        for (let i = 1; i <= 10; i++) {

            let pregunta = document.querySelector(
                'input[name="q' + i + '"]:checked'
            );

            // Comprobar si respondió todas
            if (!pregunta) {
                resultado.innerHTML = "Debes responder las 10 preguntas.";
                return;
            }

            // Comprobar respuesta correcta
            if (pregunta.id === respuestas["q" + i]) {
                puntaje++;
            }

        }

        // Mostrar puntaje
        let mensaje = "Resultado: " + puntaje + "/10 puntos. ";

        if (puntaje === 10) {

            mensaje += "¡Felicitaciones! Respondiste todas correctamente.";

        } else if (puntaje >= 7) {

            mensaje += "¡Muy bien! Tienes un buen conocimiento.";

        } else if (puntaje >= 5) {

            mensaje += "Buen intento. ¡Puedes mejorar!";

        } else {

            mensaje += "Te invito a estudiar e intentarlo nuevamente.";

        }

        resultado.innerHTML = mensaje;

    });


    // Reiniciar trivia
    btnReiniciar.addEventListener("click", function() {

        let opciones = document.querySelectorAll(
            'input[type="radio"]'
        );

        for (let opcion of opciones) {

            opcion.checked = false;

        }

        resultado.innerHTML = "";

    });

});

