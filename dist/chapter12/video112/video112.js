"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("video 112");
//class: dinh nghia tong quat, mieu ta chung chung
class Lion {
    constructor() {
        // mieu ta dac diem
        this.name = "A";
    }
    //mieu ta hanh vi
    sleep() {
        console.log("Lion is sleeping ... : ", this.name);
    }
}
// mieu ta cu the tung con lion
//clone: new
const sutu1 = new Lion(); //clone
sutu1.color = "yellow";
sutu1.name = "hdit";
sutu1.sleep();
console.log("==============");
const sutu2 = new Lion(); //clone
sutu2.color = "white";
sutu2.name = "alan";
sutu2.sleep();
