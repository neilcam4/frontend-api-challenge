
(function(exports){
    function PeepList(){
        this.list =[]
    }
    PeepList.prototype.getPeep = function(){
            $.ajax({url: "https://chitter-backend-api.herokuapp.com/peeps",  success: function(result){
              $("#peep").html(result[0].body);
              console.log(result[0].body)
            }});     
    }
    exports.PeepList = PeepList
})(this)