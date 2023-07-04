const router = require("express").Router();
const admin = require("firebase-admin");

router.get("/", (req, res) => {
  return res.send("Inside the user router");
});

router.get("/jwtVerfication", async (req, res) => {
  if (!req.headers.authorization) {
    return res.status(500).send({ msg: "Token Not Found" });
  }

  const token = req.headers.authorization.split(" ")[1];
  try {
    const decodedValue = await admin.auth().verifyIdToken(token);
    if (!decodedValue) {
      return res
        .status(500)
        .json({ success: false, msg: "Unauthorized access" });
    }
    return res.status(200).json({ success: true, data: decodedValue });
  } catch (err) {
    return res.send({
      success: false,
      msg: `Error in extracting the token: ${err}`,
    });
  }
});

const getAllUsers = async () => {
  try {
    const users = [];
    let nextPageToken;
    do {
      const listUsersResult = await admin.auth().listUsers(1000, nextPageToken);
      listUsersResult.users.forEach((userRecord) => {
        users.push(userRecord.toJSON());
      });
      nextPageToken = listUsersResult.pageToken;
    } while (nextPageToken);

    return users;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

router.get("/all", async (req, res) => {
  try {
    const users = await getAllUsers();
    return res
      .status(200)
      .send({ success: true, data: users, dataCount: users.length });
  } catch (error) {
    return res.send({
      success: false,
      msg: `Error in listing users: ${error}`,
    });
  }
});

module.exports = router;
