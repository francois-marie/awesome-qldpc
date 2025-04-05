function initQldpcTable(tableId, pageLength = 10) {
    const url = 'https://raw.githubusercontent.com/francois-marie/awesome-qldpc/main/data/qldpc_codes.csv';
    
    Papa.parse(url, {
        download: true,
        header: true,
        complete: function(results) {
            console.log(`Loading qLDPC codes data for ${tableId}`);
            
            if (results.data.length === 0 || !results.data[0]) {
                console.warn('No qLDPC codes data found');
                $(`#${tableId}`).after('<div class="info-message">No data available yet. Please contribute by adding entries!</div>');
                return;
            }

            try {
                const table = $(`#${tableId}`).DataTable({
                    data: results.data,
                    columns: [
                        { title: "Title", data: "title" },
                        { title: "n", data: "n" },
                        { title: "k", data: "k" },
                        { title: "d", data: "d" },
                        { 
                            title: "n_a", 
                            data: "n_a",
                            render: function(data) {
                                return data || "?";
                            }
                        },
                        { 
                            title: "Reference", 
                            data: "doi",
                            render: function(data) {
                                return data ? `<a href="${data}" target="_blank">Link</a>` : '';
                            }
                        }
                    ],
                    responsive: true,
                    pageLength: pageLength,
                    order: [[1, 'desc']], // Sort by n by default
                    dom: 'Bfrtip',
                    buttons: ['copy', 'csv', 'excel'],
                    language: {
                        emptyTable: "No data available in table",
                        zeroRecords: "No matching records found"
                    }
                });
                
            } catch (error) {
                console.error('Error initializing DataTable:', error);
                $(`#${tableId}`).after(`<div class="error-message">Error loading table: ${error.message}</div>`);
            }
        },
        error: function(error) {
            console.error('Error loading CSV:', error);
            let message = "Data not available yet. ";
            message += error.status === 404 ? "Please contribute by adding entries!" : "There was an error loading the data.";
            $(`#${tableId}`).after(`<div class="info-message">${message}</div>`);
        }
    });
}

// Initialize tables when document is ready
$(document).ready(function() {
    // Check if tables exist before initializing
    if ($('#qldpc-table').length) {
        initQldpcTable('qldpc-table', 10);
    }
    if ($('#qldpc-table-full').length) {
        initQldpcTable('qldpc-table-full', 25);
    }
}); 