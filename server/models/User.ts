
import { Schema } from 'mongoose';

const Categories = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        required: true,
    },
});
