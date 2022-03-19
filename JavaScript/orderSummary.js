/* 1. Lugeda tellimuse objekti seest kõik tellimuse esemed - printida iga eseme nimi, kogus, hind ja summa (2tk*4€ = 8€) konsooli eraldi reale.
   2. Kõige lõpus printida konsooli tellimuse kogusumma koos käibemaksuga.*/

var tellimus = { 
    "id": 2113, 
    "orderNumber": "E210126001", 
    "createdAt": "2021-01-26 16:04:24", 
    "clientName": "Kalle Tali", 
    "deliveryType": "Omniva smartpost", 
    "deliveryValue": 178, 
    "rows": [ 
      { 
        "article_id": 31, 
        "name": "Kohvimasin De'Longhi Dolce Gusto Piccolo EDG100.W", 
        "product_code": "257549", 
        "price": 49.1666666667, 
        "amount": 1, 
        "vat": 0.2 
      }, 
      { 
        "article_id": 23420, 
        "name": "Kohvikapslid Nescafe Dolce Gusto Espresso Intenso, 128 g, 16 tk", 
        "product_code": "355836", 
        "price": 5.0666666667, 
        "amount": 2, 
        "vat": 0.2 
      }, 
      { 
        "article_id": 23421, 
        "name": "Kohvikapslid Nescafe Dolce Gusto Latte Macchiato, 194 g, 16 tk", 
        "product_code": "000000000501267301", 
        "price": 5.825, 
        "amount": 1, 
        "vat": 0.2 
      } 
    ] 
  } 
  let nimi;
  let kogus;
  let hind;
  let vat;
  let summa = 0;
  for (let i=0; i<tellimus.rows.length; i++) {
    nimi = tellimus.rows[i].name;
    kogus = tellimus.rows[i].amount;
    hind = tellimus.rows[i].price;
    vat = tellimus.rows[i].vat;

    console.log("nimi: " + nimi + "\n" + 
                "kogus: " + kogus.toFixed(2) + "\n" +
                "hind: " + parseFloat(hind.toFixed(2)) + "\n" + 
                "summa: " + kogus + "tk*" + parseFloat(hind.toFixed(2)) + "€ = " + parseFloat((kogus*hind).toFixed(2)) + "€");
    summa = summa + (kogus*(hind+(vat*hind)));
}
  console.log("Tellimuse " + tellimus.orderNumber + " kogusumma käibemaksuga: " + parseFloat(summa.toFixed(2)) + "€");