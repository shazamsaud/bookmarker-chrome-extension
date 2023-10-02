
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads" ))


const deleteBtn = document.getElementById("del-btn")
const saveTab = document.getElementById("save-tab")


if (leadsFromLocalStorage){
    myLeads= leadsFromLocalStorage
    render(myLeads)
}

function render(Leads){
    let listItems = ""
    for (let i = 0; i < Leads.length; i++ ){
        listItems += "<li><a href='" + Leads[i] +"' target='_blank'>"+ Leads[i] +" </a></li>"
        
   }

   ulEl.innerHTML = listItems
  
}

deleteBtn.addEventListener("dblclick" , function(){
    localStorage.clear()
    myLeads=[]
    render(myLeads)
})

saveTab.addEventListener("click", function(){
    chrome.tabs.query({active:true , currentWindow:true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads" , JSON.stringify(myLeads))
        render(myLeads)
    })
})


inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""

    localStorage.setItem("myLeads" , JSON.stringify(myLeads))

    render(myLeads)
    
} )



// ' "target="_blank">
