const array = [];
for(var i = 0; i<100;i++) {
    let data = Math.random()*100;
    if (data > 50) {
        data = Math.floor(data);
    } else {
        data = Math.ceil(data)
    }
    array.push(data)
}

export default array