var posts = [
    {
        "id": 0,
        "user": {
            "id": 1,
            "username": "dtrump",
            "profileImageSmall": "../../img/mike.png"
        },
        "image": "../../img/mike.png",
        "imageThumbnail": "../../img/mike.png",
        "likes": 892,
        "caption": "Always winning #elections",
        "tags": ["elections"],
        "comments": [
            {
                "id": 0,
                "user": {
                    "id": 2,
                    "username": "POTUS"
                },
                "comment": "You're never going to make it don #losing",
                "userRefs": [],
                "tags": ["losing"]
            },
            {
                "id": 1,
                "user": {
                    "id": 3,
                    "username": "HillaryC"
                },
                "comment": "Damn right @POTUS",
                "userRefs": ["POTUS"],
                "tags": []
            }
        ]
    },
    {
        "id": 1,
        "user": {
            "id": 2,
            "username": "HillaryC",
            "profileImageSmall":"../../img/mike.png"
        },
        "image": "../../img/mike.png",
        "imageThumbnail": "../../img/mike.png",
        "likes": 1100,
        "caption": "Loser #elections",
        "tags": ["elections"],
        "comments": [

        ]
    }
]

exports.getPosts = function(){
    return posts;
}
