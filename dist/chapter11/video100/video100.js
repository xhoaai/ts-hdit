"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("video 100");
const user = " USER";
const admin = "ADMIN";
const superAdmin = 1;
const otherUser = "ADMIN";
var RoleEnum;
(function (RoleEnum) {
    RoleEnum["USER"] = "USER";
    RoleEnum["SUPERADMIN"] = "SUPERADMIN";
    RoleEnum["ADMIN"] = "ADMIN"; //2
})(RoleEnum || (RoleEnum = {}));
const myRole1 = RoleEnum.USER;
const myRole2 = RoleEnum.ADMIN;
console.log(">>> enum myRole1 = ", myRole1);
console.log(">>> enum myRole2 = ", myRole2);
