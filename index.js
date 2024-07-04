fetch("https://reqres.in/api/users?page=1&&per_page=15")
.then((response)=>{
    if(!response.ok){
        throw new Error('Nework Request Failed')
    }
    return response.json();
}).then((userInfo)=>{
    const usercontent = document.getElementById('usercontent')
    userInfo.data.forEach(user =>{
        const rowdiv = document.createElement('div');
        // const imgdiv = document.createElement('div');
        rowdiv.innerHTML = `<img src='${user.avatar}'/>`
        rowdiv.classList.add('rowdiv')
        // imgdiv.classList.add('imgdiv');
        // rowdiv.append(imgdiv);
        usercontent.append(rowdiv);
        const info = document.createElement('div')
        info.classList.add('info');
        const firstname = document.createElement('div');
        firstname.textContent = ` ${user.first_name}`
        const lastname = document.createElement('div');
        lastname.textContent = ` ${user.last_name}`
        info.appendChild(firstname);
        info.appendChild(lastname);
        rowdiv.appendChild(info);
        usercontent.append(rowdiv);
        
    })
})





