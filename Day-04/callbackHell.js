
//callback hell
getData(function(x){
    getMoreData(x, function(y){
        getMoreData(y, function(z){ 
            ...
        });
    });
});



//--------------------------------------------------------------------//

a({
    parameter : someParameter,
    callback : function(status) {
        if (status == states.SUCCESS) {
          b(function(status) {
              if (status == states.SUCCESS) {
                 c(function(status){
                     if (status == states.SUCCESS) {
                     	// ........
                     }
                 });
              }
          });
        } elseif (status == states.PENDING {
          ...
        }
    }
});


//---------------------------------------------------------------------//

function copyFile (source, dest, callback) {
  fs.exists(source, function (exists) {
    if (!exists) return callback('Source does not exist')
    fs.exists(dest, function (exists) {
      if (exists) return callback('Dest already exists')
      fs.readFile(source, function (err, data) {
        if (err) return callback(err)
        fs.writeFile(dest, data, function (err) {
          return callback(err)
        })
      })
    })
  })
}

