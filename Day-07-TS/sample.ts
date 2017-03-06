interface empInterface {
    fName: string,
    lName: (x:string) => String
}

var empObj: empInterface = {
    fName: "Jhone",
    lName: function (x:string) {
        return x;
    }
}