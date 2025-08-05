

var setCookie = function (n, val) {
       var exdays = 365;
       var d = new Date();
       d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
       var expires = "expires=" + d.toGMTString();
       document.cookie = n + "=" + val + "; " + expires;
   };
   
   var getCookie = function (n) {
       var name = n + "=";
       var ca = document.cookie.split(';');
       for (var i = 0; i < ca.length; i++) {
           var c = ca[i];
           while (c.charAt(0) == ' ') c = c.substring(1);
           if (c.indexOf(name) == 0) {
               return c.substring(name.length, c.length);
           }
       }
       return "";
   };


function Clear(){
  document.querySelector("#textinput").value = " "
  document.cookie = 'SaveData=' + 'error' + "; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  document.querySelector("#textinput").style.color = 'black';
  document.querySelector("#count").style.color = 'black';
}

function Save(){
  document.cookie = 'SaveData=' + document.querySelector("#textinput").value + "; Path=/; Expires=Thu, 01 Jan 2970 00:00:01 GMT;";
}

window.addEventListener('load', function() {
document.querySelector("#textinput").value = getCookie('SaveData')
});

var field = document.querySelector('#textinput');

field.addEventListener('keypress', function ( event ) {  
   var key = event.keyCode;
    if (key === 13) {
      alert("Due to saving issue you cannot use 'Enter'")
      event.preventDefault();
    }
});

var maxchar = 4096;
var i = document.getElementById("textinput");
var c = document.getElementById("count");
c.innerHTML = maxchar;
    
i.addEventListener("keydown",count);

function count(e){
    var len =  i.value.length;
    if (len >= maxchar){
      event.preventDefault();
       document.querySelector("#textinput").style.color = 'red';
      document.querySelector("#count").style.color = 'red';
      document.querySelector("#count").innerHTML = '0';
        alert('You have exceeded the maximum limit')
    } else{
       c.innerHTML = maxchar - len-1;   
    }
}

        let SaveFile = () => {
            // Get the data from each element on the form.
            const msg = document.querySelector("#textinput");

            // This variable stores all the data.
            let data = msg.value;
            console.log(data); //printing form data into the console
            // Convert the text to BLOB.
            const textToBLOB = new Blob([data], { type: "text/plain" });
            var filename = new Date();
            var month =new Date(); //months from 1-12
            month = month.getMonth();

            var day = new Date();
            var day = day.getUTCDate();

            var year = new Date();
            var year = year.getUTCFullYear();

            newdate = year + "/" + month + "/" + day;
            const sFileName = filename; // The file to save the data.

            let newLink = document.createElement("a");
            newLink.download = "Notepad Data Export";

            if (window.webkitURL != null) {
                newLink.href = window.webkitURL.createObjectURL(textToBLOB);
            } else {
                newLink.href = window.URL.createObjectURL(textToBLOB);
                newLink.style.display = "none";
                document.body.appendChild(newLink);
            }

            newLink.click();
        };