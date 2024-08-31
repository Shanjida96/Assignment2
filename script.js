function HandleSubscription(event){
    event.preventDefault();
     const email= event.target.Email.value;
     console.log(email)
    const success_Container=document.getElementById("Success")
    console.log(document)
    console.log(success_Container);

    const messageParagraph= document.createElement("p")
    messageParagraph.innerText= `Success!You will now receive promotional message via email.` 
    console.log(messageParagraph)
    success_Container.appendChild(messageParagraph);
}  
const Image_array=[
    {
        url : "./food/burger.png"
    },
    {
        url : "./food/Cake.png"
    },
    {
        url : "./food/Pizza.png"
    }
]
for(const item of Image_array)
{
    console.log(item);
}
/*console.log(Image_array)
const firstURLobject=Image_array[0]
console.log(firstURLobject);
*/
function HandleShowMoreFood()
{
    console.log("Click")
}