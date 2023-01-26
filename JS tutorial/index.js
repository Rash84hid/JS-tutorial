let wo_number = 0;

function addWorkOrder(){
    wo_number += 1;    let wo_details = document.getElementById('entry').value

    let display = document.getElementById('details');
    
    let card = document.createElement('div');
    let heading = document.createElement('h3');
    let para = document.createElement('p');

    heading.innerHTML = "WO Number - "+wo_number;
    para.innerHTML = "Issue - "+wo_details;
    
    card.className="card";

    card.append(heading,para);
    display.append(card);
}