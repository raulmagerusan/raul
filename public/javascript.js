// // const products =  [
// //     {
// //       "id": 37,
// //       "title": "ank Tops for Womens/Girls",
// //       "price": 50,
// //       "quantity": 2,
// //       "total": 100,
// //       "discountPercentage": 12.05,
// //       "discountedPrice": 88
// //     },
// //     {
// //       "id": 80,
// //       "title": "Chain Pin Tassel Earrings",
// //       "price": 45,
// //       "quantity": 3,
// //       "total": 135,
// //       "discountPercentage": 17.75,
// //       "discountedPrice": 111
// //     },
// //     {
// //       "id": 68,
// //       "title": "Stylish Luxury Digital Watch",
// //       "price": 57,
// //       "quantity": 3,
// //       "total": 171,
// //       "discountPercentage": 9.03,
// //       "discountedPrice": 156
// //     },
// //     {
// //       "id": 81,
// //       "title": "Round Silver Frame Sun Glasses",
// //       "price": 19,
// //       "quantity": 1,
// //       "total": 19,
// //       "discountPercentage": 10.1,
// //       "discountedPrice": 17
// //     },
// //     {
// //       "id": 90,
// //       "title": "Cycle Bike Glow",
// //       "price": 35,
// //       "quantity": 1,
// //       "total": 35,
// //       "discountPercentage": 11.08,
// //       "discountedPrice": 31
// //     }
// //   ];

  

// //   const sum = products.reduce((accumulatorProduct, totalProduct) => {
// //   return accumulatorProduct + totalProduct.total;
// // }, 0);

// // console.log('Total price:', sum);

// // const totalQuantity = products.reduce((accumulatorProductQuantity, totalProductQuantity) => {
// //   return accumulatorProductQuantity + totalProductQuantity.quantity;
// // }, 0);
// // console.log('Total quantity:', totalQuantity);

