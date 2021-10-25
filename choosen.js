function asyncblock_toggle() {
    let textdata = document.querySelectorAll("div.container_async")
    textdata.forEach((textdata) => {
        textdata.classList.toggle("visible_element")
    })
    textdata.forEach((textdata) => {
        textdata.classList.toggle("hidenseek_element")
    })
    let label = document.getElementById("cb_5")
    let syncchbx = document.getElementById("check_part2")
    if (syncchbx.checked==true) 
    label.classList.toggle("checkbox_row-active"),
    document.getElementById('check_part1').disabled = true
    else 
    label.classList.toggle("checkbox_row-active"),
    document.getElementById('check_part1').disabled = false;
}
function syncblock_toggle() {
    let textdata = document.querySelectorAll("div.container_sync")
    textdata.forEach((textdata) => {
        textdata.classList.toggle("visible_element")
    })
    textdata.forEach((textdata) => {
        textdata.classList.toggle("hidenseek_element")
    })
    let label = document.getElementById("cb_4")
    let syncchbx = document.getElementById("check_part1")
    if (syncchbx.checked==true) 
    label.classList.toggle("checkbox_row-active"),
    document.getElementById('check_part2').disabled = true
    else 
    label.classList.toggle("checkbox_row-active"),
    document.getElementById('check_part2').disabled = false;
}
function twice_camera_toggle() {
    let textdata = document.querySelector("div.container_camera")
        textdata.classList.toggle("visible_element")
        textdata.classList.toggle("hidenseek_element")
    let label = document.getElementById("cb_10")
    let syncchbx = document.getElementById("check_part3")
        if (syncchbx.checked==true) 
        label.classList.toggle("checkbox_row-active"),
        document.getElementById('check_part_033').disabled = true
        else 
        label.classList.toggle("checkbox_row-active"),
        document.getElementById('check_part_033').disabled = false;

}
function twice_dontcamera_toggle() {
    let label = document.getElementById("cb_11")
    let syncchbx = document.getElementById("check_part_033")
        if (syncchbx.checked==true) 
        label.classList.toggle("checkbox_row-active"),
        document.getElementById('check_part3').disabled = true
        else 
        label.classList.toggle("checkbox_row-active"),
        document.getElementById('check_part3').disabled = false;

}
function slot_entry_toggle() {
    let textdata = document.querySelector("div.container_slot_entry")
        textdata.classList.toggle("visible_element")
        textdata.classList.toggle("hidenseek_element")
    let label = document.getElementById("cb_6")
    let syncchbx = document.getElementById("check_part4")
        if (syncchbx.checked==true) 
        label.classList.toggle("checkbox_row-active"),
        document.getElementById('check_part_011').disabled = true
        else 
        label.classList.toggle("checkbox_row-active"),
        document.getElementById('check_part_011').disabled = false;
}
function slot_dontentry_toggle() {
    let label = document.getElementById("cb_7")
    let syncchbx = document.getElementById("check_part_011")
        if (syncchbx.checked==true) 
        label.classList.toggle("checkbox_row-active"),
        document.getElementById('check_part4').disabled = true
        else 
        label.classList.toggle("checkbox_row-active"),
        document.getElementById('check_part4').disabled = false;
}
function bioidendifity_typeNone_toggle() {
    let label = document.getElementById("cb_12")
    let syncchbx = document.getElementById("check_part_044")
    if (syncchbx.checked==true) 
    label.classList.toggle("checkbox_row-active"),
    document.getElementById('check_part5').disabled = true,
    document.getElementById('check_part6').disabled = true,
    document.getElementById('check_part7').disabled = true
    else 
    label.classList.toggle("checkbox_row-active"),
    document.getElementById('check_part5').disabled = false,
    document.getElementById('check_part6').disabled = false,
    document.getElementById('check_part7').disabled = false;
}
function bioidendifity_Examus_toggle() {
    let textdata = document.querySelector("div.container_blockExamus")
    textdata.classList.toggle("visible_element")
    textdata.classList.toggle("hidenseek_element")
    let label = document.getElementById("cb_13")
    let syncchbx = document.getElementById("check_part5")
    if (syncchbx.checked==true) 
    label.classList.toggle("checkbox_row-active"),
    document.getElementById('check_part_044').disabled = true,
    document.getElementById('check_part6').disabled = true,
    document.getElementById('check_part7').disabled = true
    else 
    label.classList.toggle("checkbox_row-active"),
    document.getElementById('check_part_044').disabled = false,
    document.getElementById('check_part6').disabled = false,
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
    let label = document.getElementById("cb_14")
    let syncchbx = document.getElementById("check_part6")
    if (syncchbx.checked==true) 
    label.classList.toggle("checkbox_row-active"),
    document.getElementById('check_part_044').disabled = true,
    document.getElementById('check_part5').disabled = true,
    document.getElementById('check_part7').disabled = true
    else 
    label.classList.toggle("checkbox_row-active"),
    document.getElementById('check_part_044').disabled = false,
    document.getElementById('check_part5').disabled = false,
    document.getElementById('check_part7').disabled = false;
}
function bioidendifity_VLLuna_toggle() {
    let textdata = document.querySelector("div.container_blockVLLuna")
    textdata.classList.toggle("visible_element")
    textdata.classList.toggle("hidenseek_element")
    let label = document.getElementById("cb_15")
    let syncchbx = document.getElementById("check_part7")
    if (syncchbx.checked==true) 
    label.classList.toggle("checkbox_row-active"),
    document.getElementById('check_part_044').disabled = true,
    document.getElementById('check_part5').disabled = true,
    document.getElementById('check_part6').disabled = true
    else 
    label.classList.toggle("checkbox_row-active"),
    document.getElementById('check_part_044').disabled = false,
    document.getElementById('check_part5').disabled = false,
    document.getElementById('check_part6').disabled = false;

}
function personal_data_consent_toggle() {
    let textdata = document.querySelector("div.container_personal_data_consent")
        textdata.classList.toggle("visible_element")
        textdata.classList.toggle("hidenseek_element")
    let label = document.getElementById("cb_8")
    let syncchbx = document.getElementById("check_part8")
        if (syncchbx.checked==true) 
        label.classList.toggle("checkbox_row-active"),
        document.getElementById('check_part_022').disabled = true
        else 
        label.classList.toggle("checkbox_row-active"),
        document.getElementById('check_part_022').disabled = false;

}
function personal_data_dontconsent_toggle() {
    let label = document.getElementById("cb_9")
    let syncchbx = document.getElementById("check_part_022")
        if (syncchbx.checked==true) 
        label.classList.toggle("checkbox_row-active"),
        document.getElementById('check_part8').disabled = true
        else 
        label.classList.toggle("checkbox_row-active"),
        document.getElementById('check_part8').disabled = false;

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
    let label = document.getElementById("cb_16")
    let textdata = document.querySelectorAll("div.container_faq_block")
    textdata.forEach((textdata) => {
        textdata.classList.toggle("visible_element")
    })
    textdata.forEach((textdata) => {
        textdata.classList.toggle("hidenseek_element")
    })
    let syncchbx = document.getElementById("check_part12")
    if (syncchbx.checked==true) 
    label.classList.toggle("checkbox_row-active"),
    document.getElementById('check_part_055').disabled = true    
    else 
    label.classList.toggle("checkbox_row-active"),
    document.getElementById('check_part_055').disabled = false
}
function faq_blockclear_toggle() {
    let label = document.getElementById("cb_17")
    let syncchbx = document.getElementById("check_part_055")
        if (syncchbx.checked==true) 
        label.classList.toggle("checkbox_row-active"),
        document.getElementById('check_part12').disabled = true
        else 
        label.classList.toggle("checkbox_row-active"),
        document.getElementById('check_part12').disabled = false;

}
function contact_block_toggle(){
    let label = document.getElementById("cb_18")
    let syncchbx = document.getElementById("check_part13")
    if (syncchbx.checked==true) 
    label.classList.toggle("checkbox_row-active"),
    document.getElementById('check_part14').disabled = true    
    else 
    label.classList.toggle("checkbox_row-active"),
    document.getElementById('check_part14').disabled = false
}
function contact_clearblock_toggle(){
    let label = document.getElementById("cb_19")
    let textdata = document.querySelectorAll("span.contact_field")
    let syncchbx = document.getElementById("check_part14")
    textdata.forEach((textdata) => {
        textdata.classList.toggle("visible_element")
    })
    textdata.forEach((textdata) => {
        textdata.classList.toggle("hidenseek_element")
    })
    if (syncchbx.checked==true) 
    label.classList.toggle("checkbox_row-active"),
    document.getElementById('check_part13').disabled = true    
    else 
    label.classList.toggle("checkbox_row-active"),
    document.getElementById('check_part13').disabled = false
}
function contact_custom_toggle() {
    let label = document.getElementById("cb_20")
    input = document.getElementById("custom_email")
    let syncchbx = document.getElementById("check_part15")
    if (syncchbx.checked==true) 
    label.classList.toggle("checkbox_row-active"),
    input.classList.toggle("checkbox_row-active")
    else {
    label.classList.toggle("checkbox_row-active"),
    input.classList.toggle("checkbox_row-active")}
    let customemail = document.getElementById("custom_email").value
    let field = document.getElementsByClassName("contact_field-email")[0]
    field.innerText = customemail
}
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
function open8dialog() {
    let wmodal7 = document.getElementById("modal_txt7");
    wmodal7.classList.toggle("visible_element")
    wmodal7.classList.toggle("hidenseek_element")
    let wmodal8 = document.getElementById("modal_txt8");
    wmodal8.classList.toggle("visible_element")
    wmodal8.classList.toggle("hidenseek_element")
}
function open9dialog() {
    let wmodal8 = document.getElementById("modal_txt8");
    wmodal8.classList.toggle("visible_element")
    wmodal8.classList.toggle("hidenseek_element")
    let URLcheckbox = document.getElementById("check_part14").checked;
    if (URLcheckbox == true) {
        let wmodal9 = document.getElementById("modal_txt9");
        wmodal9.classList.toggle("visible_element")
        wmodal9.classList.toggle("hidenseek_element")    
    } else {
        let wmodal10 = document.getElementById("modal_txt10");
        wmodal10.classList.toggle("visible_element")
        wmodal10.classList.toggle("hidenseek_element")
    }
}
function open10dialog() {
    let wmodal9 = document.getElementById("modal_txt9");
    wmodal9.classList.toggle("visible_element")
    wmodal9.classList.toggle("hidenseek_element")
    let wmodal10 = document.getElementById("modal_txt10");
    wmodal10.classList.toggle("visible_element")
    wmodal10.classList.toggle("hidenseek_element")
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

