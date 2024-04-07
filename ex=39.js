/*
39. City Names:
Write a function called city_country() that takes in the name of
a city and its country. The function should return a string
formatted like this: "Lahore, Pakistan" Call your function with
 at least three city-country pairs, and print the value
  that’s returned.*/
function city_country(city, country) {
    return "\"".concat(city, ",").concat(country, "\"");
}
var city_1 = city_country("karachi", "pakistan");
var city_2 = city_country("lahore", "pakistan");
var city_3 = city_country("manchister", "europe");
console.log(city_1);
console.log(city_2);
console.log(city_3);
//both are the same methode
console.log(city_country("jadda", "saudia arabia"));
console.log(city_country("irland", "europe"));
