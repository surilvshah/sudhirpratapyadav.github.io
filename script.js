let LOCATIONS_FINAL = [['Saddle Peak NP',520,552,'Andaman and Nicobar Islands'],['North Button Island NP',520,566,'Andaman and Nicobar Islands'],['Middle Button Island NP',521,570,'Andaman and Nicobar Islands'],['South Button Island NP',520,577,'Andaman and Nicobar Islands'],['Rani Jhansi Marine NP',514,571,'Andaman and Nicobar Islands'],['Mount Harriett NP',515,590,'Andaman and Nicobar Islands'],['Mahatama Gandhi Marine (Wandoor) NP ',511,592,'Andaman and Nicobar Islands'],['Campbell Bay NP',533,682,'Andaman and Nicobar Islands'],['Galathea Bay NP',537,691,'Andaman and Nicobar Islands'],['Papikonda NP',282,460,'Andhra Pradesh'],['Rajiv Gandhi (Rameswaram) NP',225,518,'Andhra Pradesh'],['Sri Venkateswara NP',234,539,'Andhra Pradesh'],['Mouling NP',555,210,'Arunachal Pradesh'],['Namdapha NP',592,241,'Arunachal Pradesh'],['Dibru-Saikhowa NP',566,234,'Assam'],['Kaziranga NP',517,266,'Assam'],['Nameri NP',506,260,'Assam'],['Rajiv Gandhi Orang NP',497,265,'Assam'],['Manas NP',480,258,'Assam'],['Valmiki NP',331,244,'Bihar'],['Guru Ghasidas (Sanjay) NP',298,326,'Chhattisgarh'],['Indravati (Kutru) NP',270,422,'Chhattisgarh'],['Kanger Valley NP',291,429,'Chhattisgarh'],['Mollem NP',125,507,'Goa'],['Vansda NP',109,390,'Gujarat'],['Blackbuck (Velavadar) NP',80,363,'Gujarat'],['Gir NP',49,378,'Gujarat'],['Marine (Gulf of Kachchh) NP',24,360,'Gujarat'],['Kalesar NP',192,171,'Haryana'],['Sultanpur NP',181,219,'Haryana'],['Inderkilla NP',198,124,'Himachal Pradesh'],['Pin Valley NP',202,130,'Himachal Pradesh'],['Khirganga NP',197,132,'Himachal Pradesh'],['Great Himalayan NP',189,145,'Himachal Pradesh'],['Simbalbara NP',192,166,'Himachal Pradesh'],['Hemis NP',190,80,'Jammu and Kashmir'],['City Forest (Salim Ali) NP',142,82,'Jammu and Kashmir'],['Dachigam NP',146,83,'Jammu and Kashmir'],['Kishtwar NP',153,93,'Jammu and Kashmir'],['Betla NP',334,319,'Jharkhand'],['Anshi NP',130,523,'Karnataka'],['Kudremukh NP',146,546,'Karnataka'],['Nagarahole (Rajiv Gandhi) NP',157,577,'Karnataka'],['Bandipur NP',167,581,'Karnataka'],['Bannerghatta NP',193,569,'Karnataka'],['Silent Valley NP',176,604,'Kerala'],['Anamudi Shola NP',181,618,'Kerala'],['Eravikulam NP',184,623,'Kerala'],['Mathikettan Shola NP',187,627,'Kerala'],['Pambadum Shola NP',188,632,'Kerala'],['Periyar NP',190,639,'Kerala'],['Panna NP',249,303,'Madhya Pradesh'],['Madhav NP',199,288,'Madhya Pradesh'],['Van Vihar NP',186,333,'Madhya Pradesh'],['Dinosaur Fossils NP',147,353,'Madhya Pradesh'],['Sanjay NP',296,320,'Madhya Pradesh'],['Bandhavgarh NP',271,327,'Madhya Pradesh'],['Fossil NP',262,341,'Madhya Pradesh'],['Kanha NP',261,354,'Madhya Pradesh'],['Indira Priyadarshini Pench NP',231,371,'Madhya Pradesh'],['Satpura NP',220,355,'Madhya Pradesh'],['Tadoba NP',242,401,'Maharashtra'],['Nawegaon NP',250,386,'Maharashtra'],['Pench (Jawaharlal Nehru) NP',230,375,'Maharashtra'],['Gugamal NP',185,380,'Maharashtra'],['Sanjay Gandhi (Borivilli) NP',100,423,'Maharashtra'],['Chandoli NP',121,470,'Maharashtra'],['Keibul-Lamjao NP',538,308,'Manipur'],['Nokrek Ridge NP',462,286,'Meghalaya'],['Balphakram NP',479,289,'Meghalaya'],['Murlen NP',522,326,'Mizoram'],['Phawngpui Blue Mountain NP',518,348,'Mizoram'],['Intanki NP',532,285,'Nagaland'],['Bhitarkanika NP',392,393,'Odisha'],['Simlipal NP',381,375,'Odisha'],['Desert NP',59,252,'Rajasthan'],['Sariska NP',174,243,'Rajasthan'],['Keoladeo Ghana NP',193,245,'Rajasthan'],['Ranthambhore NP',170,276,'Rajasthan'],['Mukundra Hills NP',162,300,'Rajasthan'],['Khangchendzonga NP',422,233,'Sikkim'],['Guindy NP',248,566,'Tamil Nadu'],['Mudumalai NP',174,593,'Tamil Nadu'],['Mukurthi NP',178,599,'Tamil Nadu'],['Indira Gandhi (Annamalai) NP',188,619,'Tamil Nadu'],['Gulf of Mannar Marine NP',225,640,'Tamil Nadu'],['Kasu Brahmananda Reddy NP',220,449,'Telangana'],['Mrugavani NP',215,457,'Telangana'],['Mahaveer Harina Vanasthali NP',225,457,'Telangana'],['Clouded Leopard NP',485,326,'Tripura'],['Bison (Rajbari) NP',488,334,'Tripura'],['Dudhwa NP',259,216,'Uttar Pradesh'],['Nanda Devi NP',252,168,'Uttarakhand'],['Valley of Flowers NP',246,165,'Uttarakhand'],['Gangotri NP',228,151,'Uttarakhand'],['Govind NP',212,157,'Uttarakhand'],['Rajaji NP',213,182,'Uttarakhand'],['Corbett NP',228,191,'Uttarakhand'],['Singalila NP',418,250,'West Bengal'],['Neora Valley NP',432,250,'West Bengal'],['Gorumara NP',437,254,'West Bengal'],['Jaldapara NP',443,257,'West Bengal'],['Buxa NP',452,258,'West Bengal'],['Sunderban NP',436,370,'West Bengal']];
let locations = [];
let answer_check = [];
let num_loc = 0;
let current_loc = 0;
let LOC_R = 5;
let NEAR_R = 30;
let flag_started = false;
let flag_confirmed = false;
let COLOR_DEFAULT = "#0073e6";
let COLOR_SELECT = "#0080ff";
let COLOR_BORDER = "White";
let COLOR_BORDER_S = "#0A6BCB";
let SW_D = 1;
let SW_S = 1;

