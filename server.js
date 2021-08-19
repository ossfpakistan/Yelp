//Using express JS
//Making express models

const express = require("express");

//making port for the live
const port = 3005;

app.listen(port, () => {
    console.log(`server is online and listening on port ${port}`);
});

//setting up API for fetching data
// fetching a single resturant
app.get("/api/v1/resturants", (req, res) => {
    res.status(200).json({
        status: "success",
        data: {
            restaurant:["hardees", "starbucks"],
        },
    });
});