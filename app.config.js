import 'dotenv/config';


export default {
    name: 'Quizz Musical',
    version: '1.0.0',
    extra: {
        keyNapster: process.env.NAPSTER_KEY,
    },
};