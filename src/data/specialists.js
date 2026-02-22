const specialists = [
    {
        id: 1,
        firstName: "Alina",
        lastName: "Shevchenko",
        age: 28,
        experienceYears: 6,
        specializations: ["Lash Maker", "Brow Artist"],
        services: ["Lash Lamination", "Brow Coloring", "Brow Correction"],
        photo: "https://mockmind-api.uifaces.co/content/human/128.jpg"
    },
    {
        id: 2,
        firstName: "Oleksandra",
        lastName: "Melnyk",
        age: 32,
        experienceYears: 10,
        specializations: ["Nail Technician"],
        services: ["Classic Manicure", "Gel Manicure", "Nail Design"],
        photo: "https://mockmind-api.uifaces.co/content/human/127.jpg"
    },
    {
        id: 3,
        firstName: "Kateryna",
        lastName: "Kozak",
        age: 24,
        experienceYears: 4,
        specializations: ["Hair Stylist"],
        services: ["Haircut", "Hair Coloring", "Hair Styling"],
        photo: "https://mockmind-api.uifaces.co/content/human/87.jpg"
    },
    {
        id: 4,
        firstName: "Marina",
        lastName: "Honchar",
        age: 29,
        experienceYears: 7,
        specializations: ["Cosmetologist"],
        services: ["Facial Cleaning", "Face Care"],
        photo: "https://mockmind-api.uifaces.co/content/human/124.jpg"
    },
    {
        id: 5,
        firstName: "Iryna",
        lastName: "Petrenko",
        age: 26,
        experienceYears: 5,
        specializations: ["Nail Technician", "Pedicurist"],
        services: ["Classic Manicure", "SPA Pedicure"],
        photo: "https://images.generated.photos/c28QF-Oox6xLTVnWxLqO3vkhwauT6WKjim_vzF7QImQ/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92Ml8w/MjE2MTUxLmpwZw.jpg"
    },
    {
        id: 6,
        firstName: "Olha",
        lastName: "Bondar",
        age: 34,
        experienceYears: 12,
        specializations: ["Permanent Makeup Artist"],
        services: ["Permanent Brows", "Permanent Lips"],
        photo: "https://mockmind-api.uifaces.co/content/human/221.jpg"
    },
    {
        id: 7,
        firstName: "Svitlana",
        lastName: "Tarasenko",
        age: 40,
        experienceYears: 15,
        specializations: ["Cosmetologist", "Massage Therapist"],
        services: ["Relax Massage", "Facial Care"],
        photo: "https://mockmind-api.uifaces.co/content/human/219.jpg"
    },
    {
        id: 8,
        firstName: "Natalia",
        lastName: "Kravchuk",
        age: 31,
        experienceYears: 8,
        specializations: ["Nail Technician"],
        services: ["Classic Manicure", "Acrylic Nails"],
        photo: "https://mockmind-api.uifaces.co/content/human/202.jpg"
    },
    {
        id: 9,
        firstName: "Victoria",
        lastName: "Demchenko",
        age: 27,
        experienceYears: 5,
        specializations: ["Lash Maker"],
        services: ["Lash Extensions", "Lash Lamination"],
        photo: "https://mockmind-api.uifaces.co/content/human/199.jpg"
    },
    {
        id: 10,
        firstName: "Anastasia",
        lastName: "Fedorova",
        age: 22,
        experienceYears: 3,
        specializations: ["Brow Artist"],
        services: ["Brow Correction", "Brow Coloring"],
        photo: "https://mockmind-api.uifaces.co/content/human/184.jpg"
    },
    {
        id: 11,
        firstName: "Diana",
        lastName: "Sydorenko",
        age: 30,
        experienceYears: 9,
        specializations: ["Hair Stylist"],
        services: ["Haircut", "Hair Coloring"],
        photo: "https://mockmind-api.uifaces.co/content/human/176.jpg"
    },
    {
        id: 12,
        firstName: "Yuliia",
        lastName: "Martynenko",
        age: 35,
        experienceYears: 13,
        specializations: ["Cosmetologist"],
        services: ["Anti-aging Care", "Facial Cleaning"],
        photo: "https://mockmind-api.uifaces.co/content/human/175.jpg"
    },
    {
        id: 13,
        firstName: "Tetiana",
        lastName: "Hryhorenko",
        age: 33,
        experienceYears: 11,
        specializations: ["Pedicurist"],
        services: ["Classic Pedicure", "SPA Pedicure"],
        photo: "https://mockmind-api.uifaces.co/content/human/161.jpg"
    },
    {
        id: 14,
        firstName: "Liudmyla",
        lastName: "Romanova",
        age: 42,
        experienceYears: 18,
        specializations: ["Cosmetologist", "Massage Therapist"],
        services: ["Anti-cellulite Massage", "Facial Care"],
        photo: "https://mockmind-api.uifaces.co/content/human/170.jpg"
    },
    {
        id: 15,
        firstName: "Oksana",
        lastName: "Bilyk",
        age: 29,
        experienceYears: 7,
        specializations: ["Nail Technician"],
        services: ["French Manicure", "Nail Design"],
        photo: "https://mockmind-api.uifaces.co/content/human/148.jpg"
    },
    {
        id: 16,
        firstName: "Yevheniia",
        lastName: "Savchenko",
        age: 26,
        experienceYears: 4,
        specializations: ["Lash Maker", "Permanent Makeup Artist"],
        services: ["Lash Lamination", "Permanent Brows"],
        photo: "https://mockmind-api.uifaces.co/content/human/146.jpg"
    },
    {
        id: 17,
        firstName: "Ilona",
        lastName: "Kovalenko",
        age: 23,
        experienceYears: 2,
        specializations: ["Brow Artist"],
        services: ["Brow Correction", "Henna Brows"],
        photo: "https://mockmind-api.uifaces.co/content/human/142.jpg"
    },
    {
        id: 18,
        firstName: "Sofiia",
        lastName: "Lytvyn",
        age: 25,
        experienceYears: 4,
        specializations: ["Hair Stylist"],
        services: ["Hair Styling", "Hair Coloring"],
        photo: "https://mockmind-api.uifaces.co/content/human/144.jpg"
    },
    {
        id: 19,
        firstName: "Artem",
        lastName: "Kravtsov",
        age: 38,
        experienceYears: 15,
        specializations: ["Nail Technician", "Pedicurist"],
        services: ["SPA Pedicure", "Classic Manicure"],
        photo: "https://mockmind-api.uifaces.co/content/human/197.jpg"
    },
    {
        id: 20,
        firstName: "Maksym",
        lastName: "Hordiienko",
        age: 36,
        experienceYears: 14,
        specializations: ["Hair Stylist"],
        services: ["Haircut", "Barber Services"],
        photo: "https://mockmind-api.uifaces.co/content/human/177.jpg"
    },
    {
        id: 21,
        firstName: "Larysa",
        lastName: "Tkachenko",
        age: 30,
        experienceYears: 8,
        specializations: ["Cosmetologist"],
        services: ["Face Care", "Facial Massage"],
        photo: "https://mockmind-api.uifaces.co/content/human/108.jpg"
    },
    {
        id: 22,
        firstName: "Mariia",
        lastName: "Volkova",
        age: 27,
        experienceYears: 6,
        specializations: ["Brow Artist", "Lash Maker"],
        services: ["Brow Lamination", "Lash Lamination"],
        photo: "https://mockmind-api.uifaces.co/content/human/108.jpg"
    },
    {
        id: 23,
        firstName: "Hanna",
        lastName: "Prokopenko",
        age: 34,
        experienceYears: 12,
        specializations: ["Nail Technician"],
        services: ["Gel Manicure", "Nail Design"],
        photo: "https://mockmind-api.uifaces.co/content/human/89.jpg"
    },
    {
        id: 24,
        firstName: "Volodymyr",
        lastName: "Kovaliuk",
        age: 31,
        experienceYears: 9,
        specializations: ["Hair Stylist"],
        services: ["Haircut", "Hair Coloring"],
        photo: "https://mockmind-api.uifaces.co/content/human/90.jpg"
    },
    {
        id: 25,
        firstName: "Nadiia",
        lastName: "Zalizniak",
        age: 28,
        experienceYears: 7,
        specializations: ["Cosmetologist", "Massage Therapist"],
        services: ["Face Care", "Relax Massage"],
        photo: "https://mockmind-api.uifaces.co/content/human/84.jpg"
    }
];

export default specialists;
