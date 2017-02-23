
// Tracking property access by using Proxy

// sample obj in which props to be tracked 
let targetObj = {a:1, b:2, c:3},

// tracking helper service
 tracePropAccessFn = (target, props) => {  

// set of keys to be tracked <props> in targeted Object
 let propKeySet = new Set(...props);  

     return new Proxy(target, {  
         get(target, propKey, receiver) {  
             if (propKeySet.has(propKey)) {  
                 console.log('Accessing '+propKey + ' from Target Object');  
             }  
             return Reflect.get(target, propKey, receiver); // If not Reflect can use target[propKey]  
         },  
         set(target, propKey, value, receiver) {  
             if (propKeySet.has(propKey)) {  
                 console.log('Setting value for  '+propKey+' = '+value + ' in Target Object');  
             }  
             return Reflect.set(target, propKey, value, receiver);// If not Reflect can use target[propKey]

         },
     });
 },
 proxyObj = tracePropAccessFn(targetObj, Object.keys(targetObj));

 proxyObj.a // would console `GET` a & return value '1'

 proxyObj.a = 100; // would console `SET a = 100` & return '100'