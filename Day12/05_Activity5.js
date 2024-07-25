// Task8
fetch('https://invalid-api-url.example.com/')
.catch(error => {
  console.error("Fetch error 1:", error.message);
});

// Task9
async function fetchApi(){
    try{
        await fetch('https://invalid-api-url.example.com/')
    }catch(err){
        console.error("Fetch error 2:", err.message);
    }
}

fetchApi()