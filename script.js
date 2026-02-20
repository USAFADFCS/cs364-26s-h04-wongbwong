// FILE: script.js

// complete the TODO comments

// Get references to page elements
const button = document.getElementById("makeSmoothie");
const outputDiv = document.getElementById("output");

// Helper function to display messages on the page
function showMessage(message) {
  const p = document.createElement("p");
  p.textContent = message;
  outputDiv.appendChild(p);
}

// Helper function that returns a Promise that resolves after a delay
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/* =========================
   PART 1 — PROMISE FUNCTIONS
========================= */

// Step 1: Get ingredients
function getIngredients() {
  showMessage("Gathering ingredients...");
  return new Promise((resolve, reject) => {
    wait(2000).then(() => {
      resolve("Ingredients ready");
    });
  });

}

// Step 2: Blend smoothie
function blendSmoothie() {
  showMessage("Blending smoothie...");
  return new Promise((resolve, reject) => {
    wait(3000).then(() => {
      if (Math.random() < 0.3) {
        reject(new Error("ERROR: Blender broke!"));
      } else {
        resolve("Smoothie blended");
      }
    });
  });
}

// Step 3: Pour smoothie
function pourSmoothie() {
  showMessage("Pouring into cup...");
  return new Promise((resolve, reject) => {
    wait(1000).then(() => {
      resolve("Smoothie is ready!");
    });
  });
}

/* =========================
   PART 2 — PROMISE CHAIN VERSION
========================= */

function makeSmoothieWithPromises() {
  outputDiv.innerHTML = ""; // Clear previous messages

  getIngredients()
    .then((message) => {
      showMessage(message);
      return blendSmoothie();
    })
    .then((message) => {
      showMessage(message);
      return pourSmoothie();
    })
    .then((message) => {
      showMessage(message);
    })
    .catch((error) => {
      showMessage(`${error.message}`);
    });
}

/* =========================
   PART 3 — ASYNC/AWAIT VERSION
========================= */

async function makeSmoothieAsync() {
  outputDiv.innerHTML = ""; // Clear previous messages

  try {
    showMessage(await getIngredients());
    showMessage(await blendSmoothie());
    showMessage(await pourSmoothie());
  } catch (error) {
    showMessage(`${error.message}`);
  }
}

button.addEventListener("click", makeSmoothieWithPromises);
