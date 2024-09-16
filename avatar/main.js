document.title = "Roblox Avatar";
let text1;
var onCrate = location.search;
var urlCode = new URLSearchParams(onCrate)
var userId = urlCode.get("userId")

function main() {
async = fetch("https://avatar.roblox.com/v1/users/" + userId + "/avatar", { 
method: "GET",
  headers: {
    "Content-Type": "application/json"
  }
})
.then(res => res.json())
.then(data => {
var onText = data
text1 = document.getElementById("_01") 
  text1.innerHTML = `
<p>${onText}</p>
  `
})
.catch(er => {
console.error(er)
});


}
main()
