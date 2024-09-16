// Function fetches data
function getData() {
    // Promise is returned
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Promise resolved");
      }, 2000);
    });
  }
  
  // Async function
  async function loadData() {
    try {
      console.log("Data request...");
      const data = await fetchData();
      // Log "Data: ", data
      console.log("Data: ", data);
    } catch (error) {
      // Log "Error fetching data: ", error
      console.error("Error fetching data: ", error);
    }
  }
  
  loadData();
  