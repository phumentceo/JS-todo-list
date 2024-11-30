const teachers1 = [
    {
        "id" : 1,
        "name" : "Panha",
        "age"  : 25,
        "contact" : {
            "email" : "panha@gmail.com",
            "phone" : "0978759989",
            "socail": {
                "facebook"    : "Panha FB",
                "instagram"   : "Panha"
            }
        }
    },
    {
        "id" : 2,
        "name" : "Phument",
        "age"  : 25,
        "contact" : {
            "email" : "phument@gmail.com",
            "phone" : "0978759989",
            "socail": {
                "facebook" : "ពុធ ភូមិន",
                "instagram"   : "Phument"
            }
        }
    }
]


teachers1.map(item => (
    console.log(`
        id    : ${item.id}
        name  : ${item.name}
        age   : ${item.age}
        email : ${item.contact.email}
        phone : ${item.contact.phone}
        facebook : ${item.contact.socail.facebook}
        instagram : ${item.contact.socail.instagram}
    `)
));