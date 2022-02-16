// More API functions here:
// https://github.com/googlecreativelab/teachablemachine-community/tree/master/libraries/image

// const { indexOf } = require("lodash");

// the link to your model provided by Teachable Machine export panel
const URL = "https://teachablemachine.withgoogle.com/models/tPJDc_pUe/";

let model, webcam, labelContainer, maxPredictions;

const chocNameElem = document.querySelector(".chocName");
const chocolatesElem = document.querySelector(".chocolates");
const questionElem = document.querySelector(".question");
const debugElem = document.querySelector(".debugMessage");
const restartButton = document.querySelector(".restart");
const fileUpload = document.querySelector(".fileUpload");

const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");

// const inputMode = document.querySelector("input[name='inputMode']:checked");

//const chocolateListTemplate = Handlebars.compile(document.querySelector(".chocolateListTemplate").innerText);


function toggleVisibility(elem) {
   elem.classList.toggle("hidden");
}

// function storeCustomer(username) {
//    console.log("Getting there");
//    axios.post("/api/add-customer", {
//       username: username,
//   }).then(function(result){
//       // console.log(result.data);
//       if (result.data.status === "error") {
//           chocNameElem.innerHTML = result.data.message;
//       } else {
//           chocNameElem.innerHTML = result.data.message;
//       }
//   })

       
// }

function showCustomerList()  {
   axios
       .get("/api/customers")
       .then(function(response){
           const customers = response.data.data;
           console.log("customers", customers);
       })
}

// Load the image model and setup the webcam
async function init() {
   showCustomerList();
   const modelURL = URL + "model.json";
   const metadataURL = URL + "metadata.json";

   // load the model and metadata
   // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
   // or files from your local hard drive
   // Note: the pose library adds "tmImage" object to your window (window.tmImage)
   model = await tmImage.load(modelURL, metadataURL);
   maxPredictions = model.getTotalClasses();

   console.log("model", model);
   console.log("maxPredictions", maxPredictions);

}

async function stop() {
   document.getElementById("webcam-container").innerHTML = "";
   console.log("STOPING");
}

const showMeList = ["Tex", "Bar One", "Lunch Bar", "KitKat"]
let lookingForIndex = 0

// run the webcam image through the image model
async function predict() {
   
   // predict can take in an image, video or canvas html element
   const prediction = await model.predict(webcam.canvas);

   let highestProb = 0;
   let chocName = "";

   prediction.forEach(function (pred) {
      if (pred.probability > highestProb) {
         highestProb = pred.probability;
         chocName = pred.className;
      }
   });

   if (highestProb < 0.95) {
      return;
   }

   checkForChocolateThrottled(chocName);

}


let fileInput = document.querySelector('#fileinput');
let checkUploadedFile = document.querySelector('.checkUploadedFile');
const canvas = document.querySelector('#canvas');

console.log("CAN WE EVEN GET HERE...");
console.log("checkUploadedFile: ", checkUploadedFile
);

checkUploadedFile.addEventListener('click', async function () {

   const prediction = await model.predict(canvas);
   let highestProb = 0;
   let fruitName = "";

   prediction.forEach(function (pred) {
      // console.log("pred", pred);
      if (pred.probability > highestProb) {
         highestProb = pred.probability;
         fruitName = pred.className;
      }
   });

   if (highestProb < 0.95) {
      return;
   }

   console.log("highestProb ", highestProb);
   console.log("fruitName", fruitName);

});

fileInput.addEventListener('change', function (ev) {
   if (ev.target.files) {
      let file = ev.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = function (e) {
         var image = new Image();
         image.src = e.target.result;
         image.onload = function (ev) {

            canvas.width = image.width;
            canvas.height = image.height;
            var ctx = canvas.getContext('2d');
            ctx.drawImage(image, 0, 0);
         }
      }
   }
});

