let arr = ["This", "is", "a", "sentence."];
function printOutString(array)
{
    const listItems = array.map((palabra)=>`${palabra}`);
    const refOracion=document.getElementById("sentence");
    const stringListItems=listItems.join(" ");
    refOracion.innerHTML=stringListItems;
}

printOutString(arr);
// Complete the function to print out the string: This is a sentence.
// sugerencia: join()
