
# Web Serendipia

Esta web es un ecommerce de productos culturales tales como música, libros o series en dvd. Es un proyecto creado para el curso de React.js realizado en Coderhouse.
## Autor

- [Daniel Boza García](https://github.com/Danielbzg)


## Dependencias utilizadas

react-router-dom: Routing en el browser

react-firebase: Base de datos

## GIF para mostrar el funcionamiento de la página web



## Análisis de componentes

El proyecto tiene definidas unas rutas mediante el router en el que se establecen todas estas rutas:

/ 👉 Ruta que te lleva a la páginainicial de la web

/list 👉 Acceso al listado de productos de la web

/detail/:productId 👉 Ruta de cada producto donde podrás ver una descripción de estos

/cart 👉 Ruta que te lleva a la carta de productos que están en tu carrito

/form 👉 Te llevará al formulario de registro precompra

* 👉 Para las rutas que no estén definidas en el proyecto muestre una página de error que contiene un botón para volver al inicio


Entre los principales componentes encontramos:

- Navbar: que es el componente que engloba el menú de navegación principal de la web. También cuenta con el logo de react que he querido dejar en honor a que el curso es sobre esta librería.
- ItemListContainer: Contenedor grupal de los productos que se cargan mediante ItemList.
- ItemDetailContainer: Contenedor del ItemDetail que muestra el producto seleccionado.
- Item: Es el componente del producto individual.
- ItemCount: Icono del carrito de compra que aparecerá según haya o no contenido en este.
- Form: Componente de formulario de registro previo a la compra final.

## Principales funciones del CartContext

- addItem: Función para añadir productos en el carrito y si ya está en el carrito que no duplique el producto sino que varíe la cantidad.

- getQuantity: Este es el método que se usa para mostrar el número de productos que aparecen al lado del símbolo del carrito.

- isInCart: Booleano para saber si el producto está en carta, o sea, en la cesta o no.

- clearCart: esta función está asociada al botón de vaciar carrito y limpiará todo lo que se encuentre en el.

- removeItem: esta función removerá el producto con ese id y seteará el nuevo valor del CartWidget.

- getQuantityProd: Contador de la cantidad de un producto existente.

- totalCost => Cálculo del valor de la compra.

- finishShopping: Aviso de finalización de la compra.


## Tech Stack
🛠️ HTML

🛠️ CSS

🛠️ JavaScript

🛠️ React JS

## Base de datos de Firebase
- Los productos pueden pertenecer a una de estas categorías:


| Categorías        | Descripción                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Libros | Libros               |
| Series | Series  |
| Música | Música |

- Cada producto cuenta con estas variables::


| Variables        | Tipo                                                                |
| ----------------- | ------------------------------------------------------------------ |
| id | String |
| name | String  |
| price | Number |
| category | String |
| tipo | String  |
| creador | String |
| anyo | String |
| descripcion | String  |
| stock | Number |
<<<<<<< HEAD
| img | String |
=======
| img | String |
>>>>>>> d11de7bee47a6c960b8e6cc24b5188ecabab5252
