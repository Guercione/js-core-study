
/*
DOM event propagation (delegation, bubbling and capturing)

1. EVENT BUBBLING AND CAPTURING
There are two types of propagation: Event Bubbling and Event Capturing.

 - Event Bubbling 
The propagation happens from the element triggered to elements above until window (BUTTON > DIV > BODY > HTML > DOCUMENT > WINDOW)

 - Event Capturing
The propagation happens from first element (window) to the element triggered (WINDOW > DOCUMENT > HTML > BODY > DIV > BUTTON)

2. EVENT DELEGATION
Event delegation is a technique for listening to events where you delegate a parent element as the listener for all of the events that happen inside it.

 Aditional information
 - By default, modern browsers use the Bubbling
 - To prevent the propagation use: event.stopPropagation()
 - Event Delegation is the technique, Event Bubbling is what the event itself does, and Event Capturing is a way of using event delegation on events that don’t bubble.
 
 Links: 
 - https://javascriptforwp.com/dom-event-propagation-javascript-capturing-bubbling-explained/ (code font)
 - https://medium.com/@vsvaibhav2016/event-bubbling-and-event-capturing-in-javascript-6ff38bec30e
 - https://gomakethings.com/whats-the-difference-between-javascript-event-delegation-bubbling-and-capturing/
*/


/* 1. Event Bubbling Example (HTML FILE ON DOM-event.html) */
var containers = document.getElementsByClassName( 'container' );

for (var i = 0, max = containers.length; i < max; i++) {
  containers[i].addEventListener( 'click', displayEventPhase, false ); // false = default/bubbling
}

function displayEventPhase( e ) {
  var phase = e.eventPhase;

  if ( 1 === phase ) {
    phase = 'Capturing';
  } else if ( 2 === phase ) {
    phase = 'At Target';
  } else if ( 3 === phase ) {
    phase = 'Bubbling';
  }

  // this.id = Current element from the Bubbling propagation
  // e.target.id = Element trigged

  console.log( 'Box: ' + this.id + ' - ' + phase );

  if( e.target.id === this.id ) {
    console.log( 'Box: ' + e.target.id + ' - ' + phase );
  }
}

/* 2. Event Capturing Example (HTML FILE ON DOM-event.html) */
var containers = document.getElementsByClassName( 'container' );

for (var i = 0, max = containers.length; i < max; i++) {
  containers[i].addEventListener( 'click', displayEventPhase, true  ); // true = capturing
}

function displayEventPhase( e ) {

  var phase = e.eventPhase;

  if ( 1 === phase ) {
    phase = 'Capturing';
  } else if ( 2 === phase ) {
    phase = 'At Target';
  } else if ( 3 === phase ) {
    phase = 'Bubbling';
  }

  // this.id = Current element from the Bubbling propagation
  // e.target.id = Element trigged

  console.log( 'Box: ' + this.id + ' - ' + phase );

  if( e.target.id === this.id ) {
    console.log( 'Box: ' + e.target.id + ' - ' + phase );
  }
}
