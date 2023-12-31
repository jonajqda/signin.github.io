function mostrarInfo() {
    let datos = {
      Nombres: 'Jonathan J.',
      Apellidos: 'Quintana De Armas',
      'Fecha de nacimiento': '21 de Diciembre de 1987',
      'Edad': '35',
      Profesión: 'Profesor de idiomas modernos y desarrollador web',
      'Años de experiencia': '8',
      'Música preferida': 'Jazz y metal progresivo',
    };

    
    let infoDiv = document.getElementById('info');
    infoDiv.style.fontSize = '30px'; 
    // document.body.style.fontFamily = "'Dancing Script', cursive";

    infoDiv.innerHTML = '';

    for (let ficha in datos) {
      infoDiv.innerHTML += ficha + ': ' + datos[ficha] + '<br>';
    }
}

let boton = document.getElementById('mostrarInfo');
boton.addEventListener('click', mostrarInfo);




