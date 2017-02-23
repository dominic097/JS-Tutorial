/**
 * Created by Dominic on 2/23/2017.
 */

function makeAjaxCall(url, methodType){
    var promiseObj = new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();
        xhr.open(methodType, url, true);
        xhr.send();
        xhr.onreadystatechange = function(){
            if (xhr.readyState === 4){
                if (xhr.status === 200){
                    console.log("xhr done successfully");
                    var resp = xhr.responseText;
                    var respJson = JSON.parse(resp);
                    resolve(respJson);
                } else {
                    reject(xhr.status);
                    console.log("xhr failed");
                }
            } else {
                console.log("xhr processing going on");
            }
        }
        console.log("request sent successfully");
    });

    return promiseObj;
}

document.getElementById("userDetails").addEventListener("click", function(){
    // git hub url to get btford details
    var userId = document.getElementById("userId").value;
    var URL = "https://api.github.com/users/"+userId;
    makeAjaxCall(URL, "GET").then(processUserDetailsResponse, errorHandler);
});

document.getElementById("repoList").addEventListener("click", function(){
    // git hub url to get btford details
    var userId = document.getElementById("userId").value;
    var URL = "https://api.github.com/users/"+userId+"/repos";
    makeAjaxCall(URL, "GET").then(processRepoListResponse, errorHandler);
});

function processUserDetailsResponse(userData){
    var domInfo = document.getElementsByClassName('_info');
    domInfo[0].innerHTML  = JSON.stringify(userData, null, '\t');
    console.log("render user details", userData);
}

function processRepoListResponse(repoList){
    var domInfo = document.getElementsByClassName('_info');
    domInfo[0].innerHTML  = JSON.stringify(userData, null, '\t');
    console.log("render repo list", repoList);
}

function errorHandler(statusCode){
    var domInfo = document.getElementsByClassName('_info');
    domInfo[0].innerHTML  = "failed with status" + JSON.stringify(status, null, '\t');
    console.log("failed with status", status);
}