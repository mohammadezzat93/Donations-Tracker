'use strict'

let section2 = document.getElementById('section2');
let form = document.getElementById('form');

let names = ['Donation Name', 'Donation Amount', 'Age'];
let table = document.createElement('table');


Donations_Tracker.allDonation=[];

function Donations_Tracker(name, amount, age) {
    this.name = name;
    this.amount = amount;
    this.age = age;

    Donations_Tracker.allDonation.push(this);
 
}

// new Donations_Tracker = ()

function random(max,min) {
    Math.floor(Math.random * (max - min)) + min;
}

Donations_Tracker.prototype.getAge = function () {
this.age = random(20,60);

}

 function makeHeader() {

    
    section2.appendChild(table);

    let trHeader = document.createElement('tr');
    table.appendChild(trHeader);

    for (let i = 0; i < names.length; i++) {
        let thHeader = document.createElement('th');
        trHeader.appendChild(thHeader);
        thHeader.textContent = names[i];

        console.log('names :',names[i]);

    }

}

Donations_Tracker.prototype.render =function(){

    let trData = document.createElement('tr');
    table.appendChild(trData);

    let tdName = document.createElement('td');
    trData.appendChild(tdName);
    tdName.textContent = addInformation(event);

    let tdAmount = document.createElement('td');
    trData.appendChild(tdAmount);
    tdAmount.textContent = addInformation(e);

    let tdAge = document.createElement('td');
    trData.appendChild(tdAge);
    tdAge.textContent = getAge();

}

form.addEventListener('submit' , addInformation);

    function addInformation(event){

        event.preventDefult();

        let name = event.target.name.value;
        let amount =parseInt(event.target.amount.value);
        let age = parseInt(event.target.age.value);

        let price = document.getElementById('amount');

        price.addEventListener('change', addPrice);

        function addPrice(e){
            amount =parseInt(event.target.amount.value);
            if(amount === '100'){

                tdAmount.textContent = '100'
            }
            else if(amount === '300'){

                tdAmount.textContent = '300'
            }
            else if(amount === '500'){

                tdAmount.textContent = '500'
            }
        }

        let addToTable = new Donations_Tracker(name,amount,age);

        console.log('addToTable' ,addToTable);

        table.textContent = "";

        addToTable.name;


    }

    function stor(){
        let stringArray = JSON.stringify(Donations_Tracker.allDonation);
        localStorage.setItem('information',stringArray);
    }
    stor();


    function getStore(){
        let data = localStorage.getItem('information');
        let parseArray = JSON.parse(data);

        if(parseArray !== null){

            Donations_Tracker.allDonation = parseArray;
            Donations_Tracker.allDonation = [];

            for (let i = 0; i < parseArray.length; i++) {
                let new_Data = new Donations_Tracker(parseArray[i].name, parseArray[i].amount,parseArray[i].age)
                
            }

        }
    }
    getStore();


    let clear = document.createElement('button');
    section2.appendChild(clear);

    clear.addEventListener('click',Clear);

    function Clear(event){

        event.preventDefult();

        table.textContent = '';

        localStorage.removeItem('information')
    }


makeHeader();

for (let i = 0; i < Donations_Tracker.allDonation.length; i++) {
    Donations_Tracker.allDonation[i].render();
    Donations_Tracker.allDonation[i].getAge();
}