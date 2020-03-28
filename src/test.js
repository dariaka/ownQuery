export default function() {
    let lis = ownQuery("li");

    lis.html("<b>new</b> text")
    console.log(lis.html());
}