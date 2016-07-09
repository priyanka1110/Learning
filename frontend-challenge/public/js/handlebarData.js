var selectCountrySource = document.getElementById( 'countryListTpl' ).innerHTML;
var countryListTemplate = Handlebars.compile( selectCountrySource );

 var countryList={
  	  countrylist: [ 
	      { country: 'India', },
	      { country: 'London', },
	      { country: 'Eric', },
	      { country: 'Kenny' },
	      { country: 'Bart', }
	    ]
  };
document.getElementById( 'selectCountry1' ).innerHTML = countryListTemplate(countryList);
document.getElementById( 'selectCountry2' ).innerHTML = countryListTemplate(countryList);