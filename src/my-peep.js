
(function(exports){
    function getMyPeep(){
        var num = document.getElementById("number").value
        console.log(num)
            fetch("https://chitter-backend-api.herokuapp.com/peeps/" + num)
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
                    document.querySelector('#onePeep').innerHTML = output;
                })
            .catch( function errorCall(e){
                console.log("error" , e)}
                )     
            }
    exports.getMyPeep = getMyPeep;
})(this)