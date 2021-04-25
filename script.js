
async function getData(input, load) {
   if (load) { 
      const api_url = `https://api.openbrewerydb.org/breweries?by_name=${input}&per_page=${load}`;
   } else {
      `https://api.openbrewerydb.org/breweries?by_name=${input}&per_page=5`
   }
   const api_url = `https://api.openbrewerydb.org/breweries?by_name=${input}&per_page=5`;
   const response = await fetch(api_url)
  .then((response) => {
     console.log(response)
      if (!response.ok) {
          throw new Error("HTTP status " + response.status);
      }
      return response.json();
  })
   return response;
}


async function filterData() {

      
   var input = document.getElementById('search').value
   input=input.toLowerCase();
   var load = document.getElementById('load-more')

   let data = await getData(input, load)
   console.log(data)

   document.getElementById("list-container").innerHTML = ""
   data.forEach(function (object) {
      document.getElementById("list-container").innerHTML += `
         <li class="list-group-item">
            <div>
            <div class="card-body">
               <h5 class="card-title">${object.name}</h5>
               <h6 class="card-subtitle mb-2">${object.brewery_type}</h6>
               <h6 class="card-subtitle mb-2 text-muted">${object.street} - ${object.state}</h6><a href="${object.website_url}"
                  class="card-link">Link to website</a>
            </div>
            </div>
         </li>
       `
   })
 
 }

 async function loadMore() {

 }