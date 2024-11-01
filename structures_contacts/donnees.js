// Ce fichier contient les données qui apparaissent dans la grille.
// Les balises <br> servent à sauter des lignes pour améliorer la lisibilité des horaires

const rowData = [

// 01 Ain
        { departement: "01 (Ain)",
			partenaire: "ALMA",]]]
			telephone: "0123456789",
			email: "lorem@ipsum.dolor",
			horaires:
			'Lundi 14h-18h<br>Mardi 14h-18h<br>Mercredi 14h-18h<br>Jeudi 14h-18h<br>Vendredi 14h-18h<br>Samedi 14h-18h<br>Dimanche 14h-18h',
			remarques: "<span style='color: blue;'>Lorem ipsum dolor sit amet</span>, consectetur adipiscing elit. Proin leo tortor, aliquet ut lacus vestibulum, elementum tempor nunc.",
			referent: "Monsieur IPSUM Lorem"},
// 02 Aisne			
            { departement: "02 (Aisne)",
			partenaire: "Conseil Departemental",
			telephone: "0123456789",
			email: "lorem@ipsum.dolor",
			horaires:
			'Lundi 14h-18h<br>Mardi 14h-18h<br>Mercredi 14h-18h<br>Jeudi 14h-18h<br>Vendredi 14h-18h<br>Samedi 14h-18h<br>Dimanche 14h-18h',
			remarques: "<span style='color: red;'>Lorem ipsum dolor sit amet</span>, consectetur adipiscing elit. Proin leo tortor, aliquet ut lacus vestibulum, elementum tempor nunc." },
