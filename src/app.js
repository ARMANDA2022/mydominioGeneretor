window.onload = function() {
  document.querySelector("#app").innerHTML = Generetor();
};

const Generetor = () => {
  let mydominio = "";
  var pronoun = ["the", "our"];
  var adj = ["great", "big"];
  var noun = ["jogger", "racoon"];
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        mydominio += pronoun[i] + adj[j] + noun[k] + "<br>";
      }
    }
  }
  return mydominio;
};
