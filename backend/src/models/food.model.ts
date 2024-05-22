import { Schema, model } from "mongoose";

export interface Food {
    id: string;

    name: string;

    price: number;

    tags: string[];

    favorite: boolean;

    stars: number;

    imageUrl: string;

    origins: string[];

    cookTime: string
}

export const FoodSchema = new Schema<Food>(
    {
        name: { type: String, requared: true },
        price: { type: Number, requared: true },
        tags: { type: [String] },
        favorite: { type: Boolean, defauld: false },
        stars: { type: Number, requared: true },
        imageUrl: { type: String, requared: true },
        origins: { type: [String], requared: true },
        cookTime: { type: String, requared: true }
    }, {
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    },
    timestamps: true
}
);

export const FoodModel = model<Food>('food', FoodSchema);