describe('Create Peep List', function(){
    it('should create an empty list', function(){
        peeplist = new PeepList()
    expect(peeplist.list).toEqual([])
    })
})

describe('Get a peep from the API', function(){
    it('should return a peep and push it into the list', function(){
        peeplist= new PeepList()
        var peep = peeplist.getPeep()
        expect(peeplist[0]).toEqual(peep)
    })
})

describe('Get peep from API', function(){
    it('should get peep and insert into DOM', function(){
        peeplist = new PeepList()
        console.log(this.list)
        var peep = peeplist.getPeep()
        this.list.push(peep)
        expect(this.list.length).toEqual(1)
    }
    )
})