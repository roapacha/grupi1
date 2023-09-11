 const aplicacion = document.querySelector('.container')
 
 const url ='https://private-anon-61949a0a30-pizzaapp.apiary-mock.com/restaurants/'
 
 fetch(url)
    .then(res=> res.json())
    .then(data=> {
        data.forEach(pizzaria =>{
        const p = document.createElement('p')
            p.setAttribute('id', pizzaria.id)
         p.innerHTML = pizzaria.name
         p.addEventListener('click',function(){
            window.location.href='./menu.html?=id${}'
    })
                
    
         aplicacion.appendChild(p)   
        });
    })
    .catch(err => console.log(err))
 


/*var listapedidos = [{id: 1, titulo: "pedido lucas"}];
function atualizarPedidos(id, titulo){

	// 10, pedido bianca
	fecht('https://private-anon-61949a0a30-pizzaapp.apiary-mock.com' ,{method: DELETE})
	,then(data=>{
	listaPedidos, for{
		if(id===10)
		titulo = Pedido Bianca
		}
	});
}*/
