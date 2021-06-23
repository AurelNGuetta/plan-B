new Vue({
  el: "#commande",
  data: {
    oda: "Une École du code, centre à vocation technologique qui propose des formations et des animations.",
    odc: "Orange Digital Center est un centre d’accompagnement et de développement des compétences numériques. De la formation au codage à la création d’entreprise, il couvre un large champ d’activités. Gratuits et ouverts à tous, ce centre fonde l’apprentissage sur des projets concrets.",
    fab: "Orange Fab est un accélérateur de start-up qui accompagne les jeunes pousses et leur permet de développer des partenariats commerciaux nationaux et internationaux avec une ou plusieurs entités du Groupe.",
    fabLab: "FabLab est un atelier de fabrication numérique qui permet de prototyper les projets et d’apprendre en pratiquant.",
    ventures: "Orange Ventures est un fonds d’investissement de 350 millions d’euros à visée internationale, qui finance les startups innovantes dans les domaines d’expertise d’Orange et au-delà."
},

  methods: {
    speechPERSONEL() {
        self = this,
      axios
        .get("http://10.3.141.1:6400/api/personnel")
        .then(function (response) {
          console.log(response);
        });
    },
    bonjour() {
        self = this,
      axios.get("http://10.3.141.1:6400/api/start").then(function (response) {
        console.log(response);
      });
    },
    speechODA() {
        self = this,
      axios
        .get("http://10.3.141.1:6400/api/section/" + self.oda)
        .then(function (response) {
          console.log(response);
        });
    },
    speechFAB() {
        self = this,
      axios
        .get("http://10.3.141.1:6400/api/section/" + self.fab)
        .then(function (response) {
          console.log(response);
        });
    },
    BjrLatif() {
        self = this,
        axios
          .get("http://10.3.141.1:6400/api/section/bonjour latifate")
          .then(function (response) {
            console.log(response);
          });
      },
    speechFABLAB() {
        self = this,
      axios
        .get("http://10.3.141.1:6400/api/section/"  + self.fabLab)
        .then(function (response) {
          console.log(response);
        });
    },
    speechODC() {
        self = this,
      axios
        .get("http://10.3.141.1:6400/api/section/" + self.odc)
        .then(function (response) {
          console.log(response);
        });
    },
    musicOn() {
        self = this,
      axios
        .get("http://10.3.141.1:6400/api/sound/on")
        .then(function (response) {
          console.log(response);
        });
    },
    musicOff() {
        self = this,
      axios
        .get("http://10.3.141.1:6400/api/sound/off")
        .then(function (response) {
          console.log(response);
        });
    },
    speechVENTURES() {
        self = this,
        axios.get("http://10.3.141.1:6400/api/section/" + self.ventures).then(function (response) {
          console.log(response);
        });
      },
  },
});
