export default function sort(a) {
    a.sort( function( a, b ) {
        var textA = a.name.toUpperCase();
        var textB = b.name.toUpperCase();
        return textA.localeCompare(textB);
    });
    return a;
}