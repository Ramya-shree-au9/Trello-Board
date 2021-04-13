import Users from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from '../config.js'

export const register = async (req, res) => {
  const { firstname, email, password, role } = req.body;
  var hashpassword = bcrypt.hashSync(password, 8);
  Users.findOne({ email: email }, async (err, data) => {
    try {
      if (data) {
        res
          .status(200)
          .send({ messages: "Mail already taken,try another one" });
      } else {
       Users.create( 
          {
            givenName: firstname,
            email: email,
            password: hashpassword,
            role: role ? role : "user",
           
          },
          (err, user) => {
              res
                .status(200)
                .send({ data: user, messages: "Registered Successfully" });
            } 
        );
      }
    } catch (err) {
      res.status(404).send();
    }
  });
};


export const users = async (req, res) => {
    try {
      const usersList = await Users.find();
      res.status(200).send(usersList);
    } catch (err) {
      res.status(404);
    }
  };

  export const login = async (req, res) => {
    Users.findOne({ email: req.body.email }, (err, data) => {
      try {
        if (!data) {
          res.status(200).send({ messagep: "Email is not registered" });
        } else if (!bcrypt.compareSync(req.body.password, data.password)) {
          res
            .status(200)
            .send({ messagep: "Incorrect Password" });
        } else {
          var token = jwt.sign({ id: data._id }, config.secrete, {
            expiresIn: 3600,
          });
          res.status(200).send({
            auth: true,
            token: token,
            data: data,
            messagep: "Login Successfully",
          });
        }
      } catch {
        res.status(404);
      }
    });
  }; 

  export const userinfo = async (req, res) => {
    var token = req.headers["x-access-token"];
    if (!token || token === "null") {
      res.send({ auth: false, message: "err" });
    } else {
      jwt.verify(token, config.secrete, (err, data) => {
        if (err) {
          res.status(200).send({ auth: false, message: "token" });
        }
        else{
          Users.findOne({ _id: data.id }, { password: 0 }, (err, result) => {
              res.status(200).send({ auth: true, token: token, data: result });
            
          });
        }
      });
    }
  };

  export const profileedit = async (req, res) => {
    console.log(req.body)
    const {
      givenName,
      email,
      oldemail,
    } = req.body;
    Users.findOne({ email: oldemail }, async (err, data) => {
      try {
        Users.findByIdAndUpdate(
          data._id,
          {
            givenName: givenName,
            email: email,
          },
          { new: true },
          (err, user) => {
            try {
              res
                .status(200)
                .send({ data: user, message: "Update Successfully" });
            } catch (err) {
              res.status(404).send(err);
            }
          }
        );
      } catch {
        res.status(404).send(err);
      }
    });
  };
  
  export const uploadprofileimg = async (req, res) => {
    try {
      const List = await Users.find({ _id: req.body.id });
      if (List.length > 0) {
        try {
          const result = await Users.findByIdAndUpdate(
            req.body.id,
            {
              image: req.body.Url,
            },
            { new: true }
          );
  
          res.status(200).send({ data: result });
        } catch (err) {
          res.status(404).send(err);
        }
      }
    } catch (err) {
      res.status(404).send({ error: "something went wrong, comeback later" });
    }
  };
  