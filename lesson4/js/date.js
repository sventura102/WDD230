const datefield = document.getElementById('currentTime')

const fulldate = new Intl.DateTimeFormat('en-Us',{
    dateStyle: "full"
}).format(date);

datefield.innerHTML = fulldate;
