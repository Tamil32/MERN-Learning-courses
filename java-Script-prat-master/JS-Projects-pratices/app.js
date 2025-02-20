// Item contoller ,ui controller, storage controller, app controller



// Item Controller
const ItemCtrl = (function () {
    // Item Constructor
    const Item = function (id, name, money) {
        this.id = id;
        this.name = name;
        this.money = money;
    };

    // Data Structure
    const data = {
        items: [
            { id: 0, name: "Tamil", money: 100 },
            { id: 1, name: "Indra", money: 2000 },
            { id: 2, name: "Pugal", money: 300000000000 },
        ],

        totalMoney: 0
    };

    return {
        getItems: function () {
            return data.items;
        },

        getTotalMoney: function () {
            let total = 0;
            
            if (data.items.length > 0){


                data.items.forEach(function(item){
                    total += item.money;


                    data.totalMoney = total;
                })

            }else {
                return data.totalMoney = 0
            }

            return total;
        }
    };

})();

// UI Controller

const UIctrl = (function () {


    return {
        populateItemList: function (items) {

            let html = '';


            items.forEach(function (item) {
                html += `<li class="collection-item">
                    <strong>${item.name}</strong> :
                    <em>${item.money}</em>
                    <a href="#!" class="secondary-content">
                        <i class="fa-solid fa-pencil"></i>
                    </a>
                </li>`;
            });

            document.querySelector("#item-list").innerHTML = html; // Ensure there's an element with ID "item-list"
        },

        showTotalMoney: function(total){
            document.querySelector(".total-money").textContent = total;
        },

        clearEditstate:function(){
            document.querySelector(".update-btn ").style.display = "none";
            document.querySelector(".delete-btn").style.display = "none";
            document.querySelector(".back-btn").style.display = "none";
        }
    };
})();

// Initialize UI with items
UIctrl.populateItemList(ItemCtrl.getItems());



//App Controling


const App = (function(){

    return{
        init: function(){

            // clear the three buttons

            UIctrl.clearEditstate();

            const items = ItemCtrl.getItems();


            if (items.length > 0){

                UIctrl.populateItemList(items);

                const totalMoney = ItemCtrl.getTotalMoney();

                UIctrl.showTotalMoney(totalMoney);
            }
        }
    }
})();

App.init();
