// $( document ).ready(function() {
// document.querySelector('.get-jokes').addEventListener('click', getPeeps);   
// })

(function(exports){
    function getPeeps(){
    fetch("https://chitter-backend-api.herokuapp.com/peeps")
    .then(function(result){
        return result.json()
    })
    .then(function(data){
        let output = '';
        const response = data;
        console.log(data)
        response.forEach(function(peep){  
         output+=`<div class="alert alert-info" role="alert">${peep.body}</div>`;
        });
            document.querySelector('#peeps').innerHTML = output;
        })
    .catch( function errorCall(){
        console.log("error")}
        )     
    }
exports.getPeeps = getPeeps;
})(this)



// (function(exports){ 
//     function getPeeps(){
//         const xhr = new XMLHttpRequest();
//         xhr.open('GET',"https://chitter-backend-api.herokuapp.com/peeps", true );
    
//         xhr.onload = function(){
//             let output = '';
//             if(this.status ===200){
//                 const response = JSON.parse(this.responseText);
//                 console.log(response)
                
//                 response.forEach(function(peep){  
//                     output+=`<div class="alert alert-info" role="alert">${peep.body}</div>`;
//                });
//               }  else {
//                    output +="<li>Something went wrong</li>"
//                }
//                document.querySelector('#peeps').innerHTML = output;
//             }
//         xhr.send()
//     } 
//     exports.getPeeps = getPeeps;
// })(this) 
  





