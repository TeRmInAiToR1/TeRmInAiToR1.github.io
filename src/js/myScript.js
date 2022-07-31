"use strict"

alert("Рад приветствовать тебя на моем сайте!\nДавай произведем расчет стоимости моих услуг");

let design = prompt("Начнем с дизайна\nКакой дизайн вы предпочитаете?\n1 - Hi Tech\n2 - Organic & Natural\n3 - Полигональный");
let type = prompt("Выберите тип сайта\n1 - Социальные\n2 - Комерческие\n3 - Информационные");
let adaptability = prompt("Адаптивность\n1 - Резиновый\n2 - Pixel Perfect\n3 - Адаптивный");

let answers = {
    design: design,
    type: type,
    adaptability: adaptability,
    cost: 0,
    terms: 0,
    calculations(){
        
        if(this.design == 1){
            this.cost += 2000;
            this.terms += 2;
        }
        else if(this.design == 2){
            this.cost += 1500;
            this.terms += 2;
        }
        else if(this.design == 3){
            this.cost += 1000;
            this.terms += 1;
        }
        
        if(this.type == 1) { this.cost += 3000; this.terms += 4; }
        else if(this.type == 2) { this.cost += 4000; this.terms += 5; }
        else if(this.type == 3) { this.cost += 1500; this.terms += 1; }
        
        if(this.adaptability == 1) { this.cost += 1500; this.terms += 2; }
        else if(this.adaptability == 2) { this.cost += 2000; this.terms += 1; }
        else if(this.adaptability == 3) { this.cost += 5000; this.terms += 4; }
    },
    showPriceAndTerms(){
        alert("Цена вашего будушего сайта >> " + answers.cost + " рублей\nСроки его выполнения >> " + answers.terms + " дней");
    }
};
//console.log(answers);
console.log(answers.cost);
answers.calculations();
answers.showPriceAndTerms();