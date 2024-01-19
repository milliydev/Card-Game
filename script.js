const  elContainer = document.getElementById('container');
const  cards_length = 16;
const  cards = [];
{/* <i class="bx bx-laugh"></i>; */}


let icons = [
  'laugh',
   'camera',
   'moon',
   'basketball',
   'dollar',
   'phone',
   'user',
   'party'
];


let preShow = undefined;


icons.push(...icons);

for(let i =0; i < 100; i++){
  const idx1 = Math.floor(Math.random() * cards_length);
  const idx2 = Math.floor(Math.random() * cards_length);

  const temp = icons[idx1];

  icons[idx1] = icons[idx2];
  icons[idx2] = temp;
  
  
}




for (let i = 0; i < cards_length; i++) {
    const cardEl = document.createElement('div');
    cardEl.classList.add('card');


    cardEl.innerHTML = `
     <div class='front'> 
     <i class='bx bx-${icons[i]}'></i>;
     </div>
     <div class = 'back'> <b> Click me </b> </div>
    `
    cardEl.addEventListener('click', ()=> {
      if(!cardEl.classList.contains('show')){
        cardEl.classList.add('show');
      }

      if (!preShow) {
        preShow = cardEl;
      } else {
        const iconOne = preShow.querySelector("i").classList[1];
        const iconTwo = cardEl.querySelector("i").classList[1];

        if (iconOne !== iconTwo) {
          const temp = preShow;
          setTimeout(() => {
            temp.classList.remove("show");
            cardEl.classList.remove("show");
          }, 1000);
        }

        preShow = undefined;
      }

    })


    cards.push(cardEl);

    elContainer.appendChild(cardEl);
      
  
}


