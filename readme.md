1. What is the difference between null and undefined?

Ans :

- **Null**: Null হলো একটি intentional বা মানসিকভাবে দেওয়া শূন্য মান
- **Undefined** : ndefined হলো ভ্যারিয়েবল ডিক্লেয়ার করা হয়েছে কিন্তু কোনো মান assign করা হয়নি .

2. What is the use of the map() function in JavaScript? How is it different from forEach()?
   Ans:

- **map()** ফাংশন ব্যবহার করা হয় array এর প্রতি element এ operation করার জন্য এবং নতুন array তৈরি করার জন্য।
  const numbers = [1, 2, 3];
  const doubled = numbers.map(n => n \* 2);
  console.log(doubled); // [2, 4, 6]

- **forEach()**:
  forEach() শুধু array এর প্রতিটি element এ operation করতে দেয়, কিন্তু কোনো নতুন array return করে না।
  const numbers = [1, 2, 3];
  numbers.forEach(n => console.log(n \* 2));

3.  What is the difference between == and ===?

- **==** (Equality Operator):
  Value check করে, type check করে না। Type mismatch থাকলে auto conversion হয়।

  **===** (Strict Equality Operator):
  Value এবং type দুইটোকেই check করে।

4.  What is the significance of async/await in fetching API data?

- async/await ব্যবহার করা হয় asynchronous operation সহজভাবে লিখতে, যাতে promise-based API calls synchronous এর মতো readable হয়।

async function JahidData(){
const res = await fetch(''https://api.example.com/data);
const data = await res.json();
consoloe.log(data)
}
JahidData()

5. Explain the concept of Scope in JavaScript (Global, Function, Block).

- **Scope** হলো কোডের সেই এলাকা যেখানে ভ্যারিয়েবল অ্যাক্সেস করা যায়।
  1.  Global Scope:স্ক্রিপ্টের যেকোনো জায়গা থেকে অ্যাক্সেস করা যায়।
      **Example** : let globalVar = 'আমি global';
      function test() {
      console.log(globalVar);
      }
      test()

  2.  Function Scope: শুধুমাত্র function এর ভিতর থেকে অ্যাক্সেস করা যায়।

  Answer: function myFunc() {
  let localVar = 'Hello local';
  console.log(localVar);
  }
  myFunc();

  3. Block Scope : শুধু block (if, for, while) এর ভিতর থেকে অ্যাক্সেস করা যায়।
   Answer : if(true){
     let blockVariable = 'I am calling you variable' ; 
     console.log(blockVariable)
   }
