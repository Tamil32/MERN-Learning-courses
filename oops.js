let a= {
    Name : "BMW",
    Price : 1000000,
    Milage : 20,

    Start :function(){
        console.log("Car is starting");
    },


    Accerlate : function(){
        console.log("Car is accerlating");
    },

    stop : function(){
        console.log("Car is stoping");
    },
};

console.log(a.Name);
console.log(a.Price);
console.log(a.Milage);
a.Start();
a.Accerlate();
a.stop();
