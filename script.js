new Vue({
  el: "#commande",
  data: {
    oda: "Orange digital Academy est une École du code, centre à vocation technologique qui propose des formations et des animations.",
    odc: "Orange Digital Center est un centre d’accompagnement et de développement des compétences numériques. De la formation au codage à la création d’entreprise, il couvre un large champ d’activités. Gratuits et ouverts à tous, ce centre fonde l’apprentissage sur des projets concrets.",
    fab: "Orange Fab est un accélérateur de start-up qui accompagne les jeunes pousses et leur permet de développer des partenariats commerciaux nationaux et internationaux avec une ou plusieurs entités du Groupe.",
    fabLab:
      "FabLab est un atelier de fabrication numérique qui permet de prototyper les projets et d’apprendre en pratiquant.",
    ventures:
      "Orange Ventures est un fonds d’investissement de 350 millions d’euros à visée internationale, qui finance les startups innovantes dans les domaines d’expertise d’Orange et au-delà.",
  },

  methods: {
    speechPERSONEL() {
      (self = this),
        axios
          .get("http://10.3.141.1:6400/api/personnel")
          .then(function (response) {
            console.log(response);
          });
    },
    bonjour() {
      (self = this),
        axios.get("http://10.3.141.1:6400/api/start").then(function (response) {
          console.log(response);
        });
    },
    speechODA() {
      (self = this),
        axios
          .all(
            axios.get("http://10.3.141.1:6400/api/section/oda"),
            axios.get("http://10.3.141.1:6400/api/parler/" + self.oda)
          )
          .then(function (response) {
            console.log(response);
          });
    },
    speechFAB() {
      (self = this),
        axios
          .all(
            axios.get("http://10.3.141.1:6400/api/section/fab"),
            axios.get("http://10.3.141.1:6400/api/parler/" + self.fab)
          )
          .then(function (response) {
            console.log(response);
          });
    },
    BjrLatif() {
      (self = this),
        axios
          .get("http://10.3.141.1:6400/api/parler/bonjour latifate")
          .then(function (response) {
            console.log(response);
          });
    },
    UseHabib() {
      (self = this),
        axios
          .get("http://10.3.141.1:6400/api/parler/bonjour habib bamba")
          .then(function (response) {
            console.log(response);
          });
    },
    repBonjour() {
      (self = this),
        axios
          .get(
            "http://10.3.141.1:6400/api/parler/Bonjour, je suis telo votre assistant pour vous informer et vous guider au sein de l'orange digital center et vous comment vous appelez vous ?"
          )
          .then(function (response) {
            console.log(response);
          });
    },
    blemName() {
      (self = this),
        axios
          .get(
            "http://10.3.141.1:6400/api/parler/J'ai un soucis avec les noms , pouvez vous selectionner la personne souhaitée sur la tablette ?"
          )
          .then(function (response) {
            console.log(response);
            self.speechPERSONEL();
          });
    },
    speechFABLAB() {
      (self = this),
        axios
          .all(
            axios.get("http://10.3.141.1:6400/api/section/fablab"),
            axios.get("http://10.3.141.1:6400/api/parler/" + self.fabLab)
          )
          .then(function (response) {
            console.log(response);
          });
    },
    speechODC() {
      (self = this),
        axios
          .all(
            axios.get("http://10.3.141.1:6400/api/section/odc"),
            axios.get("http://10.3.141.1:6400/api/parler/" + self.odc)
          )
          .then(function (response) {
            console.log(response);
          });
    },
    musicOn() {
      (self = this),
        axios
          .get("http://10.3.141.1:6400/api/song/on")
          .then(function (response) {
            console.log(response);
          });
    },
    musicOff() {
      (self = this),
        axios
          .get("http://10.3.141.1:6400/api/song/off")
          .then(function (response) {
            console.log(response);
          });
    },
    speechVENTURES() {
      (self = this),
        axios
          .all(
            axios.get("http://10.3.141.1:6400/api/section/ventures"),
            axiosaxios.get("http://10.3.141.1:6400/api/parler/" + self.ventures)
          )
          .then(function (response) {
            console.log(response);
          });
    },
  },
});