// const orders =[
//     {
//       "id": 1,
//       "products": [
//         {
//           "id": 59,
//           "title": "Spring and summershoes",
//           "price": 20,
//           "quantity": 3,
//           "total": 60,
//           "discountPercentage": 8.71,
//           "discountedPrice": 55
//         },
//         {
//           "id": 88,
//           "title": "TC Reusable Silicone Magic Washing Gloves",
//           "price": 29,
//           "quantity": 2,
//           "total": 58,
//           "discountPercentage": 3.19,
//           "discountedPrice": 56
//         },
//         {
//           "id": 18,
//           "title": "Oil Free Moisturizer 100ml",
//           "price": 40,
//           "quantity": 2,
//           "total": 80,
//           "discountPercentage": 13.1,
//           "discountedPrice": 70
//         },
//         {
//           "id": 95,
//           "title": "Wholesale cargo lashing Belt",
//           "price": 930,
//           "quantity": 1,
//           "total": 930,
//           "discountPercentage": 17.67,
//           "discountedPrice": 766
//         },
//         {
//           "id": 39,
//           "title": "Women Sweaters Wool",
//           "price": 600,
//           "quantity": 2,
//           "total": 1200,
//           "discountPercentage": 17.2,
//           "discountedPrice": 994
//         }
//       ],
//       "total": 2328,
//       "discountedTotal": 1941,
//       "userId": 97,
//       "totalProducts": 5,
//       "totalQuantity": 10
//     },
//     {
//       "id": 2,
//       "products": [
//         {
//           "id": 96,
//           "title": "lighting ceiling kitchen",
//           "price": 30,
//           "quantity": 2,
//           "total": 60,
//           "discountPercentage": 14.89,
//           "discountedPrice": 51
//         },
//         {
//           "id": 91,
//           "title": "Black Motorbike",
//           "price": 569,
//           "quantity": 3,
//           "total": 1707,
//           "discountPercentage": 13.63,
//           "discountedPrice": 1474
//         },
//         {
//           "id": 9,
//           "title": "Infinix INBOOK",
//           "price": 1099,
//           "quantity": 1,
//           "total": 1099,
//           "discountPercentage": 11.83,
//           "discountedPrice": 969
//         },
//         {
//           "id": 16,
//           "title": "Hyaluronic Acid Serum",
//           "price": 19,
//           "quantity": 1,
//           "total": 19,
//           "discountPercentage": 13.31,
//           "discountedPrice": 16
//         },
//         {
//           "id": 54,
//           "title": "Pubg Printed Graphic T-Shirt",
//           "price": 46,
//           "quantity": 3,
//           "total": 138,
//           "discountPercentage": 16.44,
//           "discountedPrice": 115
//         }
//       ],
//       "total": 3023,
//       "discountedTotal": 2625,
//       "userId": 30,
//       "totalProducts": 5,
//       "totalQuantity": 10
//     },
//     {
//       "id": 3,
//       "products": [
//         {
//           "id": 37,
//           "title": "ank Tops for Womens/Girls",
//           "price": 50,
//           "quantity": 2,
//           "total": 100,
//           "discountPercentage": 12.05,
//           "discountedPrice": 88
//         },
//         {
//           "id": 80,
//           "title": "Chain Pin Tassel Earrings",
//           "price": 45,
//           "quantity": 3,
//           "total": 135,
//           "discountPercentage": 17.75,
//           "discountedPrice": 111
//         },
//         {
//           "id": 68,
//           "title": "Stylish Luxury Digital Watch",
//           "price": 57,
//           "quantity": 3,
//           "total": 171,
//           "discountPercentage": 9.03,
//           "discountedPrice": 156
//         },
//         {
//           "id": 81,
//           "title": "Round Silver Frame Sun Glasses",
//           "price": 19,
//           "quantity": 1,
//           "total": 19,
//           "discountPercentage": 10.1,
//           "discountedPrice": 17
//         },
//         {
//           "id": 90,
//           "title": "Cycle Bike Glow",
//           "price": 35,
//           "quantity": 1,
//           "total": 35,
//           "discountPercentage": 11.08,
//           "discountedPrice": 31
//         }
//       ],
//       "total": 460,
//       "discountedTotal": 403,
//       "userId": 63,
//       "totalProducts": 5,
//       "totalQuantity": 10
//     }
// ]
// const posts = [
//   {
//     "userId": 1,
//     "id": 1,
//     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//   },
//   {
//     "userId": 1,
//     "id": 2,
//     "title": "qui est esse",
//     "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
//   },
//   {
//     "userId": 1,
//     "id": 3,
//     "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
//     "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
//   },
//   {
//     "userId": 1,
//     "id": 4,
//     "title": "eum et est occaecati",
//     "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
//   },
//   {
//     "userId": 1,
//     "id": 5,
//     "title": "nesciunt quas odio",
//     "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
//   },
// ]

// const comments = [
//   {
//     "postId": 1,
//     "id": 1,
//     "name": "id labore ex et quam laborum",
//     "email": "Eliseo@gardner.biz",
//     "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
//   },
//   {
//     "postId": 1,
//     "id": 2,
//     "name": "quo vero reiciendis velit similique earum",
//     "email": "Jayne_Kuhic@sydney.com",
//     "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
//   },
//   {
//     "postId": 2,
//     "id": 3,
//     "name": "odio adipisci rerum aut animi",
//     "email": "Nikita@garfield.biz",
//     "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
//   },
//   {
//     "postId": 5,
//     "id": 4,
//     "name": "alias odio sit",
//     "email": "Lew@alysha.tv",
//     "body": "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
//   },
//   {
//     "postId": 3,
//     "id": 5,
//     "name": "vero eaque aliquid doloribus et culpa",
//     "email": "Hayden@althea.biz",
//     "body": "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et"
//   },
// ]

// function myFunction() {

// const postComments = posts.map(post => {
//   const commentsArray = comments.filter(comment => {
//     return comment.postId === post.Id})
//   return {
//     ...post,
//     comments: commentsArray,
//   }
// });

// const removeElement = postComments.map(postComment => {
//   const filterComments = postComment.comments.filter(comment => comment.id !== 2);
//   return {
//     ...postComment,
//     comments: filterComments,
//   }
// })

// const changeEmail = postComments.map(post => {
//   console.log('post', post)
//   const changeComment = post.comments.map(comment => {
//     if(comment.id === 4) {
//       return {
//         ...comment,
//         email: 'test email change'
//       }
//     }else if(comment.id === 3) {
//     return {
//       ...comment
//       name: 'test comment change'
//     }
//   }
// })
//   return {
//     ...post,
//     comments: changeComment,
//   }
// })

