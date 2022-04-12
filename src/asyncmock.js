const products = [
    { 
        id: '1', 
        name: 'Ensayo sobre la ceguera',
        price: 15,
        category: 'libros',
        tipo: 'Malbec',
        creador: 'Catena Zapata',
        año: '2010',
        stock: 5,
        img: '../images/ensayosobrelaceguera.jpg'
    },
    { 
        id: '2', 
        name: 'Colección Canción de Hielo Y fuego',
        price: 12499,
        category: 'libros',
        tipo: 'Chardonnay',
        creador: 'Bemberg Estate Wines',
        año: '2005',
        stock: 5,
        img: '../images/Coleccion_CDHYF.png'
    },
    { 
        id: '3', 
        name: 'El nombre del viento',
        price: 2300,
        category: 'libros',
        tipo: 'Brut-nature',
        creador: 'Salentein',
        año: '2008',
        stock: 5,
        img: '../images/elnombredelviento.jpg'
    },
    { 
        id: '4', 
        name: 'El temor de un hombre sabio',
        price: 620,
        category: 'libros',
        tipo: 'Malbec',
        creador: 'Del Fin del Mundo',
        año: '100% Malbec',
        stock: 5,
        img: '../images/eltemordeunhombresabio.webp'
    },
    { 
        id: '5', 
        name: 'Shameless',
        price: 80,
        category: 'series',
        tipo: 'Realista',
        creador: 'Rutini Wines',
        año: '2013',
        stock: 4,
        img: '../images/shameless.png'
    },
    { 
        id: '6', 
        name: 'Cómo conocí a vuestra madre',
        price: 72,
        category: 'series',
        tipo: 'Comedia-Romántica',
        creador: 'Aleanna',
        año: '2005',
        stock: 5,
        img: '../images/6178h6E8aYL.jpg'
    },
    { 
        id: '7', 
        name: 'Los Simpsons',
        price: 3105,
        category: 'series',
        tipo: 'Animación',
        creador: 'Matt Groening',
        año: '1996',
        stock: 5,
        img: '../images/lossimpsons.jpg'
    },
    { 
        id: '8', 
        name: 'Michael Jackson',
        price: 4500,
        category: 'musica',
        tipo: 'Pop',
        creador: 'Michael Jackson',
        año: '2006',
        stock: 5,
        img: '../images/michaeljackson.jpg'
    },
    { 
        id: '9', 
        name: 'Carmen Boza',
        price: 2300,
        category: 'musica',
        tipo: 'Indie',
        creador: 'Carmen Boza',
        año: '2015',
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
        año: '2022',
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