function formatString(input: string, toUpper?: boolean){
if(toUpper === true || toUpper === undefined){
  console.log(input.toUpperCase())
}else{
    console.log(input.toLowerCase())
}
}







formatString("Hello", false);



