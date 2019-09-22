var Camara;
var video;
var knn;
var modelo;
var texto;
var clasificando = false;
var video;
var i = 0;
var elemento;
var continuar;
var btn_continuar;
var incorrecto;
_tfengine.ENV.set('WEBGL_PACK', false);



btn_continuar = document.getElementById('btn_continue');
btn_continuar.disabled = true;

incorrecto = document.getElementById('incorrecto');

function setup() {
  noCanvas();
  Camara = createCapture(VIDEO);
  video = document.getElementById("video");
  Camara.parent(video);

  modelo = ml5.featureExtractor('MobileNet', modelReady);
  knn = ml5.KNNClassifier();
  

  
  continuar = document.getElementById('continuar');
  

  elemento = document.getElementById('buscar');
  

}

function presionando_boton(){
  var nombre_boton = this.elt.innerHTML;
  console.log(nombre_boton);
  entrenar_knn(nombre_boton);
}

function entrenar_knn(objeto_entrenar){
  const imagen = modelo.infer(Camara);
  knn.addExample(imagen, objeto_entrenar);
}


function clasificar(){
  const imagen = modelo.infer(Camara);
  knn.classify(imagen, function(error, result){
    if(error){
      console.error();
    }

    if (result.confidencesByLabel) {
      const confidences = result.confidencesByLabel;
      // result.label is the label that has the highest confidence
      if (result.label) {
        // texto.html(`${result.label} ${confidences[result.label] * 100} %`);
        info(result.label);
        console.log(result.label);
      }
    }

    clasificar();
  });
}

function info(dato){
  if(dato == elemento.innerHTML){
    incorrecto.style.display="none";
    continuar.style.display='block';
    elemento.style="border: 2px solid green; text-align: center; font-weight: bold; font-size:40px;";
    btn_continuar.disabled = false;
  }else if(dato != elemento.innerHTML && dato!="nada"){
    continuar.style.display="none";
    incorrecto.style.display="block";
    elemento.style="border: 2px solid red; text-align: center; font-weight: bold; font-size:40px;";
    btn_continuar.disabled = true;
  }
}

function modelReady(){
  console.log("Modelo listo");
  elemento.style="border: 2px solid blue; text-align: center; font-weight: bold; font-size:40px;";
  cargar_my_KNN();
}
function draw() {
  image(Camara,0,0,500,300);

  if(knn.getNumLabels()>0 && !clasificando){
    clasificar();
    clasificando = true;
  }
}

function guardar_neurona() {
  knn.save('myKNNDataSet');
}

function cargar_my_KNN() {
  knn.load('./myKNNDataset.json');
  console.log("neurona cargada");
}

