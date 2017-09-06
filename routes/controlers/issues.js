// Code used to generate random entries on json-generator.com
// [
//     '{{repeat(202, 202)}}',
//     {
//         station: '{{random("WSYX", "KUTV", "KABB", "WWWT", "WMWT", "WBFF", "KARR", "KOMO", "RGBA")}}',
//         id: 'SRP-{{integer(3000, 5999)}}',
//         title: '{{lorem(1, "sentence")}}',
//         status: '{{random("Reserve Inventory", "Awaiting Billing Corrections", "Billing", "Awaiting Elements", "Modified")}}',
//         created: '{{date(new Date(2016, 0, 1), new Date(), "MM-dd-YYYY")}}',
//         assignee: '{{firstName()}}  {{surname()}}'
//     }
// ]

const issues_all = [
	{
		"name": "EMM/Contesting",
		"id": "59a4c632c542ddcfd3f34f47",
		"open": 232,
		"breaches": 10,
		"warnings": 5,
		"efficiency": 91.8847
	},
	{
		"name": "Social Advertising",
		"id": "59a4c63217fafbf7c156651a",
		"open": 39,
		"breaches": 2,
		"warnings": 0,
		"efficiency": 101.8752
	},
	{
		"name": "SEM",
		"id": "59a4c632bbf8f4d833e1cf36",
		"open": 139,
		"breaches": 10,
		"warnings": 4,
		"efficiency": 85.9788
	},
	{
		"name": "Local Advertising",
		"id": "59a4c632a763d54cbe0dfeec",
		"open": 202,
		"breaches": 20,
		"warnings": 5,
		"efficiency": 90.5953
	},
	{
		"name": "Web Development",
		"id": "59a4c6325c3bb8d588ec297e",
		"open": 195,
		"breaches": 0,
		"warnings": 5,
		"efficiency": 103.6963
	},
	{
		"name": "Creative",
		"id": "59a4c6323c6833ef4d5b635a",
		"open": 109,
		"breaches": 30,
		"warnings": 20,
		"efficiency": 76.0235
	}
];