function init() {

}

function showTooltip(evt) {
    let tooltip = document.getElementById("tooltip");
    tooltip.innerHTML = evt.target.getAttributeNS(null, "id");
    tooltip.style.display = "block";
    tooltip.style.left = (evt.clientX) + 'px';
    tooltip.style.top = (evt.clientY) + 'px';
}

function hideTooltip() {
    var tooltip = document.getElementById("tooltip");
    tooltip.style.display = "none";
}

function mouseOver(e) {
    if (flag_started && !flag_confirmed) {
        e.target.setAttributeNS(null, 'fill', COLOR_SELECT);
        e.target.setAttributeNS(null, 'stroke-width', SW_S);
        showTooltip(e);
    }
}

function mouseOut(e) {
    if (flag_started && !flag_confirmed) {
        e.target.setAttributeNS(null, 'fill', COLOR_DEFAULT);
        e.target.setAttributeNS(null, 'stroke-width', SW_D);
        hideTooltip();
    }
}

function mouseMove(e) {
    if (flag_started && !flag_confirmed) {
        showTooltip(e);
    }
}

function bt_Start() {
    document.getElementById("div-start").style.display = "none";
    document.getElementById("div-quiz").style.display = "block";
    //document.getElementById("div-start").style.display = "none";
}

function bt_Skip() {

}

function bt_Stop() {

}
