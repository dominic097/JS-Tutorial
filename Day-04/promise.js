/**
 * Created by Dominic on 2/23/2017.
 */

function makeAjaxCall(url, methodType){
    var promiseObj = new Promise(function(resolve, reject){
        
        var xhr = new XMLHttpRequest();

        /** The XMLHttpRequest.open() method initializes a request. 
         *  This method is to be used from JavaScript code; to initialize a request from native code
         *  xhrReq.open(method, url, async,  user, password);
         */
        xhr.open(methodType, url, true);

        /**
         * The XMLHttpRequest.send() method sends the request.
         * If the requet is asynchronous (which is the default), this method returns as soon as the request is sent.
         * If the request is synchronous, this method doesn't return until the response has arrived.s
         */
        xhr.send();

        /**
         * An EventHandler that is called whenever the readyState attribute changes.
         * 0   UNSENT  Client has been created. open() not called yet.
         * 1   OPENED  open() has been called.
         * 2   HEADERS_RECEIVED    send() has been called, and headers and status are available.
         * 3   LOADING Downloading; responseText holds partial data.
         * 4   DONE    The operation is complete. ****
        */
        xhr.onreadystatechange = function(){
            if (xhr.readyState === 4){
                if (xhr.status === 200){
                    console.log("xhr done successfully");
                    var resp = xhr.responseText;
                    var respJson = JSON.parse(resp);
                    // A Promise resolve method
                    resolve(respJson);
                } else {
                    // A Promise reject method
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