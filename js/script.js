// Created by: Jaejun Lee
// Created on: Mar 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates taxes
 */
function calculate () {
  // input
  const hours = parseInt(document.getElementById('number-of-hours-worked').value)
  const rate = parseInt(document.getElementById('hourly-rate').value)
  const tax = 0.18;

  // process
  const pay = hours * rate * (1.00 - tax) 
  const taxes = hours * rate *  tax

  // output
  document.getElementById('pay').innerHTML = 'Your pay will be: $' + pay.toFixed(2)
  document.getElementById('taxes').innerHTML = 'The government will take: $' + taxes.toFixed(2)
}
