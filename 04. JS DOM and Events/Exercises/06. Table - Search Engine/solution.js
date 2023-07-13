function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   const fields = Array.from(document.querySelectorAll('tbody > tr > td'));

   function onClick() {
      const search = document.getElementById('searchField');
      let arr = Array.from(document.querySelectorAll('tbody > tr'));
          arr.forEach(el => el.classList.remove('select'));

      for (const td of fields) {
         if(td.innerText.includes(search.value)){
            td.parentElement.classList.add('select');
         }
      }
      search.value = "";
   }
}