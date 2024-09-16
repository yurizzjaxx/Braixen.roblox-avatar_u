document.title = "Roblox Avatar";
let text1;

function main() {
fetch("https://avatar.roblox.com/v1/users/" + userId + "/avatar", { 
method: "GET",
  headers: {
    "Content-Type": "application/json"
  }
})
.then(res => res.json())
.then(data => {

})
.catch(er => {
console.error(er)
});


}
main()