const local_advertising = [
    {
        "station": "RGBA",
        "id": "SRP-3308",
        "title": "Minim ex quis esse aute.",
        "status": "Modified",
        "created": "04-03-2016",
        "assignee": "Andrea  Ayala"
    },
    {
        "station": "RGBA",
        "id": "SRP-3390",
        "title": "Officia officia elit ut anim nisi ipsum cillum irure fugiat et eiusmod elit amet qui.",
        "status": "Modified",
        "created": "01-07-2017",
        "assignee": "Alice  Buchanan"
    },
    {
        "station": "KARR",
        "id": "SRP-4155",
        "title": "Commodo ea exercitation ex officia sint consectetur non consequat enim.",
        "status": "Awaiting Elements",
        "created": "01-05-2017",
        "assignee": "Deirdre  Graham"
    },
    {
        "station": "KARR",
        "id": "SRP-5686",
        "title": "Est est reprehenderit qui mollit reprehenderit anim laborum consequat eu laborum duis in.",
        "status": "Modified",
        "created": "01-03-2016",
        "assignee": "Goldie  Bray"
    },
    {
        "station": "KOMO",
        "id": "SRP-5201",
        "title": "Voluptate eiusmod eiusmod deserunt proident adipisicing deserunt sint do minim.",
        "status": "Reserve Inventory",
        "created": "02-04-2016",
        "assignee": "Deloris  Gross"
    },
    {
        "station": "KOMO",
        "id": "SRP-4647",
        "title": "Proident mollit dolore officia ipsum do occaecat.",
        "status": "Awaiting Billing Corrections",
        "created": "08-22-2017",
        "assignee": "Montgomery  Holman"
    },
    {
        "station": "RGBA",
        "id": "SRP-5494",
        "title": "Quis nostrud ea adipisicing quis consectetur deserunt culpa amet minim.",
        "status": "Awaiting Elements",
        "created": "04-09-2017",
        "assignee": "Matthews  Carter"
    },
    {
        "station": "WWWT",
        "id": "SRP-4370",
        "title": "Labore magna enim excepteur commodo adipisicing occaecat cupidatat eu.",
        "status": "Modified",
        "created": "02-03-2017",
        "assignee": "Morgan  Guzman"
    },
    {
        "station": "WSYX",
        "id": "SRP-5682",
        "title": "Proident id consequat culpa ipsum in et laborum nostrud voluptate consequat.",
        "status": "Awaiting Elements",
        "created": "10-21-2016",
        "assignee": "Candice  Davis"
    },
    {
        "station": "WMWT",
        "id": "SRP-3899",
        "title": "Enim ipsum magna occaecat deserunt nisi.",
        "status": "Awaiting Billing Corrections",
        "created": "03-28-2016",
        "assignee": "Terrell  Shaw"
    },
    {
        "station": "KARR",
        "id": "SRP-5243",
        "title": "Sit ipsum consectetur eu cupidatat aute nisi est.",
        "status": "Billing",
        "created": "05-01-2017",
        "assignee": "Colleen  Mcclain"
    },
    {
        "station": "KUTV",
        "id": "SRP-5092",
        "title": "Sit eiusmod cupidatat commodo exercitation cupidatat enim sit Lorem officia culpa labore.",
        "status": "Billing",
        "created": "07-25-2016",
        "assignee": "Verna  Frye"
    },
    {
        "station": "RGBA",
        "id": "SRP-5973",
        "title": "Officia eiusmod nulla qui eu velit et aliqua sit quis irure.",
        "status": "Awaiting Billing Corrections",
        "created": "06-28-2017",
        "assignee": "Corine  Ware"
    },
    {
        "station": "KOMO",
        "id": "SRP-3749",
        "title": "Commodo exercitation magna ipsum irure esse ullamco dolore nisi non in officia elit in.",
        "status": "Reserve Inventory",
        "created": "02-26-2016",
        "assignee": "Levine  Rodriquez"
    },
    {
        "station": "KARR",
        "id": "SRP-5311",
        "title": "Sunt nulla amet duis ipsum est eiusmod ullamco duis quis fugiat labore et.",
        "status": "Awaiting Elements",
        "created": "06-22-2016",
        "assignee": "Gladys  Jarvis"
    },
    {
        "station": "WMWT",
        "id": "SRP-5178",
        "title": "Commodo elit id cupidatat dolore mollit tempor laborum incididunt consectetur elit ut tempor mollit minim.",
        "status": "Billing",
        "created": "08-18-2016",
        "assignee": "Gilda  Jefferson"
    },
    {
        "station": "KABB",
        "id": "SRP-5189",
        "title": "Magna veniam qui culpa laborum sit ullamco aliquip dolor.",
        "status": "Awaiting Billing Corrections",
        "created": "06-19-2016",
        "assignee": "Marisol  Joseph"
    },
    {
        "station": "KARR",
        "id": "SRP-4052",
        "title": "Esse id dolor consequat sunt ad ipsum velit excepteur ex veniam velit elit pariatur.",
        "status": "Awaiting Billing Corrections",
        "created": "11-28-2016",
        "assignee": "Juanita  Suarez"
    },
    {
        "station": "WSYX",
        "id": "SRP-3391",
        "title": "Anim anim eiusmod sint fugiat irure duis mollit sint non nulla velit enim laborum.",
        "status": "Modified",
        "created": "12-28-2016",
        "assignee": "Madelyn  Mccray"
    },
    {
        "station": "RGBA",
        "id": "SRP-3929",
        "title": "Cillum eu eu consectetur culpa exercitation.",
        "status": "Reserve Inventory",
        "created": "04-26-2017",
        "assignee": "Castillo  Mckay"
    },
    {
        "station": "KABB",
        "id": "SRP-3229",
        "title": "Quis commodo fugiat occaecat eiusmod aliqua ullamco tempor pariatur qui anim minim pariatur ipsum.",
        "status": "Billing",
        "created": "04-28-2017",
        "assignee": "Kaye  Richardson"
    },
    {
        "station": "KABB",
        "id": "SRP-4913",
        "title": "Adipisicing in laborum enim ullamco id cillum.",
        "status": "Modified",
        "created": "03-11-2016",
        "assignee": "Olsen  Bass"
    },
    {
        "station": "KARR",
        "id": "SRP-5524",
        "title": "Exercitation ullamco quis sunt aliqua velit consequat veniam proident.",
        "status": "Awaiting Billing Corrections",
        "created": "06-08-2017",
        "assignee": "Dickerson  Shepard"
    },
    {
        "station": "WWWT",
        "id": "SRP-4704",
        "title": "Tempor amet aliquip ea in ex consequat nisi amet et sit pariatur anim eiusmod.",
        "status": "Awaiting Billing Corrections",
        "created": "02-12-2016",
        "assignee": "Wells  Richmond"
    },
    {
        "station": "WBFF",
        "id": "SRP-4657",
        "title": "Esse do pariatur minim irure.",
        "status": "Billing",
        "created": "12-10-2016",
        "assignee": "Jill  Nielsen"
    },
    {
        "station": "RGBA",
        "id": "SRP-5487",
        "title": "Et ad eu est incididunt magna ullamco non ea deserunt deserunt labore quis pariatur.",
        "status": "Reserve Inventory",
        "created": "06-21-2016",
        "assignee": "Arnold  Valentine"
    },
    {
        "station": "KOMO",
        "id": "SRP-4792",
        "title": "Elit labore aliquip laboris magna ea proident consequat.",
        "status": "Awaiting Elements",
        "created": "07-02-2016",
        "assignee": "Carver  Warner"
    },
    {
        "station": "KOMO",
        "id": "SRP-5626",
        "title": "Consequat minim sit dolor velit minim reprehenderit.",
        "status": "Awaiting Billing Corrections",
        "created": "11-10-2016",
        "assignee": "Velasquez  Wise"
    },
    {
        "station": "KARR",
        "id": "SRP-4414",
        "title": "Ut eiusmod tempor ea id qui ullamco irure reprehenderit ea voluptate.",
        "status": "Awaiting Billing Corrections",
        "created": "05-04-2016",
        "assignee": "Mccarty  Goff"
    },
    {
        "station": "KARR",
        "id": "SRP-5532",
        "title": "Deserunt fugiat sit ea esse laborum cupidatat velit anim non tempor duis sunt laborum anim.",
        "status": "Modified",
        "created": "09-25-2016",
        "assignee": "Clarke  Browning"
    },
    {
        "station": "KUTV",
        "id": "SRP-5919",
        "title": "Est dolore magna ad aute cillum laborum nulla adipisicing velit labore magna aute ad veniam.",
        "status": "Awaiting Elements",
        "created": "01-25-2017",
        "assignee": "Lang  Mccall"
    },
    {
        "station": "KABB",
        "id": "SRP-3104",
        "title": "Laborum consectetur elit ex qui ipsum ipsum et minim laboris minim aliquip ex laborum tempor.",
        "status": "Awaiting Billing Corrections",
        "created": "03-07-2016",
        "assignee": "Young  Moore"
    },
    {
        "station": "KABB",
        "id": "SRP-5073",
        "title": "Magna anim quis consectetur occaecat deserunt sint eu et sunt officia.",
        "status": "Reserve Inventory",
        "created": "01-17-2017",
        "assignee": "Head  Webster"
    },
    {
        "station": "WSYX",
        "id": "SRP-4015",
        "title": "Ullamco nisi veniam dolore exercitation reprehenderit velit quis nisi dolore labore.",
        "status": "Reserve Inventory",
        "created": "06-26-2017",
        "assignee": "Christi  Bowman"
    },
    {
        "station": "KUTV",
        "id": "SRP-5414",
        "title": "Incididunt elit dolor enim deserunt reprehenderit in incididunt.",
        "status": "Modified",
        "created": "06-15-2017",
        "assignee": "Stella  Barber"
    },
    {
        "station": "WMWT",
        "id": "SRP-3128",
        "title": "Magna ipsum laboris amet laboris.",
        "status": "Awaiting Billing Corrections",
        "created": "10-03-2016",
        "assignee": "Jodi  Noble"
    },
    {
        "station": "WMWT",
        "id": "SRP-3377",
        "title": "Non ullamco ut et veniam Lorem sunt Lorem elit ipsum velit reprehenderit.",
        "status": "Awaiting Elements",
        "created": "01-25-2016",
        "assignee": "Candace  Terry"
    },
    {
        "station": "WWWT",
        "id": "SRP-5041",
        "title": "Officia enim ipsum esse dolor cillum voluptate nulla anim ea labore irure quis et commodo.",
        "status": "Billing",
        "created": "05-11-2016",
        "assignee": "Sonja  Kelly"
    },
    {
        "station": "WBFF",
        "id": "SRP-4559",
        "title": "Pariatur dolore consectetur sint excepteur anim officia voluptate esse.",
        "status": "Awaiting Elements",
        "created": "02-23-2016",
        "assignee": "Burke  Sawyer"
    },
    {
        "station": "KABB",
        "id": "SRP-3949",
        "title": "Exercitation do mollit exercitation culpa ut commodo sunt laborum sunt aute magna sunt.",
        "status": "Billing",
        "created": "02-10-2017",
        "assignee": "Hendrix  Downs"
    },
    {
        "station": "WSYX",
        "id": "SRP-4749",
        "title": "Deserunt irure ullamco qui eu occaecat cupidatat et ut.",
        "status": "Awaiting Elements",
        "created": "02-26-2017",
        "assignee": "Lidia  Hubbard"
    },
    {
        "station": "WSYX",
        "id": "SRP-5777",
        "title": "Id nostrud deserunt commodo id tempor.",
        "status": "Awaiting Billing Corrections",
        "created": "08-30-2017",
        "assignee": "Adele  Mccarthy"
    },
    {
        "station": "WWWT",
        "id": "SRP-3541",
        "title": "Aute officia elit anim enim in enim enim.",
        "status": "Awaiting Billing Corrections",
        "created": "05-16-2017",
        "assignee": "Charity  Wagner"
    },
    {
        "station": "WMWT",
        "id": "SRP-3955",
        "title": "Exercitation adipisicing tempor qui magna.",
        "status": "Modified",
        "created": "06-20-2017",
        "assignee": "Woodward  Carey"
    },
    {
        "station": "WMWT",
        "id": "SRP-4516",
        "title": "Laborum dolor ea velit magna est sint ipsum eiusmod labore.",
        "status": "Reserve Inventory",
        "created": "03-16-2016",
        "assignee": "Gabrielle  Alford"
    },
    {
        "station": "WSYX",
        "id": "SRP-4776",
        "title": "Ut voluptate ipsum eu consequat incididunt adipisicing pariatur deserunt anim ipsum reprehenderit cupidatat.",
        "status": "Awaiting Billing Corrections",
        "created": "05-22-2017",
        "assignee": "Charlene  Franklin"
    },
    {
        "station": "WBFF",
        "id": "SRP-3769",
        "title": "Sint nisi aliqua consectetur do id tempor qui nostrud sunt veniam cillum ex.",
        "status": "Awaiting Billing Corrections",
        "created": "03-28-2017",
        "assignee": "Daisy  Small"
    },
    {
        "station": "WMWT",
        "id": "SRP-3550",
        "title": "Consequat pariatur est incididunt anim laboris incididunt magna deserunt aute nostrud.",
        "status": "Awaiting Elements",
        "created": "07-15-2016",
        "assignee": "Gretchen  Aguilar"
    },
    {
        "station": "WBFF",
        "id": "SRP-5871",
        "title": "Incididunt et minim amet consectetur eu ex sint adipisicing.",
        "status": "Billing",
        "created": "11-22-2016",
        "assignee": "Marissa  King"
    },
    {
        "station": "WWWT",
        "id": "SRP-4427",
        "title": "Dolore minim reprehenderit cupidatat do do ad.",
        "status": "Modified",
        "created": "01-08-2017",
        "assignee": "Watson  Schultz"
    },
    {
        "station": "KUTV",
        "id": "SRP-5632",
        "title": "Consequat reprehenderit commodo qui anim sint duis officia cupidatat laboris qui sunt.",
        "status": "Awaiting Billing Corrections",
        "created": "08-17-2016",
        "assignee": "Luann  Warren"
    },
    {
        "station": "WBFF",
        "id": "SRP-3602",
        "title": "Dolor ut veniam nostrud amet eu ea quis sint veniam et proident consectetur mollit ad.",
        "status": "Reserve Inventory",
        "created": "01-06-2016",
        "assignee": "Carney  Russo"
    },
    {
        "station": "WSYX",
        "id": "SRP-5491",
        "title": "Quis sit Lorem fugiat veniam id adipisicing ea tempor dolor.",
        "status": "Billing",
        "created": "01-01-2016",
        "assignee": "Marci  Sanders"
    },
    {
        "station": "KABB",
        "id": "SRP-3916",
        "title": "Sunt laboris exercitation sunt eu culpa culpa nulla velit consequat aliquip dolore.",
        "status": "Awaiting Elements",
        "created": "01-18-2017",
        "assignee": "Smith  Ortiz"
    },
    {
        "station": "KOMO",
        "id": "SRP-3424",
        "title": "Exercitation excepteur Lorem eiusmod do laboris sint laboris ipsum pariatur ad est.",
        "status": "Reserve Inventory",
        "created": "04-02-2016",
        "assignee": "Minerva  Velasquez"
    },
    {
        "station": "KABB",
        "id": "SRP-3153",
        "title": "Id occaecat quis deserunt commodo non excepteur ut laboris irure.",
        "status": "Billing",
        "created": "02-01-2017",
        "assignee": "Gamble  Bradshaw"
    },
    {
        "station": "WMWT",
        "id": "SRP-5813",
        "title": "Irure laborum pariatur duis tempor est.",
        "status": "Billing",
        "created": "05-14-2016",
        "assignee": "Miles  Webb"
    },
    {
        "station": "WSYX",
        "id": "SRP-3850",
        "title": "Consequat irure cillum consectetur tempor labore non nulla labore culpa amet eu sunt Lorem.",
        "status": "Awaiting Elements",
        "created": "09-30-2016",
        "assignee": "Beach  Patterson"
    },
    {
        "station": "KARR",
        "id": "SRP-5971",
        "title": "Sunt do nisi proident commodo proident sit do aute.",
        "status": "Modified",
        "created": "08-22-2016",
        "assignee": "Burch  Rosa"
    },
    {
        "station": "WMWT",
        "id": "SRP-5523",
        "title": "Ex exercitation laboris commodo pariatur sint tempor cillum non irure.",
        "status": "Reserve Inventory",
        "created": "10-26-2016",
        "assignee": "Aurelia  Snider"
    },
    {
        "station": "KUTV",
        "id": "SRP-4462",
        "title": "Eiusmod sit officia labore aute labore et incididunt ea magna magna dolore.",
        "status": "Awaiting Elements",
        "created": "03-30-2016",
        "assignee": "Samantha  Herman"
    },
    {
        "station": "KARR",
        "id": "SRP-4527",
        "title": "Elit irure adipisicing ex deserunt magna minim.",
        "status": "Billing",
        "created": "02-16-2016",
        "assignee": "Terry  Pittman"
    },
    {
        "station": "RGBA",
        "id": "SRP-5352",
        "title": "Veniam anim elit amet ipsum aliqua minim incididunt nulla ipsum.",
        "status": "Modified",
        "created": "03-23-2016",
        "assignee": "Sylvia  Mcguire"
    },
    {
        "station": "KOMO",
        "id": "SRP-4955",
        "title": "Laborum ipsum Lorem proident culpa excepteur ullamco Lorem veniam.",
        "status": "Awaiting Elements",
        "created": "01-22-2016",
        "assignee": "Hinton  Burns"
    },
    {
        "station": "WWWT",
        "id": "SRP-4645",
        "title": "Consequat et nisi esse nostrud esse ut commodo anim elit labore adipisicing proident ipsum pariatur.",
        "status": "Modified",
        "created": "01-31-2017",
        "assignee": "Keri  Gomez"
    },
    {
        "station": "WWWT",
        "id": "SRP-5173",
        "title": "Ut magna ex proident nulla labore proident exercitation nisi reprehenderit irure aute qui.",
        "status": "Awaiting Elements",
        "created": "08-06-2016",
        "assignee": "Mcguire  Logan"
    },
    {
        "station": "KARR",
        "id": "SRP-3838",
        "title": "Ad minim voluptate nulla labore fugiat minim qui.",
        "status": "Modified",
        "created": "02-19-2017",
        "assignee": "Keller  Kirby"
    },
    {
        "station": "KABB",
        "id": "SRP-5124",
        "title": "Nostrud proident irure cupidatat consequat nostrud duis sint ullamco cupidatat est aliqua.",
        "status": "Awaiting Billing Corrections",
        "created": "07-22-2017",
        "assignee": "Robbins  Forbes"
    },
    {
        "station": "WSYX",
        "id": "SRP-4833",
        "title": "Exercitation esse quis velit eiusmod.",
        "status": "Billing",
        "created": "09-20-2016",
        "assignee": "Bridgette  Sutton"
    },
    {
        "station": "KABB",
        "id": "SRP-4711",
        "title": "Anim consequat culpa labore sunt minim deserunt aute pariatur nulla do ut.",
        "status": "Awaiting Billing Corrections",
        "created": "07-15-2017",
        "assignee": "Sweet  Floyd"
    },
    {
        "station": "RGBA",
        "id": "SRP-5122",
        "title": "Aliqua proident dolor enim dolor minim culpa do adipisicing dolor cillum est mollit.",
        "status": "Reserve Inventory",
        "created": "07-06-2017",
        "assignee": "Tasha  Colon"
    },
    {
        "station": "RGBA",
        "id": "SRP-3898",
        "title": "Amet aute cupidatat pariatur reprehenderit et aliquip culpa elit ipsum quis ad et eu.",
        "status": "Modified",
        "created": "06-16-2016",
        "assignee": "House  Beach"
    },
    {
        "station": "WMWT",
        "id": "SRP-3328",
        "title": "Adipisicing excepteur consequat consequat nisi nisi consectetur fugiat aliqua excepteur sint quis consequat commodo.",
        "status": "Reserve Inventory",
        "created": "07-15-2017",
        "assignee": "Lucy  Henry"
    },
    {
        "station": "RGBA",
        "id": "SRP-5180",
        "title": "Ut voluptate ea nostrud incididunt tempor cupidatat laborum reprehenderit deserunt.",
        "status": "Billing",
        "created": "08-16-2017",
        "assignee": "Hunter  Koch"
    },
    {
        "station": "KOMO",
        "id": "SRP-3882",
        "title": "Cupidatat elit dolor sit sit laboris ea.",
        "status": "Reserve Inventory",
        "created": "10-15-2016",
        "assignee": "Rae  Monroe"
    },
    {
        "station": "WWWT",
        "id": "SRP-5954",
        "title": "Commodo anim incididunt exercitation consequat.",
        "status": "Awaiting Elements",
        "created": "05-28-2017",
        "assignee": "Leah  Holland"
    },
    {
        "station": "KABB",
        "id": "SRP-5146",
        "title": "Exercitation sit veniam nostrud esse duis dolor irure eiusmod.",
        "status": "Awaiting Elements",
        "created": "09-28-2016",
        "assignee": "Cherry  Golden"
    },
    {
        "station": "WSYX",
        "id": "SRP-4141",
        "title": "Tempor non ipsum consequat quis.",
        "status": "Billing",
        "created": "01-17-2016",
        "assignee": "Hahn  Mcbride"
    },
    {
        "station": "KARR",
        "id": "SRP-3271",
        "title": "Cillum ex dolore consectetur labore.",
        "status": "Awaiting Elements",
        "created": "09-19-2016",
        "assignee": "Rush  Callahan"
    },
    {
        "station": "KABB",
        "id": "SRP-4415",
        "title": "Aliquip anim eiusmod veniam voluptate adipisicing duis magna aliqua aliquip mollit deserunt commodo ipsum id.",
        "status": "Awaiting Elements",
        "created": "02-04-2016",
        "assignee": "Susanne  Cook"
    },
    {
        "station": "WBFF",
        "id": "SRP-3008",
        "title": "Dolor magna fugiat proident excepteur reprehenderit veniam duis ad.",
        "status": "Reserve Inventory",
        "created": "06-19-2016",
        "assignee": "Mckay  Mccarty"
    },
    {
        "station": "KARR",
        "id": "SRP-3062",
        "title": "Fugiat culpa ut eiusmod sit sunt ut.",
        "status": "Billing",
        "created": "03-25-2016",
        "assignee": "Aileen  Mcfadden"
    },
    {
        "station": "KOMO",
        "id": "SRP-4012",
        "title": "Incididunt ut culpa est nulla enim excepteur laboris.",
        "status": "Reserve Inventory",
        "created": "04-26-2016",
        "assignee": "Rollins  Espinoza"
    },
    {
        "station": "WMWT",
        "id": "SRP-4220",
        "title": "Pariatur qui aliqua et qui cupidatat cupidatat veniam elit.",
        "status": "Awaiting Billing Corrections",
        "created": "02-14-2016",
        "assignee": "Mccray  Blankenship"
    },
    {
        "station": "KUTV",
        "id": "SRP-3998",
        "title": "Velit et elit mollit adipisicing anim do occaecat ut velit sit sint nostrud.",
        "status": "Awaiting Elements",
        "created": "04-08-2017",
        "assignee": "Jeannine  Gonzales"
    },
    {
        "station": "KABB",
        "id": "SRP-4290",
        "title": "Tempor laboris irure sunt eiusmod occaecat culpa duis.",
        "status": "Reserve Inventory",
        "created": "08-10-2016",
        "assignee": "Jacquelyn  Hodges"
    },
    {
        "station": "WMWT",
        "id": "SRP-3016",
        "title": "Culpa excepteur labore ea ea consequat et.",
        "status": "Modified",
        "created": "01-08-2017",
        "assignee": "Bertha  Dean"
    },
    {
        "station": "KARR",
        "id": "SRP-5669",
        "title": "Do velit commodo proident quis laboris.",
        "status": "Modified",
        "created": "09-16-2016",
        "assignee": "Beth  Wilkinson"
    },
    {
        "station": "WMWT",
        "id": "SRP-4295",
        "title": "Eu aliquip do veniam sit minim commodo id.",
        "status": "Modified",
        "created": "05-06-2017",
        "assignee": "Meyers  Roberts"
    },
    {
        "station": "KOMO",
        "id": "SRP-4360",
        "title": "Nulla dolore mollit sit labore nisi voluptate et velit ut ipsum consequat officia adipisicing adipisicing.",
        "status": "Awaiting Elements",
        "created": "07-11-2017",
        "assignee": "Craft  Lambert"
    },
    {
        "station": "WSYX",
        "id": "SRP-4355",
        "title": "Exercitation labore adipisicing anim aliqua irure sit consequat pariatur deserunt velit labore mollit officia.",
        "status": "Billing",
        "created": "04-20-2017",
        "assignee": "Sheila  Meyers"
    },
    {
        "station": "WWWT",
        "id": "SRP-4835",
        "title": "Sit ex minim qui voluptate ullamco eiusmod amet.",
        "status": "Awaiting Billing Corrections",
        "created": "04-21-2016",
        "assignee": "Rogers  Oneil"
    },
    {
        "station": "WWWT",
        "id": "SRP-4130",
        "title": "Nisi mollit magna dolor ea anim nostrud velit.",
        "status": "Awaiting Elements",
        "created": "01-25-2016",
        "assignee": "Bailey  Nicholson"
    },
    {
        "station": "WSYX",
        "id": "SRP-3525",
        "title": "Dolor labore veniam incididunt laborum Lorem fugiat.",
        "status": "Awaiting Elements",
        "created": "06-30-2016",
        "assignee": "Vonda  Berg"
    },
    {
        "station": "KUTV",
        "id": "SRP-3782",
        "title": "Deserunt aliqua qui eu enim aliqua ullamco eu adipisicing dolore eu commodo anim.",
        "status": "Modified",
        "created": "05-16-2017",
        "assignee": "Cain  Vargas"
    },
    {
        "station": "WBFF",
        "id": "SRP-5528",
        "title": "Non enim ea aliqua esse ut nulla irure aliqua.",
        "status": "Modified",
        "created": "05-10-2017",
        "assignee": "Edwards  Jones"
    },
    {
        "station": "WBFF",
        "id": "SRP-3259",
        "title": "Mollit ad do voluptate eu.",
        "status": "Awaiting Elements",
        "created": "03-02-2016",
        "assignee": "Avila  Alvarez"
    },
    {
        "station": "KUTV",
        "id": "SRP-3945",
        "title": "Aliqua sunt excepteur pariatur duis.",
        "status": "Modified",
        "created": "05-02-2017",
        "assignee": "Logan  Sullivan"
    },
    {
        "station": "KARR",
        "id": "SRP-5775",
        "title": "Ullamco in velit cillum dolor excepteur aliquip sunt proident proident.",
        "status": "Awaiting Billing Corrections",
        "created": "04-08-2017",
        "assignee": "Matilda  Neal"
    },
    {
        "station": "WBFF",
        "id": "SRP-3910",
        "title": "Nulla amet pariatur ullamco id quis cupidatat mollit.",
        "status": "Awaiting Elements",
        "created": "07-16-2017",
        "assignee": "Finch  Rowland"
    },
    {
        "station": "KUTV",
        "id": "SRP-5609",
        "title": "Laborum dolore quis sint nostrud.",
        "status": "Modified",
        "created": "04-03-2017",
        "assignee": "Cunningham  Hawkins"
    },
    {
        "station": "KOMO",
        "id": "SRP-4735",
        "title": "Commodo do quis veniam magna ad anim deserunt deserunt.",
        "status": "Awaiting Billing Corrections",
        "created": "04-24-2016",
        "assignee": "Gates  Cervantes"
    },
    {
        "station": "WMWT",
        "id": "SRP-5779",
        "title": "Cillum nulla do sit esse.",
        "status": "Reserve Inventory",
        "created": "04-20-2017",
        "assignee": "Mcdonald  Caldwell"
    },
    {
        "station": "KABB",
        "id": "SRP-3014",
        "title": "Do consectetur tempor non occaecat non veniam.",
        "status": "Reserve Inventory",
        "created": "11-05-2016",
        "assignee": "Swanson  Baxter"
    },
    {
        "station": "KARR",
        "id": "SRP-4720",
        "title": "Proident exercitation id eiusmod nulla exercitation labore voluptate.",
        "status": "Modified",
        "created": "08-30-2016",
        "assignee": "Houston  Holloway"
    },
    {
        "station": "WSYX",
        "id": "SRP-3715",
        "title": "Incididunt cupidatat mollit ullamco ea id Lorem occaecat adipisicing consequat aliquip do exercitation occaecat nisi.",
        "status": "Reserve Inventory",
        "created": "11-25-2016",
        "assignee": "Underwood  Howard"
    },
    {
        "station": "KARR",
        "id": "SRP-5918",
        "title": "Et officia irure anim aute sunt reprehenderit enim duis commodo magna.",
        "status": "Billing",
        "created": "04-05-2017",
        "assignee": "Moreno  Alvarado"
    },
    {
        "station": "KUTV",
        "id": "SRP-4315",
        "title": "Do et ut consequat ex.",
        "status": "Awaiting Billing Corrections",
        "created": "07-23-2016",
        "assignee": "Small  Lowery"
    },
    {
        "station": "KARR",
        "id": "SRP-3218",
        "title": "Voluptate veniam et id ullamco ex sit nostrud nulla laboris ipsum sunt eu cillum.",
        "status": "Reserve Inventory",
        "created": "09-13-2016",
        "assignee": "Jaime  Skinner"
    },
    {
        "station": "KARR",
        "id": "SRP-5399",
        "title": "Est reprehenderit nisi enim minim minim qui veniam quis duis.",
        "status": "Modified",
        "created": "10-19-2016",
        "assignee": "Anne  Wiley"
    },
    {
        "station": "KUTV",
        "id": "SRP-3167",
        "title": "Excepteur in aliqua anim qui quis duis ipsum cupidatat excepteur.",
        "status": "Billing",
        "created": "08-23-2017",
        "assignee": "Green  Hewitt"
    },
    {
        "station": "WMWT",
        "id": "SRP-5180",
        "title": "In quis ut culpa adipisicing esse quis nostrud qui adipisicing anim.",
        "status": "Awaiting Billing Corrections",
        "created": "02-22-2016",
        "assignee": "David  Noel"
    },
    {
        "station": "RGBA",
        "id": "SRP-4836",
        "title": "Duis elit cillum reprehenderit ex ipsum ad in dolor proident cupidatat cillum aliquip non non.",
        "status": "Awaiting Billing Corrections",
        "created": "06-17-2016",
        "assignee": "Roseann  Evans"
    },
    {
        "station": "WWWT",
        "id": "SRP-4502",
        "title": "Proident velit proident esse cupidatat ea proident.",
        "status": "Billing",
        "created": "12-25-2016",
        "assignee": "Delacruz  Fleming"
    },
    {
        "station": "WWWT",
        "id": "SRP-3984",
        "title": "Officia consectetur amet aute eiusmod officia minim excepteur pariatur eiusmod ea nisi mollit.",
        "status": "Billing",
        "created": "08-01-2017",
        "assignee": "Murray  Soto"
    },
    {
        "station": "WWWT",
        "id": "SRP-4604",
        "title": "Ipsum duis elit aliquip enim.",
        "status": "Awaiting Billing Corrections",
        "created": "01-28-2016",
        "assignee": "Rena  Hardy"
    },
    {
        "station": "KARR",
        "id": "SRP-3918",
        "title": "Do fugiat elit eu non incididunt.",
        "status": "Awaiting Elements",
        "created": "02-11-2016",
        "assignee": "May  Robles"
    },
    {
        "station": "KABB",
        "id": "SRP-4445",
        "title": "Quis anim consequat Lorem aliqua sunt mollit eu consequat excepteur et deserunt culpa.",
        "status": "Modified",
        "created": "02-17-2017",
        "assignee": "Kathie  Porter"
    },
    {
        "station": "RGBA",
        "id": "SRP-5899",
        "title": "Aliqua deserunt veniam enim magna.",
        "status": "Awaiting Billing Corrections",
        "created": "02-25-2017",
        "assignee": "Duran  Gregory"
    },
    {
        "station": "KOMO",
        "id": "SRP-3493",
        "title": "Fugiat quis qui ex anim labore esse ea sunt anim Lorem et ullamco quis ex.",
        "status": "Reserve Inventory",
        "created": "06-29-2016",
        "assignee": "Esperanza  Cantrell"
    },
    {
        "station": "RGBA",
        "id": "SRP-5320",
        "title": "Commodo minim occaecat cillum proident ipsum veniam incididunt excepteur deserunt qui excepteur quis quis ullamco.",
        "status": "Modified",
        "created": "02-04-2016",
        "assignee": "Hamilton  Stafford"
    },
    {
        "station": "KABB",
        "id": "SRP-4795",
        "title": "Quis est mollit laboris qui occaecat incididunt.",
        "status": "Billing",
        "created": "05-25-2017",
        "assignee": "Mona  Levy"
    },
    {
        "station": "KARR",
        "id": "SRP-4234",
        "title": "Nulla ullamco cupidatat ea officia esse cillum.",
        "status": "Awaiting Billing Corrections",
        "created": "06-06-2016",
        "assignee": "Wiggins  Grimes"
    },
    {
        "station": "KABB",
        "id": "SRP-5273",
        "title": "Do sit dolore fugiat dolor incididunt aliquip pariatur sit et elit excepteur.",
        "status": "Reserve Inventory",
        "created": "05-04-2017",
        "assignee": "Hanson  Le"
    },
    {
        "station": "KARR",
        "id": "SRP-5373",
        "title": "Nulla anim aute fugiat cillum non.",
        "status": "Reserve Inventory",
        "created": "04-18-2017",
        "assignee": "Elva  Hebert"
    },
    {
        "station": "WWWT",
        "id": "SRP-5628",
        "title": "Enim elit nostrud do enim laborum nulla sit incididunt commodo ad esse.",
        "status": "Reserve Inventory",
        "created": "10-11-2016",
        "assignee": "Rosario  Mckee"
    },
    {
        "station": "KABB",
        "id": "SRP-3009",
        "title": "Ex cillum qui dolor do culpa id laboris dolore fugiat ex Lorem eiusmod excepteur.",
        "status": "Modified",
        "created": "12-24-2016",
        "assignee": "Garrison  Zamora"
    },
    {
        "station": "WMWT",
        "id": "SRP-4987",
        "title": "Do pariatur cupidatat velit reprehenderit ut ex mollit aliquip veniam pariatur.",
        "status": "Awaiting Elements",
        "created": "04-24-2016",
        "assignee": "Stein  Blanchard"
    },
    {
        "station": "KABB",
        "id": "SRP-5565",
        "title": "Irure ad veniam dolore ad occaecat nostrud incididunt ut eu id.",
        "status": "Modified",
        "created": "04-15-2016",
        "assignee": "Roy  Hoover"
    },
    {
        "station": "WSYX",
        "id": "SRP-4859",
        "title": "Ullamco irure est reprehenderit irure pariatur ullamco est eiusmod labore dolor exercitation labore cillum.",
        "status": "Reserve Inventory",
        "created": "01-25-2016",
        "assignee": "Tran  Anthony"
    },
    {
        "station": "KABB",
        "id": "SRP-4194",
        "title": "Eu elit aliqua aute pariatur excepteur sit duis ut.",
        "status": "Modified",
        "created": "12-09-2016",
        "assignee": "Huffman  Nolan"
    },
    {
        "station": "WSYX",
        "id": "SRP-4528",
        "title": "Tempor amet sint adipisicing do ex.",
        "status": "Awaiting Billing Corrections",
        "created": "04-22-2017",
        "assignee": "Consuelo  Marsh"
    },
    {
        "station": "KABB",
        "id": "SRP-3764",
        "title": "Ut aliquip esse aliquip amet ad nostrud nulla in occaecat magna.",
        "status": "Awaiting Billing Corrections",
        "created": "11-28-2016",
        "assignee": "Clarice  Avila"
    },
    {
        "station": "KABB",
        "id": "SRP-3236",
        "title": "Enim deserunt non eu in.",
        "status": "Modified",
        "created": "08-14-2017",
        "assignee": "Rodgers  House"
    },
    {
        "station": "WWWT",
        "id": "SRP-3711",
        "title": "Enim culpa ex sint voluptate officia consectetur dolor nostrud tempor ullamco consectetur sit est fugiat.",
        "status": "Awaiting Elements",
        "created": "09-05-2016",
        "assignee": "Chandra  Cash"
    },
    {
        "station": "WWWT",
        "id": "SRP-4739",
        "title": "Tempor magna laborum laboris reprehenderit aliqua labore veniam duis magna est dolor dolore.",
        "status": "Billing",
        "created": "07-14-2017",
        "assignee": "Alvarado  Spencer"
    },
    {
        "station": "WMWT",
        "id": "SRP-5574",
        "title": "Nisi aliqua nisi elit ullamco sit anim duis et proident occaecat ut dolore aute cillum.",
        "status": "Awaiting Elements",
        "created": "05-26-2017",
        "assignee": "Fuentes  Haley"
    },
    {
        "station": "KARR",
        "id": "SRP-5166",
        "title": "Culpa non qui sint sint non.",
        "status": "Reserve Inventory",
        "created": "08-06-2016",
        "assignee": "Fran  Greer"
    },
    {
        "station": "WMWT",
        "id": "SRP-5355",
        "title": "Excepteur ad laboris ut aute dolor anim sit reprehenderit irure.",
        "status": "Modified",
        "created": "05-09-2016",
        "assignee": "Cara  Ashley"
    },
    {
        "station": "WMWT",
        "id": "SRP-4100",
        "title": "Elit aliqua sint aliqua nostrud nulla voluptate ut cupidatat consectetur exercitation do proident veniam.",
        "status": "Billing",
        "created": "02-20-2016",
        "assignee": "Gaines  Foster"
    },
    {
        "station": "KABB",
        "id": "SRP-5819",
        "title": "Do minim reprehenderit esse consectetur consectetur ex deserunt mollit.",
        "status": "Modified",
        "created": "08-24-2017",
        "assignee": "Audra  Hutchinson"
    },
    {
        "station": "WBFF",
        "id": "SRP-5026",
        "title": "Elit proident fugiat in excepteur ut nisi voluptate consequat adipisicing aliqua ut.",
        "status": "Billing",
        "created": "08-10-2017",
        "assignee": "Hopkins  Bennett"
    },
    {
        "station": "KOMO",
        "id": "SRP-4206",
        "title": "Fugiat non commodo sunt dolore excepteur occaecat incididunt anim officia cupidatat adipisicing.",
        "status": "Awaiting Billing Corrections",
        "created": "01-20-2017",
        "assignee": "Cantrell  Summers"
    },
    {
        "station": "KABB",
        "id": "SRP-5532",
        "title": "Elit proident nostrud non qui do nisi cupidatat non aliquip aliqua anim nulla qui.",
        "status": "Billing",
        "created": "05-19-2016",
        "assignee": "Cervantes  Moses"
    },
    {
        "station": "WBFF",
        "id": "SRP-5931",
        "title": "Cillum nulla enim anim eu sunt labore.",
        "status": "Modified",
        "created": "04-14-2016",
        "assignee": "Wynn  Olsen"
    },
    {
        "station": "KARR",
        "id": "SRP-5931",
        "title": "Ex culpa aliquip amet dolore veniam pariatur anim aute laboris est deserunt deserunt officia cupidatat.",
        "status": "Modified",
        "created": "05-08-2016",
        "assignee": "Eaton  Lewis"
    },
    {
        "station": "KABB",
        "id": "SRP-3017",
        "title": "Ex duis et in magna.",
        "status": "Awaiting Billing Corrections",
        "created": "04-15-2017",
        "assignee": "Thompson  Wilcox"
    },
    {
        "station": "WMWT",
        "id": "SRP-5694",
        "title": "Consequat mollit velit cillum cillum ut.",
        "status": "Reserve Inventory",
        "created": "11-06-2016",
        "assignee": "Pearl  Jacobs"
    },
    {
        "station": "KARR",
        "id": "SRP-5216",
        "title": "Pariatur incididunt et id minim veniam voluptate cupidatat eiusmod reprehenderit aute.",
        "status": "Awaiting Billing Corrections",
        "created": "08-09-2017",
        "assignee": "Gardner  Mcknight"
    },
    {
        "station": "KARR",
        "id": "SRP-5816",
        "title": "Do enim veniam aliquip mollit eu veniam aliqua.",
        "status": "Billing",
        "created": "05-13-2017",
        "assignee": "Sparks  Burt"
    },
    {
        "station": "KARR",
        "id": "SRP-5753",
        "title": "Ea culpa sit id reprehenderit pariatur.",
        "status": "Awaiting Billing Corrections",
        "created": "06-04-2016",
        "assignee": "Nettie  Williamson"
    },
    {
        "station": "KARR",
        "id": "SRP-4149",
        "title": "Labore eiusmod laboris officia fugiat culpa pariatur adipisicing nulla labore nisi.",
        "status": "Awaiting Elements",
        "created": "02-22-2017",
        "assignee": "Paulette  Shaffer"
    },
    {
        "station": "WBFF",
        "id": "SRP-4151",
        "title": "Ea reprehenderit ex dolore aliqua velit.",
        "status": "Awaiting Elements",
        "created": "11-27-2016",
        "assignee": "Effie  Roth"
    },
    {
        "station": "KOMO",
        "id": "SRP-3679",
        "title": "Do anim excepteur officia ad nulla esse laborum officia exercitation est.",
        "status": "Reserve Inventory",
        "created": "02-08-2016",
        "assignee": "English  Mitchell"
    },
    {
        "station": "RGBA",
        "id": "SRP-4710",
        "title": "Eiusmod cupidatat aliqua culpa cillum.",
        "status": "Awaiting Billing Corrections",
        "created": "02-24-2017",
        "assignee": "Cox  Stephens"
    },
    {
        "station": "WWWT",
        "id": "SRP-3834",
        "title": "Excepteur dolore labore ullamco aute.",
        "status": "Awaiting Billing Corrections",
        "created": "07-15-2017",
        "assignee": "Willie  Hopkins"
    },
    {
        "station": "WMWT",
        "id": "SRP-4418",
        "title": "Irure irure et officia aliquip nulla cupidatat nulla veniam esse laboris ea officia enim.",
        "status": "Awaiting Billing Corrections",
        "created": "02-22-2016",
        "assignee": "Cathy  Hoffman"
    },
    {
        "station": "KUTV",
        "id": "SRP-3506",
        "title": "Exercitation officia ea do exercitation.",
        "status": "Awaiting Elements",
        "created": "12-15-2016",
        "assignee": "Linda  Barker"
    },
    {
        "station": "RGBA",
        "id": "SRP-5282",
        "title": "Excepteur adipisicing ullamco anim quis adipisicing ullamco irure cupidatat.",
        "status": "Reserve Inventory",
        "created": "01-09-2017",
        "assignee": "Francine  Phelps"
    },
    {
        "station": "WBFF",
        "id": "SRP-5627",
        "title": "Excepteur proident aute fugiat culpa ex pariatur.",
        "status": "Awaiting Elements",
        "created": "08-03-2016",
        "assignee": "Colon  Kerr"
    },
    {
        "station": "KARR",
        "id": "SRP-4125",
        "title": "Proident voluptate in aliqua sit Lorem velit nulla non est minim ea ut officia.",
        "status": "Modified",
        "created": "10-13-2016",
        "assignee": "Christine  Beasley"
    },
    {
        "station": "WBFF",
        "id": "SRP-4880",
        "title": "Do commodo sint officia duis cillum.",
        "status": "Awaiting Elements",
        "created": "04-17-2016",
        "assignee": "Palmer  West"
    },
    {
        "station": "WSYX",
        "id": "SRP-5829",
        "title": "Anim irure quis mollit laboris occaecat esse sint irure.",
        "status": "Modified",
        "created": "06-11-2017",
        "assignee": "Angelia  Mosley"
    },
    {
        "station": "WBFF",
        "id": "SRP-4612",
        "title": "Adipisicing ullamco ullamco excepteur nisi quis aliquip ipsum.",
        "status": "Awaiting Billing Corrections",
        "created": "01-03-2016",
        "assignee": "Irma  Moss"
    },
    {
        "station": "RGBA",
        "id": "SRP-5508",
        "title": "Nulla commodo esse tempor do incididunt adipisicing cillum aliqua commodo sit mollit duis.",
        "status": "Awaiting Elements",
        "created": "06-29-2017",
        "assignee": "Ruth  Bryan"
    },
    {
        "station": "KOMO",
        "id": "SRP-5508",
        "title": "Occaecat laboris non aute Lorem anim nostrud laborum aute mollit adipisicing voluptate magna sit.",
        "status": "Billing",
        "created": "04-12-2017",
        "assignee": "Blanchard  Compton"
    },
    {
        "station": "KABB",
        "id": "SRP-3590",
        "title": "Culpa nisi velit adipisicing esse mollit tempor magna ea proident incididunt velit ad.",
        "status": "Awaiting Billing Corrections",
        "created": "09-11-2016",
        "assignee": "Jackson  Head"
    },
    {
        "station": "KARR",
        "id": "SRP-3995",
        "title": "Velit aliquip nisi culpa ut.",
        "status": "Modified",
        "created": "08-29-2017",
        "assignee": "Good  Velez"
    },
    {
        "station": "WWWT",
        "id": "SRP-3742",
        "title": "Excepteur consequat veniam adipisicing tempor.",
        "status": "Awaiting Elements",
        "created": "05-28-2017",
        "assignee": "Bender  Moreno"
    },
    {
        "station": "WWWT",
        "id": "SRP-5371",
        "title": "Anim labore sint nisi do mollit et consectetur fugiat amet anim officia.",
        "status": "Modified",
        "created": "03-05-2016",
        "assignee": "Gertrude  Wolfe"
    },
    {
        "station": "RGBA",
        "id": "SRP-5962",
        "title": "Id ullamco tempor eu adipisicing est aliqua anim.",
        "status": "Billing",
        "created": "12-28-2016",
        "assignee": "Nadine  Moon"
    },
    {
        "station": "WWWT",
        "id": "SRP-4485",
        "title": "Non anim pariatur magna non amet ut ullamco irure enim nostrud.",
        "status": "Reserve Inventory",
        "created": "01-26-2017",
        "assignee": "Golden  Cortez"
    },
    {
        "station": "KARR",
        "id": "SRP-3196",
        "title": "Magna reprehenderit enim culpa commodo voluptate sint adipisicing qui dolor velit qui occaecat deserunt eu.",
        "status": "Awaiting Elements",
        "created": "08-28-2016",
        "assignee": "Joni  Lynn"
    },
    {
        "station": "KARR",
        "id": "SRP-3355",
        "title": "Irure aliquip fugiat sit commodo adipisicing ex reprehenderit ex ipsum.",
        "status": "Awaiting Elements",
        "created": "08-18-2016",
        "assignee": "Bowman  Rodriguez"
    },
    {
        "station": "RGBA",
        "id": "SRP-4525",
        "title": "Incididunt Lorem laborum cupidatat duis tempor enim aute reprehenderit.",
        "status": "Awaiting Elements",
        "created": "09-10-2016",
        "assignee": "Mercer  Strickland"
    },
    {
        "station": "KABB",
        "id": "SRP-4043",
        "title": "Ipsum velit fugiat eu tempor deserunt dolor amet ut sunt.",
        "status": "Billing",
        "created": "08-18-2016",
        "assignee": "Sandoval  Dixon"
    },
    {
        "station": "WSYX",
        "id": "SRP-5634",
        "title": "In est consectetur commodo officia sit veniam aliqua.",
        "status": "Billing",
        "created": "04-01-2017",
        "assignee": "Gordon  Bradford"
    },
    {
        "station": "KARR",
        "id": "SRP-5621",
        "title": "Cillum cillum nisi et incididunt duis.",
        "status": "Awaiting Billing Corrections",
        "created": "05-26-2016",
        "assignee": "Mcdowell  Nieves"
    },
    {
        "station": "KOMO",
        "id": "SRP-5687",
        "title": "Dolore labore laborum tempor do ea aliquip consectetur do est.",
        "status": "Billing",
        "created": "09-23-2016",
        "assignee": "Watkins  Ballard"
    },
    {
        "station": "WSYX",
        "id": "SRP-3756",
        "title": "Deserunt reprehenderit pariatur commodo voluptate.",
        "status": "Modified",
        "created": "08-02-2017",
        "assignee": "Tabitha  Garrison"
    },
    {
        "station": "KABB",
        "id": "SRP-4673",
        "title": "Fugiat commodo cillum excepteur proident laboris consequat ipsum voluptate tempor consequat anim.",
        "status": "Awaiting Billing Corrections",
        "created": "03-19-2016",
        "assignee": "Jessica  Fitzpatrick"
    },
    {
        "station": "WMWT",
        "id": "SRP-4806",
        "title": "Magna deserunt laboris proident enim dolore.",
        "status": "Awaiting Billing Corrections",
        "created": "06-24-2016",
        "assignee": "Guy  Gould"
    },
    {
        "station": "WSYX",
        "id": "SRP-4457",
        "title": "Aliqua duis est id exercitation mollit proident.",
        "status": "Reserve Inventory",
        "created": "01-30-2017",
        "assignee": "Etta  Bridges"
    },
    {
        "station": "KABB",
        "id": "SRP-5359",
        "title": "Minim aliquip quis dolor qui voluptate do ex consectetur.",
        "status": "Awaiting Billing Corrections",
        "created": "07-07-2017",
        "assignee": "Mathews  Clarke"
    },
    {
        "station": "KOMO",
        "id": "SRP-4345",
        "title": "Non sunt exercitation irure ad enim.",
        "status": "Reserve Inventory",
        "created": "05-17-2016",
        "assignee": "Hilary  Bean"
    },
    {
        "station": "KABB",
        "id": "SRP-4328",
        "title": "Nulla id duis enim aliquip tempor eiusmod duis enim incididunt velit.",
        "status": "Reserve Inventory",
        "created": "04-27-2017",
        "assignee": "Deena  Rosales"
    },
    {
        "station": "WBFF",
        "id": "SRP-3355",
        "title": "Sit nulla do ipsum non et ut in culpa sint veniam aute incididunt.",
        "status": "Modified",
        "created": "07-20-2017",
        "assignee": "Black  Conner"
    },
    {
        "station": "KUTV",
        "id": "SRP-4693",
        "title": "Exercitation Lorem cupidatat labore nostrud laboris in eiusmod voluptate in magna.",
        "status": "Reserve Inventory",
        "created": "06-27-2016",
        "assignee": "Mueller  Allison"
    },
    {
        "station": "RGBA",
        "id": "SRP-5653",
        "title": "Occaecat eu exercitation ut ea dolor veniam laborum esse elit ad et.",
        "status": "Billing",
        "created": "12-26-2016",
        "assignee": "Jordan  Norton"
    },
    {
        "station": "RGBA",
        "id": "SRP-3507",
        "title": "Nulla adipisicing ut tempor aliqua do.",
        "status": "Awaiting Elements",
        "created": "11-26-2016",
        "assignee": "Elliott  Sellers"
    },
    {
        "station": "KABB",
        "id": "SRP-3346",
        "title": "Tempor minim minim ut reprehenderit adipisicing dolor ad.",
        "status": "Billing",
        "created": "12-26-2016",
        "assignee": "Campbell  Allen"
    },
    {
        "station": "RGBA",
        "id": "SRP-3438",
        "title": "Tempor nulla ut ad qui aute ad occaecat pariatur magna duis fugiat occaecat.",
        "status": "Modified",
        "created": "04-26-2017",
        "assignee": "Bridget  Durham"
    },
    {
        "station": "WSYX",
        "id": "SRP-4905",
        "title": "Sint eu amet aliquip nulla ullamco occaecat aliquip dolore quis.",
        "status": "Modified",
        "created": "12-02-2016",
        "assignee": "Beatriz  Rivas"
    },
    {
        "station": "KARR",
        "id": "SRP-5295",
        "title": "Occaecat ipsum sunt labore elit.",
        "status": "Modified",
        "created": "05-15-2016",
        "assignee": "Eugenia  Blevins"
    },
    {
        "station": "WWWT",
        "id": "SRP-4530",
        "title": "Fugiat anim et et mollit commodo excepteur duis pariatur minim et eu sint id reprehenderit.",
        "status": "Modified",
        "created": "11-24-2016",
        "assignee": "Bette  Langley"
    },
    {
        "station": "KARR",
        "id": "SRP-4127",
        "title": "In exercitation laborum eiusmod aliqua.",
        "status": "Modified",
        "created": "01-28-2017",
        "assignee": "Rachel  Stevens",
        "breaches" : [{
            "active": true,
            "duration": 2.5,
            "name": "Reserve Inventory",
            "client": false
        }]
    },
    {
        "station": "KARR",
        "id": "SRP-3816",
        "title": "Est elit sit adipisicing consectetur.",
        "status": "Awaiting Elements",
        "created": "06-17-2016",
        "assignee": "Schwartz  Bentley"
    },
    {
        "station": "WSYX",
        "id": "SRP-3369",
        "title": "Voluptate eiusmod ullamco sit eu nisi laborum reprehenderit dolore commodo velit mollit cillum.",
        "status": "Awaiting Elements",
        "created": "07-27-2017",
        "assignee": "Jimmie  Vaughn"
    },
    {
        "station": "WSYX",
        "id": "SRP-5808",
        "title": "Excepteur duis Lorem Lorem do veniam dolore occaecat voluptate.",
        "status": "Billing",
        "created": "01-22-2016",
        "assignee": "Osborn  Reilly"
    },
    {
        "station": "WMWT",
        "id": "SRP-4959",
        "title": "Cupidatat labore eiusmod aute et ut sint.",
        "status": "Billing",
        "created": "02-29-2016",
        "assignee": "Glass  Garza"
    },
    {
        "station": "WSYX",
        "id": "SRP-5950",
        "title": "In adipisicing do est officia eiusmod labore Lorem.",
        "status": "Billing",
        "created": "03-31-2017",
        "assignee": "Nichols  Middleton"
    },
    {
        "station": "WSYX",
        "id": "SRP-4978",
        "title": "Dolore tempor aliquip laboris aliqua aliqua ea enim magna tempor dolore nisi fugiat laboris consequat.",
        "status": "Awaiting Elements",
        "created": "04-11-2016",
        "assignee": "Tanner  Salinas"
    }
];

