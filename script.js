var LOCATIONS_FINAL = [['Saddle Peak NP',520,552,'Andaman and Nicobar Islands'],['North Button Island NP',520,566,'Andaman and Nicobar Islands'],['Middle Button Island NP',521,570,'Andaman and Nicobar Islands'],['South Button Island NP',520,577,'Andaman and Nicobar Islands'],['Rani Jhansi Marine NP',514,571,'Andaman and Nicobar Islands'],['Mount Harriett NP',515,590,'Andaman and Nicobar Islands'],['Mahatama Gandhi Marine (Wandoor) NP ',511,592,'Andaman and Nicobar Islands'],['Campbell Bay NP',533,682,'Andaman and Nicobar Islands'],['Galathea Bay NP',537,691,'Andaman and Nicobar Islands'],['Papikonda NP',282,460,'Andhra Pradesh'],['Rajiv Gandhi (Rameswaram) NP',225,518,'Andhra Pradesh'],['Sri Venkateswara NP',234,539,'Andhra Pradesh'],['Mouling NP',555,210,'Arunachal Pradesh'],['Namdapha NP',592,241,'Arunachal Pradesh'],['Dibru-Saikhowa NP',566,234,'Assam'],['Kaziranga NP',517,266,'Assam'],['Nameri NP',506,260,'Assam'],['Rajiv Gandhi Orang NP',497,265,'Assam'],['Manas NP',480,258,'Assam'],['Valmiki NP',331,244,'Bihar'],['Guru Ghasidas (Sanjay) NP',298,326,'Chhattisgarh'],['Indravati (Kutru) NP',270,422,'Chhattisgarh'],['Kanger Valley NP',291,429,'Chhattisgarh'],['Mollem NP',125,507,'Goa'],['Vansda NP',109,390,'Gujarat'],['Blackbuck (Velavadar) NP',80,363,'Gujarat'],['Gir NP',49,378,'Gujarat'],['Marine (Gulf of Kachchh) NP',24,360,'Gujarat'],['Kalesar NP',192,171,'Haryana'],['Sultanpur NP',181,219,'Haryana'],['Inderkilla NP',198,124,'Himachal Pradesh'],['Pin Valley NP',202,130,'Himachal Pradesh'],['Khirganga NP',197,132,'Himachal Pradesh'],['Great Himalayan NP',189,145,'Himachal Pradesh'],['Simbalbara NP',192,166,'Himachal Pradesh'],['Hemis NP',190,80,'Jammu and Kashmir'],['City Forest (Salim Ali) NP',142,82,'Jammu and Kashmir'],['Dachigam NP',146,83,'Jammu and Kashmir'],['Kishtwar NP',153,93,'Jammu and Kashmir'],['Betla NP',334,319,'Jharkhand'],['Anshi NP',130,523,'Karnataka'],['Kudremukh NP',146,546,'Karnataka'],['Nagarahole (Rajiv Gandhi) NP',157,577,'Karnataka'],['Bandipur NP',167,581,'Karnataka'],['Bannerghatta NP',193,569,'Karnataka'],['Silent Valley NP',176,604,'Kerala'],['Anamudi Shola NP',181,618,'Kerala'],['Eravikulam NP',184,623,'Kerala'],['Mathikettan Shola NP',187,627,'Kerala'],['Pambadum Shola NP',188,632,'Kerala'],['Periyar NP',190,639,'Kerala'],['Panna NP',249,303,'Madhya Pradesh'],['Madhav NP',199,288,'Madhya Pradesh'],['Van Vihar NP',186,333,'Madhya Pradesh'],['Dinosaur Fossils NP',147,353,'Madhya Pradesh'],['Sanjay NP',296,320,'Madhya Pradesh'],['Bandhavgarh NP',271,327,'Madhya Pradesh'],['Fossil NP',262,341,'Madhya Pradesh'],['Kanha NP',261,354,'Madhya Pradesh'],['Indira Priyadarshini Pench NP',231,371,'Madhya Pradesh'],['Satpura NP',220,355,'Madhya Pradesh'],['Tadoba NP',242,401,'Maharashtra'],['Nawegaon NP',250,386,'Maharashtra'],['Pench (Jawaharlal Nehru) NP',230,375,'Maharashtra'],['Gugamal NP',185,380,'Maharashtra'],['Sanjay Gandhi (Borivilli) NP',100,423,'Maharashtra'],['Chandoli NP',121,470,'Maharashtra'],['Keibul-Lamjao NP',538,308,'Manipur'],['Nokrek Ridge NP',462,286,'Meghalaya'],['Balphakram NP',479,289,'Meghalaya'],['Murlen NP',522,326,'Mizoram'],['Phawngpui Blue Mountain NP',518,348,'Mizoram'],['Intanki NP',532,285,'Nagaland'],['Bhitarkanika NP',392,393,'Odisha'],['Simlipal NP',381,375,'Odisha'],['Desert NP',59,252,'Rajasthan'],['Sariska NP',174,243,'Rajasthan'],['Keoladeo Ghana NP',193,245,'Rajasthan'],['Ranthambhore NP',170,276,'Rajasthan'],['Mukundra Hills NP',162,300,'Rajasthan'],['Khangchendzonga NP',422,233,'Sikkim'],['Guindy NP',248,566,'Tamil Nadu'],['Mudumalai NP',174,593,'Tamil Nadu'],['Mukurthi NP',178,599,'Tamil Nadu'],['Indira Gandhi (Annamalai) NP',188,619,'Tamil Nadu'],['Gulf of Mannar Marine NP',225,640,'Tamil Nadu'],['Kasu Brahmananda Reddy NP',220,449,'Telangana'],['Mrugavani NP',215,457,'Telangana'],['Mahaveer Harina Vanasthali NP',225,457,'Telangana'],['Clouded Leopard NP',485,326,'Tripura'],['Bison (Rajbari) NP',488,334,'Tripura'],['Dudhwa NP',259,216,'Uttar Pradesh'],['Nanda Devi NP',252,168,'Uttarakhand'],['Valley of Flowers NP',246,165,'Uttarakhand'],['Gangotri NP',228,151,'Uttarakhand'],['Govind NP',212,157,'Uttarakhand'],['Rajaji NP',213,182,'Uttarakhand'],['Corbett NP',228,191,'Uttarakhand'],['Singalila NP',418,250,'West Bengal'],['Neora Valley NP',432,250,'West Bengal'],['Gorumara NP',437,254,'West Bengal'],['Jaldapara NP',443,257,'West Bengal'],['Buxa NP',452,258,'West Bengal'],['Sunderban NP',436,370,'West Bengal']];
var locations = [];
var answer_check = [];
var num_loc = 0;
var current_loc = 0;
var LOC_R = 5;
var NEAR_R = 30;

