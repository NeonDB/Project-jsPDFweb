function asyncblock_toggle() {
    let textdata = document.querySelectorAll("div.container_async")
    textdata.forEach((textdata) => {
        textdata.classList.toggle("visible_element")
    })
    textdata.forEach((textdata) => {
        textdata.classList.toggle("hidenseek_element")
    })
}
function syncblock_toggle() {
    let textdata = document.querySelectorAll("div.container_sync")
    textdata.forEach((textdata) => {
        textdata.classList.toggle("visible_element")
    })
    textdata.forEach((textdata) => {
        textdata.classList.toggle("hidenseek_element")
    })
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
}
function bioidendifity_EBS_toggle() {
    let textdata = document.querySelectorAll("div.container_blockEBS")
    textdata.forEach((textdata) => {
        textdata.classList.toggle("visible_element")

    })
    textdata.forEach((textdata) => {
        textdata.classList.toggle("hidenseek_element")
    })
}
function bioidendifity_VLLuna_toggle() {
    let textdata = document.querySelector("div.container_blockVLLuna")
        textdata.classList.toggle("visible_element")
        textdata.classList.toggle("hidenseek_element")
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
}
function integration_typeAPI_toggle() {
    let textdata = document.querySelector("div.container_block_generation")
        textdata.classList.add("hidenseek_element")
}
function integration_typeURLgeneration_toggle() {
    let textdata = document.querySelector("div.container_block_generation")
        textdata.classList.add("hidenseek_element")
}