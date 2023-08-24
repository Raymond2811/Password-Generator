# SimplePassGen

## Description

I built this password generator so people can use it to generate a random password based on the criteria they've selected.
This website helps people generate passwords for their accounts on other platforms. 
One thing I learned from building this project is how to randomize. 
In order to obtain a random character for our password, we begin by utilizing the Math.random() function. 
This means that the computer will generate a random decimal number between 0(inclusive) and 1(exculusive). 
Following this step, the computer proceeds to multiply the resulting decimal by the length of the character set string.
Next, we utilize the Math.floor() function.
This function takes the result from the multiplication, which could potentially be a decimal, and rounds it down to the nearest whole number.
Consequently, giving us an index number.
Essentially, this index number indicates the specific character the computer should select.

EX: let random = Math.floor(Math.random() *charset.length);

## Usage

This website has only one use and that is to generate a password based on the criteria you've selected.

 create an `assets/images` 

![alt text](assets/images/screenshot.png)

## License

MIT license
