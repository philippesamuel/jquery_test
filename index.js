// @ts-check

import { loadCountryData, loadCityData } from "./loadData.js";

$(document).ready(function(){
    console.log("hi there");
    $("#my-div").css({
        "width": "100px",
        "height": "100px",
        "background-color": "blue"
    });

    loadCountryData();
    loadCityData();
    $("#country").on("change", loadCityData)

});
