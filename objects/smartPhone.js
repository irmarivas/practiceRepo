function Smartphone(texts, apps, phoneCalls, photos)
{
    this.texts = texts;
    this.apps = apps;
    this.phoneCalls = phoneCalls;
    this.photos = photos;
    
    this.sendTextMessage = function( targetPhone, message )
    {
        targetPhone.texts.push(message);
        console.log(`your message has been sent`);
    };

    this.installApps = function( targetPhone, app )
    {
        targetPhone.apps.push(app);
        console.log(`installation complete`);
    }
}


// console.log(iphone.texts);
// console.log(iphone.apps);
// console.log(iphone.phoneCalls);
// console.log(iphone.photos);


const iphone = new Smartphone( [], [], 0, [] );
const samsung = new Smartphone( [], [], 0, [] );


iphone.sendTextMessage(samsung, `hello`);
iphone.installApps(iphone, `instagram`);
console.log(samsung.texts);
samsung.sendTextMessage(iphone, `what up sis`);
samsung.installApps(samsung, `youtube`);
console.log(iphone.texts);
console.log(iphone.apps);
console.log(samsung.apps);



















function Plant(color, isNew, age)
{
    this.color = color;
    this.new = isNew;
    this.age = age;
}

const bamboo = 
{
    color: `green`,
    new: true,
    age: 2
};

function Furniture(color, isNew, age)
{
    this.color = color;
    this.isNew = isNew;
    this.age = age;
}

const bed =
{
    color: `white`,
    new: false,
    age: 3
};

function Fridge(size, full, doors)
{
    this.size = size;
    this.full = full;
    this.doors = doors;
}

const fridge =
{
    size: `large`,
    full: false,
    doors: 2
};

function Luigi(gender, pretty, fingers)
{
    this.gender = gender;
    this.pretty = pretty;
    this.fingers = fingers;
}

const luigi =
{
    gender: `male`,
    pretty: true,
    fingers: 10
};

function Stove(brand, durable, warranty)
{
    this.brand = brand;
    this.durable = durable;
    this.warranty = warranty;
}

const stove =
{
    brand: `apartment`,
    durable: true,
    warranty: 1
};

function Food(milk, available, expires)
{
    this.milk = milk;
    this.available = available;
    this.expires = expires;
}

const food =
{
    milk: `whole`,
    available: true,
    expires: 2
};

function Table(legs, color, itsNew)
{
    this.legs = legs;
    this.color = color;
    this.itsNew = itsNew;
}

const table = 
{
    legs: 4,
    color: `wood`,
    new: false
};

function Clothes(trendy, brand, year)
{
    this.trendy = trendy;
    this.brand = brand;
    this.year = year;
}

const clothes =
{
    trendy: false,
    brand: `kate spade`,
    year: 2018
};

function Sink(hot, color, sinks)
{
    this.hot = hot;
    this.color = color;
    this.sinks = sinks;
}

const sink =
{
    hot: false,
    color: `silver`,
    sinks: 1
};

function Glasses(pairs, brand, itsNew)
{
    this.pairs = pairs;
    this.brand = brand;
    this.itsNew = itsNew;
}

const glasses =
{
    pairs: 2,
    brand: `juicy couture`,
    new: false
};

