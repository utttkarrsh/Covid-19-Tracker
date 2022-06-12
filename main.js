$(document).ready(function(){
    $.getJSON("https://api.covid19india.org/data.json", function(data){
        var states = [];
        var confirmed = [];
        var recovered = [];
        var deaths = [];
        var activecases = []

        var total_confirmed = data.statewise[0].confirmed;
        var total_active = data.statewise[0].active;
        var total_recovered = data.statewise[0].recovered;
        var total_deaths = data.statewise[0].deaths;

        $("#confirmed").append(total_confirmed);
        $("#active").append(total_active);
        $("#recovered").append(total_recovered);
        $("#deaths").append(total_deaths);

        $.each(data.statewise, function(id, obj){
            states.push(obj.state);
            confirmed.push(obj.confirmed);
            recovered.push(obj.recovered);
            deaths.push(obj.deaths);
            activecases.push(obj.active);
        });

        states.shift();
        confirmed.shift();
        recovered.shift();
        deaths.shift();

        console.log(states);

        var stateChart = document.getElementById("stateChart").getContext("2d");

        var stateChartRepresentation = new Chart(stateChart, {
            type: "horizontalBar",
            data: {
                labels: states,
                datasets: [
                    {
                        label: "Confirmed",
                        data: confirmed,
                        backgroundColor: "#FFC300",
                    },
                    {
                        label: "Active",
                        data: activecases,
                        backgroundColor: "#0019D5",
                    },
                    {
                        label: "Recovered",
                        data: recovered,
                        backgroundColor: "#00B914",
                    },
                    {
                        label: "Deaths",
                        data: deaths,
                        backgroundColor: "#C70039",
                    },
                ],
            },
        })
    });

});