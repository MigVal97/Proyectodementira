function addItem(item){
    const itemHTML = '<div class="card" style="background-color: #a5d7e8;width: 18rem;">\n' +
        '    <img src="'+item.img +'" class="card-img-top" alt="image">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title" style="font-size: 30px;">'+item.name+'</h5>\n' +
        '        <p class="card-text" style="font-size: 20px;">'+item.description+'</p>\n' +
        '        <p class="card-text" style="font-size: 15px;">'+item.price+'</p>\n' +
        '        <a href="#" class="btn btn-primary" style="background-color: #576cbc; border-color: #576cbc;">Agregar al carrito</a>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<br/>';
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}


addItem({'name':'SportWatch',
    'img':'https://static.vecteezy.com/system/resources/previews/017/494/093/non_2x/letter-s-fitness-gym-logo-design-fitness-club-exercising-logo-free-vector.jpg',
    'description':'Registra datos relevantes para su condición física, como pasos dados, horas de sueño, frecuencia cardíaca y calorías quemadas',
    'price' : '$20 mensual'});

addItem({'name':'Membership',
    'img':'https://media.istockphoto.com/id/522389088/vector/vip-club-cards.jpg?s=612x612&w=0&k=20&c=Ms6bRFXe4iISeMBYdioSkEn-kMTW_M1cbCNg7JPSAcc=',
    'description':'Contenido premium que sea informativo . Esto puede ser en forma de artículos, seminarios web, podcasts o recursos descargables.',
    'price' : '$20 mensual - $200 anual'});
