export const geteat = async (query) => {
    try {
        const eat = ["ASSARI", "KOTTERI", "NANDEMO"];
        const easy_eat = ["KURASUSHI", "KOMETUBU", "MARUGAME"];
        const thick_eat = ["DOUTONBORI", "RANRAN", "GYUUKAKU"];
        const any_eat = ["JOYFUL", "SUKIYA", "COCOICHI"];

        const myIndex = eat.indexOf(query.eat);
        if (myIndex === -1) return { message: "What you want to eat" };
        const comIndex = Math.floor(Math.random() * 3);
        if (query.eat == "ASSARI") {
            return {
                PLACE: easy_eat[comIndex],
            }
        }
        else if (query.eat == "KOTTERI") {
            return {
                PLACE: thick_eat[comIndex],
            }
        }
        else if (query.eat == "NANDEMO") {
            return {
                PLACE: any_eat[comIndex],
            }
        }

    } catch (e) {
        throw Error("Error");
    }
};