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
    loaded: false,
    title: 'Vue Music Discs',
    discs_list: [],
    genre_list : [],
    selected_genre : 'all',
    sort_year: '',
    index_active_disc: '',
  },  // Closing data
  mounted: function() {
    // AJAX call
    axios
    .get('https://flynn.boolean.careers/exercises/api/array/music')
    .then(ajax_call => {
      // Accessing the JSON object and its properties "data" & "response" containing the array (of objects) of music discs and filling in the discs_list array
      this.discs_list = ajax_call.data.response;
      console.log('The discs list is: ' , this.discs_list);
      // Scrolling the array of discs to find out how many genres are listed
      this.discs_list.forEach((disc, i) => {
        // If the genre found is not included in the array of genres, it must be added
        if(!(this.genre_list.includes(disc.genre))) {
          this.genre_list.push(disc.genre);
        }
      });
      this.loaded = true;
      console.log('All the genres listed are: ' , this.genre_list);
    });
  },  // Closing mounted
  methods: {
    sortPerYear() {
      // If "ascending" is selected, it is sort by ascending order
      if (this.sort_year === 'ascending') {
        this.discs_list.sort((disc1, disc2) => {
          return parseInt(disc1.year) - parseInt(disc2.year);
        });
      // If "descending" is selected, it is sort by descending order
      } else if (this.sort_year === 'descending') {
        this.discs_list.sort((disc1, disc2) => {
          return parseInt(disc2.year) - parseInt(disc1.year);
        });
      }
    },
    onHover(index_disc) {
      this.index_active_disc = index_disc;
    }
  },  // Closing methods
});