const local_advertising_breaches = [
    {
        "station": "RGBA",
        "id": "SRP-4324",
        "title": "Quis deserunt laboris fugiat do.",
        "status": "Reserve Inventory",
        "created": "01-25-2016",
        "assignee": "Inez  Copeland",
        "breaches": [
            {
                "active": false,
                "client": true,
                "duration": 14.7,
                "name": "Reserve Inventory"
            }
        ]
    },
    {
        "station": "RGBA",
        "id": "SRP-5607",
        "title": "Elit labore consequat dolor voluptate mollit reprehenderit duis proident labore aute sint qui.",
        "status": "Reserve Inventory",
        "created": "05-18-2017",
        "assignee": "Heather  Stafford",
        "breaches": [
            {
                "active": false,
                "client": true,
                "duration": 3.4,
                "name": "Reserve Inventory"
            }
        ]
    },
    {
        "station": "KUTV",
        "id": "SRP-3293",
        "title": "Anim dolore ut excepteur do in.",
        "status": "Billing",
        "created": "02-03-2017",
        "assignee": "Hubbard  Rivers",
        "breaches": [
            {
                "active": false,
                "client": true,
                "duration": 8.5,
                "name": "Billing"
            }
        ]
    },
    {
        "station": "WSYX",
        "id": "SRP-5114",
        "title": "Veniam proident occaecat est velit ullamco in consectetur do officia consectetur occaecat officia velit.",
        "status": "Billing",
        "created": "09-18-2016",
        "assignee": "Jo  Owens",
        "breaches": [
            {
                "active": false,
                "client": true,
                "duration": 13.2,
                "name": "Reserve Inventory"
            }
        ]
    },
    {
        "station": "RGBA",
        "id": "SRP-5749",
        "title": "Minim minim sint culpa consectetur nulla deserunt.",
        "status": "Modified",
        "created": "03-30-2017",
        "assignee": "Lara  Gutierrez",
        "breaches": [
            {
                "active": true,
                "client": true,
                "duration": 6.1,
                "name": "Billing"
            }
        ]
    },
    {
        "station": "WWWT",
        "id": "SRP-4869",
        "title": "Id do quis esse amet ipsum dolore qui ex esse eiusmod.",
        "status": "Awaiting Elements",
        "created": "09-03-2016",
        "assignee": "Graves  Wells",
        "breaches": [
            {
                "active": true,
                "client": true,
                "duration": 2.4,
                "name": "Reserve Inventory"
            }
        ]
    },
    {
        "station": "WSYX",
        "id": "SRP-3816",
        "title": "Qui magna nulla cillum exercitation esse dolor laborum adipisicing laborum et velit.",
        "status": "Modified",
        "created": "06-13-2016",
        "assignee": "Stark  Mann",
        "breaches": [
            {
                "active": false,
                "client": false,
                "duration": 5.8,
                "name": "Billing"
            }
        ]
    },
    {
        "station": "WBFF",
        "id": "SRP-3272",
        "title": "Ad esse sit commodo excepteur id commodo cupidatat consequat nostrud ad exercitation laborum labore.",
        "status": "Reserve Inventory",
        "created": "05-23-2017",
        "assignee": "Cathryn  Hayden",
        "breaches": [
            {
                "active": true,
                "client": false,
                "duration": 7.3,
                "name": "Reserve Inventory"
            }
        ]
    },
    {
        "station": "KABB",
        "id": "SRP-3663",
        "title": "Proident ipsum ipsum amet excepteur labore qui irure ea deserunt eu velit officia.",
        "status": "Awaiting Elements",
        "created": "01-14-2016",
        "assignee": "Lesley  Gomez",
        "breaches": [
            {
                "active": true,
                "client": true,
                "duration": 9.1,
                "name": "Billing"
            }
        ]
    },
    {
        "station": "KABB",
        "id": "SRP-4803",
        "title": "Exercitation anim Lorem dolor cillum non consectetur proident qui proident irure qui.",
        "status": "Reserve Inventory",
        "created": "07-20-2017",
        "assignee": "Compton  Mcintosh",
        "breaches": [
            {
                "active": true,
                "client": false,
                "duration": 10,
                "name": "Billing"
            }
        ]
    },
    {
        "station": "KARR",
        "id": "SRP-5213",
        "title": "Ea do esse sunt fugiat nisi tempor in culpa quis dolor aute.",
        "status": "Awaiting Elements",
        "created": "07-26-2016",
        "assignee": "Rebekah  Lynch",
        "breaches": [
            {
                "active": true,
                "client": true,
                "duration": 10,
                "name": "Reserve Inventory"
            }
        ]
    },
    {
        "station": "KOMO",
        "id": "SRP-5177",
        "title": "Fugiat consectetur cupidatat adipisicing eu ad veniam fugiat nostrud elit ad veniam occaecat.",
        "status": "Billing",
        "created": "09-06-2016",
        "assignee": "Faith  York",
        "breaches": [
            {
                "active": true,
                "client": true,
                "duration": 3.5,
                "name": "Billing"
            }
        ]
    },
    {
        "station": "KOMO",
        "id": "SRP-4215",
        "title": "Ullamco pariatur ipsum velit et aute occaecat eiusmod sint dolor quis fugiat nisi reprehenderit consequat.",
        "status": "Reserve Inventory",
        "created": "01-19-2016",
        "assignee": "Pate  Clemons",
        "breaches": [
            {
                "active": true,
                "client": true,
                "duration": 18,
                "name": "Reserve Inventory"
            }
        ]
    },
    {
        "station": "KARR",
        "id": "SRP-3762",
        "title": "Exercitation dolor est magna cupidatat proident irure proident officia cupidatat in cillum quis quis.",
        "status": "Awaiting Billing Corrections",
        "created": "01-09-2017",
        "assignee": "Gonzales  Jensen",
        "breaches": [
            {
                "active": true,
                "client": true,
                "duration": 4.5,
                "name": "Billing"
            }
        ]
    },
    {
        "station": "WSYX",
        "id": "SRP-4433",
        "title": "Enim adipisicing exercitation dolor incididunt.",
        "status": "Awaiting Elements",
        "created": "07-04-2017",
        "assignee": "Neva  Atkins",
        "breaches": [
            {
                "active": true,
                "client": false,
                "duration": 6,
                "name": "Billing"
            }
        ]
    },
    {
        "station": "WSYX",
        "id": "SRP-5538",
        "title": "Incididunt proident dolore elit excepteur pariatur ea in eu.",
        "status": "Awaiting Elements",
        "created": "10-26-2016",
        "assignee": "Madden  Good",
        "breaches": [
            {
                "active": true,
                "client": false,
                "duration": 8.6,
                "name": "Reserve Inventory"
            }
        ]
    },
    {
        "station": "KUTV",
        "id": "SRP-3789",
        "title": "Quis sint mollit id exercitation deserunt est mollit nostrud deserunt.",
        "status": "Modified",
        "created": "11-13-2016",
        "assignee": "Hull  Greene",
        "breaches": [
            {
                "active": false,
                "client": true,
                "duration": 6.9,
                "name": "Reserve Inventory"
            }
        ]
    },
    {
        "station": "RGBA",
        "id": "SRP-5156",
        "title": "Ea aliquip voluptate incididunt irure mollit magna sit deserunt cupidatat aliquip.",
        "status": "Modified",
        "created": "02-23-2017",
        "assignee": "Yesenia  Reyes",
        "breaches": [
            {
                "active": false,
                "client": true,
                "duration": 3,
                "name": "Reserve Inventory"
            }
        ]
    },
    {
        "station": "KARR",
        "id": "SRP-4501",
        "title": "Excepteur esse eiusmod consectetur dolore.",
        "status": "Modified",
        "created": "07-11-2017",
        "assignee": "Acevedo  Lowery",
        "breaches": [
            {
                "active": false,
                "client": false,
                "duration": 5.4,
                "name": "Reserve Inventory"
            }
        ]
    },
    {
        "station": "KOMO",
        "id": "SRP-4922",
        "title": "Incididunt voluptate sunt proident elit eiusmod irure eiusmod exercitation aute qui tempor ut adipisicing.",
        "status": "Billing",
        "created": "12-16-2016",
        "assignee": "Mcdaniel  Nash",
        "breaches": [
            {
                "active": false,
                "client": false,
                "duration": 13.6,
                "name": "Billing"
            }
        ]
    }
];

