import { Gender } from "./gender";
import { Review } from "./review";

export class User {
    uid!: string;
    fullName!: string;
    email!: string;
    phone!: string;
    gender?: Gender;
    age!: number;
    description!: string;
    priceMin!: number;
    priceMax?: number;
    reviews: Review[] = [];
}