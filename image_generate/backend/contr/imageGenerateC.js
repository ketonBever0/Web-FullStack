const { Configuration, OpenAIApi } = require('openai');
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const generateImage = async (req, res) => {


    const { prompt, n, size } = req.body;


    try {


        const response = await openai.createImage({
            prompt: prompt,
            n: Number(n),
            size: size
        });
        const { data } = response.data;


        const imgURL0 = data[0]?.url;
        const imgURL1 = data[1]?.url;
        const imgURL2 = data[2]?.url;
        const imgURL3 = data[3]?.url;
        const imgURL4 = data[4]?.url;
        const imgURL5 = data[5]?.url;
        const imgURL6 = data[6]?.url;
        const imgURL7 = data[7]?.url;
        const imgURL8 = data[8]?.url;
        const imgURL9 = data[9]?.url;



        res.status(200).json({
            success: true,
            img0: imgURL0,
            img1: imgURL1,
            img2: imgURL2,
            img3: imgURL3,
            img4: imgURL4,
            img5: imgURL5,
            img6: imgURL6,
            img7: imgURL7,
            img8: imgURL8,
            img9: imgURL9
        });

    }
    catch (error) {
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
        }
        else {
            console.log(error.message);
        }
        res.status(400).json({ success: false, message: error.message });
    }


}


module.exports = { generateImage };