import { Gender } from "../modals/gender";
import { User } from "../modals/user";

export const Users : User[] = [
    {
        uid: "1",
        fullName: "רון ארד",
        email: "ron@gmail.com",
        phone: "066949494",
        age: 18,
        gender: Gender.Male,
        priceMin: 40,
        description: "",
        reviews: []
    },
    {
        uid: "2",
        fullName: "יובל סנאי",
        email: "yval@gmail.com",
        phone: "066949494",
        age: 18,
        priceMin: 40,
        description: "",
        reviews: []
    },
    {
        uid: "3",
        fullName: "אורנה בנאי",
        email: "orna@gmail.com",
        phone: "066949494",
        age: 18,
        priceMin: 40,
        description: "",
        reviews: []
    },
]