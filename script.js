// 2.Change all h2 font color 
const tagColor = document.getElementsByTagName('h2');
for (const h2 of tagColor){
    h2.style.color = 'lightblue';
}

//3. backpack section backgrund change 
document.getElementById('backpack').style.backgroundColor = '#ff6347';

//4. Card borader radious 30px 
const cardRadious = document.getElementsByClassName('card');
for(const card of cardRadious){
    document.getElementById('shoe').style.borderRadius = '30px';
}
//5.button click handelar 
document.getElementById('handelar').addEventListener('click', function(){
    // console.log('perfectly Work');
});

// 6.Remove all button with event Handelar
const toChek = document.getElementsByClassName('button');
for(const button of toChek){
    button.addEventListener('click', function(event){
        // document.getElementById('shoe').removeChild(btn);
        event.target.parentNode.removeChild(event.target);

    });
};

// 7. button Elable 
document.getElementById('field').addEventListener('keyup',function(event){
   const deletButton = document.getElementById('confirm');
   if(event.target.value == 'email'){
       deletButton.removeAttribute('disabled');
   }
   else {
        deletButton.setAttribute('disabled', true)   
   };
});

// 8. When mouse Enter the image the image will be changd 
let image = document.getElementById('change-image');
image.addEventListener('mouseenter', function(){
   image.src = "img/shoes/shoe-2.png";
});
image.addEventListener('mouseout', function(){
    image.src = "img/shoes/shoe-1.png";
});

// 9. Double-clicking on an empty space will change the color on the back. 

document.getElementById('subscribe').addEventListener('dblclick', function(){
    document.getElementById('change-bg').style.backgroundColor = '#FA6044';
});
