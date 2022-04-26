const products = [
    { 
        id: '1', 
        name: 'Ensayo sobre la ceguera',
        price: 15,
        category: 'libros',
        tipo: 'Ensayo',
        creador: 'José Saramago',
        anyo: '1995',
        descripcion: 'De manera inexplicable, en medio de la calle, un hombre se queda ciego. Es el primer caso de una "ceguera blanca" que se expande sin control.',
        stock: 10,
        img: '../images/ensayosobrelaceguera.jpg'
    },
    { 
        id: '2', 
        name: 'Colección Canción de Hielo Y fuego',
        price: 120,
        category: 'libros',
        tipo: 'Ciencia Ficción',
        creador: 'George R. R. Martin',
        anyo: '2005',
        descripcion: 'Es una multipremiada serie de novelas de fantasía heroica escritas por el novelista y guionista estadounidense George R. R. Martin. Martin comenzó a escribir la serie en 1993 y el primer tomo se publicó en 1996.',
        stock: 5,
        img: '../images/Coleccion_CDHYF.png'
    },
    { 
        id: '3', 
        name: 'El nombre del viento',
        price: 20,
        category: 'libros',
        tipo: 'Fantasía épica',
        creador: 'Patrick Rothfuss',
        anyo: '2007',
        descripcion: 'Primer libro de Crónica del asesino de reyes, escrito por el autor Patrick Rothfuss y publicado en el año 2007',
        stock: 5,
        img: '../images/elnombredelviento.jpg'
    },
    { 
        id: '4', 
        name: 'El temor de un hombre sabio',
        price: 21.75,
        category: 'libros',
        tipo: 'Fantasía épica',
        creador: 'Patrick Rothfuss',
        anyo: '2011',
        descripcion: 'Segundo libro de la saga de las crónicas del asesino de reyes, continuación de la historia de Kvothe y El nombre del viento.',
        stock: 5,
        img: '../images/eltemordeunhombresabio.webp'
    },
    { 
        id: '5', 
        name: 'Shameless',
        price: 80,
        category: 'series',
        tipo: 'Drama realista',
        creador: 'Paul Abbot',
        anyo: '2013',
        descripcion: 'Relato de la vida de los Gallagher, una familia numerosa cuya madre les abandonó y se han criado prácticamente solos ante la actitud de su padre Frank (William H. Macy), que es un borracho egoista y caradura.',
        stock: 5,
        img: '../images/shameless.png'
    },
    { 
        id: '6', 
        name: 'Cómo conocí a vuestra madre',
        price: 72,
        category: 'series',
        tipo: 'Comedia-Romántica',
        creador: 'Aleanna',
        anyo: '2005',
        descripcion: 'Ted Mosby (Josh Radnor), es el protagonista y a la vez narrador (Bob Saget -voz de Ted en 2030-) de un relato contado a sus hijos sobre cómo llegó a conocer a su madre, centrándose en las aventuras y peripecias que vivió durante los años previos a que esto sucediese.',
        stock: 5,
        img: '../images/6178h6E8aYL.jpg'
    },
    { 
        id: '7', 
        name: 'Los Simpsons',
        price: 315,
        category: 'series',
        tipo: 'Animación',
        creador: 'Matt Groening',
        anyo: '1996',
        descripcion: 'La comedia de dibujos animados se centra en una familia que vive en la ciudad de Springfield.',
        stock: 5,
        img: '../images/lossimpsons.jpg'
    },
    { 
        id: '8', 
        name: 'Michael Jackson',
        price: 18,
        category: 'musica',
        tipo: 'Pop',
        creador: 'Michael Jackson',
        anyo: '2009',
        descripcion: 'Es un álbum póstumo de dos discos de la banda sonora del cantante estadounidense Michael Jackson.',
        stock: 5,
        img: '../images/michaeljackson.jpg'
    },
    { 
        id: '9', 
        name: 'Carmen Boza',
        price: 12,
        category: 'musica',
        tipo: 'Indie',
        creador: 'Carmen Boza',
        anyo: '2018',
        descripcion: '“La caja negra” cuenta con un puñado de canciones de fuerza inusitada y ‘Gran Hermano’ destaca por su ritmo potente y denso.',
        stock: 5,
        img: '../images/carmenboza.jpg'
    },
    { 
        id: '10', 
        name: 'Vetusta Morla',
        price: 3400,
        category: 'musica',
        tipo: 'Indie',
        creador: 'Vetusta Morla',
        anyo: '2022',
        descripcion: 'Cable a Tierra es el sexto álbum de estudio de Vetusta Morla, una colección de 10 canciones originales en las que el grupo explora las sonoridades y ritmos de los folclores de aquí y del otro lado del Atlántico.',
        stock: 5,
        img: '../images/vetustamorla.jpg'
    },
]

const categories = [
    {id: 'libros', description: 'Libros'},
    {id: 'series', description: 'Series'},
    {id: 'musica', description: 'Música'}
]


export const getCategories = () => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(categories)
        }, 100)
    })
}

export const getProducts = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(categoryId ? products.filter(prod => prod.category === categoryId) : products)
        }, 100)
    })
}

export const getProductsbyId = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}