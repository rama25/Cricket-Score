var Crawler = require("crawler");
var clc = require("cli-color");

var c = new Crawler({
    maxConnections : 10,

    callback : function (error, res, done) {
        if(error){
            console.log(error);
        }else{
            var $ = res.$;
            var matchHeader = $(".cb-lv-main").first().children(".cb-lv-scr-mtch-hdr").text();
            var startTime = $(".cb-lv-main").first().find(".cb-schdl").children().text();
            var scoreCard = $(".cb-lv-main").first().find(".cb-scr-wll-chvrn").children().first().text();
            var scoreCard = scoreCard.split("  •  ")
            var liveCommentary = $(".cb-lv-main").first().find(".cb-scr-wll-chvrn").children(".cb-text-live").text();
            var matchDecision = $(".cb-lv-main").first().find(".cb-scr-wll-chvrn").children(".cb-text-complete").text();
            console.log("\n");
            console.log("     CRICKET UPDATE ");
            console.log(clc.redBright(matchHeader));
            console.log("--------------------------");
            if(!scoreCard[0] & !scoreCard[1]){
                console.log(" Match not Started Yet !! ");
            }
            else{
                console.log(clc.cyanBright(scoreCard[0]));
                console.log(clc.cyanBright(scoreCard[1]));
            }

            if(liveCommentary){
                console.log(liveCommentary);
            }
            if(matchDecision){
                console.log("🎉 " +clc.greenBright(matchDecision)+" 🎉");
            }
            console.log("--------------------------");
            console.log("\n");
        }
        done();
    }
});

c.queue('https://www.cricbuzz.com/cricket-match/live-scores');

module.exports = {c};