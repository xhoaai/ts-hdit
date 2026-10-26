export { };
console.log("video 113")

//xay dung chung chung (tong quat)
class SinhVien {
    // thuoc tinh (mieu ta)
    name: string | undefined;
    id: number | undefined;

    //hanh vi
    sleep() {
        console.log("di ngu: ", this.name, "and id = ", this.id)
    }
}

//object (clone => chi tiet)

const sinhvien1 = new SinhVien();
sinhvien1.name = "hdit";
sinhvien1.id = 123;
sinhvien1.sleep();

console.log("==============================");
const sinhvien2 = new SinhVien();
sinhvien2.name = "Alan";
sinhvien2.id = 456;
sinhvien2.sleep();
