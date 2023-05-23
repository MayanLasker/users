fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))
            
            
            fetch('https://fakestoreapi.com/products/5')
            .then(res=>res.json())
            .then(json=>console.log(json))

            fetch('https://fakestoreapi.com/products/5',{
            method:"PUT",
            body:JSON.stringify(
                {
                    title: 'cant be any diffrent',
                    price: 13.5,
                    description: 'lorem ipsum set',
                    image: 'https://i.pravatar.cc',
                    category: 'electronic'
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))

            let aba=document.getElementById("aba")


            async function getUsersData(){
                const res = await fetch('https://dummyjson.com/users');
                const data=await res.json()
                console.log(data.users);

                data.users.map(user => {
                    let card=document.createElement('div')
                    card.id="card"
                    aba.appendChild(card)


                    let img=document.createElement("img")
                    img.src=user.image
                    card.appendChild(img)
                    img.className="img"

                    let firstName=document.createElement('div')
                    firstName.innerHTML=user.firstName
                    card.appendChild(firstName)

                    let lastName=document.createElement('div')
                    lastName.innerHTML=user.lastName
                    card.appendChild(lastName)

                    let age=document.createElement('div')
                    age.innerHTML=user.age
                    card.appendChild(age)

                    let city=document.createElement('div')
                    city.innerHTML=user.address.city
                    card.appendChild(city)

                    let email=document.createElement('div')
                    email.innerHTML=user.email
                    card.appendChild(email)




                }
                    
                )
            }

            getUsersData()

