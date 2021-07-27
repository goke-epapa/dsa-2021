// context vs scope

function b() {
    let a = 4;
}

const obj = {
    a: function() {
        console.log(this);
    }
}

obj.a();