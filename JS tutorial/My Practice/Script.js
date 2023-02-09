let part_number = 0;

function addPartName(){
  part_number += 1;   let part_details = document.getElementById('entry').value

  let display = document.getElementById('details');

  let card = document.createElement('div');
  let heading = document.createElement('h2');
  let para = document.createElement('p');

  heading.innerHTML = "Part Number - "+ part_number;
  para.innerHTML = "Description - "+ part_details;

  card.className="card";
  
  card.append(heading,para);
  display.append(card);
}