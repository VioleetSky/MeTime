const services = {
    manicure: {
        id: "manicure",
        title: "Manicure",
        tag: "manicure",
        image: "https://images.pexels.com/photos/3997389/pexels-photo-3997389.jpeg",
        services: [
            {
                id: "classic_manicure",
                title: "Classic Manicure",
                duration: 60,
                price: 500,
                specialists: ["Nail Technician"],
                masters: [2, 5, 15, 23]
            },
            {
                id: "gel_manicure",
                title: "Gel Manicure",
                duration: 90,
                price: 750,
                specialists: ["Nail Technician"],
                masters: [2, 15, 23]
            },
            {
                id: "nail_design",
                title: "Nail Design",
                duration: 120,
                price: 1000,
                specialists: ["Nail Technician"],
                masters: [15, 23]
            }
        ]
    },

    pedicure: {
        id: "pedicure",
        title: "Pedicure",
        tag: "pedicure",
        image: "https://images.pexels.com/photos/310278/pexels-photo-310278.jpeg?_gl=1*1tmz9e3*_ga*NjAwNTEwOTE3LjE3NzAzMDE5MDg.*_ga_8JE65Q40S6*czE3NzAzMDE5MDgkbzEkZzEkdDE3NzAzMDE5NTAkajE4JGwwJGgw",
        services: [
            {
                id: "classic_pedicure",
                title: "Classic Pedicure",
                duration: 70,
                price: 650,
                specialists: ["Pedicurist"],
                masters: [5, 13, 19]
            },
            {
                id: "spa_pedicure",
                title: "SPA Pedicure",
                duration: 90,
                price: 900,
                specialists: ["Pedicurist"],
                masters: [13, 19]
            }
        ]
    },

    brows: {
        id: "brows",
        title: "Brows",
        tag: "brows",
        image: "https://images.pexels.com/photos/3762664/pexels-photo-3762664.jpeg?_gl=1*1rdpjcc*_ga*NjAwNTEwOTE3LjE3NzAzMDE5MDg.*_ga_8JE65Q40S6*czE3NzAzMDE5MDgkbzEkZzEkdDE3NzAzMDIwMDYkajM4JGwwJGgw",
        services: [
            {
                id: "brow_correction",
                title: "Brow Correction",
                duration: 30,
                price: 350,
                specialists: ["Brow Artist"],
                masters: [1, 10, 17, 22]
            },
            {
                id: "brow_coloring",
                title: "Brow Coloring",
                duration: 40,
                price: 400,
                specialists: ["Brow Artist"],
                masters: [1, 10, 22]
            },
            {
                id: "brow_lamination",
                title: "Brow Lamination",
                duration: 60,
                price: 700,
                specialists: ["Brow Artist"],
                masters: [1, 22]
            }
        ]
    },

    lashes: {
        id: "lashes",
        title: "Lashes",
        tag: "lashes",
        image: "https://images.pexels.com/photos/7755523/pexels-photo-7755523.jpeg",
        services: [
            {
                id: "lash_extension",
                title: "Lash Extensions",
                duration: 120,
                price: 1100,
                specialists: ["Lash Maker"],
                masters: [9, 16, 22]
            },
            {
                id: "lash_lamination",
                title: "Lash Lamination",
                duration: 60,
                price: 800,
                specialists: ["Lash Maker"],
                masters: [1, 9, 16]
            }
        ]
    },

    hair: {
        id: "hair",
        title: "Hair",
        tag: "hair",
        image: "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg",
        services: [
            {
                id: "haircut",
                title: "Haircut",
                duration: 60,
                price: 600,
                specialists: ["Hair Stylist"],
                masters: [3, 11, 18, 20, 24]
            },
            {
                id: "hair_coloring",
                title: "Hair Coloring",
                duration: 120,
                price: 1400,
                specialists: ["Hair Stylist"],
                masters: [3, 11, 18]
            },
            {
                id: "hair_styling",
                title: "Hair Styling",
                duration: 45,
                price: 450,
                specialists: ["Hair Stylist"],
                masters: [3, 18]
            }
        ]
    },

    cosmetology: {
        id: "cosmetology",
        title: "Cosmetology",
        tag: "cosmetology",
        image: "https://images.pexels.com/photos/5069612/pexels-photo-5069612.jpeg",
        services: [
            {
                id: "facial_cleaning",
                title: "Facial Cleaning",
                duration: 90,
                price: 1200,
                specialists: ["Cosmetologist"],
                masters: [4, 7, 12, 14, 21, 25]
            },
            {
                id: "face_care",
                title: "Face Care",
                duration: 60,
                price: 900,
                specialists: ["Cosmetologist"],
                masters: [4, 12, 21]
            }
        ]
    },

    massage: {
        id: "massage",
        title: "Massage",
        tag: "massage",
        image: "https://images.pexels.com/photos/6560304/pexels-photo-6560304.jpeg",
        services: [
            {
                id: "relax_massage",
                title: "Relax Massage",
                duration: 60,
                price: 800,
                specialists: ["Massage Therapist"],
                masters: [7, 14, 25]
            },
            {
                id: "anticellulite_massage",
                title: "Anti-cellulite Massage",
                duration: 60,
                price: 950,
                specialists: ["Massage Therapist"],
                masters: [14]
            }
        ]
    }
};

export default services;
