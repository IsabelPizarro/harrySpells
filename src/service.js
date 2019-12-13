  
function service() {
    return fetch(
      "https://www.potterapi.com/v1/spells?key=$2a$10$W4Y/r9zaxMfJVdSv/V9U3.6ETMSveALxjAQy9duMzjpaISSQbU8ty"
    ).then(response => response.json());
  }
  export { service };
