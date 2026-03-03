// APPROACH - 1
    // THIS IS ALSO A VALID WAY BUT HAVE SOME PROBLEMS (MIGHT BE)
    // document.getElementById('owl').onclick = function(){
    //     alert("Owl Clicked!")
    // }

    // APPROACH - 2
    // attachEvent() method (used in early time) (not now)

    // APPROACH - 3
    // most optimised way (use this..!)
    // document.getElementById('owl').addEventListener('click', function (e) {
    //     // alert('hello, owl clicked!')
    //     // e is event object, very imp
    //     console.log(e);
    // }, false)   // here the third parameter is false or true, default one is false, if we didn't write false no problem it is false by default, but we write this because in some case we need to use true or false.

    console.log('BMW');
    
    // what to learn in EVENTS very imp to do for real world use - 
        // type, timeStamp, defaultPrevented
        // target, toElement, srcElement, currentTarget
        // clientX, clientY, screenX, screenY
        // altkey, ctrlkey, shiftkey, keyCode
    // and many more, explore it on mdn, google, llms, e-books
    // EVENTS in imp topic to learn in JS

    // EVENT PROPOGATION 
    // it defines that how events travels thorought the DOM tree, it has 3 phases - 'Capturing (downwards)', 'Target (element itself)', 'Bubbling (upwards)'
    // Mainly 'Capturing' and 'Bubbling', mainly used 'Bubbling', but in some scenarios we have to use 'Event Capturing'

    // BY DEFAULTED EVENT PROPOGATION IS 'FALSE' so no need to write FALSE (use as per our requirements)

    document.getElementById('images').addEventListener('click', function (e) {
        console.log("clicked inside UL");
    }, false) // capturing (top to bottom approach)

    // document.getElementById('owl').addEventListener('click', function (e) {
    //     console.log("owl clicked");
    //     // but we want that our element don't need to bubble up, like i don't want that it get connect to upper connection, so we use stopPropogation()
    //     e.stopPropagation() // this will not bubble and don't go upwards!
    // }, false) // bubbling (bottom to top approach)

    // above two code block we have written same, but our target IDs are different..!


    document.getElementById('bmw').addEventListener('click', function(e){
        e.preventDefault();
        // if i want that, this should not bubble up, simple..
        e.stopPropagation();
        console.log("BMW visited");
    }, false)


    // MINI - ACTIVITY :-
    // Aim :- If i click on 'li(s)' basically on images, that should disappear.

    // SOLUTION TO THE MINI - ACTIVITY :-
    document.querySelector('#images').addEventListener('click', function(e){
        // console.log(e.target);
        // e.target will give that from what target it is coming
        // now we want to remove whole li not just image, if we do that the image will delete but that bullet point, li will be still there, so in this type of challenges we want their parentNode.
        // console.log(e.target.parentNode); // this will give target li, now we can delete while clicking on the specific image

        console.log(e.target.tagName); // this will give target li, now we can delete while clicking on the specific image // will give on click tagname, IMG, LI like that, because we only want to remove IMG no li and all

        // now we will apply some strict checks
        if(e.target.tagName === 'IMG'){
            // to remove, approach - 1
            let removeIt = e.target.parentNode
            removeIt.remove()
        }

        // to remove, approach - 2
        // will take parentNode firstly of removeIt, then will remove removeChild by giving removeIt
        // removeIt.parentNode.removeChild(removeIt)
    } )