// console.log('postComments'postComments, 'remove',removeElement, changeEmail)
// }
// myFunction();

// function myFunction() {

//   const user = {
//     name: 'Raul',
//     email: 'raul@marketescu.ro',
//     address: {
//       street: 'test test',
//       city: 'city'
//     }
//   }
// const user1 = {
//   ...user
// }
//   console.log('user', user, 'user1', user1)
// }
// myFunction();


//     console.log(orders)


// const newOrders = orders.map((order, index) => {
//     console.log(odrer, index)
// })
// console.log(newOrders)
// }

// myFunction();
//.............................................................
// const x = ['a', 't','s']

// console.log(x);

// const reversedX = x.reverse();

// console.log(reversedX);
//.....................................................
// const x =[1, 2, 3, 1, 2];

// function removeDuplicates(x) {
//   return x.filter((item,
//       index) => x.indexOf(item) === index);
// }

// console.log(removeDuplicates(x));
//.......................................................

// const minMax = [28, 39, 44, 26, 11]

// console.log('max', Math.max(...minMax));
// console.log('min', Math.min(...minMax));

//.....................................

// const users = ["Adi", "Andrei", "Maria", "Ioana"]

// console.log(users);

// let names = [ 'Adi', 'Ioana' ];
 
// let newUsers = users.filter(item => names.indexOf(item) === -1);
// console.log(newUsers);
//..................................................................
// let newName = ['Vlad']

// let usersConcat = newUsers.concat(newName);
// console.log(usersConcat);

// // pass a function to map
// let map1 = usersConcat.map(data => data);

// console.log(...map1)

// console.log(map1.slice(0));

// console.log(map1);
// const findIndexMap1 = (element) => element === 'Maria';

// const findexMaria = map1.findIndex(findIndexMap1);
// map1.splice(findexMaria, 1, 'Teodora');
// console.log(map1);
//......................................................
// let programming = {
//     languages: ["JavaScript", "Python", "Ruby"],
//     isChallenging: true,
//     isRewarding: true,
//     difficulty: 8,  
// };
//...............................................................
// programming.languages.push("Java");
// console.log(programming);
//..........................................
// delete programming.difficulty;

// console.log(programming)
//.........................................................
// programming.isChallenging = false;
// console.log(programming);
//.........................................................

// showNumbers(10);

// function showNumbers(limit) {
//     for (let i = 0; i<=limit; i++){
//         if ( i % 2 === 0) console.log(i, 'par');
//         else console.log(i, 'impar');
//     }
//...............................................................
// validNumber(10);

// function validNumber(numberA) {
//     if (numberA = validNumber) console.log('valid');
//     else console.log('nu este numar valid');
// }
//...............................................................


// function numbers(a,b) {
//     if (a > b) {console.log('number1>number2')
// }
//     else if (a < b) {console.log('number1<number2')
// }
//     else console.log('numerele sunt egale')
// }
// numbers(5,10);
//..................................................................

// function triangle(a,b,c){
//     if (a===b && b!==c && a!==c) {console.log('triungi echilateral')}
//     else if (a===b && b===c && c===a) {console.log('triungi isoscel')}
//     else if (a!==b && b!==c && a!==c) {console.log('triungi normal cu toate laturile diferite')}
//     return NaN;
// }
// triangle(1,2,3)
//...................................................................................................
// function adunare(a,b){
// let sum = a+b;
// console.log(sum);
// }
// adunare(2, 5);
//................................................................................................

// function adunare (a, b){
//     let sum =a+b;
//     return sum;
//     }
    
//     console.log(adunare(2,5));
//................................................................................................

// const newArray = orders.map(order => {
//     if(order.id === 3) {
//         const newProducts = order.products.map(product => {
//             if(product.id === 90) {
//                 return {
//                     ...product,
//                     price: 600,
//                     quantity: 45,
//                     total:5453
//                 }
//             }
//             return {...product}
//         })
//         return {
//             ...order,
//             products: newProducts
//         }
//     }
//     return {...order}
// })

