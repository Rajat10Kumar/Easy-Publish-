const tabitems = document.querySelectorAll('.tab-item');
const tabcontentitems = document.querySelectorAll('.tab-content-item');

function selectitem()
{
    removeborder();
    removeshow();

    this.classList.add('tab-border');

    const contentitem = document.querySelector(`#${this.id}-content`)

    contentitem.classList.add('show');
}

function removeborder()
{
    tabitems.forEach(item=>{
        item.classList.remove('tab-border');
    });
}

function removeshow()
{
    tabcontentitems.forEach(item=>{
      item.classList.remove('show');  
    });
}



tabitems.forEach(item =>{
    item.addEventListener('click',selectitem);
});

function opensidemenu(){
    document.getElementById('side-menu').style.width='250px';
    
}
function closesidemenu(){
    document.getElementById('side-menu').style.width='0';
    

}