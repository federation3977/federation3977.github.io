// Ce fichier sert à configurer la grille ainsi que son apparence. Il est inutile d'y toucher pour mettre à jour les données.

// Paramètres de la version intégrale

    const IntegralegridOptions = {
        defaultColDef: {
            flex: 1,
            minWidth: 100,
            resizable: true,
            wrapText: true,
            autoHeight: true,
            cellStyle: { fontSize: '18px' }
        },
        columnDefs: [
		
            { headerName: "departement",
			field: "departement",
			filter: true,
			floatingFilter: true,
			cellStyle: { fontSize: '24px' },
            cellRenderer: (params) => {
                    return params.value;
                }},
				
            { headerName: "partenaire",
                field: "partenaire",
                sortable: false,
                cellRenderer: (params) => {
                    return params.value;
                }},
				
            { headerName: "telephone",
                field: "telephone",
                sortable: false,
                cellRenderer: (params) => {
                    return params.value;
                }},

            { headerName: "email",
			field: "email",
			sortable: false ,
			cellRenderer: (params) => {
                    return params.value;
                }},
				
            { headerName: "horaires",
                field: "horaires",
                sortable: false,
                autoHeight: true,
                cellClass: 'wrap-text',
                cellRenderer: (params) => {
                    return params.value;
                }},
				
            { headerName: "remarques",
			field: "remarques",
			sortable: false,
			flex: 2,
			resizable: false,
			cellRenderer: (params) => {
                return params.value;
                }},
				
			{ headerName: "referent",
			field: "referent",
			sortable: false,
			flex: 2,
			resizable: false,
			cellRenderer: (params) => {
                return params.value;
                }},
        ],
        rowData: rowData,
        tooltipShowDelay: 200,
        domLayout: 'normal',
        ensureDomOrder: true,
        enableCellTextSelection: true
    };
	
// Paramètres de la version lite
	
   const LitegridOptions = {
        defaultColDef: {
            flex: 1,
            minWidth: 100,
            resizable: true,
            wrapText: true,
            autoHeight: true,
            cellStyle: { fontSize: '18px' }
        },
        columnDefs: [
		
            { headerName: "departement",
			field: "departement",
			filter: true,
			floatingFilter: true,
			cellStyle: { fontSize: '24px' },
            cellRenderer: (params) => {
                    return params.value;
                }},
				
            { headerName: "partenaire",
                field: "partenaire",
                sortable: false,
                cellRenderer: (params) => {
                    return params.value;
                }},
				
            { headerName: "telephone",
                field: "telephone",
                sortable: false,
                cellRenderer: (params) => {
                    return params.value;
                }},

            { headerName: "email",
			field: "email",
			sortable: false ,
			cellRenderer: (params) => {
                    return params.value;
                }},
				
            { headerName: "horaires",
                field: "horaires",
                sortable: false,
                autoHeight: true,
                cellClass: 'wrap-text',
                cellRenderer: (params) => {
                    return params.value;
                }},
				
            { headerName: "remarques",
			field: "remarques",
			sortable: false,
			flex: 2,
			resizable: false,
			cellRenderer: (params) => {
                return params.value;
                }},
        ],
        rowData: rowData,
        tooltipShowDelay: 200,
        domLayout: 'normal',
        ensureDomOrder: true,
        enableCellTextSelection: true
    };