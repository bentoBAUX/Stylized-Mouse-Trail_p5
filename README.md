# Stylized-Mouse-Trail_p5
I found this mini-exercise on Processing’s website. Here is what I have learnt after spending a bit of time studying their unique approach to achieve this effect.

### 1. Declaring Variables

Suppose we would like to create a trail of 60 circles that shrinks over time. Here are the variables we would need:

```javascript
var num = 60; // Array size
var mx = []; // Array to store x-coordinates of mouse cursor on your browser window.
var my = []; // Array to store y-coordinates of mouse cursor on your browser window.
```

### 2. Getting Mouse Position

We need to figure out a way to constantly update the array of coordinates. Here’s a way to do it:

```javascript
var array_pos = (frameCount) % num; // The modulo (%) operator gives array_pos a value of 0-59. 
mx[array_pos] = mouseX;             // With the current mouse position being storing in an array at every frame,
my[array_pos] = mouseY;             // the array is filled again from the beginning once full using the % operator.
                                    // This is more efficient than using a for-loop.
```       

### 3. Trail Effect

Finally, to replay the previous positions of the mouse, we do this: 

```javascript
for (var i = 0; i < num; i++) {           // Where array_pos + 1 is the oldest and smallest circle in the array and 
  var index = (array_pos + 1 + i) % num;  // the diameter of the circle solely dependent on i, circle with index 
  ellipse(mx[index], my[index], i, i);    // array_pos + 1 is drawn with a radius of i=0. 
}                                         // Following circles are larger as i increases.
```

Check out this post for video demo: TBA


