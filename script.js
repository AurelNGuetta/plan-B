new Vue({
  el: "#commande",

  methods: {
    speechPERSONEL() {
      axios
        .get("http://10.3.141.1:6400/api/personnel")
        .then(function (response) {
          console.log(response);
        });
    },
    bonjour() {
      axios.get("http://10.3.141.1:6400/api/start").then(function (response) {
        console.log(response);
      });
    },
    speechODA() {
      axios
        .get("http://10.3.141.1:6400/api/section/oda")
        .then(function (response) {
          console.log(response);
        });
    },
    speechFAB() {
      axios
        .get("http://10.3.141.1:6400/api/section/fab")
        .then(function (response) {
          console.log(response);
        });
    },

    speechFABLAB() {
      axios
        .get("http://10.3.141.1:6400/api/section/fablab")
        .then(function (response) {
          console.log(response);
        });
    },
    speechODC() {
      axios
        .get("http://10.3.141.1:6400/api/section/odc")
        .then(function (response) {
          console.log(response);
        });
    },
    speechVENTURES() {
        axios.get("http://10.3.141.1:6400/api/section/ventures").then(function (response) {
          console.log(response);
        });
      },
  },
});
