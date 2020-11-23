/* ASSIGNMENT
Attraverso una chiamata ajax all’API di boolean
https://flynn.boolean.careers/exercises/api/array/music
avremo a disposizione una decina di dischi musicali.
Utilizzando vue, stampiamo a schermo una card per ogni album.
Curare l'aspetto grafico.
BONUS 1: Creare una select con tutti i generi dei dischi.
In base a cosa scegliamo nella select, vedremo i cd corrispondenti.
BONUS 2: Ordinare i dischi per anno di uscita.
*/

// ------------------------------ VUE JS ------------------------------

let app = new Vue({
  el: '#root',
  data: {
    title: 'Vue Music Discs',
    discs_list: [],
    discs_quantity: 10,
    genre_list : [],
  },  // Closing data
  mounted: function() {
    // AJAX call
    axios
    .get('https://flynn.boolean.careers/exercises/api/array/music')
    .then(ajax_call => {
      // Accessing the JSON object and its properties "data" & "response" containing the array (of objects) of music discs and filling in the discs_list array
      this.discs_list = ajax_call.data.response;
      console.log(this.discs_list);
      // Scrolling the array of discs to find how many genres are listed
      this.discs_list.forEach((disc, i) => {
        this.genre_list.push(disc.genre);
      });
      console.log(this.genre_list);
    });
  },  // Closing mounted
});
