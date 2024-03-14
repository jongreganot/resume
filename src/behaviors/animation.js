import $ from "jquery";
import { wait } from "./utilities";

export const leave = async () => {
    let divElement = $(".overflow-y-scroll")[0];
    $(divElement).removeClass("overflow-y-scroll");
    let elements = $(".animate-this");

    for (let i = 0; i < elements.length; i++) {
        let element = elements[i];

        $(element).animate({ left: "-200px", opacity: "0" }, 400, "swing");
        await wait(40);
    }

    await wait(200);
}

export const enter = async () => {
    let elements = $(".animate-this");

    for (let i = 0; i < elements.length; i++) {
        let element = elements[i];

        $(element).css({ left: "200px" });
        $(element).animate({ left: "0px", opacity: "1" }, 400, "swing");
        await wait(100);
    }

    await wait(200);
}