
'use strict'
const expect = require("chai").expect;
const music = require("../data");

describe("Music", function() {
    
    it("returns requested music", function() {
        let result = music.get("energy");
        expect(result).to.deep.equal({title: "energy", artist:"Drake", type:"rap", year:2015});
    });

    it("fails to return the original music", function() {
        let result = music.get("fake");
        expect(result).to.be.undefined;
    });

    it("adds a new music", function() {
        let result = music.add({title: "with you", artist:"Mariah Carry", type:"R & B", year:2018});
        expect(result.added).to.be.true;
    });
    it("fails to add an existing music", function() {
        let result = music.add({title: "with you", artist:"mariah Carry", type:"R & B", year:2018});
        expect(result.added).to.be.false;
    });

    it("deletes an existing music", function() {
        let result = music.delete("with you");
        expect(result.deleted).to.be.true;
    });
    it("fails to delete an invalid music", function() {
        let result = music.delete("With you");
        expect(result.deleted).to.be.false;
    });
});