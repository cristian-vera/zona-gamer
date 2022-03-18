const APIURL = "https://6233ec14373284533dfa7c78.mockapi.io/productos";

function getProduct(id){
    fetch(`${APIURL}/${id}`)
    .then((result) => result.json())
    .then((producto) => {
        console.log(producto);
    });
}

getProduct(1);

export function getProducts(){
    return fetch(`${APIURL}`);
}

export function getProducts2(id){
    return fetch(`${APIURL}/${id}`);
}