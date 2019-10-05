$( document ).ready(function() {
    
document.querySelector('.get-jokes').addEventListener('click', getPeeps);

function getPeeps(e){
    
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.open('GET',"https://chitter-backend-api.herokuapp.com/peeps", true );

    xhr.onload = function(){
        let output = '';
        if(this.status ===200){
            const response = JSON.parse(this.responseText);
            console.log(response)
            
            response.forEach(function(peep){  
                output+=`<div class="alert alert-info" role="alert">${peep.body}</div>`;
           });
          }  else {
               output +="<li>Something went wrong</li>"
           }
           document.querySelector('#peeps').innerHTML = output;
        }
    xhr.send()


}

});



// (function(exports){
//     function PeepList(){
//         this.list =[]
//         // var array = this.list
//     }

//     PeepList.prototype.getList = function(){
//         return this.list
//     }
//     PeepList.prototype.getPeep = function(){
//            var array = []
//         $.ajax({url: "https://chitter-backend-api.herokuapp.com/peeps",  success: function(result){
//             var json = result
//             json.forEach(function(peep){  
//             array.push(peep.body)
//             });
//             return array 
//           }});
//           console.log(array);
//     }
//     PeepList.prototype.getArray = function(){
//         this.getPeep()
//     }
//     exports.PeepList = PeepList
// })(this)

