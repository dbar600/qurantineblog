let backButton = document.querySelector("#back");
let nextButton = document.querySelector("#next");

let students = [
  {
    profileImage:
      "https://cdn.glitch.com/f128cd42-aafb-4405-bb0a-d5077e653001%2F242E8346-1869-44CE-8ACA-D0FA714F99A0.JPG?v=1587330205945",
    name: "March 17",
    quote: "I made breakfast for the whole family ",
    superlative: "I love pancakes",
  
  },
  {
    profileImage:
      "https://cdn.glitch.com/f128cd42-aafb-4405-bb0a-d5077e653001%2FIMG-3043.PNG?v=1587330225122",
    name: "March 27 ",
    quote: "My building caught on fire and they had to evacuate the building",
    superlative: " They had to evacuate the building but everyone was fine "
    
  },
  {
    profileImage:
      "https://cdn.glitch.com/f128cd42-aafb-4405-bb0a-d5077e653001%2FIMG-2981.PNG?v=1587330234780",
    name: "Everyday",
    quote: "I had zoom session with all my friends",
    superlative : "I miss them "
  },
  {
    profileImage:
      "https://cdn.glitch.com/f128cd42-aafb-4405-bb0a-d5077e653001%2FC9890B73-32AF-4677-A944-99BE8EC4D9EF.JPG?v=1587330242508",
    name: "I was on tikto a lot ",
    quote: "so I learned how to make my own Dalgona cofee ",
     
  },
  {
    profileImage:
      "https://wellinsiders.com/wp-content/uploads/2019/02/womenofcoloryogaretreats.jpg?is-pending-load=1",
    name: "YOGA TIME",
    quote: "I tried doing yoga at least twice a week ",
    superlative: "It helped me relax and manage stress"
  },
  
  
   
];

let count = 0;
document.querySelector("#pic").src = students[count].profileImage;
document.querySelector("#name").innerHTML = students[count].name;
document.querySelector("#quote").innerHTML = students[count].quote;
document.querySelector("#superlative").innerHTML = students[count].superlative;

nextButton.addEventListener("click", () => {
  console.log("next");
  count++;
  console.log(count);
  document.querySelector("#pic").src = students[count].profileImage;
  document.querySelector("#name").innerHTML = students[count].name;
  document.querySelector("#quote").innerHTML = students[count].quote;
  document.querySelector("#superlative").innerHTML =students[count].superlative;
  console.log(count);
  if (count == 4) {
    count = 0;
  }
  console.log(count);
});

backButton.addEventListener("click", () => {
  console.log("back");
  count--;
  console.log(count);
  document.querySelector("#pic").src = students[count].profileImage;
  document.querySelector("#name").innerHTML = students[count].name;
  document.querySelector("#quote").innerHTML = students[count].quote;
  document.querySelector("#superlative").innerHTML =students[count].superlative;
  if (count == 0) {
    count = 4;
  }
  console.log(count);
});

