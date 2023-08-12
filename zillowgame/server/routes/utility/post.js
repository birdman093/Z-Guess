import { CalcPropScore } from "./zillowPrice.js";
import errorMessage from './error.js';

// Generic Insert Query into SQL DB
export function Insert(req, res, sql, inserts, connection) {
    connection.query(sql,inserts,function(error, results, fields){
        if(error){
            SQLError(error, res)
        }else{
            res.status(201);
            res.end();
        }
    });
}

//Insert Guess into DB and then Update Score Query
export function Insert_UpdateScore(req, res, connection) {
    var sql = "UPDATE AccountsToProperties SET Guess = ? WHERE UserName = ? AND PropertyID = ?" 
    var inserts = [req.body.guess, req.body.userName, req.body.propertyID, ];

    connection.query(sql,inserts,function(error, results, fields){
        if(error){
            SQLError(error, res);
        }else{
            if (req.body.sellPrice !== null){
                var newScore = req.body.score + CalcPropScore(req.body.sellPrice, req.body.guess);
                var inserts2 = [newScore, req.body.userName];
                var sql2 = "UPDATE Accounts SET Score = ? WHERE UserName = ?";
                Update(req, res, sql2, inserts2, connection)
            } else {
                res.status(201);
                res.end();
            }
        }
    });
}

export function SQLError(error, res){
    res.status(400);
    if (error.code === "ER_DUP_ENTRY") {
        res.write(errorMessage("Duplicate"));
    } else {
        res.write(errorMessage("DB-Post"));
    }
    
    res.end();
}

// Generic update Query into SQL DB
function Update(req, res, sql, inserts, connection){
    connection.query(sql,inserts,function(error, results, fields){
        if(error){
            SQLError(error, res)
        }else{
            res.status(201);
            res.end();
        }
    });
}

