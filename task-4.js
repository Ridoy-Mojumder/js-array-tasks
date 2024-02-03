// <!-- ### 4. Checking if it's an Array

// **Instructions:**

// 1. Create different variables, each containing either an array or a non-array value.

// 2. Now use isArray to check if each variable is an array.

// 3. Print a message to the console indicating whether each variable is an array or not. -->


const variable1 =[1,2,3,4,5];
const variable2 ='ridoy';

// for variable1
if(Array.isArray(variable1))
{
    console.log('variable1 is an array')
}
else{
    console.log('variable1 is not a array')
}

// for variable2
if(Array.isArray(variable2))
{
    console.log('variable2 is an array')
}
else{
    console.log('variable2 is not a array')
}

