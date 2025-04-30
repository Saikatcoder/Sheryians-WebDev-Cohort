// const textareainput = document.getElementById("textarea");
const outputbox = document.getElementById("conevtext");
// const convertbtn = document.getElementById("btn")


// convertbtn.addEventListener('click',()=>{
//     textareainput.value 
// })



// Deep Clone Function
function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }
    if (Array.isArray(obj)) {
      return obj.map(deepClone);
    }
    const cloned = {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        cloned[key] = deepClone(obj[key]);
      }
    }
    return cloned;
  }
  
  // Main Functionality
  document.getElementById('btn').addEventListener('click', function () {
    const input = document.getElementById('textarea').value;
  
    try {
      const original = JSON.parse(input);
      const cloned = deepClone(original);
  
      // Make changes in clone to show they are different
      if (typeof cloned === 'object') {
        cloned._isCloned = true; // Just adding a new property
      }
  
      document.getElementById('result').textContent = `
  Original Object:
  ${JSON.stringify(original, null, 2)}
  
  Cloned Object:
  ${JSON.stringify(cloned, null, 2)}
      `;
    } catch (error) {
      document.getElementById('result').textContent = "❌ Invalid JSON input!";
    }
  });
  


  