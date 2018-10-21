function Smartphone(texts, apps, phoneCalls, photos)
{
    this.texts = texts;
    this.apps = apps;
    this.phoneCalls = phoneCalls;
    this.photos = photos;
    this.text = function()
    {
        console.log(`hello`);
    };
}

const iphone = new Smartphone([`hello`, `what up`, `sup`], [`siri`, `google`,`twitter`], 3, ["pepper.jpg","mom.png","birthday.jpg"]);
console.log( iphone.text() );