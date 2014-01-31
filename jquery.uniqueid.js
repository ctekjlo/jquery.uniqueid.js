;(function ( $, window, document, undefined ) {

	'use strict';

	jQuery.fn.extend({
		/**
		 * desc
		 *
		 *     $.fn.uniqueid();
		 *
		 * @author ctekjlo <ctekjlo@gmail.com>
		 * @datetime 2014-01-31T18:42:25+0400
		 *
		 * @param    {string}                 prefix Prefix id
		 * @param    {number}                 length Prefix length
		 * @return   {string}                 unique id
		 */
		uniqueid: function(prefix, length) {

			var idString = String.fromCharCode( Math.floor( ( Math.random() * 25 ) + 65 ) ),
				length = ( length || 32 );

			do {

				var ansiCode = Math.floor( ( Math.random() * 42 ) + 48 );

				if ( ansiCode < 58 || ansiCode > 64 ) {

					idString += String.fromCharCode( ansiCode );

				}

			} while ( idString.length < length );

			idString = idString.toLowerCase();

			return ( prefix || 'id' ) + idString;

		},
	});

})( jQuery, window, document );