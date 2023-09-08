const express = require('express');
const router = new express.Router();

router.post('/bfhl', async (req, res) =>
{
    try
    {
        const data = req.body.data;

        const numbers = [];
        const alphabets = [];

        data.forEach((item) =>
        {
            if (!isNaN(item))
            {
                numbers.push(item);
            } else if (item.length === 1 && item.match(/[a-zA-Z]/))
            {
                alphabets.push(item);
            }
        });

        const highestAlphabet = alphabets.reduce((max, current) =>
        {
            return current.toLowerCase() > max.toLowerCase() ? current : max;
        }, alphabets[0]);

        const result = {
            is_success: true,
            user_id: 'yash_gangwar_14052001',
            roll_number: 'RA2011003030083',
            numbers: numbers,
            alphabets: alphabets,
            highest_alphabet: highestAlphabet,
        };

        res.status(200).json(result);
    } catch (error)
    {
        res.status(400).send(err);
    }
});

router.get('/bfhl', async (req, res) =>
{
    try
    {
        const result = {
            operation_code: 1,
        };
        res.status(200).json(result);
    } catch (error)
    {
        res.status(400).send(err);
    }
});

module.exports = router;
