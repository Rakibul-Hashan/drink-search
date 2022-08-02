/* ১. একটা অবজেক্ট ডিক্লেয়ার করো। সেই অবজেক্ট এর মিনিমাম পাঁচটা প্রপার্টি থাকবে। তারপর একটা প্রপার্টি এর মান হবে অন্য আরেকটা অবজেক্ট , আরেকটা প্রপার্টি এর মান হবে একটা array । একটা প্রপার্টি এর মান হবে একটা ফাংশন(মেথড) । এই মেথড কে কল করলে সে মেথড এর ভিতর থেকে অবজেক্ট এর যেকোন একটা প্রপার্টি রিটার্ন করবে। আর বাকি দুইটা তোমার ইচ্ছা মতো।  */

const shopReport = {
    shop_name: 'Meena Bazar',
    item: {
        bestFood: 'Biscuit',
        bestFish: 'Hilsha',
        bestVeg: 'Kodur Shak'
    },
    bestSelling: ['Foods', 'Meats', 'Beverage'],
    membershipOffer: function (expense) {
        if (expense > 500) {
            return (`Your expense is: ${expense}`, `You're elegible for the membership offer!!`)

        }

    }
}

// console.log(shopReport.membershipOffer(511))

/* ৩.১. শূন্য প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে যেটা ৮৯ রিটার্ন করবে।  */
const zeroParam = () => {
    return 89;
}
// console.log(zeroParam())

/* ৩.২. এক প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করবে। এই ফাংশনের কাজ হবে যে প্যারামিটার নিবে সেটাকে ৭ দিয়ে ভাগ করে ভাগফল রিটার্ন করবে।  */

const vagKoro = (x) => {
    return x / 7;
}
// console.log(vagKoro(7))

/* ৩.৩ দুই, প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। এই ফাংশনের কাজ হবে যে দুইটা প্যারামিটার ইনপুট নিবে। সেই দুইটা প্যারামিটারকে যোগ করে যোগফলকে দুই দিয়ে ভাগ করে ভাগফল রিটার্ণ করে দাও।  */
// Parbo 

/* ৩.৪ একাধিক লাইন ওয়ালা অ্যারো ফাংশন লিখো। সেটাতে দুইটা প্যারামিটার নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ৭ যোগ করবে তারপর যোগফল দুইটাকে আবার যোগ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো।  */
// parbo


/* ৪. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৭ দিয়ে ভাগ করে ভাগফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে।  */
// const mapDitehobe = onekGuloNumber.map( x => x/7);
const onekGuloNumber = [7, 14, 21, 28, 35, 42];
// const forEach = onekGuloNumber.forEach(x => console.log(x / 7))


/* ৬. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর সেকেন্ড পজিশন এর উপাদান কে destructuring করে 'balance' নামক একটা ভেরিয়েবল এ রাখবে।
 */

const item = {
    bestFood: 'Biscuit',
    bestFish: 'Hilsha',
    bestVeg: 'Kodur Shak'
}
const { bestFood, bestFish, bestVeg } = item;
const newArray = ['Murgir chap', 'Biriyani', 'Tehari', 'Mountain Dew', 'Borhani'];
const [first, balance, tupi] = newArray;
// console.log(balance)

/* ৭. একদম প্রাথমিক স্টেপ হিসেবে jsonplaceholder এর ওয়েবসাইট থেকে ডাটা fetch করে সেটাকে কনসোল এ দেখাতে হবে। ধরো তুমি তাদের ওয়েবসাইট এ photos এর API এর লিংক কোনটা সেটা জাভাস্ক্রিপ্ট দিয়ে কোড করে সেই ডাটা কনসোল এ দেখতে পারতেছো কিনা। তারপর কয়েকটা কার্ড বানাবে (হতে পারে বুটস্ট্রাপ এর কার্ড) সেগুলা আবার তুমি html দিয়ে ওয়েবসাইট এ ছবি এবং ছবির নিচে ছবির টাইটেল দেখাবে */
function loadData() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => displayPhotos2(data))

}

// ############### method 1 ####################
/* function displayPhotos(photos) {
    for (const photo of photos) {
        const { albumId, id, thumbnailUrl, title, url } = photo;
        console.log(`
        <h1>${title}</h1>
        <p>${id}</p>
        <a href="${url}"></a>
        `);
        
    }
} */
//  > > > > > > > > >  method 1 <  < <  < < < < < 
//  > > > > > > > > >  forEach method  <  < <  < < < < < 
function displayPhotos2(photos){
    photos.forEach(photo => {
        const { albumId, id, thumbnailUrl, title, url } = photo;
        console.log(photo)
        // getting element
        const wrapper = document.getElementById('photos-wrapper');
        // create div 
        const div = document.createElement('div');
    div.classList.add('col');
        div.innerHTML = `
            <div class="col">
                <div class="card h-100">
                    <img src="${thumbnailUrl}" class="card-img-top" alt="${title}">
                    <div class="card-body">
                        <h5 class="card-title">${title}</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.</p>
                    </div>
                </div>
            </div>
        `
        wrapper.appendChild(div);

    });
}
//  > > > > > > > > >  forEach method  <  < <  < < < < < 
//  > > > > > > > > >  object destructuring method  <  < <  < < < < < 
// function displayPhotos2(photos) {
//     photos.forEach(photo => {
//         for(const sPhoto in photo){
//             console.log(typeof sPhoto)
//         }
//     });
// }
// but this method does not work properly for returing string type data 
//  > > > > > > > > >  object destructuring method  <  < <  < < < < < 
loadData()

/* ৮. প্রত্যেকটা ফটোতে ক্লিক করলে উপরে আরেকটা div থাকবে। ক্লিক করার পর ডাইনামিকভাবে ওই ফটো এর ডাটা লোড করবে। সেটা করার জন্য আগের ডাটা লোড করার API এর লিংক এর পরে photos এর পরে ডাইনামিকভাবে ${id} বসিয়ে দিবে। এরপর ডিটেইল অংশে photo এর url দিয়ে মেইন ইমেজ এবং thumbnail ইমেজ দুইটাই দেখাবে। সাথে সাথে title প্রপার্টিও দেখাবে।  */