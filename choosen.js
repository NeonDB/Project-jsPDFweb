function asyncblock_toggle() {
    let textdata = document.querySelectorAll("div.container_async")
    textdata.forEach((textdata) => {
        textdata.classList.toggle("visible_element")
    })
    textdata.forEach((textdata) => {
        textdata.classList.toggle("hidenseek_element")
    })
    let syncchbx = document.getElementById("check_part2")
    if (syncchbx.checked==true) document.getElementById('check_part1').disabled = true
    else document.getElementById('check_part1').disabled = false;
}
function syncblock_toggle() {
    let textdata = document.querySelectorAll("div.container_sync")
    textdata.forEach((textdata) => {
        textdata.classList.toggle("visible_element")
    })
    textdata.forEach((textdata) => {
        textdata.classList.toggle("hidenseek_element")
    })
    let syncchbx = document.getElementById("check_part1")
    if (syncchbx.checked==true) document.getElementById('check_part2').disabled = true
    else document.getElementById('check_part2').disabled = false;
}
function twice_camera_toggle() {
    let textdata = document.querySelector("div.container_camera")
        textdata.classList.toggle("visible_element")
        textdata.classList.toggle("hidenseek_element")
}
function slot_entry_toggle() {
    let textdata = document.querySelector("div.container_slot_entry")
        textdata.classList.toggle("visible_element")
        textdata.classList.toggle("hidenseek_element")
}
function bioidendifity_Examus_toggle() {
    let textdata = document.querySelector("div.container_blockExamus")
    textdata.classList.toggle("visible_element")
    textdata.classList.toggle("hidenseek_element")
    let syncchbx = document.getElementById("check_part5")
    if (syncchbx.checked==true) document.getElementById('check_part6').disabled = true,
    document.getElementById('check_part7').disabled = true
    else document.getElementById('check_part6').disabled = false,
    document.getElementById('check_part7').disabled = false;
}
function bioidendifity_EBS_toggle() {
    let textdata = document.querySelectorAll("div.container_blockEBS")
    textdata.forEach((textdata) => {
        textdata.classList.toggle("visible_element")
    })
    textdata.forEach((textdata) => {
        textdata.classList.toggle("hidenseek_element")
    })
    let syncchbx = document.getElementById("check_part6")
    if (syncchbx.checked==true) document.getElementById('check_part5').disabled = true,
    document.getElementById('check_part7').disabled = true
    else document.getElementById('check_part5').disabled = false,
    document.getElementById('check_part7').disabled = false;
}
function bioidendifity_VLLuna_toggle() {
    let textdata = document.querySelector("div.container_blockVLLuna")
    textdata.classList.toggle("visible_element")
    textdata.classList.toggle("hidenseek_element")
    let syncchbx = document.getElementById("check_part7")
    if (syncchbx.checked==true) document.getElementById('check_part5').disabled = true,
    document.getElementById('check_part6').disabled = true
    else document.getElementById('check_part5').disabled = false,
    document.getElementById('check_part6').disabled = false;

}
function personal_data_consent_toggle() {
    let textdata = document.querySelector("div.container_personal_data_consent")
        textdata.classList.toggle("visible_element")
        textdata.classList.toggle("hidenseek_element")
}
function standart_block_toggle() {
    let textdata = document.querySelectorAll("div.container_standart_block")
    textdata.forEach((textdata) => {
        textdata.classList.toggle("visible_element")
    })
    textdata.forEach((textdata) => {
        textdata.classList.toggle("hidenseek_element")
    })
}
function integration_typeMoodle_toggle() {
    let textdata = document.querySelector("div.container_block_generation")
        textdata.classList.toggle("visible_element")
        textdata.classList.toggle("hidenseek_element")
    let beginbutton = document.querySelector("div.container_moodleint_block")
        beginbutton.classList.toggle("hidenseek_element")
        beginbutton.classList.toggle("visible_element")
    let label = document.getElementById("cb_1")
    let syncchbx = document.getElementById("check_part9")
        if (syncchbx.checked==true) 
        label.classList.toggle("checkbox_row-active"),
        document.getElementById('check_part10').disabled = true,
        document.getElementById('check_part11').disabled = true
        else 
        label.classList.toggle("checkbox_row-active"),
        document.getElementById('check_part10').disabled = false,
        document.getElementById('check_part11').disabled = false;
}

function integration_typeAPI_toggle() {
    let textdata = document.querySelector("div.container_block_generation")
        textdata.classList.toggle("visible_element")
        textdata.classList.toggle("hidenseek_element")
        let syncchbx = document.getElementById("check_part10")
        let label = document.getElementById("cb_2")

        if (syncchbx.checked==true) 
        label.classList.toggle("checkbox_row-active"),
        document.getElementById('check_part9').disabled = true,
        document.getElementById('check_part11').disabled = true
        else 
        label.classList.toggle("checkbox_row-active"),
        document.getElementById('check_part9').disabled = false,
        document.getElementById('check_part11').disabled = false;
        
}
function integration_typeURLgeneration_toggle() {
    let textdata = document.querySelector("div.container_block_generation")
        textdata.classList.toggle("hidenseek_element")
        let syncchbx = document.getElementById("check_part11")
        let label = document.getElementById("cb_3")
        if (syncchbx.checked==true) 
        label.classList.toggle("checkbox_row-active"),
        document.getElementById('check_part9').disabled = true,
        document.getElementById('check_part10').disabled = true,
        document.getElementById('check_part4').disabled = true,
        document.getElementById('check_part5').disabled = true
        else 
        label.classList.toggle("checkbox_row-active"),
        document.getElementById('check_part9').disabled = false,
        document.getElementById('check_part10').disabled = false,
        document.getElementById('check_part4').disabled = false,
        document.getElementById('check_part5').disabled = false;
}
function faq_block_toggle() {
    let textdata = document.querySelectorAll("div.container_faq_block")
    textdata.forEach((textdata) => {
        textdata.classList.toggle("visible_element")
    })
    textdata.forEach((textdata) => {
        textdata.classList.toggle("hidenseek_element")
    })
}

