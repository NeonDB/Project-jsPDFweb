let integrationtype = 0;
let synctype = 0;
let entryslottype = 0;
let dataconcenttype = 0;
let cameratype = 0;
let biometrytype = 0;
let instructiontype = 0;
let contactstype = 0;
function integration_typeMoodle_toggle() {
    let textdata = document.querySelector("div.container_block_generation")
        textdata.classList.toggle("visible_element")
        textdata.classList.toggle("hidenseek_element")
    let beginbutton = document.querySelector("div.container_moodleint_block")
        beginbutton.classList.toggle("hidenseek_element")
        beginbutton.classList.toggle("visible_element")
    let label = document.getElementById("cb_1")
    let button_accept = document.getElementById("windows-1")
    let syncchbx = document.getElementById("check_part9")
        if (syncchbx.checked==true) {
        label.classList.toggle("checkbox_row-active"),
        document.getElementById('check_part10').disabled = true,
        document.getElementById('check_part11').disabled = true,
        button_accept.removeAttribute("disabled");
        } else { 
        label.classList.toggle("checkbox_row-active"),
        document.getElementById('check_part10').disabled = false,
        document.getElementById('check_part11').disabled = false;
        button_accept.setAttribute("disabled", "disabled");
        } return (integrationtype = 1);
}
function integration_typeAPI_toggle() {
    let textdata = document.querySelector("div.container_block_generation")
        textdata.classList.toggle("visible_element")
        textdata.classList.toggle("hidenseek_element")
        let syncchbx = document.getElementById("check_part10")
        let label = document.getElementById("cb_2")
        let button_accept = document.getElementById("windows-1")
        if (syncchbx.checked==true) 
        label.classList.toggle("checkbox_row-active"),
        document.getElementById('check_part9').disabled = true,
        document.getElementById('check_part11').disabled = true,
        button_accept.removeAttribute("disabled");
        else {
        label.classList.toggle("checkbox_row-active"),
        document.getElementById('check_part9').disabled = false,
        document.getElementById('check_part11').disabled = false,
        button_accept.setAttribute("disabled", "disabled");
        } return (integrationtype = 2);
}
function integration_typeURLgeneration_toggle() {
    let textdata = document.querySelector("div.container_block_generation")
        textdata.classList.toggle("visible_element")
        textdata.classList.toggle("hidenseek_element")
    let syncchbx = document.getElementById("check_part11")
    let label = document.getElementById("cb_3")
    let button_accept = document.getElementById("windows-1")
        if (syncchbx.checked==true) 
        label.classList.toggle("checkbox_row-active"),
        document.getElementById('check_part9').disabled = true,
        document.getElementById('check_part10').disabled = true,
        document.getElementById('check_part4').disabled = true,
        button_accept.removeAttribute("disabled");
        else {
        label.classList.toggle("checkbox_row-active"),
        document.getElementById('check_part9').disabled = false,
        document.getElementById('check_part10').disabled = false,
        document.getElementById('check_part4').disabled = false,
        button_accept.setAttribute("disabled", "disabled");
        } return (integrationtype = 3);
}
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
    let button_accept = document.getElementById("windows-2")
    if (syncchbx.checked==true) 
    label.classList.toggle("checkbox_row-active"),
    document.getElementById('check_part1').disabled = true,
    button_accept.removeAttribute("disabled");
    else {
    label.classList.toggle("checkbox_row-active"),
    document.getElementById('check_part1').disabled = false,
    button_accept.setAttribute("disabled", "disabled");
    } return (synctype = 1);
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
    let button_accept = document.getElementById("windows-2")
    if (syncchbx.checked==true) 
    label.classList.toggle("checkbox_row-active"),
    document.getElementById('check_part2').disabled = true,
    button_accept.removeAttribute("disabled");
    else {
    label.classList.toggle("checkbox_row-active"),
    document.getElementById('check_part2').disabled = false,
    button_accept.setAttribute("disabled", "disabled");
    } return (synctype = 2);
}
function slot_entry_toggle() {
    let textdata = document.querySelector("div.container_slot_entry")
        textdata.classList.toggle("visible_element")
        textdata.classList.toggle("hidenseek_element")
    let label = document.getElementById("cb_6")
    let syncchbx = document.getElementById("check_part4")
    let button_accept = document.getElementById("windows-3")
        if (syncchbx.checked==true) {
        label.classList.toggle("checkbox_row-active"),
        document.getElementById('check_part_011').disabled = true,
        button_accept.removeAttribute("disabled");
        } else {
        label.classList.toggle("checkbox_row-active"),
        document.getElementById('check_part_011').disabled = false,
        button_accept.setAttribute("disabled", "disabled");
        } return (entryslottype = 1);

}
function slot_dontentry_toggle() {
    let label = document.getElementById("cb_7")
    let syncchbx = document.getElementById("check_part_011")
    let button_accept = document.getElementById("windows-3")
        if (syncchbx.checked==true) {
        label.classList.toggle("checkbox_row-active"),
        document.getElementById('check_part4').disabled = true,
        button_accept.removeAttribute("disabled");
        } else {
        label.classList.toggle("checkbox_row-active"),
        document.getElementById('check_part4').disabled = false,
        button_accept.setAttribute("disabled", "disabled");
        }
}
function personal_data_consent_toggle() {
    let textdata = document.querySelector("div.container_personal_data_consent")
        textdata.classList.toggle("visible_element")
        textdata.classList.toggle("hidenseek_element")
    let label = document.getElementById("cb_8")
    let syncchbx = document.getElementById("check_part8")
    let button_accept = document.getElementById("windows-4")
        if (syncchbx.checked==true) 
        label.classList.toggle("checkbox_row-active"),
        document.getElementById('check_part_022').disabled = true,
        button_accept.removeAttribute("disabled");
        else {
        label.classList.toggle("checkbox_row-active"),
        document.getElementById('check_part_022').disabled = false,
        button_accept.setAttribute("disabled", "disabled");
        } return (dataconcenttype = 1)
}
function personal_data_dontconsent_toggle() {
    let label = document.getElementById("cb_9")
    let syncchbx = document.getElementById("check_part_022")
    let button_accept = document.getElementById("windows-4")
        if (syncchbx.checked==true) 
        label.classList.toggle("checkbox_row-active"),
        document.getElementById('check_part8').disabled = true,
        button_accept.removeAttribute("disabled");
        else 
        label.classList.toggle("checkbox_row-active"),
        document.getElementById('check_part8').disabled = false,
        button_accept.setAttribute("disabled", "disabled");

}
function twice_camera_toggle() {
    let textdata = document.querySelector("div.container_camera")
        textdata.classList.toggle("visible_element")
        textdata.classList.toggle("hidenseek_element")
    let label = document.getElementById("cb_10")
    let syncchbx = document.getElementById("check_part3")
    let button_accept = document.getElementById("windows-5")
        if (syncchbx.checked==true) {
        label.classList.toggle("checkbox_row-active"),
        document.getElementById('check_part_033').disabled = true,
        button_accept.removeAttribute("disabled");
        } else {
        label.classList.toggle("checkbox_row-active"),
        document.getElementById('check_part_033').disabled = false,
        button_accept.setAttribute("disabled", "disabled");
        } return (cameratype = 1)
}
function twice_dontcamera_toggle() {
    let label = document.getElementById("cb_11")
    let syncchbx = document.getElementById("check_part_033")
    let button_accept = document.getElementById("windows-5")
        if (syncchbx.checked==true) 
        label.classList.toggle("checkbox_row-active"),
        document.getElementById('check_part3').disabled = true,
        button_accept.removeAttribute("disabled");
        else 
        label.classList.toggle("checkbox_row-active"),
        document.getElementById('check_part3').disabled = false,
        button_accept.setAttribute("disabled", "disabled");

}
function bioidendifity_typeNone_toggle() {
    let label = document.getElementById("cb_12")
    let syncchbx = document.getElementById("check_part_044")
    let button_accept = document.getElementById("windows-6")
    if (syncchbx.checked==true) 
    label.classList.toggle("checkbox_row-active"),
    document.getElementById('check_part5').disabled = true,
    document.getElementById('check_part6').disabled = true,
    document.getElementById('check_part7').disabled = true,
    button_accept.removeAttribute("disabled");
    else 
    label.classList.toggle("checkbox_row-active"),
    document.getElementById('check_part5').disabled = false,
    document.getElementById('check_part6').disabled = false,
    document.getElementById('check_part7').disabled = false,
    button_accept.setAttribute("disabled", "disabled");
}
function bioidendifity_Examus_toggle() {
    let textdata = document.querySelector("div.container_blockExamus")
    textdata.classList.toggle("visible_element")
    textdata.classList.toggle("hidenseek_element")
    let label = document.getElementById("cb_13")
    let syncchbx = document.getElementById("check_part5")
    let button_accept = document.getElementById("windows-6")
    if (syncchbx.checked==true) 
    label.classList.toggle("checkbox_row-active"),
    document.getElementById('check_part_044').disabled = true,
    document.getElementById('check_part6').disabled = true,
    document.getElementById('check_part7').disabled = true,
    button_accept.removeAttribute("disabled");
    else {
    label.classList.toggle("checkbox_row-active"),
    document.getElementById('check_part_044').disabled = false,
    document.getElementById('check_part6').disabled = false,
    document.getElementById('check_part7').disabled = false,
    button_accept.setAttribute("disabled", "disabled");
    } return (biometrytype = 1)
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
    let button_accept = document.getElementById("windows-6")
    if (syncchbx.checked==true) 
    label.classList.toggle("checkbox_row-active"),
    document.getElementById('check_part_044').disabled = true,
    document.getElementById('check_part5').disabled = true,
    document.getElementById('check_part7').disabled = true,
    button_accept.removeAttribute("disabled");
    else {
    label.classList.toggle("checkbox_row-active"),
    document.getElementById('check_part_044').disabled = false,
    document.getElementById('check_part5').disabled = false,
    document.getElementById('check_part7').disabled = false,
    button_accept.setAttribute("disabled", "disabled");
    } return (biometrytype = 2)
}
function bioidendifity_VLLuna_toggle() {
    let textdata = document.querySelector("div.container_blockVLLuna")
    textdata.classList.toggle("visible_element")
    textdata.classList.toggle("hidenseek_element")
    let label = document.getElementById("cb_15")
    let syncchbx = document.getElementById("check_part7")
    let button_accept = document.getElementById("windows-6")
    if (syncchbx.checked==true) 
    label.classList.toggle("checkbox_row-active"),
    document.getElementById('check_part_044').disabled = true,
    document.getElementById('check_part5').disabled = true,
    document.getElementById('check_part6').disabled = true,
    button_accept.removeAttribute("disabled");
    else {
    label.classList.toggle("checkbox_row-active"),
    document.getElementById('check_part_044').disabled = false,
    document.getElementById('check_part5').disabled = false,
    document.getElementById('check_part6').disabled = false,
    button_accept.setAttribute("disabled", "disabled");
    } return (biometrytype = 3)

}
function faq_block_toggle() {
    let label = document.getElementById("cb_16")
    let textdata = document.querySelectorAll("div.container_faq_block")
    let button_accept = document.getElementById("windows-7")
    let syncchbx = document.getElementById("check_part12")
        textdata.forEach((textdata) => {
            textdata.classList.toggle("visible_element")
        })
        textdata.forEach((textdata) => {
            textdata.classList.toggle("hidenseek_element")
        })
        if (syncchbx.checked==true) 
        label.classList.toggle("checkbox_row-active"),
        document.getElementById('check_part_055').disabled = true,
        button_accept.removeAttribute("disabled");    
        else {
        label.classList.toggle("checkbox_row-active"),
        document.getElementById('check_part_055').disabled = false,
        button_accept.setAttribute("disabled", "disabled");
        } return (instructiontype = 1)

}
function faq_blockclear_toggle() {
    let label = document.getElementById("cb_17")
    let syncchbx = document.getElementById("check_part_055")
    let button_accept = document.getElementById("windows-7")
        if (syncchbx.checked==true) 
        label.classList.toggle("checkbox_row-active"),
        document.getElementById('check_part12').disabled = true,
        button_accept.removeAttribute("disabled");    
        else 
        label.classList.toggle("checkbox_row-active"),
        document.getElementById('check_part12').disabled = false,
        button_accept.setAttribute("disabled", "disabled");
}
function contact_block_toggle(){
    let label = document.getElementById("cb_18")
    let syncchbx = document.getElementById("check_part13")
    let button_accept = document.getElementById("windows-8")
    let emailfield = document.querySelectorAll("span.contact_field")
    emailfield.forEach((emailfield) => {
        emailfield.classList.toggle("visible_element")
    })
    emailfield.forEach((emailfield) => {
        emailfield.classList.toggle("hidenseek_element")
    })
    if (syncchbx.checked==true) 
    label.classList.toggle("checkbox_row-active"),
    document.getElementById('check_part14').disabled = true,
    button_accept.removeAttribute("disabled");        
    else 
    label.classList.toggle("checkbox_row-active"),
    document.getElementById('check_part14').disabled = false,
    button_accept.setAttribute("disabled", "disabled");
    return (contactstype = 1)
}
function contact_clearblock_toggle(){
    let label = document.getElementById("cb_19")
    let syncchbx = document.getElementById("check_part14")
    let button_accept = document.getElementById("windows-8")
    let emailfield = document.querySelectorAll("span.contact_field-email_custom")
    emailfield.forEach((emailfield) => {
        emailfield.classList.toggle("visible_element")
    })
    emailfield.forEach((emailfield) => {
        emailfield.classList.toggle("hidenseek_element")
    })
    if (syncchbx.checked==true) 
    label.classList.toggle("checkbox_row-active"),
    document.getElementById('check_part13').disabled = true,
    button_accept.removeAttribute("disabled");            
    else 
    label.classList.toggle("checkbox_row-active"),
    document.getElementById('check_part13').disabled = false,
    button_accept.setAttribute("disabled", "disabled");
    return (contactstype = 2)
}
function contact_custom_toggle() {
    let button_accept = document.getElementById("windows-9")
    let customemail = document.getElementById("custom_email")
    customemail.oninput = function () {
        document.getElementsByClassName("emailfield")[0].innerText = customemail.value
        if (customemail.value !== "") 
        button_accept.removeAttribute("disabled");            
        else 
        button_accept.setAttribute("disabled", "disabled");
    }
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
    let wmodal6 = document.getElementById("modal_txt6");
    wmodal6.classList.toggle("visible_element")
    wmodal6.classList.toggle("hidenseek_element")
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
function backin2dialog() {
    let wmodal1 = document.getElementById("modal_txt1");
    wmodal1.classList.toggle("visible_element")
    wmodal1.classList.toggle("hidenseek_element")
    let wmodal2 = document.getElementById("modal_txt2");
    wmodal2.classList.toggle("visible_element")
    wmodal2.classList.toggle("hidenseek_element")
    let checkboxes2 = wmodal2.querySelectorAll("input[type=checkbox]")
    document.getElementById("windows-2").setAttribute("disabled", true)

    let label2 = wmodal2.querySelectorAll("div.checkbox_row-active")
    label2.forEach((label2) =>{
        label2.classList.remove("checkbox_row-active")
    })
    checkboxes2.forEach((checkboxes2) =>{
        checkboxes2.checked = false
    })
    document.getElementById('check_part1').disabled = false,
    document.getElementById('check_part2').disabled = false;
    if (synctype == 1) {
        let textdata4 = document.querySelectorAll("div.container_async")
        textdata4.forEach((textdata4) => {
            textdata4.classList.toggle("visible_element")
        })
        textdata4.forEach((textdata4) => {
            textdata4.classList.toggle("hidenseek_element")
        })
    }
    if (synctype == 2) {
        let textdata5 = document.querySelectorAll("div.container_sync")
        textdata5.forEach((textdata5) => {
            textdata5.classList.toggle("visible_element")
        })
        textdata5.forEach((textdata5) => {
            textdata5.classList.toggle("hidenseek_element")
        })
    }
}
function backin3dialog() {
    let wmodal2 = document.getElementById("modal_txt2");
    wmodal2.classList.toggle("visible_element")
    wmodal2.classList.toggle("hidenseek_element")
    let wmodal3 = document.getElementById("modal_txt3");
    wmodal3.classList.toggle("visible_element")
    wmodal3.classList.toggle("hidenseek_element")
    let checkboxes3 = wmodal3.querySelectorAll("input[type=checkbox]")
    let label3 = wmodal3.querySelectorAll("div.checkbox_row-active")
    document.getElementById("windows-3").setAttribute("disabled", true)
    label3.forEach((label3) =>{
        label3.classList.remove("checkbox_row-active")
    })
    checkboxes3.forEach((checkboxes3) =>{
        checkboxes3.checked = false
    })
    document.getElementById('check_part4').disabled = false;
    document.getElementById('check_part_011').disabled = false;
    if (entryslottype == 1) {
        let textdata6 = document.querySelectorAll("div.container_slot_entry")
        textdata6.forEach((textdata6) => {
            textdata6.classList.toggle("visible_element")
        })
        textdata6.forEach((textdata6) => {
            textdata6.classList.toggle("hidenseek_element")
        })
    }
}
function backin4dialog() {
    let wmodal1 = document.getElementById("modal_txt2");
    let wmodal2 = document.getElementById("modal_txt3");
    let wmodal3 = document.getElementById("modal_txt4");
    let checkboxes3 = wmodal3.querySelectorAll("input[type=checkbox]")
    let label3 = wmodal3.querySelectorAll("div.checkbox_row-active")
    if (document.getElementById("check_part11").checked) {
        wmodal1.classList.toggle("visible_element")
        wmodal1.classList.toggle("hidenseek_element")
    } else {
        wmodal2.classList.toggle("visible_element")
        wmodal2.classList.toggle("hidenseek_element")
    }
    wmodal3.classList.toggle("visible_element")
    wmodal3.classList.toggle("hidenseek_element")
    document.getElementById("windows-4").setAttribute("disabled", true)
    label3.forEach((label3) =>{
        label3.classList.remove("checkbox_row-active")
    })
    checkboxes3.forEach((checkboxes3) =>{
        checkboxes3.checked = false
    })
    document.getElementById('check_part8').disabled = false,
    document.getElementById('check_part_022').disabled = false;
    if (dataconcenttype == 1) {
        let textdata4 = document.querySelectorAll("div.container_personal_data_consent")
        textdata4.forEach((textdata4) => {
            textdata4.classList.toggle("visible_element")
        })
        textdata4.forEach((textdata4) => {
            textdata4.classList.toggle("hidenseek_element")
        })
    }

}
function backin5dialog() {
    let wmodal2 = document.getElementById("modal_txt4");
    wmodal2.classList.toggle("visible_element")
    wmodal2.classList.toggle("hidenseek_element")
    let wmodal3 = document.getElementById("modal_txt5");
    wmodal3.classList.toggle("visible_element")
    wmodal3.classList.toggle("hidenseek_element")
    let checkboxes3 = wmodal3.querySelectorAll("input[type=checkbox]")
    let label3 = wmodal3.querySelectorAll("div.checkbox_row-active")
    document.getElementById("windows-5").setAttribute("disabled", true)
    label3.forEach((label3) =>{
        label3.classList.remove("checkbox_row-active")
    })
    checkboxes3.forEach((checkboxes3) =>{
        checkboxes3.checked = false
    })
    document.getElementById('check_part3').disabled = false;
    document.getElementById('check_part_033').disabled = false;
    if (cameratype == 1) {
        let textdata6 = document.querySelectorAll("div.container_camera")
        textdata6.forEach((textdata6) => {
            textdata6.classList.toggle("visible_element")
        })
        textdata6.forEach((textdata6) => {
            textdata6.classList.toggle("hidenseek_element")
        })
    }
}
function backin6dialog() {
    let wmodal2 = document.getElementById("modal_txt5");
    wmodal2.classList.toggle("visible_element")
    wmodal2.classList.toggle("hidenseek_element")
    let wmodal3 = document.getElementById("modal_txt6");
    wmodal3.classList.toggle("visible_element")
    wmodal3.classList.toggle("hidenseek_element")
    let checkboxes3 = wmodal3.querySelectorAll("input[type=checkbox]")
    let label3 = wmodal3.querySelectorAll("div.checkbox_row-active")
    document.getElementById("windows-6").setAttribute("disabled", true)
    label3.forEach((label3) =>{
        label3.classList.remove("checkbox_row-active")
    })
    checkboxes3.forEach((checkboxes3) =>{
        checkboxes3.checked = false
    })
    document.getElementById('check_part5').disabled = false,
    document.getElementById('check_part6').disabled = false,
    document.getElementById('check_part7').disabled = false,
    document.getElementById('check_part_044').disabled = false;

    if (biometrytype == 1) {
        let textdata4 = document.querySelectorAll("div.container_blockExamus")
        textdata4.forEach((textdata4) => {
            textdata4.classList.toggle("visible_element")
        })
        textdata4.forEach((textdata4) => {
            textdata4.classList.toggle("hidenseek_element")
        })
    }
    if (biometrytype == 2) {
        let textdata4 = document.querySelectorAll("div.container_blockEBS")
        textdata4.forEach((textdata4) => {
            textdata4.classList.toggle("visible_element")
        })
        textdata4.forEach((textdata4) => {
            textdata4.classList.toggle("hidenseek_element")
        })
    }
    if (biometrytype == 3) {
        let textdata4 = document.querySelectorAll("div.container_blockVLLuna")
        textdata4.forEach((textdata4) => {
            textdata4.classList.toggle("visible_element")
        })
        textdata4.forEach((textdata4) => {
            textdata4.classList.toggle("hidenseek_element")
        })
    }
}
function backin7dialog() {
    let wmodal2 = document.getElementById("modal_txt6");
    wmodal2.classList.toggle("visible_element")
    wmodal2.classList.toggle("hidenseek_element")
    let wmodal3 = document.getElementById("modal_txt7");
    wmodal3.classList.toggle("visible_element")
    wmodal3.classList.toggle("hidenseek_element")
    let checkboxes3 = wmodal3.querySelectorAll("input[type=checkbox]")
    let label3 = wmodal3.querySelectorAll("div.checkbox_row-active")
    document.getElementById("windows-7").setAttribute("disabled", true)
    label3.forEach((label3) =>{
        label3.classList.remove("checkbox_row-active")
    })
    checkboxes3.forEach((checkboxes3) =>{
        checkboxes3.checked = false
    })
    document.getElementById('check_part12').disabled = false;
    document.getElementById('check_part_055').disabled = false;
    if (instructiontype == 1) {
        let textdata6 = document.querySelectorAll("div.container_faq_block")
        textdata6.forEach((textdata6) => {
            textdata6.classList.toggle("visible_element")
        })
        textdata6.forEach((textdata6) => {
            textdata6.classList.toggle("hidenseek_element")
        })
    }
}
function backin8dialog() {
    let wmodal2 = document.getElementById("modal_txt7");
    wmodal2.classList.toggle("visible_element")
    wmodal2.classList.toggle("hidenseek_element")
    let wmodal3 = document.getElementById("modal_txt8");
    wmodal3.classList.toggle("visible_element")
    wmodal3.classList.toggle("hidenseek_element")
    let checkboxes3 = wmodal3.querySelectorAll("input[type=checkbox]")
    let label3 = wmodal3.querySelectorAll("div.checkbox_row-active")
    document.getElementById("windows-8").setAttribute("disabled", true)
    label3.forEach((label3) =>{
        label3.classList.remove("checkbox_row-active")
    })
    checkboxes3.forEach((checkboxes3) =>{
        checkboxes3.checked = false
    })
    document.getElementById('check_part13').disabled = false,
    document.getElementById('check_part14').disabled = false
    if (contactstype == 1) {
        let emailfield = document.querySelectorAll("span.contact_field")
        emailfield.forEach((emailfield) => {
            emailfield.classList.toggle("visible_element")
        })
        emailfield.forEach((emailfield) => {
            emailfield.classList.toggle("hidenseek_element")
        })
    }
    if (contactstype == 2) {
        let emailfield = document.querySelectorAll("span.contact_field-email_custom")
        emailfield.forEach((emailfield) => {
            emailfield.classList.toggle("visible_element")
        })
        emailfield.forEach((emailfield) => {
            emailfield.classList.toggle("hidenseek_element")
        })
    }

}
function backin9dialog() {
    let wmodal2 = document.getElementById("modal_txt8");
    wmodal2.classList.toggle("visible_element")
    wmodal2.classList.toggle("hidenseek_element")
    let wmodal3 = document.getElementById("modal_txt9");
    wmodal3.classList.toggle("visible_element")
    wmodal3.classList.toggle("hidenseek_element")
    let checkboxes3 = wmodal3.querySelectorAll("input[type=checkbox]")
    let label3 = wmodal3.querySelectorAll("div.checkbox_row-active")
    document.getElementById("windows-9").setAttribute("disabled", true)
    label3.forEach((label3) =>{
        label3.classList.remove("checkbox_row-active")
    })
    checkboxes3.forEach((checkboxes3) =>{
        checkboxes3.checked = false
    })
    document.getElementById('check_part13').disabled = false,
    document.getElementById('check_part14').disabled = false;
    document.getElementsByClassName("emailfield")[0].innerText = "";
    let customemail = document.getElementById("custom_email")
    customemail.value = "";
    if (contactstype == 1) {
        let emailfield = document.querySelectorAll("span.contact_field")
        emailfield.forEach((emailfield) => {
            emailfield.classList.toggle("visible_element")
        })
        emailfield.forEach((emailfield) => {
            emailfield.classList.toggle("hidenseek_element")
        })
    }
    if (contactstype == 2) {
        let emailfield = document.querySelectorAll("span.contact_field-email_custom")
        emailfield.forEach((emailfield) => {
            emailfield.classList.toggle("visible_element")
        })
        emailfield.forEach((emailfield) => {
            emailfield.classList.toggle("hidenseek_element")
        })
    }
}
function dialog1return() {
    window.location.reload(true);
}