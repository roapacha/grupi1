const aplicaion= document.querySelector('.container')
const geturl = new URLSearchParams(window.location.search)

const menurl= 'https://private-anon-fcd7f091f4-pizzaapp.apiary-mock.com/restaurants/restaurantId/menu?category=Pizza&orderBy=rank'
fetch (menurl) 
.then(res=> res.json())
.then(data=> {
    data.forEach(men => {
        const p = document.createElement('p')
        p.innerHTML = men.name
        aplicaion.appendChild(p)
    });
})
    

.catch(err => console.log(err))