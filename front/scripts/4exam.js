var x = 'outer scope';
(function() {
    console.log(x);
    var x = 'inner scope';
})();