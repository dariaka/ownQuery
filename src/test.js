export default function() {
    let lis = ownQuery("li");

    // lis.html("<b>new</b> text")
    // console.log(lis.html());

    lis.on("click", function () {
        console.log( this );

        // console.log( this.text() );
        /* this won't work, because our methods are naot avaliable on native objects! 
        ownQuery methods are avaliable on ownQuery objects! */

        console.log( ownQuery(this).text() );
        /* to work with ownQuery methods we need to wrap native object with our ownQuery object. 
        To do this, we can use our ownQuery() method which looks up for the element and return an array with tis el*/
    })
}