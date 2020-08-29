module.exports.home = function(req, res){
    res.render('home',{
        title:'Home'
    })
    return res.end('<h1>Express is up for quiz !</h1>')
}

// module.exports.actionName = function(req, res){}