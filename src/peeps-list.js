
(function(exports){
    function PeepList(){
        this.list =[]
    }
    PeepList.prototype.getpeep = function(){
        $.ajax({
            url: "https://chitter-backend-api.herokuapp.com/peeps",
            success: function(result){
                $("#div1").html(result)
            },      
          });
    }
    exports.PeepList = PeepList
})(this)