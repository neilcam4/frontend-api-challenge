(function(exports){
    function getMyPeep(){
        var num = document.getElementById("number").value
        console.log(num)
            fetch("https://chitter-backend-api.herokuapp.com/peeps")
            .then(function(result){
                return result.json()
            })
            .then(function(data){
                let output = '';
                const peep = data;
                console.log(data) 
                output+=`<div class="alert alert-info" role="alert">${peep[num].body}</div>`;
                document.querySelector('#onePeep').innerHTML = output;
                })
            .catch(function errorCall(e){
                console.log("error" , e)}
                ) 
            }
    exports.getMyPeep = getMyPeep;
})(this)