const local_advertising_warnings = [
    {
        "station": "RGBA",
        "id": "SRP-4324",
        "title": "Quis deserunt laboris fugiat do.",
        "status": "Reserve Inventory",
        "created": "01-25-2016",
        "assignee": "Inez  Copeland",
        "breaches": [
            {
                "active": false,
                "client": true,
                "duration": 14.7,
                "name": "Reserve Inventory"
            }
        ]
    },
    {
        "station": "RGBA",
        "id": "SRP-5607",
        "title": "Elit labore consequat dolor voluptate mollit reprehenderit duis proident labore aute sint qui.",
        "status": "Reserve Inventory",
        "created": "05-18-2017",
        "assignee": "Heather  Stafford",
        "breaches": [
            {
                "active": false,
                "client": true,
                "duration": 3.4,
                "name": "Reserve Inventory"
            }
        ]
    },
    {
        "station": "KUTV",
        "id": "SRP-3293",
        "title": "Anim dolore ut excepteur do in.",
        "status": "Billing",
        "created": "02-03-2017",
        "assignee": "Hubbard  Rivers",
        "breaches": [
            {
                "active": false,
                "client": true,
                "duration": 8.5,
                "name": "Billing"
            }
        ]
    },
    {
        "station": "WSYX",
        "id": "SRP-5114",
        "title": "Veniam proident occaecat est velit ullamco in consectetur do officia consectetur occaecat officia velit.",
        "status": "Billing",
        "created": "09-18-2016",
        "assignee": "Jo  Owens",
        "breaches": [
            {
                "active": false,
                "client": true,
                "duration": 13.2,
                "name": "Reserve Inventory"
            }
        ]
    },
    {
        "station": "RGBA",
        "id": "SRP-5749",
        "title": "Minim minim sint culpa consectetur nulla deserunt.",
        "status": "Modified",
        "created": "03-30-2017",
        "assignee": "Lara  Gutierrez",
        "breaches": [
            {
                "active": true,
                "client": true,
                "duration": 6.1,
                "name": "Billing"
            }
        ]
    }
];

const sendAll = function () {
	return issues_all;
};

const sendLocal = function () {
    return local_advertising;
};

const sendLocalBreaches = function () {
    return local_advertising_breaches;
};

const sendLocalWarnings = function () {
    return local_advertising_warnings;
};

const sendData = function (id, category = '') {
    if (category === 'breaches') {
        return local_advertising_breaches;
    }

    if (category === 'warnings') {
        return local_advertising_warnings;
    }

    if (category !== '') {
        return null;
    }

    return local_advertising;
};

module.exports = {
	sendAll: sendAll,
    sendLocal: sendLocal,
    sendLocalBreaches: sendLocalBreaches,
    sendLocalWarnings: sendLocalWarnings,
    sendData: sendData
};