function open_modalonclick() { 
    let open_modal = document.querySelectorAll('.open_modal');
    let modal = document.getElementById('modal');
    let body = document.getElementsByTagName('body')[0];
    let instruction_text = document.querySelector('.container_text')
    instruction_text.classList.toggle('hidenseek_element')
    instruction_text.classList.toggle('visible_element')
    for (let i = 0; i < open_modal.length; i++) {
    // клик на открытие
            modal.classList.add('modal_vis'); // добавляем видимость окна
            body.classList.add('body_block'); // убираем прокрутку
        
    }
};

function open2dialog() {
    let wmodal2 = document.getElementById("modal_txt1");
    wmodal2.classList.toggle("visible_element")
    wmodal2.classList.toggle("hidenseek_element")
    let wmodal3 = document.getElementById("modal_txt2");
    wmodal3.classList.toggle("visible_element")
    wmodal3.classList.toggle("hidenseek_element")
}
function open3dialog() {
    let wmodal1 = document.getElementById("modal_txt2");
    wmodal1.classList.toggle("visible_element")
    wmodal1.classList.toggle("hidenseek_element")
    let URLcheckbox = document.getElementById("check_part11").checked;
    if (URLcheckbox == true) {
        let wmodal5 = document.getElementById("modal_txt4");
        wmodal5.classList.toggle("visible_element")
        wmodal5.classList.toggle("hidenseek_element")    
    } else {
        let wmodal2 = document.getElementById("modal_txt3");
        wmodal2.classList.toggle("visible_element")
        wmodal2.classList.toggle("hidenseek_element")    
    }
}
function open4dialog() {
    let wmodal3 = document.getElementById("modal_txt3");
    wmodal3.classList.toggle("visible_element")
    wmodal3.classList.toggle("hidenseek_element")
    let wmodal4 = document.getElementById("modal_txt4");
    wmodal4.classList.toggle("visible_element")
    wmodal4.classList.toggle("hidenseek_element")
}
function open5dialog() {
    let wmodal4 = document.getElementById("modal_txt4");
    wmodal4.classList.toggle("visible_element")
    wmodal4.classList.toggle("hidenseek_element")
    let wmodal5 = document.getElementById("modal_txt5");
    wmodal5.classList.toggle("visible_element")
    wmodal5.classList.toggle("hidenseek_element")
}
function open6dialog() {
    let wmodal5 = document.getElementById("modal_txt5");
    wmodal5.classList.toggle("visible_element")
    wmodal5.classList.toggle("hidenseek_element")
    let URLcheckbox = document.getElementById("check_part11").checked;
    if (URLcheckbox == true) {
        let wmodal5 = document.getElementById("modal_txt7");
        wmodal5.classList.toggle("visible_element")
        wmodal5.classList.toggle("hidenseek_element")    
    } else {
        let wmodal6 = document.getElementById("modal_txt6");
        wmodal6.classList.toggle("visible_element")
        wmodal6.classList.toggle("hidenseek_element")
        }
}
function open7dialog() {
    let wmodal6 = document.getElementById("modal_txt6");
    wmodal6.classList.toggle("visible_element")
    wmodal6.classList.toggle("hidenseek_element")
    let wmodal7 = document.getElementById("modal_txt7");
    wmodal7.classList.toggle("visible_element")
    wmodal7.classList.toggle("hidenseek_element")
}
function open1dialog() {
    let wmodal7 = document.getElementById("modal_txt7");
    wmodal7.classList.toggle("visible_element")
    wmodal7.classList.toggle("hidenseek_element")
    let wmodal1 = document.getElementById("modal_txt1");
    wmodal1.classList.toggle("visible_element")
    wmodal1.classList.toggle("hidenseek_element")
}
function closeddialog() {
    let modal = document.getElementById("modal");
    modal.classList.remove("modal_vis")
    let instruction_text = document.querySelector('.container_text')
    let body = document.getElementsByTagName('body')[0];
    body.classList.remove('body_block');

    // instruction_text.classList.toggle('hidenseek_element')
    // instruction_text.classList.toggle('visible_element')
}
// function customcheckboxtoggle() {
//     let checkbox = document.getElementsByName('checkbox_name')
//     let custom_check = document.getElementsByClassName("custom_checkbox")
//     if (checkbox.checked == true) {
//         custom_check.classList.add('.custom_checkbox-checked')
//         custom_check.classList.remove('.custom_checkbox')
//     }
//     if (checkbox.checked == false) {
//         custom_check.classList.add('.custom_checkbox')
//         custom_check.classList.remove('.custom_checkbox-checked')
//     }
// }

