

function Promo() {
    const monday = promo.monday;
    const tuesday = promo.tuesday;
    const wednesday = promo.wednesday;
    const thursday = promo.thursday;
    const friday = promo.friday;
    const saturday = promo.saturday;
    const sunday = promo.sunday;

    const daysOfWeek = {
        "Monday": monday,
        "Tuesday": tuesday,
        "Wednesday": wednesday,
        "Thursday": thursday,
        "Friday": friday,
        "Saturday": saturday,
        "Sunday": sunday
    };

    function today() {
        const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        const d = new Date();
        let day = weekday[d.getDay()];
        // console.log(day);
        return day;
    };

    const dayOfWeek = today();
    const day = daysOfWeek[dayOfWeek];
    var arrayDay = [];

    async function populate(day) {

        const maindiv = document.getElementById('promo-element');
        day = await today();
        arrayDay = await makeArray(day);

        arrayDay.forEach(element => {
            let key = element[0];
            let value = element[1];

            let newDiv = document.createElement('div');
            newDiv.className = 'promo';
            newDiv.id = `promo-id-${key}`;
            
            if (newDiv.id.includes('item')) {
                
                function checkOdd(){
                    var id = newDiv.id;
                    var num = id.match(/(\d+)/g);
                    var isOdd = num & 1;
                    var isEven= !(num & 1); 
                
                    if(isOdd) {
                        newDiv.className = 'promo-item-1';
                    }
                    if(isEven) {
                        newDiv.className = 'promo-item-2';
                    }
                }
                checkOdd(newDiv);
            }

            let content = document.createTextNode(value);
            newDiv.appendChild(content);
            console.log(newDiv);
            maindiv.appendChild(newDiv);  
        });

        let addDay = document.getElementById('promo-id-date');
        addDay.innerHTML = `${dayOfWeek} - ${arrayDay[0][1]}`;
        // addDay.insertAdjacentHTML('beforebegin',`${dayOfWeek} -`)
        // dayDiv.insertAdjacentHTML(dayOfWeek, newHtml);
    }

    function today() {
        const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        const d = new Date();
        let day = weekday[d.getDay()];
        // console.log(day);
        return day;
    };

    async function makeArray() {
        return new Promise(resolve => {

            var array = Object.entries(day);
            resolve(array);
        });
    }

    populate(day);


    return (
        <>
        </>
    )
}