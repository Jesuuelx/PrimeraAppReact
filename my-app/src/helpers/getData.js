const getData = ( id ) => {
    return new Promise((resolve, reject) => {
      if (typeof id !== "undefined") {
        let itemList = productos.filter(item => item.tipo == id);
        setTimeout(() => {
          resolve(itemList);
        }, 3000);
      } else if (typeof id === "undefined") {
        setTimeout(() => {
          resolve(productos);
        }, 3000);
      } else {
        reject("Acceso negado");
      }
    });
  };

  const  getItem = () => {

    return new Promise ((resolve, reject ) => {
        if( productos[id] ){
          setTimeout(() => {
            resolve(productos[id])
          }, 3000);
        }else
        reject('Acceso Negado')
    })
  
  }