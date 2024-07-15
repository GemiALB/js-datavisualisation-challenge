/*
document.getElementById("bodyContent");
const barCanvas = document.getElementById('barCanvas'); 
const barChart = new Chart(barCanvasn, {
// <block:actions:2>
const actions = [
    {
        name: "Randomize",
        handler(chart) {
            chart.data.datasets.forEach((dataset) => {
                dataset.data = chart.data.labels.map(() => {
                    return [Utils.rand(-100, 100), Utils.rand(-100, 100)];
                });
            });
            chart.update();
        },
    },
];
// </block:actions>

// <block:setup:1>
const DATA_COUNT = 7;
const NUMBER_CFG = { count: DATA_COUNT, min: -100, max: 100 };

const labels = Utils.months({ count: 7 });
const data = {
    labels: ["Test", "test2"],
    datasets: [
        {
            label: "Dataset 1",
            data: labels.map(() => {
                return [Utils.rand(-100, 100), Utils.rand(-100, 100)];
            }),
            backgroundColor: Utils.CHART_COLORS.red,
        },
        {
            label: "Dataset 2",
            data: labels.map(() => {
                return [Utils.rand(-100, 100), Utils.rand(-100, 100)];
            }),
            backgroundColor: Utils.CHART_COLORS.blue,
        },
    ],
};
// </block:setup>

// <block:config:0>
const config = {
    type: "bar",
    data: data,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Chart.js Floating Bar Chart",
            },
        },
    },
};
// </block:config>

module.exports = {
    actions: actions,
    config: config,
};

});

*/




document.addEventListener('DOMContentLoaded', () => {
    // Sélectionner le tableau par son ID
    const table = document.getElementById('table1');

    if (table) {
        console.log('Tableau trouvé :', table);

        // Initialiser un tableau pour stocker les noms de pays
        const countryNames = [];

        // Parcourir chaque ligne du tableau
        table.querySelectorAll('tr').forEach(row => {
            // Sélectionner le premier <td> dans la ligne actuelle
            const td = row.querySelector('td:first-of-type');

            // Si le <td> est trouvé, ajouter son texte (nom du pays) au tableau
            if (td) {
                const countryName = td.textContent.trim();
                countryNames.push(countryName);
                console.log('Nom de pays ajouté :', countryName);
            }
        });

        // Afficher les noms des pays dans la console
        console.log('Noms des pays :', countryNames);
    } else {
        console.error('Tableau non trouvé. Vérifiez l\'ID spécifié dans le HTML.');
    }

    // Exemple de données
    // Supposons que countryNames contient vos 35 noms de pays
    const countryNames = [
        'Belgium', 'Bulgaria', 'Czech Republic', 'Denmark', 'Germany', 'Estonia', 'Ireland',
        'Greece', 'Spain', 'France', 'Italy', 'Latvia', 'Lithuania', 'Luxembourg', 'Hungary',
        'Malta', 'Netherlands', 'Austria', 'Poland', 'Portugal', 'Romania', 'Slovenia',
        'Slovakia', 'Finland', 'Sweden', 'United Kingdom', 'Croatia', 'Cyprus', 'Norway',
        'Switzerland', 'Iceland', 'Montenegro', 'North Macedonia', 'Serbia', 'Turkey'
    ];

    // Exemple de configuration de graphique avec Chart.js
    const ctx = document.getElementById('barCanvas').getContext('2d');
    const myBarChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: countryNames, // Utilisation de countryNames comme labels
            datasets: [{
                label: 'Crimes en 2012',
                data: [1073.8, 120.6, 304.5, 440.8, 5997.0, 40.8, null, 194.1, 2268.9, null, 72.2, 2818.8, 8.0, 49.9, 75.3, 37.6, 472.2, 15.6, 1139.7, 548.0, 1119.8, 403.2, 308.5, 91.4, 90.4, 425.4, 1402.6, 11.7, 1.1, 273.5, 750.4, 5.8, 29.9, 96.1, 1904.5],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});



document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'Dynamic Data',
                data: [],
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                fill: false
            }]
        },
        options: {
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom'
                },
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    function fetchDataAndUpdateChart() {
        fetch('https://canvasjs.com/services/data/datapoints.php')
            .then(response => response.json())
            .then(data => {
                const labels = data.map(point => point[0]);
                const values = data.map(point => point[1]);

                myChart.data.labels = labels;
                myChart.data.datasets[0].data = values;
                myChart.update();
            })
            .catch(error => console.error('Error fetching data:', error));
    }

    // Fetch data and update chart on page load
    fetchDataAndUpdateChart();
});