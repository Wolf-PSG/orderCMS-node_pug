const axios = require('axios');

// retrieve all orders
exports.index = async (req, res) => {
    const result = await axios.get('http://localhost:8000/api/v1/order/');
    const { doc } = result.data.data;
    res.render('index', { orders: doc });
};

// retrieve single order
exports.single = async (req, res) => {
    //checks search param
    if (req.params.uuid === 'create') {
        return res.render('single');
    }
    const result = await axios.get(
        `http://localhost:8000/api/v1/order/${req.params.uuid}`
    );
    const { data } = result.data;
    res.render('single', { orders: data });
};
