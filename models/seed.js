'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_CONNECT);
const BookModel = require('./models/book');

async function seedBooks() {
    console.log('seeding books...');

    await BookModel.create({
        title: 'I Know Why The Caged Bird Sings',
        description: 'Autobiography of the legenday Maya Angelou!',
        status: 'AMAZING AUTOBIOGRAPHIES'
    })

    await BookModel.create({
        title: 'The Apprentice',
        description: 'The next chapter after the death of a serial killer. Who is actually the guilty killer, was it an innocent man or is was there an apprentice?',
        status: 'MYSTIQUE OF MYSTERIES'
    })

    await BookModel.create({
        title: 'Lucky You',
        description: 'JoLayne has had the unimmagionable happen and has won the lotto of a $28 million Jackpot. The problem being that there was another winning lotto ticket.  This story follows the shennanigans and chaos that you would expect while JoLayne comes up with ways to recover her ticket once stolen by local militia wannabes.',
        status: 'COMEDIC CHAOS'

    })
        mongoose.disconnect();
    console.log('done seeding.');

    }

    seedBooks();
