### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?



Ans 1: The differences between getElementById, getElementsByClassName, and querySelector / querySelectorAll are 
 when we need to get a element which has a id we can use getElementsById. and to get the all elements which have same class we will use getElementsByClassName and the query selector is used to get a single element . querySelector and getElementById both returns Nodelist Whether the getElementsByClassName returns html collection. the queryselectorAll can be used to get all elements with specific class name or etc.

 Ans 2; To create and insert a new element into the Dom we can do this process
 first we have to call the parent container in a variable 
 const Parent = document.getElementById('parentcontainer')

 then create the new element suppose its a div 

 const newElement = document.createElement('div') 

 and we have to set the innerhtml of the newElement 

 newElement.innerHTML = 'xyz'

 then we have to push this element as a child in the parent container 

 parent.appenChild(newElement)


 Ans 3: when we do any actions to a child element it can be click , mouseover and others it do the same event on its parent container 

document.getElementById("child element").addEventListener("click", function () {
  console.log("child element clicked");
}); 

document.getElementById("parent container").addEventListener("click", function () {
  console.log("parent container clicked");
});


Ans 4: It is a Method in js where when we need to attach addeventlistener in many elements by EventDelegation we dont need to add to every individual we can attach it to a common parent element and do the same event in shortest time. 

its a time saver and the code gets more clean 

Ans 5: The difference is when we use preventDefault() it stops the browser to act the default behaviour of that browser. and the stopPropagation() stops the event from bubble ups and not go to its parent element