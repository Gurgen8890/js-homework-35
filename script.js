const regions = [
    {
        id: 1,
        name: 'Արագածոտն',
    }, {
        id: 2,
        name: 'Արարատ',
    }, {
        id: 3,
        name: 'Արմավիր',
    }, {
        id: 4,
        name: 'Գեղարքունիք',
    }, {
        id: 5,
        name: 'Կոտայք',
    }, {
        id: 6,
        name: 'Լոռի',
    }, {
        id: 7,
        name: 'Շիրակ',
    }, {
        id: 8,
        name: 'Սյունիք',
    }, {
        id: 9,
        name: 'Տավուշ',
    }, {
        id: 10,
        name: 'Վայոց ձոր',
    },
]




const cities = [
    {
        id: 1,
        names: "Աշտարակ"
    },{
        id: 1.1,
        names: "Ապարան"
    },{
        id: 1.2,
        names: "Թալին"
    }, {
        id: 2,
        names: "Արտաշատ"
    }, {
        id: 2.1,
        names: "Արարատ"
    }, {
        id: 2.2,
        names: "Մասիս"
    }, {
        id: 2.3,
        names: "Վեդի"
    }, {
        id: 3,
        names: "Վաղարշապատ"
    },  {
        id: 3.1,
        names: "Արմավիր"
    },  {
        id: 3.2,
        names: "Մեծամոր"
    }, {
        id: 4,
        names: "Գավառ"
    }, {
        id: 4.1,
        names: "Ճամբարակ"
    }, {
        id: 4.2,
        names: "Մարտունի"
    }, {
        id: 4.3,
        names: "Սևան"
    }, {
        id: 4.4,
        names: "Վարդենիս"
    }, {
        id: 5,
        names: "Հրազդան"
    },  {
        id: 5.1,
        names: "Աբովյան"
    }, {
        id: 5.2,
        names: "Բյուրեղավան"
    }, {
        id: 5.3,
        names: "Եղվարդ"
    }, {
        id: 5.4,
        names: "Նոր Հաճն"
    }, {
        id: 5.5,
        names: "Չարենցավան"
    }, {
        id: 5.6,
        names: "Ծաղկաձոր"
    },
    {
        id: 6,
        names: "Վանաձոր"
    },    {
        id: 6.1,
        names: "Ալավերդի"
    },    {
        id: 6.2,
        names: "Ստեփանավան"
    },    {
        id: 6.3,
        names: "Սպիտակ"
    },    {
        id: 6.4,
        names: "Տաշիր"
    },    {
        id: 6.5,
        names: "Ախթալա"
    },    {
        id: 6.6,
        names: "Թումանյան"
    },    {
        id: 6.7,
        names: "Շամլուղ"
    },
    {
        id: 7,
        names: "Գյումրի"
    },    {
        id: 7.1,
        names: "Արթիկ"
    },    {
        id: 7.2,
        names:  "Մարալիկ"
    }, {
        id: 8,
        names: "Սիսիան"
    }, {
        id: 8.1,
        names: "Ագարակ"
    }, {
        id: 8.2,
        names: "Գորիս"
    }, {
        id: 8.3,
        names: "Դաստակերտ"
    }, {
        id: 8.4,
        names: "Կապան"
    }, {
        id: 8.5,
        names: "Քաջարան"
    }, {
        id: 9,
        names: "Իջևան"
    }, {
        id: 9.1,
        names: "Դիլիջան"
    }, {
        id: 9.2,
        names: "Բերդ"
    }, {
        id: 9.3,
        names: "Նոյեմբերյան"
    }, {
        id: 9.4,
        names: "Այրում"
    }, {
        id: 10,
        names: "Եղեգնաձոր"
    }, {
        id: 10.1,
        names: "Վայք"
    }, {
        id: 10.2,
        names: "Ջերմուկ"
    }
];


let region = document.forms.form.marzer;
for (let index = 0; index < regions.length; index++) {
    region.options.add(new Option(regions[index].name, regions[index].id));
}

const citySelect = document.forms.form.qaxaqner;
let opt1 = document.getElementById("opt1");
let opt2 = document.getElementById("opt2");
region.addEventListener('change', function (i) {
    let index = i.currentTarget.value;
    let qaxaqnerNames = cities.filter(fn =>Math.floor (fn.id) == index);
    citySelect.innerHTML = "";
    citySelect.options.add(opt2)
    for (let i = 0; i < qaxaqnerNames.length; i++) {
        citySelect.options.add(new Option(qaxaqnerNames[i].names, qaxaqnerNames[i].id))
    }
})

let qaxaqName;
citySelect.addEventListener('change', function () {
    let cityfilter = cities.filter(fn => fn.id == this.value);
    qaxaqName = cityfilter[0].names
})


let input1 = document.getElementById("name");
let input2 = document.getElementById("surname");
const but = document.getElementById("sub");
const secondDiv = document.getElementById("footer");

let count = 0;
but.addEventListener("click", function (event) {
        event.preventDefault();
        if(!input1.value) {
            alert("Մուտքագրեք Ձեր անունը")
        }else if(input1.value.length < 4) {
            alert("Մուտքագրեք 4 տառից ոչ քիչ")
        };
        if(!input2.value) {
            alert("Մուտքագրեք Ձեր ազգանունը")
        }else if(input2.value.length < 4) {
            alert("Մուտքագրեք ամենաքիչը 4 տառ")
        };
        if(qaxaqName === undefined) {
            alert("Ընտրեք Ձեր քաղաքը")
        } else if(qaxaqName === "") {
            alert("Ընտրեք Ձեր քաղաքը")
        }
       if(input1.value && input2.value && input1.value.length > 3 && input2.value.length > 3 && qaxaqName !== undefined && qaxaqName !== "") {
        count++        
        let x = input1.value;
        let y = input2.value;
        let newDiv = document.createElement("div");
        let small1 = document.createElement("div");
        let small2 = document.createElement("div");
        let small3 = document.createElement("div");
        let small4 = document.createElement("div");
        let deleteButton = document.createElement("button");
        deleteButton.classList.add("deletediv");
        deleteButton.append("X")
        small1.classList.add("numdiv");
        small2.classList.add("smalldiv");
        small3.classList.add("smalldiv");
        small4.classList.add("smalldiv");
        small1.append(`${count}.`);
        small2.append(x);
        small3.append(y);
        small4.append(qaxaqName);
        qaxaqName = "";
        newDiv.append(small1,small2,small3,small4,deleteButton);
        newDiv.classList.add("newClass");
        secondDiv.append(newDiv);
        input1.value = "";
        input2.value = "";
        citySelect.innerHTML = "";
        citySelect.options.add(opt2);
        region.innerHTML = "";
        region.options.add(opt1);
        for (let index = 0; index < regions.length; index++) {
            region.options.add(new Option(regions[index].name, regions[index].id));
        }
        deleteButton.addEventListener("click", function (event) {
            event.preventDefault();
            newDiv.remove();
        })
       }
});








