

const getPosts = async() =>{ 
    const res= await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json();
    const  posts = data.splice(0,5)
    console.log(posts)
    
let textarea = document.getElementById('textarea')
textarea.textContent = posts[0].title;
//   document.write(data)
}
getPosts();   

// submitPost = () =>{
//  console.log(textarea.input)
function submitPost(){
    const textValue = document.getElementById("textarea").value
    console.log(textValue)
    document.write(textValue)
    const divElement = document.getElementById("div")
    divElement.innerText = textValue;}

    function editpost(){
        const textValue = document.getElementById("textarea").value
        document.write(textValue)
    }