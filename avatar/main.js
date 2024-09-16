document.title = "Roblox Avatar";
let text1;
var onCrate = location.search;
var urlCode = new URLSearchParams(onCrate)
var userId = urlCode.get("userId")

function main(userId) {

async = fetch("https://avatar.roblox.com/v1/users/" + userId + "/avatar", {
	method: "GET"
	})
	.then(res => {
	return res.json()
	})
	.then(data => {
    var onText = data
    text1 = document.getElementById("_01") 
    text1.innerHTML = `
    <p>${onText}</p>
    `
  )}
.catch(er => {
console.error(er)
});

}
main()
