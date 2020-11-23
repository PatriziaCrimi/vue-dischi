/* ASSIGNMENT
Attraverso una chiamata ajax all’API di boolean
https://flynn.boolean.careers/exercises/api/array/music

avremo a disposizione una decina di dischi musicali.
curare l'aspetto grafico.
Utilizzando vue, stampiamo a schermo una card per ogni album.
BONUS 1: Creare una select con tutti i generi dei dischi.
In base a cosa scegliamo nella select, vedremo i cd corrispondenti.
BONUS 2: Ordinare i dischi per anno di uscita.
*/

// ------------------------------ VUE JS ------------------------------

let app = new Vue({
  el: '#root',
  data: {
    title: 'Vue Music Discs',
  },  // Closing data
  mounted: function() {
    // AJAX call
    axios
    .get('https://flynn.boolean.careers/exercises/api/array/music')
    .then(ajax_call => {
      // Accessing the JSON object and its properties "data" & "response" containing the array (of objects) of music discs
      console.log(ajax_call.data.response);
    });
  },  // Closing mounted
});
