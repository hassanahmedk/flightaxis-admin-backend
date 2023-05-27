import AdminModel from "../db/admins.js";
import FlightModel from "../db/flights.js";

export const popDB = async (req, res) => {
  try {
    let result = await FlightModel.insertMany([
      {
        airline: "Air France",
        leaving_from: "Manchester, Arpt [MAN], UK",
        going_to: "Mauritius, Plaisance, SSR Arpt [MRU]",
        months_fare: [
          {
            month: "January",
            leaving_fare: "12",
          },
          {
            month: "Febuary",
            leaving_fare: "12",
          },
          {
            month: "March",
            leaving_fare: "12",
          },
          {
            month: "April",
            leaving_fare: "12",
          },
          {
            month: "May",
            leaving_fare: "12",
          },
          {
            month: "June",
            leaving_fare: "12",
          },
          {
            month: "July",
            leaving_fare: "12",
          },
          {
            month: "August",
            leaving_fare: "12",
          },
          {
            month: "September",
            leaving_fare: "12",
          },
          {
            month: "October",
            leaving_fare: "12",
          },
          {
            month: "November",
            leaving_fare: "12",
          },
          {
            month: "December",
            leaving_fare: "12",
          },
        ],
        __v: 0,
      },
      {
        airline: "Air France",
        leaving_from: "Manchester, Arpt [MAN], UK",
        going_to: "Banjul, Banjul Intl Arpt [BJL], Gambia",
        months_fare: [
          {
            month: "January",
            leaving_fare: "12",
          },
          {
            month: "Febuary",
            leaving_fare: "12",
          },
          {
            month: "March",
            leaving_fare: "12",
          },
          {
            month: "April",
            leaving_fare: "12",
          },
          {
            month: "May",
            leaving_fare: "12",
          },
          {
            month: "June",
            leaving_fare: "12",
          },
          {
            month: "July",
            leaving_fare: "12",
          },
          {
            month: "August",
            leaving_fare: "12",
          },
          {
            month: "September",
            leaving_fare: "12",
          },
          {
            month: "October",
            leaving_fare: "12",
          },
          {
            month: "November",
            leaving_fare: "12",
          },
          {
            month: "December",
            leaving_fare: "12",
          },
        ],
        __v: 0,
      },
      {
        airline: "Air France",
        leaving_from: "Manchester, Arpt [MAN], UK",
        going_to: "Accra, Kotoka Intl Arpt [ACC], Ghana",
        months_fare: [
          {
            month: "January",
            leaving_fare: "12",
          },
          {
            month: "Febuary",
            leaving_fare: "12",
          },
          {
            month: "March",
            leaving_fare: "12",
          },
          {
            month: "April",
            leaving_fare: "12",
          },
          {
            month: "May",
            leaving_fare: "12",
          },
          {
            month: "June",
            leaving_fare: "12",
          },
          {
            month: "July",
            leaving_fare: "12",
          },
          {
            month: "August",
            leaving_fare: "12",
          },
          {
            month: "September",
            leaving_fare: "12",
          },
          {
            month: "October",
            leaving_fare: "12",
          },
          {
            month: "November",
            leaving_fare: "12",
          },
          {
            month: "December",
            leaving_fare: "12",
          },
        ],
        __v: 0,
      },
      {
        airline: "Air France",
        leaving_from: "Manchester, Arpt [MAN], UK",
        going_to: "Harare, Intl Arpt [HRE], Zimbabwe",
        months_fare: [
          {
            month: "January",
            leaving_fare: "12",
          },
          {
            month: "Febuary",
            leaving_fare: "12",
          },
          {
            month: "March",
            leaving_fare: "12",
          },
          {
            month: "April",
            leaving_fare: "12",
          },
          {
            month: "May",
            leaving_fare: "12",
          },
          {
            month: "June",
            leaving_fare: "12",
          },
          {
            month: "July",
            leaving_fare: "12",
          },
          {
            month: "August",
            leaving_fare: "12",
          },
          {
            month: "September",
            leaving_fare: "12",
          },
          {
            month: "October",
            leaving_fare: "12",
          },
          {
            month: "November",
            leaving_fare: "12",
          },
          {
            month: "December",
            leaving_fare: "12",
          },
        ],
        __v: 0,
      },
      {
        airline: "Air France",
        leaving_from: "Manchester, Arpt [MAN], UK",
        going_to: "Djibouti, Ambouli Arpt [JIB], Djibouti",
        months_fare: [
          {
            month: "January",
            leaving_fare: "12",
          },
          {
            month: "Febuary",
            leaving_fare: "12",
          },
          {
            month: "March",
            leaving_fare: "12",
          },
          {
            month: "April",
            leaving_fare: "12",
          },
          {
            month: "May",
            leaving_fare: "12",
          },
          {
            month: "June",
            leaving_fare: "12",
          },
          {
            month: "July",
            leaving_fare: "12",
          },
          {
            month: "August",
            leaving_fare: "12",
          },
          {
            month: "September",
            leaving_fare: "12",
          },
          {
            month: "October",
            leaving_fare: "12",
          },
          {
            month: "November",
            leaving_fare: "12",
          },
          {
            month: "December",
            leaving_fare: "12",
          },
        ],
        __v: 0,
      },
      {
        airline: "Air France",
        leaving_from: "Manchester, Arpt [MAN], UK",
        going_to: "Colombo, Intl Arpt [CMB], Sri Lanka",
        months_fare: [
          {
            month: "January",
            leaving_fare: "12",
          },
          {
            month: "Febuary",
            leaving_fare: "12",
          },
          {
            month: "March",
            leaving_fare: "12",
          },
          {
            month: "April",
            leaving_fare: "12",
          },
          {
            month: "May",
            leaving_fare: "12",
          },
          {
            month: "June",
            leaving_fare: "12",
          },
          {
            month: "July",
            leaving_fare: "12",
          },
          {
            month: "August",
            leaving_fare: "12",
          },
          {
            month: "September",
            leaving_fare: "12",
          },
          {
            month: "October",
            leaving_fare: "12",
          },
          {
            month: "November",
            leaving_fare: "12",
          },
          {
            month: "December",
            leaving_fare: "12",
          },
        ],
        __v: 0,
      },
      {
        airline: "Air France",
        leaving_from: "Manchester, Arpt [MAN], UK",
        going_to: "Kingston, NM Arpt [KIN], Jamaica",
        months_fare: [
          {
            month: "January",
            leaving_fare: "12",
          },
          {
            month: "Febuary",
            leaving_fare: "12",
          },
          {
            month: "March",
            leaving_fare: "12",
          },
          {
            month: "April",
            leaving_fare: "12",
          },
          {
            month: "May",
            leaving_fare: "12",
          },
          {
            month: "June",
            leaving_fare: "12",
          },
          {
            month: "July",
            leaving_fare: "12",
          },
          {
            month: "August",
            leaving_fare: "12",
          },
          {
            month: "September",
            leaving_fare: "12",
          },
          {
            month: "October",
            leaving_fare: "12",
          },
          {
            month: "November",
            leaving_fare: "12",
          },
          {
            month: "December",
            leaving_fare: "12",
          },
        ],
        __v: 0,
      },
      {
        airline: "Air France",
        leaving_from: "Manchester, Arpt [MAN], UK",
        going_to: "Kathmandu, Arpt [KTM], Nepal",
        months_fare: [
          {
            month: "January",
            leaving_fare: "12",
          },
          {
            month: "Febuary",
            leaving_fare: "12",
          },
          {
            month: "March",
            leaving_fare: "12",
          },
          {
            month: "April",
            leaving_fare: "12",
          },
          {
            month: "May",
            leaving_fare: "12",
          },
          {
            month: "June",
            leaving_fare: "12",
          },
          {
            month: "July",
            leaving_fare: "12",
          },
          {
            month: "August",
            leaving_fare: "12",
          },
          {
            month: "September",
            leaving_fare: "12",
          },
          {
            month: "October",
            leaving_fare: "12",
          },
          {
            month: "November",
            leaving_fare: "12",
          },
          {
            month: "December",
            leaving_fare: "12",
          },
        ],
        __v: 0,
      },
      {
        airline: "Air France",
        leaving_from: "Manchester, Arpt [MAN], UK",
        going_to: "Lagos, Murtala M Arpt [LOS], Nigeria",
        months_fare: [
          {
            month: "January",
            leaving_fare: "12",
          },
          {
            month: "Febuary",
            leaving_fare: "12",
          },
          {
            month: "March",
            leaving_fare: "12",
          },
          {
            month: "April",
            leaving_fare: "12",
          },
          {
            month: "May",
            leaving_fare: "12",
          },
          {
            month: "June",
            leaving_fare: "12",
          },
          {
            month: "July",
            leaving_fare: "12",
          },
          {
            month: "August",
            leaving_fare: "12",
          },
          {
            month: "September",
            leaving_fare: "12",
          },
          {
            month: "October",
            leaving_fare: "12",
          },
          {
            month: "November",
            leaving_fare: "12",
          },
          {
            month: "December",
            leaving_fare: "12",
          },
        ],
        __v: 0,
      },
      {
        airline: "KLM",
        leaving_from: "Manchester, Arpt [MAN], UK",
        going_to: "Lagos, Murtala M Arpt [LOS], Nigeria",
        months_fare: [
          {
            month: "January",
            leaving_fare: "12",
          },
          {
            month: "Febuary",
            leaving_fare: "12",
          },
          {
            month: "March",
            leaving_fare: "12",
          },
          {
            month: "April",
            leaving_fare: "12",
          },
          {
            month: "May",
            leaving_fare: "12",
          },
          {
            month: "June",
            leaving_fare: "12",
          },
          {
            month: "July",
            leaving_fare: "12",
          },
          {
            month: "August",
            leaving_fare: "12",
          },
          {
            month: "September",
            leaving_fare: "12",
          },
          {
            month: "October",
            leaving_fare: "12",
          },
          {
            month: "November",
            leaving_fare: "12",
          },
          {
            month: "December",
            leaving_fare: "12",
          },
        ],
        __v: 0,
      },
      {
        airline: "British Airways",
        leaving_from: "Manchester, Arpt [MAN], UK",
        going_to: "Mauritius, Plaisance, SSR Arpt [MRU]",
        months_fare: [
          {
            month: "January",
            leaving_fare: "12",
          },
          {
            month: "Febuary",
            leaving_fare: "12",
          },
          {
            month: "March",
            leaving_fare: "12",
          },
          {
            month: "April",
            leaving_fare: "12",
          },
          {
            month: "May",
            leaving_fare: "12",
          },
          {
            month: "June",
            leaving_fare: "12",
          },
          {
            month: "July",
            leaving_fare: "12",
          },
          {
            month: "August",
            leaving_fare: "12",
          },
          {
            month: "September",
            leaving_fare: "12",
          },
          {
            month: "October",
            leaving_fare: "12",
          },
          {
            month: "November",
            leaving_fare: "12",
          },
          {
            month: "December",
            leaving_fare: "12",
          },
        ],
        __v: 0,
      },
      {
        airline: "KLM",
        leaving_from: "Manchester, Arpt [MAN], UK",
        going_to: "Banjul, Banjul Intl Arpt [BJL], Gambia",
        months_fare: [
          {
            month: "January",
            leaving_fare: "12",
          },
          {
            month: "Febuary",
            leaving_fare: "12",
          },
          {
            month: "March",
            leaving_fare: "12",
          },
          {
            month: "April",
            leaving_fare: "12",
          },
          {
            month: "May",
            leaving_fare: "12",
          },
          {
            month: "June",
            leaving_fare: "12",
          },
          {
            month: "July",
            leaving_fare: "12",
          },
          {
            month: "August",
            leaving_fare: "12",
          },
          {
            month: "September",
            leaving_fare: "12",
          },
          {
            month: "October",
            leaving_fare: "12",
          },
          {
            month: "November",
            leaving_fare: "12",
          },
          {
            month: "December",
            leaving_fare: "12",
          },
        ],
        __v: 0,
      },
      {
        airline: "KLM",
        leaving_from: "Manchester, Arpt [MAN], UK",
        going_to: "Accra, Kotoka Intl Arpt [ACC], Ghana",
        months_fare: [
          {
            month: "January",
            leaving_fare: "12",
          },
          {
            month: "Febuary",
            leaving_fare: "12",
          },
          {
            month: "March",
            leaving_fare: "12",
          },
          {
            month: "April",
            leaving_fare: "12",
          },
          {
            month: "May",
            leaving_fare: "12",
          },
          {
            month: "June",
            leaving_fare: "12",
          },
          {
            month: "July",
            leaving_fare: "12",
          },
          {
            month: "August",
            leaving_fare: "12",
          },
          {
            month: "September",
            leaving_fare: "12",
          },
          {
            month: "October",
            leaving_fare: "12",
          },
          {
            month: "November",
            leaving_fare: "12",
          },
          {
            month: "December",
            leaving_fare: "12",
          },
        ],
        __v: 0,
      },
      {
        airline: "KLM",
        leaving_from: "Manchester, Arpt [MAN], UK",
        going_to: "Harare, Intl Arpt [HRE], Zimbabwe",
        months_fare: [
          {
            month: "January",
            leaving_fare: "12",
          },
          {
            month: "Febuary",
            leaving_fare: "12",
          },
          {
            month: "March",
            leaving_fare: "12",
          },
          {
            month: "April",
            leaving_fare: "12",
          },
          {
            month: "May",
            leaving_fare: "12",
          },
          {
            month: "June",
            leaving_fare: "12",
          },
          {
            month: "July",
            leaving_fare: "12",
          },
          {
            month: "August",
            leaving_fare: "12",
          },
          {
            month: "September",
            leaving_fare: "12",
          },
          {
            month: "October",
            leaving_fare: "12",
          },
          {
            month: "November",
            leaving_fare: "12",
          },
          {
            month: "December",
            leaving_fare: "12",
          },
        ],
        __v: 0,
      },
      {
        airline: "KLM",
        leaving_from: "Manchester, Arpt [MAN], UK",
        going_to: "Djibouti, Ambouli Arpt [JIB], Djibouti",
        months_fare: [
          {
            month: "January",
            leaving_fare: "12",
          },
          {
            month: "Febuary",
            leaving_fare: "12",
          },
          {
            month: "March",
            leaving_fare: "12",
          },
          {
            month: "April",
            leaving_fare: "12",
          },
          {
            month: "May",
            leaving_fare: "12",
          },
          {
            month: "June",
            leaving_fare: "12",
          },
          {
            month: "July",
            leaving_fare: "12",
          },
          {
            month: "August",
            leaving_fare: "12",
          },
          {
            month: "September",
            leaving_fare: "12",
          },
          {
            month: "October",
            leaving_fare: "12",
          },
          {
            month: "November",
            leaving_fare: "12",
          },
          {
            month: "December",
            leaving_fare: "12",
          },
        ],
        __v: 0,
      },
      {
        airline: "KLM",
        leaving_from: "Manchester, Arpt [MAN], UK",
        going_to: "Colombo, Intl Arpt [CMB], Sri Lanka",
        months_fare: [
          {
            month: "January",
            leaving_fare: "12",
          },
          {
            month: "Febuary",
            leaving_fare: "12",
          },
          {
            month: "March",
            leaving_fare: "12",
          },
          {
            month: "April",
            leaving_fare: "12",
          },
          {
            month: "May",
            leaving_fare: "12",
          },
          {
            month: "June",
            leaving_fare: "12",
          },
          {
            month: "July",
            leaving_fare: "12",
          },
          {
            month: "August",
            leaving_fare: "12",
          },
          {
            month: "September",
            leaving_fare: "12",
          },
          {
            month: "October",
            leaving_fare: "12",
          },
          {
            month: "November",
            leaving_fare: "12",
          },
          {
            month: "December",
            leaving_fare: "12",
          },
        ],
        __v: 0,
      },
      {
        airline: "KLM",
        leaving_from: "Manchester, Arpt [MAN], UK",
        going_to: "Kingston, NM Arpt [KIN], Jamaica",
        months_fare: [
          {
            month: "January",
            leaving_fare: "12",
          },
          {
            month: "Febuary",
            leaving_fare: "12",
          },
          {
            month: "March",
            leaving_fare: "12",
          },
          {
            month: "April",
            leaving_fare: "12",
          },
          {
            month: "May",
            leaving_fare: "12",
          },
          {
            month: "June",
            leaving_fare: "12",
          },
          {
            month: "July",
            leaving_fare: "12",
          },
          {
            month: "August",
            leaving_fare: "12",
          },
          {
            month: "September",
            leaving_fare: "12",
          },
          {
            month: "October",
            leaving_fare: "12",
          },
          {
            month: "November",
            leaving_fare: "12",
          },
          {
            month: "December",
            leaving_fare: "12",
          },
        ],
        __v: 0,
      },
      {
        airline: "KLM",
        leaving_from: "Manchester, Arpt [MAN], UK",
        going_to: "Kathmandu, Arpt [KTM], Nepal",
        months_fare: [
          {
            month: "January",
            leaving_fare: "12",
          },
          {
            month: "Febuary",
            leaving_fare: "12",
          },
          {
            month: "March",
            leaving_fare: "12",
          },
          {
            month: "April",
            leaving_fare: "12",
          },
          {
            month: "May",
            leaving_fare: "12",
          },
          {
            month: "June",
            leaving_fare: "12",
          },
          {
            month: "July",
            leaving_fare: "12",
          },
          {
            month: "August",
            leaving_fare: "12",
          },
          {
            month: "September",
            leaving_fare: "12",
          },
          {
            month: "October",
            leaving_fare: "12",
          },
          {
            month: "November",
            leaving_fare: "12",
          },
          {
            month: "December",
            leaving_fare: "12",
          },
        ],
        __v: 0,
      },
      {
        airline: "Lufthansa",
        leaving_from: "Manchester, Arpt [MAN], UK",
        going_to: "Mauritius, Plaisance, SSR Arpt [MRU]",
        months_fare: [
          {
            month: "January",
            leaving_fare: "12",
          },
          {
            month: "Febuary",
            leaving_fare: "12",
          },
          {
            month: "March",
            leaving_fare: "12",
          },
          {
            month: "April",
            leaving_fare: "12",
          },
          {
            month: "May",
            leaving_fare: "12",
          },
          {
            month: "June",
            leaving_fare: "12",
          },
          {
            month: "July",
            leaving_fare: "12",
          },
          {
            month: "August",
            leaving_fare: "12",
          },
          {
            month: "September",
            leaving_fare: "12",
          },
          {
            month: "October",
            leaving_fare: "12",
          },
          {
            month: "November",
            leaving_fare: "12",
          },
          {
            month: "December",
            leaving_fare: "12",
          },
        ],
        __v: 0,
      },
      {
        airline: "Lufthansa",
        leaving_from: "Manchester, Arpt [MAN], UK",
        going_to: "Banjul, Banjul Intl Arpt [BJL], Gambia",
        months_fare: [
          {
            month: "January",
            leaving_fare: "12",
          },
          {
            month: "Febuary",
            leaving_fare: "12",
          },
          {
            month: "March",
            leaving_fare: "12",
          },
          {
            month: "April",
            leaving_fare: "12",
          },
          {
            month: "May",
            leaving_fare: "12",
          },
          {
            month: "June",
            leaving_fare: "12",
          },
          {
            month: "July",
            leaving_fare: "12",
          },
          {
            month: "August",
            leaving_fare: "12",
          },
          {
            month: "September",
            leaving_fare: "12",
          },
          {
            month: "October",
            leaving_fare: "12",
          },
          {
            month: "November",
            leaving_fare: "12",
          },
          {
            month: "December",
            leaving_fare: "12",
          },
        ],
        __v: 0,
      },
      {
        airline: "Lufthansa",
        leaving_from: "Manchester, Arpt [MAN], UK",
        going_to: "Accra, Kotoka Intl Arpt [ACC], Ghana",
        months_fare: [
          {
            month: "January",
            leaving_fare: "12",
          },
          {
            month: "Febuary",
            leaving_fare: "12",
          },
          {
            month: "March",
            leaving_fare: "12",
          },
          {
            month: "April",
            leaving_fare: "12",
          },
          {
            month: "May",
            leaving_fare: "12",
          },
          {
            month: "June",
            leaving_fare: "12",
          },
          {
            month: "July",
            leaving_fare: "12",
          },
          {
            month: "August",
            leaving_fare: "12",
          },
          {
            month: "September",
            leaving_fare: "12",
          },
          {
            month: "October",
            leaving_fare: "12",
          },
          {
            month: "November",
            leaving_fare: "12",
          },
          {
            month: "December",
            leaving_fare: "12",
          },
        ],
        __v: 0,
      },
      {
        airline: "Lufthansa",
        leaving_from: "Manchester, Arpt [MAN], UK",
        going_to: "Harare, Intl Arpt [HRE], Zimbabwe",
        months_fare: [
          {
            month: "January",
            leaving_fare: "12",
          },
          {
            month: "Febuary",
            leaving_fare: "12",
          },
          {
            month: "March",
            leaving_fare: "12",
          },
          {
            month: "April",
            leaving_fare: "12",
          },
          {
            month: "May",
            leaving_fare: "12",
          },
          {
            month: "June",
            leaving_fare: "12",
          },
          {
            month: "July",
            leaving_fare: "12",
          },
          {
            month: "August",
            leaving_fare: "12",
          },
          {
            month: "September",
            leaving_fare: "12",
          },
          {
            month: "October",
            leaving_fare: "12",
          },
          {
            month: "November",
            leaving_fare: "12",
          },
          {
            month: "December",
            leaving_fare: "12",
          },
        ],
        __v: 0,
      },
      {
        airline: "Lufthansa",
        leaving_from: "Manchester, Arpt [MAN], UK",
        going_to: "Djibouti, Ambouli Arpt [JIB], Djibouti",
        months_fare: [
          {
            month: "January",
            leaving_fare: "12",
          },
          {
            month: "Febuary",
            leaving_fare: "12",
          },
          {
            month: "March",
            leaving_fare: "12",
          },
          {
            month: "April",
            leaving_fare: "12",
          },
          {
            month: "May",
            leaving_fare: "12",
          },
          {
            month: "June",
            leaving_fare: "12",
          },
          {
            month: "July",
            leaving_fare: "12",
          },
          {
            month: "August",
            leaving_fare: "12",
          },
          {
            month: "September",
            leaving_fare: "12",
          },
          {
            month: "October",
            leaving_fare: "12",
          },
          {
            month: "November",
            leaving_fare: "12",
          },
          {
            month: "December",
            leaving_fare: "12",
          },
        ],
        __v: 0,
      },
      {
        airline: "Lufthansa",
        leaving_from: "Manchester, Arpt [MAN], UK",
        going_to: "Colombo, Intl Arpt [CMB], Sri Lanka",
        months_fare: [
          {
            month: "January",
            leaving_fare: "12",
          },
          {
            month: "Febuary",
            leaving_fare: "12",
          },
          {
            month: "March",
            leaving_fare: "12",
          },
          {
            month: "April",
            leaving_fare: "12",
          },
          {
            month: "May",
            leaving_fare: "12",
          },
          {
            month: "June",
            leaving_fare: "12",
          },
          {
            month: "July",
            leaving_fare: "12",
          },
          {
            month: "August",
            leaving_fare: "12",
          },
          {
            month: "September",
            leaving_fare: "12",
          },
          {
            month: "October",
            leaving_fare: "12",
          },
          {
            month: "November",
            leaving_fare: "12",
          },
          {
            month: "December",
            leaving_fare: "12",
          },
        ],
        __v: 0,
      },
      {
        airline: "Lufthansa",
        leaving_from: "Manchester, Arpt [MAN], UK",
        going_to: "Kingston, NM Arpt [KIN], Jamaica",
        months_fare: [
          {
            month: "January",
            leaving_fare: "12",
          },
          {
            month: "Febuary",
            leaving_fare: "12",
          },
          {
            month: "March",
            leaving_fare: "12",
          },
          {
            month: "April",
            leaving_fare: "12",
          },
          {
            month: "May",
            leaving_fare: "12",
          },
          {
            month: "June",
            leaving_fare: "12",
          },
          {
            month: "July",
            leaving_fare: "12",
          },
          {
            month: "August",
            leaving_fare: "12",
          },
          {
            month: "September",
            leaving_fare: "12",
          },
          {
            month: "October",
            leaving_fare: "12",
          },
          {
            month: "November",
            leaving_fare: "12",
          },
          {
            month: "December",
            leaving_fare: "12",
          },
        ],
        __v: 0,
      },
      {
        airline: "Lufthansa",
        leaving_from: "Manchester, Arpt [MAN], UK",
        going_to: "Kathmandu, Arpt [KTM], Nepal",
        months_fare: [
          {
            month: "January",
            leaving_fare: "12",
          },
          {
            month: "Febuary",
            leaving_fare: "12",
          },
          {
            month: "March",
            leaving_fare: "12",
          },
          {
            month: "April",
            leaving_fare: "12",
          },
          {
            month: "May",
            leaving_fare: "12",
          },
          {
            month: "June",
            leaving_fare: "12",
          },
          {
            month: "July",
            leaving_fare: "12",
          },
          {
            month: "August",
            leaving_fare: "12",
          },
          {
            month: "September",
            leaving_fare: "12",
          },
          {
            month: "October",
            leaving_fare: "12",
          },
          {
            month: "November",
            leaving_fare: "12",
          },
          {
            month: "December",
            leaving_fare: "12",
          },
        ],
        __v: 0,
      },
      {
        airline: "Lufthansa",
        leaving_from: "Manchester, Arpt [MAN], UK",
        going_to: "Lagos, Murtala M Arpt [LOS], Nigeria",
        months_fare: [
          {
            month: "January",
            leaving_fare: "12",
          },
          {
            month: "Febuary",
            leaving_fare: "12",
          },
          {
            month: "March",
            leaving_fare: "12",
          },
          {
            month: "April",
            leaving_fare: "12",
          },
          {
            month: "May",
            leaving_fare: "12",
          },
          {
            month: "June",
            leaving_fare: "12",
          },
          {
            month: "July",
            leaving_fare: "12",
          },
          {
            month: "August",
            leaving_fare: "12",
          },
          {
            month: "September",
            leaving_fare: "12",
          },
          {
            month: "October",
            leaving_fare: "12",
          },
          {
            month: "November",
            leaving_fare: "12",
          },
          {
            month: "December",
            leaving_fare: "12",
          },
        ],
        __v: 0,
      },
      {
        airline: "Qatar Airways",
        leaving_from: "Manchester, Arpt [MAN], UK",
        going_to: "Mauritius, Plaisance, SSR Arpt [MRU]",
        months_fare: [
          {
            month: "January",
            leaving_fare: "12",
          },
          {
            month: "Febuary",
            leaving_fare: "12",
          },
          {
            month: "March",
            leaving_fare: "12",
          },
          {
            month: "April",
            leaving_fare: "12",
          },
          {
            month: "May",
            leaving_fare: "12",
          },
          {
            month: "June",
            leaving_fare: "12",
          },
          {
            month: "July",
            leaving_fare: "12",
          },
          {
            month: "August",
            leaving_fare: "12",
          },
          {
            month: "September",
            leaving_fare: "12",
          },
          {
            month: "October",
            leaving_fare: "12",
          },
          {
            month: "November",
            leaving_fare: "12",
          },
          {
            month: "December",
            leaving_fare: "12",
          },
        ],
        __v: 0,
      },
      {
        airline: "Qatar Airways",
        leaving_from: "Manchester, Arpt [MAN], UK",
        going_to: "Banjul, Banjul Intl Arpt [BJL], Gambia",
        months_fare: [
          {
            month: "January",
            leaving_fare: "12",
          },
          {
            month: "Febuary",
            leaving_fare: "12",
          },
          {
            month: "March",
            leaving_fare: "12",
          },
          {
            month: "April",
            leaving_fare: "12",
          },
          {
            month: "May",
            leaving_fare: "12",
          },
          {
            month: "June",
            leaving_fare: "12",
          },
          {
            month: "July",
            leaving_fare: "12",
          },
          {
            month: "August",
            leaving_fare: "12",
          },
          {
            month: "September",
            leaving_fare: "12",
          },
          {
            month: "October",
            leaving_fare: "12",
          },
          {
            month: "November",
            leaving_fare: "12",
          },
          {
            month: "December",
            leaving_fare: "12",
          },
        ],
        __v: 0,
      },
      {
        airline: "Qatar Airways",
        leaving_from: "Manchester, Arpt [MAN], UK",
        going_to: "Accra, Kotoka Intl Arpt [ACC], Ghana",
        months_fare: [
          {
            month: "January",
            leaving_fare: "12",
          },
          {
            month: "Febuary",
            leaving_fare: "12",
          },
          {
            month: "March",
            leaving_fare: "12",
          },
          {
            month: "April",
            leaving_fare: "12",
          },
          {
            month: "May",
            leaving_fare: "12",
          },
          {
            month: "June",
            leaving_fare: "12",
          },
          {
            month: "July",
            leaving_fare: "12",
          },
          {
            month: "August",
            leaving_fare: "12",
          },
          {
            month: "September",
            leaving_fare: "12",
          },
          {
            month: "October",
            leaving_fare: "12",
          },
          {
            month: "November",
            leaving_fare: "12",
          },
          {
            month: "December",
            leaving_fare: "12",
          },
        ],
        __v: 0,
      },
      {
        airline: "Qatar Airways",
        leaving_from: "Manchester, Arpt [MAN], UK",
        going_to: "Harare, Intl Arpt [HRE], Zimbabwe",
        months_fare: [
          {
            month: "January",
            leaving_fare: "12",
          },
          {
            month: "Febuary",
            leaving_fare: "12",
          },
          {
            month: "March",
            leaving_fare: "12",
          },
          {
            month: "April",
            leaving_fare: "12",
          },
          {
            month: "May",
            leaving_fare: "12",
          },
          {
            month: "June",
            leaving_fare: "12",
          },
          {
            month: "July",
            leaving_fare: "12",
          },
          {
            month: "August",
            leaving_fare: "12",
          },
          {
            month: "September",
            leaving_fare: "12",
          },
          {
            month: "October",
            leaving_fare: "12",
          },
          {
            month: "November",
            leaving_fare: "12",
          },
          {
            month: "December",
            leaving_fare: "12",
          },
        ],
        __v: 0,
      },
      {
        airline: "Qatar Airways",
        leaving_from: "Manchester, Arpt [MAN], UK",
        going_to: "Djibouti, Ambouli Arpt [JIB], Djibouti",
        months_fare: [
          {
            month: "January",
            leaving_fare: "12",
          },
          {
            month: "Febuary",
            leaving_fare: "12",
          },
          {
            month: "March",
            leaving_fare: "12",
          },
          {
            month: "April",
            leaving_fare: "12",
          },
          {
            month: "May",
            leaving_fare: "12",
          },
          {
            month: "June",
            leaving_fare: "12",
          },
          {
            month: "July",
            leaving_fare: "12",
          },
          {
            month: "August",
            leaving_fare: "12",
          },
          {
            month: "September",
            leaving_fare: "12",
          },
          {
            month: "October",
            leaving_fare: "12",
          },
          {
            month: "November",
            leaving_fare: "12",
          },
          {
            month: "December",
            leaving_fare: "12",
          },
        ],
        __v: 0,
      },
      {
        airline: "Qatar Airways",
        leaving_from: "Manchester, Arpt [MAN], UK",
        going_to: "Colombo, Intl Arpt [CMB], Sri Lanka",
        months_fare: [
          {
            month: "January",
            leaving_fare: "12",
          },
          {
            month: "Febuary",
            leaving_fare: "12",
          },
          {
            month: "March",
            leaving_fare: "12",
          },
          {
            month: "April",
            leaving_fare: "12",
          },
          {
            month: "May",
            leaving_fare: "12",
          },
          {
            month: "June",
            leaving_fare: "12",
          },
          {
            month: "July",
            leaving_fare: "12",
          },
          {
            month: "August",
            leaving_fare: "12",
          },
          {
            month: "September",
            leaving_fare: "12",
          },
          {
            month: "October",
            leaving_fare: "12",
          },
          {
            month: "November",
            leaving_fare: "12",
          },
          {
            month: "December",
            leaving_fare: "12",
          },
        ],
        __v: 0,
      },
      {
        airline: "Qatar Airways",
        leaving_from: "Manchester, Arpt [MAN], UK",
        going_to: "Kingston, NM Arpt [KIN], Jamaica",
        months_fare: [
          {
            month: "January",
            leaving_fare: "12",
          },
          {
            month: "Febuary",
            leaving_fare: "12",
          },
          {
            month: "March",
            leaving_fare: "12",
          },
          {
            month: "April",
            leaving_fare: "12",
          },
          {
            month: "May",
            leaving_fare: "12",
          },
          {
            month: "June",
            leaving_fare: "12",
          },
          {
            month: "July",
            leaving_fare: "12",
          },
          {
            month: "August",
            leaving_fare: "12",
          },
          {
            month: "September",
            leaving_fare: "12",
          },
          {
            month: "October",
            leaving_fare: "12",
          },
          {
            month: "November",
            leaving_fare: "12",
          },
          {
            month: "December",
            leaving_fare: "12",
          },
        ],
        __v: 0,
      },
      {
        airline: "Qatar Airways",
        leaving_from: "Manchester, Arpt [MAN], UK",
        going_to: "Kathmandu, Arpt [KTM], Nepal",
        months_fare: [
          {
            month: "January",
            leaving_fare: "12",
          },
          {
            month: "Febuary",
            leaving_fare: "12",
          },
          {
            month: "March",
            leaving_fare: "12",
          },
          {
            month: "April",
            leaving_fare: "12",
          },
          {
            month: "May",
            leaving_fare: "12",
          },
          {
            month: "June",
            leaving_fare: "12",
          },
          {
            month: "July",
            leaving_fare: "12",
          },
          {
            month: "August",
            leaving_fare: "12",
          },
          {
            month: "September",
            leaving_fare: "12",
          },
          {
            month: "October",
            leaving_fare: "12",
          },
          {
            month: "November",
            leaving_fare: "12",
          },
          {
            month: "December",
            leaving_fare: "12",
          },
        ],
        __v: 0,
      },
      {
        airline: "Qatar Airways",
        leaving_from: "Manchester, Arpt [MAN], UK",
        going_to: "Lagos, Murtala M Arpt [LOS], Nigeria",
        months_fare: [
          {
            month: "January",
            leaving_fare: "12",
          },
          {
            month: "Febuary",
            leaving_fare: "12",
          },
          {
            month: "March",
            leaving_fare: "12",
          },
          {
            month: "April",
            leaving_fare: "12",
          },
          {
            month: "May",
            leaving_fare: "12",
          },
          {
            month: "June",
            leaving_fare: "12",
          },
          {
            month: "July",
            leaving_fare: "12",
          },
          {
            month: "August",
            leaving_fare: "12",
          },
          {
            month: "September",
            leaving_fare: "12",
          },
          {
            month: "October",
            leaving_fare: "12",
          },
          {
            month: "November",
            leaving_fare: "12",
          },
          {
            month: "December",
            leaving_fare: "12",
          },
        ],
        __v: 0,
      },
      {
        airline: "Virgin Atlantic Airways",
        leaving_from: "Manchester, Arpt [MAN], UK",
        going_to: "Mauritius, Plaisance, SSR Arpt [MRU]",
        months_fare: [
          {
            month: "January",
            leaving_fare: "12",
          },
          {
            month: "Febuary",
            leaving_fare: "12",
          },
          {
            month: "March",
            leaving_fare: "12",
          },
          {
            month: "April",
            leaving_fare: "12",
          },
          {
            month: "May",
            leaving_fare: "12",
          },
          {
            month: "June",
            leaving_fare: "12",
          },
          {
            month: "July",
            leaving_fare: "12",
          },
          {
            month: "August",
            leaving_fare: "12",
          },
          {
            month: "September",
            leaving_fare: "12",
          },
          {
            month: "October",
            leaving_fare: "12",
          },
          {
            month: "November",
            leaving_fare: "12",
          },
          {
            month: "December",
            leaving_fare: "12",
          },
        ],
        __v: 0,
      },
      {
        airline: "Virgin Atlantic Airways",
        leaving_from: "Manchester, Arpt [MAN], UK",
        going_to: "Banjul, Banjul Intl Arpt [BJL], Gambia",
        months_fare: [
          {
            month: "January",
            leaving_fare: "12",
          },
          {
            month: "Febuary",
            leaving_fare: "12",
          },
          {
            month: "March",
            leaving_fare: "12",
          },
          {
            month: "April",
            leaving_fare: "12",
          },
          {
            month: "May",
            leaving_fare: "12",
          },
          {
            month: "June",
            leaving_fare: "12",
          },
          {
            month: "July",
            leaving_fare: "12",
          },
          {
            month: "August",
            leaving_fare: "12",
          },
          {
            month: "September",
            leaving_fare: "12",
          },
          {
            month: "October",
            leaving_fare: "12",
          },
          {
            month: "November",
            leaving_fare: "12",
          },
          {
            month: "December",
            leaving_fare: "12",
          },
        ],
        __v: 0,
      },
      {
        airline: "Virgin Atlantic Airways",
        leaving_from: "Manchester, Arpt [MAN], UK",
        going_to: "Accra, Kotoka Intl Arpt [ACC], Ghana",
        months_fare: [
          {
            month: "January",
            leaving_fare: "12",
          },
          {
            month: "Febuary",
            leaving_fare: "12",
          },
          {
            month: "March",
            leaving_fare: "12",
          },
          {
            month: "April",
            leaving_fare: "12",
          },
          {
            month: "May",
            leaving_fare: "12",
          },
          {
            month: "June",
            leaving_fare: "12",
          },
          {
            month: "July",
            leaving_fare: "12",
          },
          {
            month: "August",
            leaving_fare: "12",
          },
          {
            month: "September",
            leaving_fare: "12",
          },
          {
            month: "October",
            leaving_fare: "12",
          },
          {
            month: "November",
            leaving_fare: "12",
          },
          {
            month: "December",
            leaving_fare: "12",
          },
        ],
        __v: 0,
      },
      {
        airline: "Virgin Atlantic Airways",
        leaving_from: "Manchester, Arpt [MAN], UK",
        going_to: "Harare, Intl Arpt [HRE], Zimbabwe",
        months_fare: [
          {
            month: "January",
            leaving_fare: "12",
          },
          {
            month: "Febuary",
            leaving_fare: "12",
          },
          {
            month: "March",
            leaving_fare: "12",
          },
          {
            month: "April",
            leaving_fare: "12",
          },
          {
            month: "May",
            leaving_fare: "12",
          },
          {
            month: "June",
            leaving_fare: "12",
          },
          {
            month: "July",
            leaving_fare: "12",
          },
          {
            month: "August",
            leaving_fare: "12",
          },
          {
            month: "September",
            leaving_fare: "12",
          },
          {
            month: "October",
            leaving_fare: "12",
          },
          {
            month: "November",
            leaving_fare: "12",
          },
          {
            month: "December",
            leaving_fare: "12",
          },
        ],
        __v: 0,
      },
      {
        airline: "Virgin Atlantic Airways",
        leaving_from: "Manchester, Arpt [MAN], UK",
        going_to: "Djibouti, Ambouli Arpt [JIB], Djibouti",
        months_fare: [
          {
            month: "January",
            leaving_fare: "12",
          },
          {
            month: "Febuary",
            leaving_fare: "12",
          },
          {
            month: "March",
            leaving_fare: "12",
          },
          {
            month: "April",
            leaving_fare: "12",
          },
          {
            month: "May",
            leaving_fare: "12",
          },
          {
            month: "June",
            leaving_fare: "12",
          },
          {
            month: "July",
            leaving_fare: "12",
          },
          {
            month: "August",
            leaving_fare: "12",
          },
          {
            month: "September",
            leaving_fare: "12",
          },
          {
            month: "October",
            leaving_fare: "12",
          },
          {
            month: "November",
            leaving_fare: "12",
          },
          {
            month: "December",
            leaving_fare: "12",
          },
        ],
        __v: 0,
      },
      {
        airline: "Virgin Atlantic Airways",
        leaving_from: "Manchester, Arpt [MAN], UK",
        going_to: "Colombo, Intl Arpt [CMB], Sri Lanka",
        months_fare: [
          {
            month: "January",
            leaving_fare: "12",
          },
          {
            month: "Febuary",
            leaving_fare: "12",
          },
          {
            month: "March",
            leaving_fare: "12",
          },
          {
            month: "April",
            leaving_fare: "12",
          },
          {
            month: "May",
            leaving_fare: "12",
          },
          {
            month: "June",
            leaving_fare: "12",
          },
          {
            month: "July",
            leaving_fare: "12",
          },
          {
            month: "August",
            leaving_fare: "12",
          },
          {
            month: "September",
            leaving_fare: "12",
          },
          {
            month: "October",
            leaving_fare: "12",
          },
          {
            month: "November",
            leaving_fare: "12",
          },
          {
            month: "December",
            leaving_fare: "12",
          },
        ],
        __v: 0,
      },
      {
        airline: "Virgin Atlantic Airways",
        leaving_from: "Manchester, Arpt [MAN], UK",
        going_to: "Kingston, NM Arpt [KIN], Jamaica",
        months_fare: [
          {
            month: "January",
            leaving_fare: "12",
          },
          {
            month: "Febuary",
            leaving_fare: "12",
          },
          {
            month: "March",
            leaving_fare: "12",
          },
          {
            month: "April",
            leaving_fare: "12",
          },
          {
            month: "May",
            leaving_fare: "12",
          },
          {
            month: "June",
            leaving_fare: "12",
          },
          {
            month: "July",
            leaving_fare: "12",
          },
          {
            month: "August",
            leaving_fare: "12",
          },
          {
            month: "September",
            leaving_fare: "12",
          },
          {
            month: "October",
            leaving_fare: "12",
          },
          {
            month: "November",
            leaving_fare: "12",
          },
          {
            month: "December",
            leaving_fare: "12",
          },
        ],
        __v: 0,
      },
      {
        airline: "Virgin Atlantic Airways",
        leaving_from: "Manchester, Arpt [MAN], UK",
        going_to: "Kathmandu, Arpt [KTM], Nepal",
        months_fare: [
          {
            month: "January",
            leaving_fare: "12",
          },
          {
            month: "Febuary",
            leaving_fare: "12",
          },
          {
            month: "March",
            leaving_fare: "12",
          },
          {
            month: "April",
            leaving_fare: "12",
          },
          {
            month: "May",
            leaving_fare: "12",
          },
          {
            month: "June",
            leaving_fare: "12",
          },
          {
            month: "July",
            leaving_fare: "12",
          },
          {
            month: "August",
            leaving_fare: "12",
          },
          {
            month: "September",
            leaving_fare: "12",
          },
          {
            month: "October",
            leaving_fare: "12",
          },
          {
            month: "November",
            leaving_fare: "12",
          },
          {
            month: "December",
            leaving_fare: "12",
          },
        ],
        __v: 0,
      },
      {
        airline: "Virgin Atlantic Airways",
        leaving_from: "Manchester, Arpt [MAN], UK",
        going_to: "Lagos, Murtala M Arpt [LOS], Nigeria",
        months_fare: [
          {
            month: "January",
            leaving_fare: "12",
          },
          {
            month: "Febuary",
            leaving_fare: "12",
          },
          {
            month: "March",
            leaving_fare: "12",
          },
          {
            month: "April",
            leaving_fare: "12",
          },
          {
            month: "May",
            leaving_fare: "12",
          },
          {
            month: "June",
            leaving_fare: "12",
          },
          {
            month: "July",
            leaving_fare: "12",
          },
          {
            month: "August",
            leaving_fare: "12",
          },
          {
            month: "September",
            leaving_fare: "12",
          },
          {
            month: "October",
            leaving_fare: "12",
          },
          {
            month: "November",
            leaving_fare: "12",
          },
          {
            month: "December",
            leaving_fare: "12",
          },
        ],
        __v: 0,
      },
      {
        airline: "Royal Air Maroc",
        leaving_from: "Manchester, Arpt [MAN], UK",
        going_to: "Mauritius, Plaisance, SSR Arpt [MRU]",
        months_fare: [
          {
            month: "January",
            leaving_fare: "12",
          },
          {
            month: "Febuary",
            leaving_fare: "12",
          },
          {
            month: "March",
            leaving_fare: "12",
          },
          {
            month: "April",
            leaving_fare: "12",
          },
          {
            month: "May",
            leaving_fare: "12",
          },
          {
            month: "June",
            leaving_fare: "12",
          },
          {
            month: "July",
            leaving_fare: "12",
          },
          {
            month: "August",
            leaving_fare: "12",
          },
          {
            month: "September",
            leaving_fare: "12",
          },
          {
            month: "October",
            leaving_fare: "12",
          },
          {
            month: "November",
            leaving_fare: "12",
          },
          {
            month: "December",
            leaving_fare: "12",
          },
        ],
        __v: 0,
      },
      {
        airline: "Royal Air Maroc",
        leaving_from: "Manchester, Arpt [MAN], UK",
        going_to: "Banjul, Banjul Intl Arpt [BJL], Gambia",
        months_fare: [
          {
            month: "January",
            leaving_fare: "12",
          },
          {
            month: "Febuary",
            leaving_fare: "12",
          },
          {
            month: "March",
            leaving_fare: "12",
          },
          {
            month: "April",
            leaving_fare: "12",
          },
          {
            month: "May",
            leaving_fare: "12",
          },
          {
            month: "June",
            leaving_fare: "12",
          },
          {
            month: "July",
            leaving_fare: "12",
          },
          {
            month: "August",
            leaving_fare: "12",
          },
          {
            month: "September",
            leaving_fare: "12",
          },
          {
            month: "October",
            leaving_fare: "12",
          },
          {
            month: "November",
            leaving_fare: "12",
          },
          {
            month: "December",
            leaving_fare: "12",
          },
        ],
        __v: 0,
      },
      {
        airline: "Royal Air Maroc",
        leaving_from: "Manchester, Arpt [MAN], UK",
        going_to: "Accra, Kotoka Intl Arpt [ACC], Ghana",
        months_fare: [
          {
            month: "January",
            leaving_fare: "12",
          },
          {
            month: "Febuary",
            leaving_fare: "12",
          },
          {
            month: "March",
            leaving_fare: "12",
          },
          {
            month: "April",
            leaving_fare: "12",
          },
          {
            month: "May",
            leaving_fare: "12",
          },
          {
            month: "June",
            leaving_fare: "12",
          },
          {
            month: "July",
            leaving_fare: "12",
          },
          {
            month: "August",
            leaving_fare: "12",
          },
          {
            month: "September",
            leaving_fare: "12",
          },
          {
            month: "October",
            leaving_fare: "12",
          },
          {
            month: "November",
            leaving_fare: "12",
          },
          {
            month: "December",
            leaving_fare: "12",
          },
        ],
        __v: 0,
      },
      {
        airline: "Royal Air Maroc",
        leaving_from: "Manchester, Arpt [MAN], UK",
        going_to: "Harare, Intl Arpt [HRE], Zimbabwe",
        months_fare: [
          {
            month: "January",
            leaving_fare: "12",
          },
          {
            month: "Febuary",
            leaving_fare: "12",
          },
          {
            month: "March",
            leaving_fare: "12",
          },
          {
            month: "April",
            leaving_fare: "12",
          },
          {
            month: "May",
            leaving_fare: "12",
          },
          {
            month: "June",
            leaving_fare: "12",
          },
          {
            month: "July",
            leaving_fare: "12",
          },
          {
            month: "August",
            leaving_fare: "12",
          },
          {
            month: "September",
            leaving_fare: "12",
          },
          {
            month: "October",
            leaving_fare: "12",
          },
          {
            month: "November",
            leaving_fare: "12",
          },
          {
            month: "December",
            leaving_fare: "12",
          },
        ],
        __v: 0,
      },
      {
        airline: "Royal Air Maroc",
        leaving_from: "Manchester, Arpt [MAN], UK",
        going_to: "Djibouti, Ambouli Arpt [JIB], Djibouti",
        months_fare: [
          {
            month: "January",
            leaving_fare: "12",
          },
          {
            month: "Febuary",
            leaving_fare: "12",
          },
          {
            month: "March",
            leaving_fare: "12",
          },
          {
            month: "April",
            leaving_fare: "12",
          },
          {
            month: "May",
            leaving_fare: "12",
          },
          {
            month: "June",
            leaving_fare: "12",
          },
          {
            month: "July",
            leaving_fare: "12",
          },
          {
            month: "August",
            leaving_fare: "12",
          },
          {
            month: "September",
            leaving_fare: "12",
          },
          {
            month: "October",
            leaving_fare: "12",
          },
          {
            month: "November",
            leaving_fare: "12",
          },
          {
            month: "December",
            leaving_fare: "12",
          },
        ],
        __v: 0,
      },
      {
        airline: "Royal Air Maroc",
        leaving_from: "Manchester, Arpt [MAN], UK",
        going_to: "Colombo, Intl Arpt [CMB], Sri Lanka",
        months_fare: [
          {
            month: "January",
            leaving_fare: "12",
          },
          {
            month: "Febuary",
            leaving_fare: "12",
          },
          {
            month: "March",
            leaving_fare: "12",
          },
          {
            month: "April",
            leaving_fare: "12",
          },
          {
            month: "May",
            leaving_fare: "12",
          },
          {
            month: "June",
            leaving_fare: "12",
          },
          {
            month: "July",
            leaving_fare: "12",
          },
          {
            month: "August",
            leaving_fare: "12",
          },
          {
            month: "September",
            leaving_fare: "12",
          },
          {
            month: "October",
            leaving_fare: "12",
          },
          {
            month: "November",
            leaving_fare: "12",
          },
          {
            month: "December",
            leaving_fare: "12",
          },
        ],
        __v: 0,
      },
      {
        airline: "Royal Air Maroc",
        leaving_from: "Manchester, Arpt [MAN], UK",
        going_to: "Kingston, NM Arpt [KIN], Jamaica",
        months_fare: [
          {
            month: "January",
            leaving_fare: "12",
          },
          {
            month: "Febuary",
            leaving_fare: "12",
          },
          {
            month: "March",
            leaving_fare: "12",
          },
          {
            month: "April",
            leaving_fare: "12",
          },
          {
            month: "May",
            leaving_fare: "12",
          },
          {
            month: "June",
            leaving_fare: "12",
          },
          {
            month: "July",
            leaving_fare: "12",
          },
          {
            month: "August",
            leaving_fare: "12",
          },
          {
            month: "September",
            leaving_fare: "12",
          },
          {
            month: "October",
            leaving_fare: "12",
          },
          {
            month: "November",
            leaving_fare: "12",
          },
          {
            month: "December",
            leaving_fare: "12",
          },
        ],
        __v: 0,
      },
      {
        airline: "Royal Air Maroc",
        leaving_from: "Manchester, Arpt [MAN], UK",
        going_to: "Kathmandu, Arpt [KTM], Nepal",
        months_fare: [
          {
            month: "January",
            leaving_fare: "12",
          },
          {
            month: "Febuary",
            leaving_fare: "12",
          },
          {
            month: "March",
            leaving_fare: "12",
          },
          {
            month: "April",
            leaving_fare: "12",
          },
          {
            month: "May",
            leaving_fare: "12",
          },
          {
            month: "June",
            leaving_fare: "12",
          },
          {
            month: "July",
            leaving_fare: "12",
          },
          {
            month: "August",
            leaving_fare: "12",
          },
          {
            month: "September",
            leaving_fare: "12",
          },
          {
            month: "October",
            leaving_fare: "12",
          },
          {
            month: "November",
            leaving_fare: "12",
          },
          {
            month: "December",
            leaving_fare: "12",
          },
        ],
        __v: 0,
      },
      {
        airline: "Royal Air Maroc",
        leaving_from: "Manchester, Arpt [MAN], UK",
        going_to: "Lagos, Murtala M Arpt [LOS], Nigeria",
        months_fare: [
          {
            month: "January",
            leaving_fare: "12",
          },
          {
            month: "Febuary",
            leaving_fare: "12",
          },
          {
            month: "March",
            leaving_fare: "12",
          },
          {
            month: "April",
            leaving_fare: "12",
          },
          {
            month: "May",
            leaving_fare: "12",
          },
          {
            month: "June",
            leaving_fare: "12",
          },
          {
            month: "July",
            leaving_fare: "12",
          },
          {
            month: "August",
            leaving_fare: "12",
          },
          {
            month: "September",
            leaving_fare: "12",
          },
          {
            month: "October",
            leaving_fare: "12",
          },
          {
            month: "November",
            leaving_fare: "12",
          },
          {
            month: "December",
            leaving_fare: "12",
          },
        ],
        __v: 0,
      },
      {
        airline: "British Airways",
        leaving_from: "Manchester, Arpt [MAN], UK",
        going_to: "Mauritius, Plaisance, SSR Arpt [MRU]",
        months_fare: [
          {
            month: "January",
            leaving_fare: "12",
          },
          {
            month: "Febuary",
            leaving_fare: "12",
          },
          {
            month: "March",
            leaving_fare: "12",
          },
          {
            month: "April",
            leaving_fare: "12",
          },
          {
            month: "May",
            leaving_fare: "12",
          },
          {
            month: "June",
            leaving_fare: "12",
          },
          {
            month: "July",
            leaving_fare: "12",
          },
          {
            month: "August",
            leaving_fare: "12",
          },
          {
            month: "September",
            leaving_fare: "12",
          },
          {
            month: "October",
            leaving_fare: "12",
          },
          {
            month: "November",
            leaving_fare: "12",
          },
          {
            month: "December",
            leaving_fare: "12",
          },
        ],
        __v: 0,
      },
      {
        airline: "British Airways",
        leaving_from: "Manchester, Arpt [MAN], UK",
        going_to: "Banjul, Banjul Intl Arpt [BJL], Gambia",
        months_fare: [
          {
            month: "January",
            leaving_fare: "12",
          },
          {
            month: "Febuary",
            leaving_fare: "12",
          },
          {
            month: "March",
            leaving_fare: "12",
          },
          {
            month: "April",
            leaving_fare: "12",
          },
          {
            month: "May",
            leaving_fare: "12",
          },
          {
            month: "June",
            leaving_fare: "12",
          },
          {
            month: "July",
            leaving_fare: "12",
          },
          {
            month: "August",
            leaving_fare: "12",
          },
          {
            month: "September",
            leaving_fare: "12",
          },
          {
            month: "October",
            leaving_fare: "12",
          },
          {
            month: "November",
            leaving_fare: "12",
          },
          {
            month: "December",
            leaving_fare: "12",
          },
        ],
        __v: 0,
      },
      {
        airline: "British Airways",
        leaving_from: "Manchester, Arpt [MAN], UK",
        going_to: "Accra, Kotoka Intl Arpt [ACC], Ghana",
        months_fare: [
          {
            month: "January",
            leaving_fare: "12",
          },
          {
            month: "Febuary",
            leaving_fare: "12",
          },
          {
            month: "March",
            leaving_fare: "12",
          },
          {
            month: "April",
            leaving_fare: "12",
          },
          {
            month: "May",
            leaving_fare: "12",
          },
          {
            month: "June",
            leaving_fare: "12",
          },
          {
            month: "July",
            leaving_fare: "12",
          },
          {
            month: "August",
            leaving_fare: "12",
          },
          {
            month: "September",
            leaving_fare: "12",
          },
          {
            month: "October",
            leaving_fare: "12",
          },
          {
            month: "November",
            leaving_fare: "12",
          },
          {
            month: "December",
            leaving_fare: "12",
          },
        ],
        __v: 0,
      },
      {
        airline: "British Airways",
        leaving_from: "Manchester, Arpt [MAN], UK",
        going_to: "Harare, Intl Arpt [HRE], Zimbabwe",
        months_fare: [
          {
            month: "January",
            leaving_fare: "12",
          },
          {
            month: "Febuary",
            leaving_fare: "12",
          },
          {
            month: "March",
            leaving_fare: "12",
          },
          {
            month: "April",
            leaving_fare: "12",
          },
          {
            month: "May",
            leaving_fare: "12",
          },
          {
            month: "June",
            leaving_fare: "12",
          },
          {
            month: "July",
            leaving_fare: "12",
          },
          {
            month: "August",
            leaving_fare: "12",
          },
          {
            month: "September",
            leaving_fare: "12",
          },
          {
            month: "October",
            leaving_fare: "12",
          },
          {
            month: "November",
            leaving_fare: "12",
          },
          {
            month: "December",
            leaving_fare: "12",
          },
        ],
        __v: 0,
      },
      {
        airline: "British Airways",
        leaving_from: "Manchester, Arpt [MAN], UK",
        going_to: "Djibouti, Ambouli Arpt [JIB], Djibouti",
        months_fare: [
          {
            month: "January",
            leaving_fare: "12",
          },
          {
            month: "Febuary",
            leaving_fare: "12",
          },
          {
            month: "March",
            leaving_fare: "12",
          },
          {
            month: "April",
            leaving_fare: "12",
          },
          {
            month: "May",
            leaving_fare: "12",
          },
          {
            month: "June",
            leaving_fare: "12",
          },
          {
            month: "July",
            leaving_fare: "12",
          },
          {
            month: "August",
            leaving_fare: "12",
          },
          {
            month: "September",
            leaving_fare: "12",
          },
          {
            month: "October",
            leaving_fare: "12",
          },
          {
            month: "November",
            leaving_fare: "12",
          },
          {
            month: "December",
            leaving_fare: "12",
          },
        ],
        __v: 0,
      },
      {
        airline: "British Airways",
        leaving_from: "Manchester, Arpt [MAN], UK",
        going_to: "Colombo, Intl Arpt [CMB], Sri Lanka",
        months_fare: [
          {
            month: "January",
            leaving_fare: "12",
          },
          {
            month: "Febuary",
            leaving_fare: "12",
          },
          {
            month: "March",
            leaving_fare: "12",
          },
          {
            month: "April",
            leaving_fare: "12",
          },
          {
            month: "May",
            leaving_fare: "12",
          },
          {
            month: "June",
            leaving_fare: "12",
          },
          {
            month: "July",
            leaving_fare: "12",
          },
          {
            month: "August",
            leaving_fare: "12",
          },
          {
            month: "September",
            leaving_fare: "12",
          },
          {
            month: "October",
            leaving_fare: "12",
          },
          {
            month: "November",
            leaving_fare: "12",
          },
          {
            month: "December",
            leaving_fare: "12",
          },
        ],
        __v: 0,
      },
      {
        airline: "British Airways",
        leaving_from: "Manchester, Arpt [MAN], UK",
        going_to: "Kingston, NM Arpt [KIN], Jamaica",
        months_fare: [
          {
            month: "January",
            leaving_fare: "12",
          },
          {
            month: "Febuary",
            leaving_fare: "12",
          },
          {
            month: "March",
            leaving_fare: "12",
          },
          {
            month: "April",
            leaving_fare: "12",
          },
          {
            month: "May",
            leaving_fare: "12",
          },
          {
            month: "June",
            leaving_fare: "12",
          },
          {
            month: "July",
            leaving_fare: "12",
          },
          {
            month: "August",
            leaving_fare: "12",
          },
          {
            month: "September",
            leaving_fare: "12",
          },
          {
            month: "October",
            leaving_fare: "12",
          },
          {
            month: "November",
            leaving_fare: "12",
          },
          {
            month: "December",
            leaving_fare: "12",
          },
        ],
        __v: 0,
      },
      {
        airline: "British Airways",
        leaving_from: "Manchester, Arpt [MAN], UK",
        going_to: "Kathmandu, Arpt [KTM], Nepal",
        months_fare: [
          {
            month: "January",
            leaving_fare: "12",
          },
          {
            month: "Febuary",
            leaving_fare: "12",
          },
          {
            month: "March",
            leaving_fare: "12",
          },
          {
            month: "April",
            leaving_fare: "12",
          },
          {
            month: "May",
            leaving_fare: "12",
          },
          {
            month: "June",
            leaving_fare: "12",
          },
          {
            month: "July",
            leaving_fare: "12",
          },
          {
            month: "August",
            leaving_fare: "12",
          },
          {
            month: "September",
            leaving_fare: "12",
          },
          {
            month: "October",
            leaving_fare: "12",
          },
          {
            month: "November",
            leaving_fare: "12",
          },
          {
            month: "December",
            leaving_fare: "12",
          },
        ],
        __v: 0,
      },
      {
        airline: "British Airways",
        leaving_from: "Manchester, Arpt [MAN], UK",
        going_to: "Lagos, Murtala M Arpt [LOS], Nigeria",
        months_fare: [
          {
            month: "January",
            leaving_fare: "12",
          },
          {
            month: "Febuary",
            leaving_fare: "12",
          },
          {
            month: "March",
            leaving_fare: "12",
          },
          {
            month: "April",
            leaving_fare: "12",
          },
          {
            month: "May",
            leaving_fare: "12",
          },
          {
            month: "June",
            leaving_fare: "12",
          },
          {
            month: "July",
            leaving_fare: "12",
          },
          {
            month: "August",
            leaving_fare: "12",
          },
          {
            month: "September",
            leaving_fare: "12",
          },
          {
            month: "October",
            leaving_fare: "12",
          },
          {
            month: "November",
            leaving_fare: "12",
          },
          {
            month: "December",
            leaving_fare: "12",
          },
        ],
        __v: 0,
      },
      {
        airline: "KLM",
        leaving_from: "Manchester, Arpt [MAN], UK",
        going_to: "Mauritius, Plaisance, SSR Arpt [MRU]",
        months_fare: [
          {
            month: "January",
            leaving_fare: "12",
          },
          {
            month: "Febuary",
            leaving_fare: "12",
          },
          {
            month: "March",
            leaving_fare: "12",
          },
          {
            month: "April",
            leaving_fare: "12",
          },
          {
            month: "May",
            leaving_fare: "12",
          },
          {
            month: "June",
            leaving_fare: "12",
          },
          {
            month: "July",
            leaving_fare: "12",
          },
          {
            month: "August",
            leaving_fare: "12",
          },
          {
            month: "September",
            leaving_fare: "12",
          },
          {
            month: "October",
            leaving_fare: "12",
          },
          {
            month: "November",
            leaving_fare: "12",
          },
          {
            month: "December",
            leaving_fare: "12",
          },
        ],
        __v: 0,
      },
    ]);

    res.send("RES" + result);
  } catch (error) {
    res.send(err);
  }
};

export const authorizeLogin = async (req, res) => {
  try {
    AdminModel.findOne({ username: req.body.username }).then((user) => {
      console.log(user);
      if (user === null) {
        res.json({ response: "User Not Found", loginAttempt: false });
      } else {
        if (user.password === req.body.password) {
          res.json({ response: "Logged In", loginAttempt: true });
        } else {
          res.json({ response: "Password Incorrect", loginAttempt: false });
        }
      }
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
