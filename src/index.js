document.addEventListener("DOMContentLoaded", ()=>{
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    fetch(imgUrl)
    .then(res => res.json())
    .then(imageURLs => 
        imageURLs.message.forEach(imageURL =>{
           const img = document.createElement("img");
           img.src=imageURL; 
           document.getElementById("dog-image-container").appendChild(img);
        }))
    .catch(err => console.log(err.message));
});

//loads all the breeds
document.addEventListener("DOMContentLoaded", ()=>{
    const ul = document.querySelector("ul");
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    fetch(breedUrl)
    .then(response => response.json())
    .then(breeds => {
        allBreeds = Object.keys(breeds.message);
        allBreeds.forEach(breed =>{
            const li= document.createElement("li");
            li.innerText=breed;
            ul.appendChild(li);
            let clicked = false;
            li.addEventListener("click", ()=>{
                if (!clicked){
                    li.style.color = "pink";
                    clicked = true;
                } else {
                    li.style.color = "black";
                    clicked=false;
                }

            })
        }) 
    }
    ).catch(err=>console.log(err.message));

    const select = document.getElementById("breed-dropdown");
    select.addEventListener("change", ()=>{
        const startingChar = select.value;
        const allBreeds = document.querySelectorAll("li");
        allBreeds.forEach(li =>{
            li.style.visibility="visible";
            let string = li.innerText;
            if(string[0] != startingChar){
                li.style.visibility ="hidden";
            }else {
                li.style.visibility ="visible";
            }
        })
})
});