// console.log(newArray)
// function functionDom() {
// const elementParagraph = document.getElementById('p1');
// const elementInput = document.getElementById('textInput');
// elementParagraph.style.color = 'blue';
// const textContent = elementParagraph.textContent;

// elementParagraph.textContent = 'test new content'

// const dataInput = elementInput.value;
// //se schimba valoarea
// elementInput.value = 'New value';
// //citeste
// const valueRead = elementInput.value
// alert(valueRead)

// alert(dataInput)

// console.log('elementParagraph', elementParagraph, elementInput, textContent)
// }

const products =  [
    {
      "id": 37,
      "title": "ank Tops for Womens/Girls",
      "price": 50,
      "quantity": 2,
      "total": 100,
      "discountPercentage": 12.05,
      "discountedPrice": 88
    },
    {
      "id": 80,
      "title": "Chain Pin Tassel Earrings",
      "price": 45,
      "quantity": 3,
      "total": 135,
      "discountPercentage": 17.75,
      "discountedPrice": 111
    },
    {
      "id": 68,
      "title": "Stylish Luxury Digital Watch",
      "price": 57,
      "quantity": 3,
      "total": 171,
      "discountPercentage": 9.03,
      "discountedPrice": 156
    },
    {
      "id": 81,
      "title": "Round Silver Frame Sun Glasses",
      "price": 19,
      "quantity": 1,
      "total": 19,
      "discountPercentage": 10.1,
      "discountedPrice": 17
    },
    {
      "id": 90,
      "title": "Cycle Bike Glow",
      "price": 35,
      "quantity": 1,
      "total": 35,
      "discountPercentage": 11.08,
      "discountedPrice": 31
    }
  ];
//.....................................................................
//   const initialValue = 0;
  
// const sumWithInitial = products.reduce(
//   (previousValue, currentValue) => previousValue + currentValue.total,
//   initialValue
// );

// console.log(sumWithInitial);
//........................................................................
// const initialValue = 0;
  
// const sumWithInitial = products.reduce(
//   (previousValue, currentValue) => previousValue + currentValue.quantity,
//   initialValue
// );

// console.log(sumWithInitial);
//.......................................................................


//   function arrayInvoice(){
// const difDiscount = products.map(product => 
//     product.products = {
//        totalDiscount: (product.price*product.quantity - product.discountedPrice),
//         ...product
// } 
//     );
//     const initialValue = 0;
//     const sumDiscount = difDiscount.reduce(
//         (previousValue, currentValue) => previousValue + currentValue.totalDiscount,
//        initialValue
//      );
     
// console.log(difDiscount, sumDiscount);
//     }
//     arrayInvoice();
//...................................................................................

  //   const result = products.filter(product => {
  //     if (product.id !== 90) {
  //      return true;
  //     }
  //   else {return false}
  //   });
    
  // function arrayInvoice(){
  //   const difDiscount = result.map(product => 
  //       product.result = {
  //          totalDiscount: (product.price*product.quantity - product.discountedPrice),
  //           ...product
  //   } 
  //       );
  //       const initialValue = 0;
  //       const sumDiscount = difDiscount.reduce(
  //           (previousValue, currentValue) => previousValue + currentValue.totalDiscount,
  //          initialValue
  //        );
         
  //   console.log(difDiscount, 'total discount', sumDiscount);
  //       }
  //       arrayInvoice();
  //.................................................................................
  

//   const index = products.findIndex(object => {
//     return object.id === 80;
//   });

//   console.log(index);
// dataArray = products.map(product => console.log(product));

//   if (product.id === index) {
//       id: products.id,
//       title: products.title,
//       price: 99,
//       quantity: 100,
//       total: products.total,
//       discountPercentage: products.discountPercentage,
//       discountedPrice: discountedPrice
//   }
//   {

//   };
 
//   console.log(dataArray);
  
  

  //........................................................................................
  // const sortArray = products.sort((a, b) => a.quantity - b.quantity);
  // console.log(sortArray)
  // const sortArray = products.sort((a, b) => a.discountedPrice - b.discountedPrice);
  // console.log(sortArray)
  // const sortArray = products.sort((a, b) => a.total - b.total);
  // console.log(sortArray)