var flag_started = false;
var flag_confirmed = false;

var COLOR_DEFAULT = "#0073e6";//"#0C7CED";//#0A6BCB";
var COLOR_SELECT = "#0080ff";//#0066ff";"#DBEAFA";//"#336699";//"hsla(210, 90%, 49%, 0.4)";
var COLOR_BORDER = "White";
var COLOR_BORDER_S = "#0A6BCB";
var SW_D = 1;
var SW_S = 1;

function init()
{
    //Deafult Settings
    document.getElementById("bt_skip").disabled = true;
    document.getElementById("bt_stop").disabled = true;
    num_loc = LOCATIONS_FINAL.length;
}

function removeLocations()
{
    var svg = document.getElementById("imgMap");
    var circles = document.getElementById("imgMap").getElementsByTagName("circle");
    var l = circles.length
    for (var i = 0; i < l; i++) {
        svg.removeChild(circles[0]);
    }
    
    var text_elements = document.getElementById("imgMap").getElementsByTagName("text");
    l = text_elements.length
    for (var i = 0; i < l; i++) {
        svg.removeChild(text_elements[0]);
    }
}


// function showTooltip(evt) {
//   let tooltip = document.getElementById("tooltip");
//   tooltip.innerHTML = evt.target.getAttributeNS(null, "id");
//   tooltip.style.display = "block";
//   tooltip.style.left = (evt.clientX) + 'px' ;
//   tooltip.style.top = (evt.clientY) + 'px';
// }

// function hideTooltip() {
//   var tooltip = document.getElementById("tooltip");
//   tooltip.style.display = "none";
// }

