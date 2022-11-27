var BookmarkNameInput = document.getElementById('BookmarkNameInput');
var websiteURLInput = document.getElementById('websiteURLInput');
var WebConatner;
if (localStorage.getItem("list") != null) {
    WebConatner = JSON.parse(localStorage.getItem("list"))
    display();
}
else {
    WebConatner = [];
}
function addweb() {
    if(checkinput()==true)
    {
        elemnt = {
            Name: BookmarkNameInput.value,
            SitURL: websiteURLInput.value,
        }
        WebConatner.push(elemnt)
        localStorage.setItem("list", JSON.stringify(WebConatner))
    
        display();
        clearform();
    }
    else{
        alert("Name is required   ||   Url Field is required")
    }
   
}

function display() {
    var cartona = ``;
    for (i = 0; i < WebConatner.length; i++) {
        cartona += ` <div class="perant py-5 ">

        <h2>${WebConatner[i].Name}</h2>
        <div>
            <a href="`+WebConatner[i].SitURL+`">
                <button type="submit" class="btn btn-info mx-3">Viste</button>
            </a>
            <button onclick="deleteContant(`+i+`)"; class="btn btn-danger">Delete</button>
        </div>

    </div>`
    }
    document.getElementById('contant').innerHTML = cartona;
}


function deleteContant(index) {
    WebConatner.splice(index, 1)
    localStorage.setItem("list", JSON.stringify(WebConatner))
    display();
}
function checkinput() {
    if (BookmarkNameInput.value != "" && websiteURLInput.value != ""
        ) {
        return true;
    }
    else {
        return false;
    }
}
function clearform(){
    BookmarkNameInput.value="",
    websiteURLInput.value="";
}