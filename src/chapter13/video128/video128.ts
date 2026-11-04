

export { };
console.log("video 128")

class MagicBox<T> {
    content: T;

    constructor(content: T) {
        this.content = content;
    }
}

const a = new MagicBox<number>(1234);
const b = new MagicBox<string>("1234");


class NumberBox {
    content: number;

    constructor(content: number) {
        this.content = content;
    }

}

class StringBox {
    content: string;

    constructor(content: string) {
        this.content = content;
    }

}