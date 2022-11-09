var beta = {
   strrev: function( string ) {
      var srev = "",
         length = string.length;
      
      while( length-- ) {
         srev += string[ length ];
      }

      return srev;
   },

   shuffle: function( string ) {
      var shuffled = "",
         randIndex,
         strToArray = string.split( "" ),
         i = 0,
         length = strToArray.length;

      for ( ; i < length; i++ ) {
         if ( ( randIndex = Math.floor( Math.random() * strToArray.length ) ) != null ) {
            shuffled += strToArray[ randIndex ];
            strToArray.splice( randIndex, 1 );
         }
      }

      return shuffled;
   },

   strpad: function( string, length, padstring, padtype ) {
      
   }
};

console.log(beta.strpad("Hello", 3, ".", "PAD_LEFT"));