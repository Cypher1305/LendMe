const User_Contact = [
  {
    name: "Brooo 👿",
    image: require("../assets/img_Users/broo.png"),
  },
  {
    name: "Bill",
    image: require("../assets/img_Users/bil.png"),
  },
  {
    name: "Sistersss",
    image: require("../assets/img_Users/sisterss.png"),
  },
  {
    name: "Bb 💓",
    image: require("../assets/img_Users/user_default.png"),
  },
  {
    name: "Jean",
    image: require("../assets/img_Users/jean.png"),
  },
];

const Transact = [
  {
    contact: "Boutique ESATIC",
    date: "12/16/2023",
    montant: "-4500",
    devise: "FCFA",
    image: require("../assets/img_Users/btq_esatic.png"),
  },
  {
    contact: User_Contact[3].name,
    date: "12/16/2023",
    montant: "+15000",
    devise: "FCFA",
    image: require("../assets/img_Users/user_default.png"),
  },
  {
    contact: "Restaurant ESATIC",
    date: "10/16/2023",
    montant: "-500",
    devise: "FCFA",
    image: require("../assets/img_Users/rest_esatic.png"),
  },
  {
    contact: User_Contact[0].name,
    date: "12/16/2023",
    montant: "+10.000",
    devise: "FCFA",
    image: require("../assets/img_Users/broo.png"),
  },
];

export default {
  User_Contact,
  Transact,
};
