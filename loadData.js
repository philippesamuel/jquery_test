// @ts-check 

// import _ from "lodash";

var countryOptions = {
    "Germany": 1,
    "Brazil": 2,
    "EUA": 3
};
var cityOptions = {
    "Berlin": 1,
    "Hamburg": 2,
    "Belo Horizonte": 3,
    "Sao Paulo": 4,
    "New York": 5,
    "Richmond": 6
};
var countryCityGraph = {
    1: [1, 2],
    2: [3, 4],
    3: [5, 6]
};

/**  
 * Load data into html select tag.
 * @param {string} id - id for html select tag.
 * @param {Object.<string, number>} options - Options to add to select tag.
 * @return {void}
 */
function loadData(id, options){
    var $el = $(id);
    $el.empty();
    $.each(options, function(key, value){
        $el.append($("<option></option>")
            .attr("value", value).text(key));
    });
}

export function loadCountryData(){
    loadData("#country", countryOptions);
}

export function loadCityData(){
    /**@function
     * @param {Array.<Array.<string, number>>} arr
     * @return {Array.<Array.<string, number>>}
     */
    let filterCityCallback = (arr) => arr.filter(([key, value]) => countryCityGraph[$( "#country" ).val()].includes(value))
    let filterCityOptions = _.flow([
        Object.entries,
        filterCityCallback,
        Object.fromEntries
      ]);

    loadData("#city", filterCityOptions(cityOptions));
}
