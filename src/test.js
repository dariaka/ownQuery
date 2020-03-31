export default function() {
    let lis = ownQuery("li");

    // CONTENT
    // lis.html("<b>new</b> text")
    // console.log(lis.html());

    // ATTRIBUTES
    lis.addClass("red").css({"text-decoration":"underline", "cursor":"pointer"});

    // EVENTS
    lis.on("click", function() {
        console.log(this);

        // console.log( this.text() );
        /* 
        this won't work, because our methods are naot avaliable on native objects! 
        ownQuery methods are avaliable on ownQuery objects! 
        */

        console.log(ownQuery(this).text());
        /* 
        to work with ownQuery methods we need to wrap native object with our ownQuery object. 
        To do this, we can use our ownQuery() method which looks up for the element and return an array with tis el
        */
    })

    // AJAX
    // ownQuery("button").on("click", function() {

    //     ownQuery.get("https://jsonplaceholder.typicode.com/users")
    //         .then(data => ownQuery("pre").text(data))
    //         .catch(err => ownQuery("pre").text(err.mesage));

    // })

    ownQuery("button").on("click", function() {

        ownQuery.post("https://jsonplaceholder.typicode.com/users", {
            firstName: "Jan",
            lastName: "Kowalski"
        })
            .then(data => ownQuery("pre").text(data))
            .catch(err => ownQuery("pre").text(err.mesage));

    })

}