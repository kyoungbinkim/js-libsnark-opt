import snarkInputClass, {isHex} from "../snark/makeSnarkInput"

describe("INPUT TEST", () => {
    it("HEX test", () => {
        console.log("0x1234\t: ", isHex("0x1234"))
        console.log("1234\t: ", isHex("1234"))
        console.log("ff1a234\t: ", isHex("ff1a234"))
    })

    it("test1 ", () => {
        const REGI_INPUT = new snarkInputClass('regi');
        REGI_INPUT.add('age', ['1234', 'aabb']);
        REGI_INPUT.add('name', 'aaff1234');
        REGI_INPUT.check()
        console.log(REGI_INPUT.toJSON())
    })
})