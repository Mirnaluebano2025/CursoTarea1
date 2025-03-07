
let profiles = [
    {
        name: "Ana González",
        image: "img/Screenshot_2.png",
        description: "Diseñadora UX/UI con pasión por la creatividad."
    },
    {
        name: "Lorenzo Pérez",
        image: "img/Juanperez.png",
        description: "Desarrollador web especializado en JavaScript."
    },
    {
        name: "Carlos Jimenez",
        image: "img/images.png",
        description: "Experta en marketing digital y redes sociales."
    },
    {
        name: "Maria Hernandez",
        image: "img/Mariahernandez.png",
        description: "Experta en marketing digital y redes sociales."
    },
    {
        name: "Sofia Rodriguez",
        image: "img/Screenshot_3.png",
        description: "Experta en marketing digital y redes sociales."
    }
   
];

let usuarioActual = 0; 

function updateProfile() {
    let profile = profiles[usuarioActual];

    document.querySelector(".profile-image").src = profile.image;
    document.querySelector(".profile-name").innerText = profile.name;
    document.querySelector(".profile-description").innerText = profile.description;

    usuarioActual = (usuarioActual + 1) % profiles.length;
}

updateProfile();