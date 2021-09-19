const books = [
    {
        imgSrc : '../images/halqa.png',
        title: `Kitob nomi: "Halqa"`,
        author: 'Muallif: Akrom Malik',
        pages: `Betlar soni: 537`,
        price: `Narxi: 60.000`,
        amount: 'Kitob soni:',
        raqam: '1',
        order: 'Buyurtma berish'
    },
    {
        imgSrc : '../images/dorostidagiodam.png',
        title: `Kitob nomi: "Dor ostidagi odam"`,
        author: 'Muallif: Amina Shenliko\'g\'li',
        pages: `Betlar soni: 144`,
        price: `Narxi: 20.000`,
        amount: 'Kitob soni:',
        raqam: '1',
        order: 'Buyurtma berish'
    },
    {
        imgSrc : '../images/saodatasri.png',
        title: `Kitob nomi: "Saodat asri"`,
        author: 'Muallif: Ahmad Lutfiy Qozonchi',
        pages: `Betlar soni: 966`,
        price: `Narxi: 225.000`,
        amount: 'Kitob soni:',
        raqam: '1',
        order: 'Buyurtma berish'
    },
    {
        imgSrc : '../images/olamodamdinilm.png',
        title: `Kitob nomi: "Olam odam din va ilm"`,
        author: 'Muallif: Shayx Muhammad Sodiq',
        pages: `Betlar soni: 440`,
        price: `Narxi: 44.000`,
        amount: 'Kitob soni:',
        raqam: '1',
        order: 'Buyurtma berish'
    },
    {
        imgSrc : '../images/iskanja.png',
        title: `Kitob nomi: "Iskanja"`,
        author: 'Muallif: Amina Shenliko\'g\'li',
        pages: `Betlar soni: 244`,
        price: `Narxi: 35.000`,
        amount: 'Kitob soni:',
        raqam: '1',
        order: 'Buyurtma berish'
    },
    {
        imgSrc : '../images/payg\'ambarlartarixi.png',
        title: `Kitob nomi: "Payg\'ambarlar tarixi"`,
        author: 'Muxarrir: Anvar qori Tursunov',
        pages: `Betlar soni: 443`,
        price: `Narxi: 63.000`,
        amount: 'Kitob soni:',
        raqam: '1',
        order: 'Buyurtma berish'
    },
    {
        imgSrc : '../images/hazratioisha.png',
        title: `Kitob nomi: "Hazrati Oisha (r.a)"`,
        author: 'Muallif: Abdulhamid Tahmoz',
        pages: `Betlar soni: 270`,
        price: `Narxi: 69.000`,
        amount: 'Kitob soni:',
        raqam: '1',
        order: 'Buyurtma berish'
    },
    {
        imgSrc : '../images/qiyomatvaoxirat.png',
        title: `Kitob nomi: "Qiyomat va oxirat"`,
        author: 'Muallif: Abu Homid G\'azzoliy',
        pages: `Betlar soni: 189`,
        price: `Narxi: 36.000`,
        amount: 'Kitob soni:',
        raqam: '1',
        order: 'Buyurtma berish'
    }
];

books.forEach((books)=>{
    let newLi = document.createElement('li');
    let img = document.createElement('img');
    let title = document.createElement('h2');
    let author = document.createElement('h3');
    let pages = document.createElement('p');
    let price = document.createElement('p');
    let amount = document.createElement('label');
    let raqam = document.createElement('input')
    let order = document.createElement('button');



    newLi.setAttribute('class', 'box')
    img.setAttribute('src', books.imgSrc);
    title.textContent = books.title;
    author.textContent = books.author;
    pages.textContent = books.pages;
    price.textContent = books.price;
    amount.textContent = books.amount;
    raqam.setAttribute('type', 'number',);
    raqam.setAttribute('placeholder', '1')
    order.textContent = books.order;
    order.setAttribute = ('type', 'submit')




    newLi.appendChild(img);
    newLi.appendChild(title);
    newLi.appendChild(author);
    newLi.appendChild(pages);
    newLi.appendChild(price);
    amount.appendChild(raqam)
    newLi.appendChild(amount);
    newLi.appendChild(order)

    list.appendChild(newLi)
})