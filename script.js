setInterval(setDate, 1000);
const secondHand = document.querySelector('.second-hand');//document.querySelector es para seleccionar un elemento del html, en este caso seleccionamos la clase second-hand que seria la manecilla de los segundos
const minsHand = document.querySelector('.min-hand');//aqui llamamos a la clase min-hand que seria la manecilla de los minutos que es la manecilla mas grande
const hourHand = document.querySelector('.hour-hand');//aqui llamamos a la clase hour-hand que seria la manecilla de las horas que es la manecilla mas pequeña
function setDate(){ //Aqui creamos una funcion que se llamara setDate
    const now = new Date(); //Aqui creamos una constante que se llamara now y que sera igual a la fecha actual

    const seconds = now.getSeconds(); //Aqui creamos una constante que se llamara seconds y que sera igual a los segundos actuales, .getSeconds es una funcion que nos da los segundos actuales
    const secondsDegrees = ((seconds / 60) * 360) + 90; //Aqui creamos una constante que se llamara secondsDegrees y que sera igual a los segundos actuales divididos entre 60 y multiplicados por 360 y sumados 90, esto es para que los segundos se muevan en un circulo de 360 grados y se muevan desde el angulo de 90 grados
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`; //Aqui le decimos que la manecilla de los segundos se mueva en el angulo de los segundos actuales

    const mins = now.getMinutes(); //Aqui creamos una constante que se llamara mins y que sera igual a los minutos actuales, .getMinutes es una funcion que nos da los minutos actuales
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90; //Aqui creamos una constante que se llamara minsDegrees y que sera igual a los minutos actuales divididos entre 60 y multiplicados por 360 y sumados 90, esto es para que los minutos se muevan en un circulo de 360 grados y se muevan desde el angulo de 90 grados
    minsHand.style.transform = `rotate(${minsDegrees}deg)`; //Aqui le decimos que la manecilla de los minutos se mueva en el angulo de los minutos actuales

    const hour = now.getHours(); //Aqui creamos una constante que se llamara hour y que sera igual a las horas actuales, .getHours es una funcion que nos da las horas actuales
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90; //Aqui creamos una constante que se llamara hourDegrees y que sera igual a las horas actuales divididos entre 12 y multiplicados por 360 y sumados 90, esto es para que las horas se muevan en un circulo de 360 grados y se muevan desde el angulo de 90 grados
    hourHand.style.transform = `rotate(${hourDegrees}deg)`; //Aqui le decimos que la manecilla de las horas se mueva en el angulo de las horas actuales
 }




setDate(); //Aqui llamamos a la funcion setDate