var contacts=[
    {
        "firstName": "eldo",
        "lastName":"kj",
        "number":"12345",
        "likes":["porotta,codding","tea"]
    },
    {
        "firstName": "eldo",
        "lastName":"kj",
        "number":"12345",
        "likes":["porotta,codding","tea"]
    },
    {
        "firstName": "eldo",
        "lastName":"kj",
        "number":"12345",
        "likes":["porotta,codding","tea"]
    },
    {
        "firstName": "eldo",
        "lastName":"kj",
        "number":"12345",
        "likes":["porotta,codding","tea"]
    },
];
function lookUpProfile(name,prop){
    for(vari=0; i<contacts.length; i++){
        if (contacts[i].firstName===name){
            return contacts[i][prop]|| "no such property";
        }
    }
    return"no such contact";
}
    var data=lookUpProfile("eldo","likes");
    console.log(data);
