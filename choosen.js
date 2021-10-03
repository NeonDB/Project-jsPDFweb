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

    let syncchbx = document.getElementById("check_part9")
        if (syncchbx.checked==true) document.getElementById('check_part10').disabled = true,
        document.getElementById('check_part11').disabled = true
        else document.getElementById('check_part10').disabled = false,
        document.getElementById('check_part11').disabled = false;
}
function integration_typeAPI_toggle() {
    let textdata = document.querySelector("div.container_block_generation")
        textdata.classList.toggle("visible_element")
        textdata.classList.toggle("hidenseek_element")
        let syncchbx = document.getElementById("check_part10")
        if (syncchbx.checked==true) document.getElementById('check_part9').disabled = true,
        document.getElementById('check_part11').disabled = true
        else document.getElementById('check_part9').disabled = false,
        document.getElementById('check_part11').disabled = false;
}
function integration_typeURLgeneration_toggle() {
    let textdata = document.querySelector("div.container_block_generation")
        textdata.classList.toggle("hidenseek_element")
        let syncchbx = document.getElementById("check_part11")
        if (syncchbx.checked==true) document.getElementById('check_part9').disabled = true,
        document.getElementById('check_part10').disabled = true,
        document.getElementById('check_part4').disabled = true
        else document.getElementById('check_part9').disabled = false,
        document.getElementById('check_part10').disabled = false,
        document.getElementById('check_part4').disabled = false;

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