const APIURL = "https://api.github.com/users/";
var form = document.getElementById("myform")

form.addEventListener('submit', function(e){
    e.preventDefault();

    var searchText = document.getElementById("search").value

    var originalName = searchText.split(' ').join('')
    document.getElementById("result").innerHTML = ""

    fetch("https://api.github.com/users/"+originalName)
    .then((result)=>result.json())
    .then((data)=> {
        console.log(data)

        document.getElementById("result").innerHTML = `
        <a target="_blank" href="https://www.github.com/${originalName}"><img src="${data.avatar_url}"/</a>`
    })
    
})