function getRamdomArrayIndex(N) {
    var array = [];
    for (var i = 0; i < N; i++)
    {
        array.push(i);
    }

    for (var i = N - 1; i > 0; i--)
    {
        var j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function bt_Start()
{
    if(!flag_started)
    {
        locations = [];
        answer_check = [];
        current_loc = 0;

        flag_started = true;
        flag_confirmed = false;

        num_loc = LOCATIONS_FINAL.length;
        var level = 0;
        if(document.getElementById("radio_easy").checked)
            level = parseInt(num_loc*0.3);
        else if(document.getElementById("radio_easy").checked)
            level = parseInt(num_loc*0.7);
        else
            level = num_loc;
        

        if(document.getElementById("cb_random").checked)
        {
            var randomIndex = getRamdomArrayIndex(num_loc);
            for(var i=0;i<level;i++)
            {
                locations.push(LOCATIONS_FINAL[randomIndex[i]]);
                answer_check.push(0);
            }
        }
        else
        {
            for(var i=0;i<level;i++)
            {
                locations.push(LOCATIONS_FINAL[i]);
                answer_check.push(0);
            }
        }

        document.getElementById("bt_skip").disabled = false;
        document.getElementById("bt_stop").disabled = false;
        document.getElementById("bt_start").disabled = true;
        document.getElementById("p_label").textContent = "Locate ("+(current_loc+1)+"/"+locations.length+")";
        document.getElementById("p_name").textContent = locations[current_loc][0];

        // Use this for local mode
        var elements = document.getElementById("imgMap").getElementsByTagName("path");


        for (var i = 0; i < elements.length; i++) {
            elements[i].setAttributeNS(null, 'fill', COLOR_DEFAULT);
            elements[i].setAttributeNS(null, 'stroke', COLOR_BORDER);
            elements[i].setAttributeNS(null, 'stroke-width', SW_D);
            //elements[i].setAttributeNS(null, 'fill', "Gray");
            elements[i].addEventListener("mouseover",  mouseOver);
            elements[i].addEventListener("mouseout",  mouseOut);
            elements[i].addEventListener("mousemove",  mouseMove);
            elements[i].addEventListener("mousedown",  mouseDown);
        }
        
        var svg = document.getElementById("imgMap");
        var circles = document.getElementById("imgMap").getElementsByTagName("circle");
        var l = circles.length
        for (var i = 0; i < l; i++) {
            svg.removeChild(circles[0]);
        }
        
        document.getElementById("correct").style.width = 0 + '%';
        document.getElementById("attempts").style.width = 0 + '%';
        document.getElementById("accuracy").style.width = 0 + '%';
        document.getElementById("wrong").style.width = 0 + '%';
        document.getElementById("correct").textContent = 0 + '%';
        document.getElementById("attempts").textContent = 0 + '%';
        document.getElementById("accuracy").textContent = 0 + '%';
        document.getElementById("wrong").textContent = 0 + '%';
        
        document.getElementById("l_correct").textContent = "Correct";
        document.getElementById("l_attempts").textContent = "Attempts";
        document.getElementById("l_accuracy").textContent = "Accuracy";
        document.getElementById("l_wrong").textContent = "Wrong";
        
    }
}

function bt_Stop()
{
    if (flag_started)
    {
        var attempts = 0;
        var correct = 0;
        var total_questions = locations.length;

        var elements = document.getElementById("imgMap").getElementsByTagName("path");
        for (var i = 0; i < elements.length; i++)
        {
            elements[i].setAttributeNS(null, 'fill', "lightgray");
        }
        
        removeLocations();
        var svg = document.getElementById("imgMap");
        for (var i=0;i<locations.length;i++) {
            var cir = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            cir.setAttributeNS(null, 'r', 3);
            cir.setAttributeNS(null, 'stroke-width', 3);
            
            cir.setAttributeNS(null, 'stroke', "Black");
            cir.setAttributeNS(null, 'fill', "transparent");
            cir.setAttributeNS(null, 'cx', locations[i][1]);
            cir.setAttributeNS(null, 'cy', locations[i][2]);
            if(answer_check[i]==1)
            {
                attempts = attempts+1;
                correct = correct+1;
                cir.setAttributeNS(null, 'stroke', "Green");
            }
            else if(answer_check[i]==-1)
            {
                attempts = attempts+1;
                cir.setAttributeNS(null, 'stroke', "Red");
            }
            svg.appendChild(cir);
        }
        
        var c = parseFloat((100.0*correct)/total_questions).toFixed(2)+'%';
        var at = parseFloat((100.0*attempts)/total_questions).toFixed(2)+'%';
        var ac = parseFloat((100.0*correct)/attempts).toFixed(2)+'%';
        var w = parseFloat((100.0*(total_questions-correct))/total_questions).toFixed(2)+'%';
                
        
        document.getElementById("correct").style.width = c;
        document.getElementById("attempts").style.width = at;
        document.getElementById("accuracy").style.width = ac;
        document.getElementById("wrong").style.width = w;
        
        document.getElementById("correct").textContent = c;
        document.getElementById("attempts").textContent = at;
        document.getElementById("accuracy").textContent = ac;
        document.getElementById("wrong").textContent = w;
        
        document.getElementById("l_correct").textContent = "Correct: "+correct+"/"+total_questions;
        document.getElementById("l_attempts").textContent = "Attempts: "+attempts+"/"+total_questions;
        document.getElementById("l_accuracy").textContent = "Accuracy: "+correct+"/"+attempts;
        document.getElementById("l_wrong").textContent = "Wrong: "+(total_questions-correct)+"/"+total_questions;
        
        
        document.getElementById("bt_skip").disabled = true;
        document.getElementById("bt_stop").disabled = true;
        document.getElementById("bt_start").disabled = false;
        document.getElementById("bt_start").textContent = "Re Start";
        document.getElementById("p_label").textContent = "Locate";
        document.getElementById("p_name").textContent = "NP Name";
        
        flag_started = false;
        flag_confirmed = false;
        //hideTooltip();
    }
}

function bt_Skip()
{
    if(flag_started)
    {
        flag_confirmed = false;
        document.getElementById("bt_skip").textContent = "Skip";
        
        removeLocations();
        current_loc = current_loc+1;
        if(current_loc<locations.length)
        {
            document.getElementById("p_label").textContent = "Locate ("+(current_loc+1)+"/"+locations.length+")";
            document.getElementById("p_name").textContent = locations[current_loc][0];
            var elements = document.getElementById("imgMap").getElementsByTagName("path");
            for (var i = 0; i < elements.length; i++)
            {
                elements[i].setAttributeNS(null, 'fill', COLOR_DEFAULT);
            }
        }
        else
        {
            bt_Stop();
        }
    }
}

function mouseOver(e){
    if(flag_started && !flag_confirmed)
    {
        e.target.setAttributeNS(null, 'fill', COLOR_SELECT);
        e.target.setAttributeNS(null, 'stroke-width', SW_S);
        //showTooltip(e);
    }
}

function mouseOut(e){
    if(flag_started && !flag_confirmed)
    {
        e.target.setAttributeNS(null, 'fill', COLOR_DEFAULT);
        e.target.setAttributeNS(null, 'stroke-width', SW_D);
        //hideTooltip();
    }
}

function mouseMove(e){
    if(flag_started && !flag_confirmed)
    {
        //showTooltip(e);
    }
}

function mouseDown(e){
    if(flag_started)
    {
        if(flag_confirmed)
        {
            flag_confirmed = false;
            //showTooltip(e);
            document.getElementById("bt_skip").textContent = "Skip";
            current_loc = current_loc+1;
            removeLocations();
            if(current_loc<locations.length)
            {
                document.getElementById("p_label").textContent = "Locate ("+(current_loc+1)+"/"+locations.length+")";
                document.getElementById("p_name").textContent = locations[current_loc][0];
                var elements = document.getElementById("imgMap").getElementsByTagName("path");
                for (var i = 0; i < elements.length; i++)
                {
                    elements[i].setAttributeNS(null, 'fill', COLOR_DEFAULT);
                }
                e.target.setAttributeNS(null, 'fill', COLOR_SELECT);
            }
            else
            {
                bt_Stop();
            }
        }
        else
        {
            //hideTooltip();
            flag_confirmed = true;
            document.getElementById("bt_skip").textContent = "Next";
            
            var svg = document.getElementById("imgMap");
            var cir = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            cir.setAttributeNS(null, 'r', 3);
            cir.setAttributeNS(null, 'stroke-width', 3);
            cir.setAttributeNS(null, 'stroke', "Black");
            cir.setAttributeNS(null, 'fill', "transparent");
            cir.setAttributeNS(null, 'cx', locations[current_loc][1]);
            cir.setAttributeNS(null, 'cy', locations[current_loc][2]);
            svg.appendChild(cir);
            
            var text_element = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            if(locations[current_loc][1]>400)
            {
                text_element.setAttributeNS(null, 'x', locations[current_loc][1]-(locations[current_loc][0].length*8));   
            }
            else
            {
                text_element.setAttributeNS(null, 'x', locations[current_loc][1]);   
            }
            
            text_element.setAttributeNS(null, 'y', locations[current_loc][2]-5);
            text_element.appendChild(document.createTextNode(locations[current_loc][0]));
            svg.appendChild(text_element);
            
            if(e.target.getAttributeNS(null, "id").match(locations[current_loc][3]))
            {
                e.target.setAttributeNS(null, 'fill', "Green");
                answer_check[current_loc] = 1;
            }
            else
            {
                e.target.setAttributeNS(null, 'fill', "Red");
                document.getElementById("imgMap").getElementById(locations[current_loc][3]).setAttributeNS(null, 'fill', "Green");
                answer_check[current_loc] = -1;
            }
            
        }
    }
}