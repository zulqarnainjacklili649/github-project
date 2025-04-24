// JavaScript code to demonstrate an example of async/await and promises:

async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    process.exit(1); // or handle the error as needed
  }
}

fetchData('https://api.github.com').then(data => {
  console.log(JSON.stringify(data));
}).catch(error => {
  console.error(`An error occurred: ${error.message}`);
});