// 03 Allier		
			{ departement: "03 (Allier)",
			partenaire: "ALMA",
			telephone: "0123456789",
			email: "lorem@ipsum.dolor",
			horaires:
			'Lundi 14h-18h<br>Mardi 14h-18h<br>Mercredi 14h-18h<br>Jeudi 14h-18h<br>Vendredi 14h-18h<br>Samedi 14h-18h<br>Dimanche 14h-18h',
			remarques: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin leo tortor, aliquet ut lacus vestibulum, elementum tempor nunc." },
			
			{ departement: "04 (Alpes-de-Haute-Provence)",
			partenaire: "Conseil Departemental",
			telephone: "0123456789",
			email: "lorem@ipsum.dolor",
			horaires:
			'Lundi 14h-18h<br>Mardi 14h-18h<br>Mercredi 14h-18h<br>Jeudi 14h-18h<br>Vendredi 14h-18h<br>Samedi 14h-18h<br>Dimanche 14h-18h',
			remarques: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin leo tortor, aliquet ut lacus vestibulum, elementum tempor nunc." },

			{ departement: "05 (Hautes-Alpes)",
			partenaire: "Conseil Departemental",
			telephone: "0123456789",
			email: "lorem@ipsum.dolor",
			horaires:
			'Lundi 14h-18h<br>Mardi 14h-18h<br>Mercredi 14h-18h<br>Jeudi 14h-18h<br>Vendredi 14h-18h<br>Samedi 14h-18h<br>Dimanche 14h-18h',
			remarques: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin leo tortor, aliquet ut lacus vestibulum, elementum tempor nunc." },

			{ departement: "06 (Alpes-Maritimes)",
			partenaire: "Conseil Departemental",
			telephone: "0123456789",
			email: "lorem@ipsum.dolor",
			horaires:
			'Lundi 14h-18h<br>Mardi 14h-18h<br>Mercredi 14h-18h<br>Jeudi 14h-18h<br>Vendredi 14h-18h<br>Samedi 14h-18h<br>Dimanche 14h-18h',
			remarques: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin leo tortor, aliquet ut lacus vestibulum, elementum tempor nunc." },

			{ departement: "07 (Ardèche)",
			partenaire: "Conseil Departemental",
			telephone: "0123456789",
			email: "lorem@ipsum.dolor",
			horaires:
			'Lundi 14h-18h<br>Mardi 14h-18h<br>Mercredi 14h-18h<br>Jeudi 14h-18h<br>Vendredi 14h-18h<br>Samedi 14h-18h<br>Dimanche 14h-18h',
			remarques: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin leo tortor, aliquet ut lacus vestibulum, elementum tempor nunc." },

			{ departement: "08 (Ardennes)",
			partenaire: "Conseil Departemental",
			telephone: "0123456789",
			email: "lorem@ipsum.dolor",
			horaires:
			'Lundi 14h-18h<br>Mardi 14h-18h<br>Mercredi 14h-18h<br>Jeudi 14h-18h<br>Vendredi 14h-18h<br>Samedi 14h-18h<br>Dimanche 14h-18h',
			remarques: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin leo tortor, aliquet ut lacus vestibulum, elementum tempor nunc." },

			{ departement: "09 (Ariège)",
			partenaire: "Conseil Departemental",
			telephone: "0123456789",
			email: "lorem@ipsum.dolor",
			horaires:
			'Lundi 14h-18h<br>Mardi 14h-18h<br>Mercredi 14h-18h<br>Jeudi 14h-18h<br>Vendredi 14h-18h<br>Samedi 14h-18h<br>Dimanche 14h-18h',
			remarques: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin leo tortor, aliquet ut lacus vestibulum, elementum tempor nunc." },

			{ departement: "10 (Aube)",
			partenaire: "Conseil Departemental",
			telephone: "0123456789",
			email: "lorem@ipsum.dolor",
			horaires:
			'Lundi 14h-18h<br>Mardi 14h-18h<br>Mercredi 14h-18h<br>Jeudi 14h-18h<br>Vendredi 14h-18h<br>Samedi 14h-18h<br>Dimanche 14h-18h',
			remarques: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin leo tortor, aliquet ut lacus vestibulum, elementum tempor nunc." },

			{ departement: "11 (Aude)",
			partenaire: "Conseil Departemental",
			telephone: "0123456789",
			email: "lorem@ipsum.dolor",
			horaires:
			'Lundi 14h-18h<br>Mardi 14h-18h<br>Mercredi 14h-18h<br>Jeudi 14h-18h<br>Vendredi 14h-18h<br>Samedi 14h-18h<br>Dimanche 14h-18h',
			remarques: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin leo tortor, aliquet ut lacus vestibulum, elementum tempor nunc." },

			{ departement: "12 (Aveyron)",
			partenaire: "Conseil Departemental",
			telephone: "0123456789",
			email: "lorem@ipsum.dolor",
			horaires:
			'Lundi 14h-18h<br>Mardi 14h-18h<br>Mercredi 14h-18h<br>Jeudi 14h-18h<br>Vendredi 14h-18h<br>Samedi 14h-18h<br>Dimanche 14h-18h',
			remarques: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin leo tortor, aliquet ut lacus vestibulum, elementum tempor nunc." },

			{ departement: "13 (Bouches-du-Rhône)",
			partenaire: "Conseil Departemental",
			telephone: "0123456789",
			email: "lorem@ipsum.dolor",
			horaires:
			'Lundi 14h-18h<br>Mardi 14h-18h<br>Mercredi 14h-18h<br>Jeudi 14h-18h<br>Vendredi 14h-18h<br>Samedi 14h-18h<br>Dimanche 14h-18h',
			remarques: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin leo tortor, aliquet ut lacus vestibulum, elementum tempor nunc." },

			{ departement: "14 (Calvados)",
			partenaire: "Conseil Departemental",
			telephone: "0123456789",
			email: "lorem@ipsum.dolor",
			horaires:
			'Lundi 14h-18h<br>Mardi 14h-18h<br>Mercredi 14h-18h<br>Jeudi 14h-18h<br>Vendredi 14h-18h<br>Samedi 14h-18h<br>Dimanche 14h-18h',
			remarques: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin leo tortor, aliquet ut lacus vestibulum, elementum tempor nunc." },
			
			{ departement: "15 (Cantal)",
			partenaire: "Conseil Departemental",
			telephone: "0123456789",
			email: "lorem@ipsum.dolor",
			horaires:
			'Lundi 14h-18h<br>Mardi 14h-18h<br>Mercredi 14h-18h<br>Jeudi 14h-18h<br>Vendredi 14h-18h<br>Samedi 14h-18h<br>Dimanche 14h-18h',
			remarques: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin leo tortor, aliquet ut lacus vestibulum, elementum tempor nunc." },

			{ departement: "16 (Charente)",
			partenaire: "Conseil Departemental",
			telephone: "<span style='color: red'>0123456789</span>",
			email: "lorem@ipsum.dolor",
			horaires:
			'Lundi 14h-18h<br>Mardi 14h-18h<br>Mercredi 14h-18h<br>Jeudi 14h-18h<br>Vendredi 14h-18h<br>Samedi 14h-18h<br>Dimanche 14h-18h',
			remarques: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin leo tortor, aliquet ut lacus vestibulum, elementum tempor nunc." },

			];
